package com.hireme.dao;

import com.hireme.exceptions.BusinessException;
import com.hireme.model.JobPost;

public interface JobPostDao {
	
	JobPost get(long jobPostId) throws BusinessException;

}
