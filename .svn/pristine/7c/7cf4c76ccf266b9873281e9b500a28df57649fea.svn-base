package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seismic.crm.model.ListValues;

public interface ListValuesRepository extends JpaRepository<ListValues, Long> {
	List<ListValues> findByListValueCategory(String listValueCategory);	
	List<ListValues> findByListValueDescription(String listValueDescription);
	ListValues findByListValueCategoryAndListValueDescription(String listValueCategory, String listValueDescription);
}
