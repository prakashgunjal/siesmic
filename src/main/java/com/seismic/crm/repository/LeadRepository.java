package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Lead;

public interface LeadRepository extends JpaRepository<Lead, Long> {
	@Query("select l.leadId as key,l.leadNumber as value from Lead l join l.account lc where lc.accountId = :accountId")
	List<KeyValueMap> getLeadName(@Param("accountId") Long accountId);
	@Query("select l.leadId as key,l.leadNumber as value from Lead l")
	List<KeyValueMap> getLeadDetails();
	@Query("select l.leadId as key,l.leadName as value from Lead l")
	List<KeyValueMap> getLeadDetailsByLeadName();
}
