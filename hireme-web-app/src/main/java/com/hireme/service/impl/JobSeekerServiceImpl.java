package com.hireme.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hireme.dao.JobSeekerDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobSeeker;
import com.hireme.service.JobSeekerService;

@Service("jobSeekerService")
public class JobSeekerServiceImpl implements JobSeekerService {
	
	@Autowired
	private JobSeekerDao jobSeekerDao;

	@Override
	public JobSeeker create(JobSeeker jobSeeker) throws BusinessException {
		return jobSeekerDao.create(jobSeeker);
	}

	@Override
	public JobSeeker update(JobSeeker jobSeeker) throws BusinessException {
		return jobSeekerDao.update(jobSeeker);
	}

	@Override
	public JobSeeker getByUserId(long userId) throws BusinessException {
		return jobSeekerDao.getByUserId(userId);
	}
}