package com.hireme.service;

import java.util.List;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.Company;
import com.hireme.model.JobPost;

public interface CompanyService {
	
	Company getByUserId(long userId) throws BusinessException;
	
	Company createOrUpdate(long userId, Company company) throws BusinessException;
	
	void remove(long companyId);
		
	void removeJobPost(long companyId, long jobPostId);
	
	Company updateJobPost(long companyId, JobPost jobPost);

	List<JobPost> postJob(long userId, JobPost jobPost) throws BusinessException;

}