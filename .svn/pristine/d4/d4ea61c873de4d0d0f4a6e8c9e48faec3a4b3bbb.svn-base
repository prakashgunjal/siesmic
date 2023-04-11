package com.seismic.crm.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Lead;

public interface LeadService {
	public List<Lead> getLeadDetails();

	public List<KeyValueMap> getLeadName(Long accountId);

	public Lead findById(Long leadId);

	public Lead saveLead(Lead lead);

	public Page<Lead> viewLeadDetails(String leadName, String leadNumber,
			String[] leadDate, String contactName, String listValuesByStatus,
			String contactByLeadSalesRep, int pagesize, int pagenum,
			String sortOrderType, String sortField) throws ParseException; 
  
}
