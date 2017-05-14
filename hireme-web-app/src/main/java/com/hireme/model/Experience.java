/**
 * Model class for Experience entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "experience_level")
public class Experience {

	@Id
	@Column(name = "experience_id")
	private long experienceId;
	
	@Column(name = "descr")
	private String description;

	public long getExperienceId() {
		return experienceId;
	}

	public void setExperienceId(long experienceId) {
		this.experienceId = experienceId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
