package com.hireme.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Education;
import com.hireme.model.JobSeeker;
import com.hireme.model.User;
import com.hireme.service.JobSeekerService;
import com.hireme.service.UserService;
import com.hireme.service.model.EducationModel;
import com.hireme.service.model.JobSeekerModel;
import com.hireme.service.model.Response;
import com.hireme.service.util.ServiceUtil;

@RestController
@RequestMapping("/{userId}/jobseeker")
@SuppressWarnings({ "unchecked", "rawtypes" })
public class JobSeekerController {

	@Autowired
	private JobSeekerService jobSeekerService;

	@Autowired
	private UserService userService;

	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> createOrUpdateJobSeeker(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody JobSeeker jobSeeker) {
		try {
			User user = userService.getUser(userId);
			JobSeekerModel jobSeekerModel = null;
			try {
				JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
				if (jobSeeker.getPicture() != null) {
					newJobSeeker.setPicture(jobSeeker.getPicture());
				}
				newJobSeeker.setFirstName(jobSeeker.getFirstName());
				newJobSeeker.setLastName(jobSeeker.getLastName());
				newJobSeeker.setSummary(jobSeeker.getSummary());
				jobSeekerModel = ServiceUtil.getJobSeeekerModel(newJobSeeker, false);
			} catch (BusinessException be) {
				if (be.getErrorCode() == 404) {
					// Create new profile
					jobSeeker.setUser(user);
					JobSeeker newJobSeeker = jobSeekerService.create(jobSeeker);
					jobSeekerModel = ServiceUtil.getJobSeeekerModel(newJobSeeker, false);
				} else {
					throw be;
				}
			}
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobseeker", jobSeekerModel, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getJobSeekerProfile(@PathVariable(name = "userId", required = true) long userId) {
		try {
			JobSeeker jobSeeker = jobSeekerService.getByUserId(userId);
			JobSeekerModel jobSeekerModel = ServiceUtil.getJobSeeekerModel(jobSeeker, true);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobseeker", jobSeekerModel, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}

	@PostMapping(value = "/education", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> addEducation(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody EducationModel educationModel) {
		try {
			userService.getUser(userId);
			JobSeeker newJobSeeker = jobSeekerService.getByUserId(userId);
			List<Education> educationList = newJobSeeker.getEducation();
			if (educationList == null) {
				educationList = new ArrayList<>();
				newJobSeeker.setEducation(educationList);
			}
			Education education = ServiceUtil.getEducation(educationModel);
			education.setJobSeeker(newJobSeeker);
			educationList.add(education);
			jobSeekerService.update(newJobSeeker);
			return ResponseEntity.ok(ServiceUtil.buildResponse("educationList", ServiceUtil.getEducaitonList(newJobSeeker.getEducation()) , null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}
}