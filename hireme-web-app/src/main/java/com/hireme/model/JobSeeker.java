/**
 * Model class for JobSeeker entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "job_seeker")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobSeekerId", scope = JobSeeker.class)
public class JobSeeker {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_seeker_id")
	private long jobSeekerId;

	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;

	@Lob
	@Column(name = "picture")
	private byte[] picture;

	@Column(name = "summary")
	private String summary;

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "jobSeeker")
	private List<WorkExperience> workExperience;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "jobSeeker", cascade = CascadeType.ALL)
	private List<Education> education;
	
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "jobSeeker")
	private List<Skill> skills;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	public long getJobSeekerId() {
		return jobSeekerId;
	}

	public void setJobSeekerId(long jobSeekerId) {
		this.jobSeekerId = jobSeekerId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}

	public List<WorkExperience> getWorkExperience() {
		return workExperience;
	}

	public void setWorkExperience(List<WorkExperience> workExperience) {
		this.workExperience = workExperience;
	}

	public List<Education> getEducation() {
		return education;
	}

	public void setEducation(List<Education> education) {
		this.education = education;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}
}