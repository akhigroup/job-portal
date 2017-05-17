package com.hireme.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;
import com.hireme.model.JobPost;
import com.hireme.service.CompanyService;
import com.hireme.service.model.CompanyModel;
import com.hireme.service.model.Response;
import com.hireme.service.util.ServiceUtil;

@CrossOrigin
@RestController
@RequestMapping("/{userId}/company")
@SuppressWarnings({ "unchecked", "rawtypes" })
public class CompanyController {
	
	@Autowired
	private CompanyService companyService;
	
	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> createOrUpdateCompany(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody Company company) {
		try {
			company = companyService.createOrUpdate(userId, company);
			CompanyModel companyModel = ServiceUtil.getCompanyModel(company, false);
			return ResponseEntity.ok(ServiceUtil.buildResponse("company", companyModel, null));
		} catch(BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}
	
	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getCompanyProfile(@PathVariable(name = "userId", required = true) long userId) {
		try {
			Company company = companyService.getByUserId(userId);
			CompanyModel companyModel = ServiceUtil.getCompanyModel(company, true);
			return ResponseEntity.ok(ServiceUtil.buildResponse("company", companyModel, null));
		} catch (BusinessException e) {
			Response errorResponse = new Response("ERR" + e.getErrorCode(), e.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(e.getErrorCode()));
		}
	}
	
	
	@GetMapping(value = "/job", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getCompanyJobPost(@PathVariable(name = "userId", required = true) long userId) {
		try {
			List<JobPost> jobPosts = companyService.getJobPosts(userId);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobPostList", ServiceUtil.getJobPostList(jobPosts, false), null));
		} catch(BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}
	
	@PostMapping(value = "/job", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> postJob(@PathVariable(name = "userId", required = true) long userId,
			@RequestBody JobPost jobPost) {
		try {
			List<JobPost> jobPosts = companyService.postJob(userId, jobPost);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobPostList", ServiceUtil.getJobPostList(jobPosts, false), null));
		} catch(BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}
	
	@PostMapping(value = "/job/{jobId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> updateJob(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobId", required = true) long jobId,
			@RequestBody JobPost jobPost) {
		try {
			List<JobPost> jobPosts = companyService.updateJobPost(userId, jobId, jobPost);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobPostList", ServiceUtil.getJobPostList(jobPosts, false), null));
		} catch(BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}
	
	@DeleteMapping(value = "/job/{jobId}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> cancelJobPost(@PathVariable(name = "userId", required = true) long userId,
			@PathVariable(name = "jobId", required = true) long jobId) {
		try {
			companyService.cancelJobPost(userId, jobId);
			return ResponseEntity.ok(ServiceUtil.buildResponse("jobPostList", ServiceUtil.getJobPostList(companyService.getJobPosts(userId), false), null));
		} catch(BusinessException be) {
			Response errorResponse = new Response("ERR" + be.getErrorCode(), be.getMessage());
			return new ResponseEntity(ServiceUtil.buildResponse("BadRequest", errorResponse, null),
					HttpStatus.valueOf(be.getErrorCode()));
		}
	}
}
