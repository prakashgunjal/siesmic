package com.seismic.crm.service;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.model.Opportunity;

/**
 * @author sumang
 * 
 */

public interface OpportunityService {

	Page<Opportunity> getOpportunityView(String opportunityNumber,
			String accountName, String accountNumber,
			String opportunitySalesRep, BigDecimal estimatedValue,String condition,
			String opportunityPriority,String[] opportunityDate, int pagenum, int pagesize,
			String sortOrderType, String sortField) throws ParseException;

}
