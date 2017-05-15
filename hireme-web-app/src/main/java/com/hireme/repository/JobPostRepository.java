package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobPost;

@Repository("jobPostRepository")
public interface JobPostRepository extends JpaRepository<JobPost, Long> {

}
