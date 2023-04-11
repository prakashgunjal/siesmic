package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.SalesOrder;

public interface SalesOrderRepository extends  JpaRepository<SalesOrder, Long> {
	
	String salesForm = "salesForm";   

	List<SalesOrder> findByAccount(Account account);  
	
	List<SalesOrder> findByQuote(Quote quote);  
	
	@Query("select so.salesOrderId as key,so.salesOrderNumber as value from SalesOrder so")
	List<KeyValueMap> getSalesOrderDetails(); 
		
	@Query("select so  from SalesOrder so where so.soType='salesForm'  ")
	List<SalesOrder> getSalesformNumberList();
	@Query("select so.salesOrderId as key,so.salesOrderNumber as value from SalesOrder so join so.account aso where so.soType = 'salesForm' and  aso.accountId = :accountId ")
	List<KeyValueMap> getSalesFormForAccountId(@Param("accountId")Long accountId);

	List<SalesOrder> findByAccountAndSoType(Account account, String soType);

	List<SalesOrder> findBySoType(String soType,Sort sort);
	
}
