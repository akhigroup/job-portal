package com.hireme.service.model;

public class JobPostModel {

	private long jobPostId;

	private String title;

	private String description;

	private String location;

	private long salary;
	
	private String responsibilities;

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
}
