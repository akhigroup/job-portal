package com.hireme.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hireme.dao.JobPostDao;
import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobPost;
import com.hireme.repository.JobPostRepository;

@Component
public class JobPostDaoImpl implements JobPostDao {

	@Autowired
	private JobPostRepository jobPostRepository;

	@Override
	public JobPost get(long jobPostId) throws BusinessException {
		JobPost jobPost = jobPostRepository.getOne(jobPostId);
		if (jobPost != null) {
			return jobPost;
		}
		throw new BusinessException(404, "No job post with id " + jobPostId + " found.");
	}
}