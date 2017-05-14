/**
 * Model class for Skill entity.
 * 
 * @author	Sushant Vairagade
 * @version 1.0
 * @Since	13-05-2017
 */

package com.hireme.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "skill")
public class Skill {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "skill_id")
	private long skillId;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "experience_id")
	private Experience experience;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "job_seeker_id")
	private JobSeeker jobSeeker;
	
	public long getSkillId() {
		return skillId;
	}

	public void setSkillId(long skillId) {
		this.skillId = skillId;
	}

	public Experience getExperience() {
		return experience;
	}

	public void setExperience(Experience experience) {
		this.experience = experience;
	}
}