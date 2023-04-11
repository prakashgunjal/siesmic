package com.seismic.crm.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Opportunity;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.SalesOrderRepository;
import com.seismic.crm.model.SalesOrder;

@Service
public class AccountServiceImpl implements AccountService {

	@Resource
	private AccountRepository accountRepository;   
	
	@Resource
	private SalesOrderRepository salesOrderRepository; 
   	
	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	@Transactional
	public Account saveAccount(Account account) {	        	                       
				return accountRepository.save(account);		
	}
	   
    
	@Override
	@Transactional
	public Account findById(Long accountID) {
		return accountRepository.findOne(accountID);
	}   
	
	@Override
	@Transactional
	public List<SalesOrder> getSalesFormListByAccount(Long accountId) {			
		Account account = accountRepository.findOne(accountId);	 	
		return  salesOrderRepository.findByAccountAndSoType(account,"salesForm");   				
	}


	@Override
	public Page<Account> viewAccountDetails(String accountName,
			String accountNumber, String primaryContactName,
			String primaryTelephoneNumber, String salesrep, int pagesize,
			int pagenum,String sortOrderType, String sortField) {

		Pageable pageable = new PageRequest(pagenum, pagesize);
		List<Predicate> conditions = new ArrayList<Predicate>();
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Account> account = criteriaQuery.from(Account.class);
		Join<Account, Contact> contactByPrimaryContactName = account.join("contactByPrimaryContactName");
		Join<Account, Contact> contact = account.join("contact", JoinType.LEFT);
		
//		Conditions
		conditions.add(builder.like(account.<String>get("accountName"), "%"+accountName+"%"));
		conditions.add(builder.like(account.<String>get("accountNumber"), "%"+accountNumber+"%"));
		conditions.add(builder.like(contactByPrimaryContactName.<String>get("contactName"), "%"+ primaryContactName+"%"));
		conditions.add(builder.like(contact.<String>get("contactName"), "%"+ salesrep+"%"));
		conditions.add(builder.like(account.<String>get("primaryTelephoneNumber"), "%"+primaryTelephoneNumber+"%"));
		
		
		CriteriaQuery<Long> select = criteriaQuery.select(builder.count(account));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = entityManager.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();
		System.out.println(" count "+totalRecords);
		
		CriteriaQuery<Account> cQuery = builder.createQuery(Account.class);
		account = cQuery.from(Account.class);
		contactByPrimaryContactName = account.join("contactByPrimaryContactName");
		contact = account.join("contact", JoinType.LEFT);
		
		cQuery.select(account)
		.where(conditions.toArray(new Predicate[] {}));

		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.desc(account.get(sortField)));
			}else if("contactByPrimaryContactName".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contactByPrimaryContactName.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contact.get(sortdataField[1])));
			}
		}else{
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.asc(account.get(sortField)));
			}else if("contactByPrimaryContactName".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contactByPrimaryContactName.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contact.get(sortdataField[1])));
			}
		}
		
		TypedQuery<Account> postQuery = entityManager.createQuery(cQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<Account> accounts = postQuery.getResultList();
		Page<Account> page = new PageImpl<Account>(accounts,
				pageable, totalRecords);

		return page;
	}  
		
	
}














