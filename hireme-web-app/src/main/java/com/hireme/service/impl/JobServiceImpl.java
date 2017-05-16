package com.hireme.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hireme.dao.JobPostDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobApplication;
import com.hireme.model.JobInterest;
import com.hireme.model.JobPost;
import com.hireme.model.JobSeeker;
import com.hireme.model.id.SeekerPostId;
import com.hireme.repository.JobApplicationRepository;
import com.hireme.repository.JobInterestRepository;
import com.hireme.service.JobSeekerService;
import com.hireme.service.JobService;

@Service("jobService")
public class JobServiceImpl implements JobService {

	@Autowired
	private JobPostDao jobPostDao;

	@Autowired
	private JobSeekerService jobSeekerService;

	@Autowired
	private JobApplicationRepository jobApplicationRepository;

	@Autowired
	private JobInterestRepository jobInterestRepository;

	@Override
	public JobPost get(long jobPostId) throws BusinessException {
		return jobPostDao.get(jobPostId);
	}
	
	@Override
	public void apply(long jobSeekerId, long jobPostId) throws BusinessException {
		//to check if jobSeeker and jobPost are valid do a get
		jobSeekerService.get(jobSeekerId);
		jobPostDao.get(jobPostId);

		JobApplication jobApplication = new JobApplication();
		jobApplication.setJobSeekerId(jobSeekerId);
		jobApplication.setJobPostId(jobPostId);
		jobApplicationRepository.save(jobApplication);
	}
	
	@Override
	public List<JobPost> getApplications(long jobSeekerId) throws BusinessException {
		//to check if jobSeeker and jobPost are valid do a get
		JobSeeker jobSeeker = jobSeekerService.get(jobSeekerId);
		return jobSeeker.getApplication();
	}
	
	@Override
	public void withdraw(long jobSeekerId, long jobPostId) throws BusinessException {
		SeekerPostId seekerPostId = new SeekerPostId();
		seekerPostId.setJobSeekerId(jobSeekerId);
		seekerPostId.setJobPostId(jobPostId);
		JobApplication jobApplication = jobApplicationRepository.getOne(seekerPostId);
		if(jobApplication != null) {
			jobApplicationRepository.delete(jobApplication);
		} else {
			throw new BusinessException(404, "No such applicaiton to withdraw");
		}
	}

	@Override
	public void addIntrest(long jobSeekerId, long jobPostId) throws BusinessException {
		//to check if jobSeeker and jobPost are valid do a get
		jobSeekerService.get(jobSeekerId);
		jobPostDao.get(jobPostId);
		JobInterest jobInterest = new JobInterest();
		jobInterest.setJobSeekerId(jobSeekerId);
		jobInterest.setJobPostId(jobPostId);
		jobInterestRepository.save(jobInterest);

	}

	@Override
	public void removeIntrest(long jobSeekerId, long jobPostId) throws BusinessException {
		SeekerPostId seekerPostId = new SeekerPostId();
		seekerPostId.setJobSeekerId(jobSeekerId);
		seekerPostId.setJobPostId(jobPostId);
		JobInterest jobInterest = jobInterestRepository.getOne(seekerPostId);
		if(jobInterest != null) {
			jobInterestRepository.delete(jobInterest);
		} else {
			throw new BusinessException(404, "No such job intrest to remove");
		}
		
	}

	@Override
	public List<JobPost> getIntrests(long jobSeekerId) throws BusinessException {
		JobSeeker jobSeeker = jobSeekerService.get(jobSeekerId);
		return jobSeeker.getInterests();
	}
}
