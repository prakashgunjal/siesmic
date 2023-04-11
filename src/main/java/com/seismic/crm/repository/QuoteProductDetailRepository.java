package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.QuoteProductDetail;

public interface QuoteProductDetailRepository extends JpaRepository<QuoteProductDetail, Long> {


	List<QuoteProductDetail> findByQuote(Quote quote );	
	
}
