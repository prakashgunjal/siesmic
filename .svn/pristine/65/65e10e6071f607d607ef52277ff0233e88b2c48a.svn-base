package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
	@Query("select a.accountId as key,a.accountName as value from Account a")
	List<KeyValueMap> getAccountDetails();

	//@Query("SELECT s FROM Account s WHERE s.salesOrder = ?1 AND s.product = ?2")
	//List<Account> accountList(SalesOrder so, Product product);
	
	//public Account createAccount(Account account);
	
	///List<Account> findByListValues(ListValues accountType);
	
	
}
