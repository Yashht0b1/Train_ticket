package com.project.SpringBootRest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.SpringBootRest.entity.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Integer> {

	

}
