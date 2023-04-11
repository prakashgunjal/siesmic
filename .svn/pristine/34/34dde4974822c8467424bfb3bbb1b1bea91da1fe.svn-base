package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ContactGroup;

public interface ContactGroupRepository extends JpaRepository<ContactGroup, Long> {

	@Query("SELECT s.contactGroupId, s.contactGroupName FROM ContactGroup s")
	List<ContactGroup> findByContactGroupName();

}
