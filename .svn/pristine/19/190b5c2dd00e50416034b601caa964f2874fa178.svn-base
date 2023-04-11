package com.seismic.crm.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.QuoteProductDetail;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.QuoteProductDetailRepository;
import com.seismic.crm.repository.SalesOrderRepository;
import com.seismic.crm.model.SalesOrder;

@Service
public class QuoteProductDetailServiceImpl implements QuoteProductDetailService {

	@Autowired
	private QuoteProductDetailRepository quoteProductRepository;
	

   	/* 
	@Override
	@Transactional
	public Account saveAccount(Account account) {	        	                       
				return accountRepository.save(account);		
	} */
	   
    
	@Override
	@Transactional
	public QuoteProductDetail findById(Long productDetailId) {
		return quoteProductRepository.findOne(productDetailId);
	}   
	
}














