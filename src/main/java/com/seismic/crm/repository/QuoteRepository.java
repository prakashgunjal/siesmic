package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Quote;

public interface QuoteRepository extends JpaRepository<Quote, Long> {
	
	List<Quote> findByAccount(Account account);
	@Query("select q.quoteId as key,q.quoteNumber as value from Quote q")
	List<KeyValueMap> getQuoteDetails();
	List<Quote> findByAccount(Account account, Sort sort);	
			
}
