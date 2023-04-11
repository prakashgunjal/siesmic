package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seismic.crm.model.Contact;
import com.seismic.crm.model.GeneralActivities;

public interface GeneralActivityRepository extends
		JpaRepository<GeneralActivities, Long> {
	@Query("select ga from GeneralActivities ga where ga.entityNumber=:entityNumber")
	List<GeneralActivities> getGeneralActivitiesDetails(@Param("entityNumber")String moduleId);
}
