package com.hireme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireme.model.JobInterest;
import com.hireme.model.id.SeekerPostId;

@Repository("jobInterestRepository")
public interface JobInterestRepository extends JpaRepository<JobInterest, SeekerPostId> {

}
