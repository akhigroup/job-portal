package com.hireme.service.model;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonInclude;

public class JobPostModel {

	private long jobPostId;

	private String title;

	private String description;

	private String location;

	private long salary;
	
	private String responsibilities;
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	private Map<String, CompanyModel> company;

	public long getJobPostId() {
		return jobPostId;
	}

	public void setJobPostId(long jobPostId) {
		this.jobPostId = jobPostId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	public String getResponsibilities() {
		return responsibilities;
	}

	public void setResponsibilities(String responsibilities) {
		this.responsibilities = responsibilities;
	}

	public Map<String, CompanyModel> getCompany() {
		return company;
	}

	public void setCompany(Map<String, CompanyModel> company) {
		this.company = company;
	}
}
