package com.hireme.service.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.hireme.model.Education;
import com.hireme.model.JobSeeker;
import com.hireme.model.Period;
import com.hireme.service.model.EducationModel;
import com.hireme.service.model.JobSeekerModel;

public class ServiceUtil {

	public static Map<String, Object> buildResponse(String key, Object value, Map<String, Object> response) {
		if (response != null) {
			response.put(key, value);
		} else {
			response = new HashMap<>();
			response.put(key, value);
		}
		return response;
	}

	public static Map<String, List<EducationModel>> buildEducationListResponse(String key, EducationModel value,
			Map<String, List<EducationModel>> response) {
		if (response == null) {
			response = new HashMap<>();
			response.put(key, new ArrayList<EducationModel>());
		}
		response.get(key).add(value);
		return response;
	}

	public static JobSeekerModel getJobSeeekerModel(JobSeeker jobSeeker, boolean needAll) {
		JobSeekerModel jobSeekerResponse = new JobSeekerModel();
		jobSeekerResponse.setFirstName(jobSeeker.getFirstName());
		jobSeekerResponse.setLastName(jobSeeker.getLastName());
		jobSeekerResponse.setJobSeekerId(jobSeeker.getJobSeekerId());
		jobSeekerResponse.setPicture(jobSeeker.getPicture());
		jobSeekerResponse.setSummary(jobSeeker.getSummary());

		if (needAll) {
			List<Education> educationList = jobSeeker.getEducation();
			if (educationList != null) {
				Map<String, List<EducationModel>> educationModelList = getEducaitonList(educationList);
				jobSeekerResponse.setEducation(educationModelList);
			}
		}
		return jobSeekerResponse;
	}

	public static Map<String, List<EducationModel>> getEducaitonList(List<Education> educationList) {
		Map<String,List<EducationModel>> response = null;
		for (Education education : educationList) {
			response = buildEducationListResponse("education",getEducationModel(education), response);
		}
		return response;
	}


	public static EducationModel getEducationModel(Education education) {
		EducationModel educationModel = new EducationModel();
		educationModel.setDegree(education.getDegree());
		educationModel.setEducationId(education.getEducationId());
		educationModel.setField(education.getField());
		educationModel.setFrom(education.getPeriod().getFromDate());
		educationModel.setTo(education.getPeriod().getToDate());
		educationModel.setSchoolName(education.getSchoolName());
		return educationModel;
	}

	public static Education getEducation(EducationModel educationModel) {
		Education education = new Education();
		education.setDegree(educationModel.getDegree());
		education.setField(educationModel.getField());
		education.setPeriod(new Period());
		education.getPeriod().setFromDate(educationModel.getFrom());
		education.getPeriod().setToDate(educationModel.getTo());
		education.setSchoolName(educationModel.getSchoolName());
		return education;
	}
}
