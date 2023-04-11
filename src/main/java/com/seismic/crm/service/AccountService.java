package com.seismic.crm.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.SalesOrder;

public interface AccountService {
	
	
	Account findById(Long accountID);
	Account saveAccount(Account account);
	List<SalesOrder> getSalesFormListByAccount(Long accountId);
	Page<Account> viewAccountDetails(String accountName, String accountNumber,
			String primaryContactName, String primaryTelephoneNumber,
			String salesrep, int pagesize, int pagenum,
			String sortOrderType, String sortField); 
	
	
}
