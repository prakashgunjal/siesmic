package com.seismic.crm.service;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.SalesOrder;

public interface QuoteService {
	
	public List<Quote> getQuoteDetails();		
	Quote saveQuote(Quote quote);
	public Quote findById(Long quoteId);
	
	public List<Quote> getQuoteDetailsByAccount(Long accountId);
	List<SalesOrder> getSalesFormListByQuote(Long quoteId);
	public Page<Quote> viewQuoteDetails(String quoteNumber, String[] quoteDate,
			String contactName, BigDecimal estimatedValue,String condition,
			String contactByLeadSalesRep, int pagesize, int pagenum,String sortOrderType, String sortField) throws ParseException;
	
	
}
