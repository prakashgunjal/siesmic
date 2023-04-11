package com.seismic.crm.service;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.QuoteRepository;
import com.seismic.crm.repository.SalesOrderRepository;

@Service
public class QuoteServiceImpl implements QuoteService {

	@Autowired
	private QuoteRepository quoteRepository;
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private SalesOrderRepository salesOrderRepository;
	
	@PersistenceContext
	EntityManager entityManager;
	
	SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
	
	@Override
	public List<Quote> getQuoteDetails() {		
		return null;
	}
	
	@Override
	@Transactional
	public List<Quote> getQuoteDetailsByAccount(Long accountId) {	
		Account account = accountRepository.findOne(accountId);	    		 		
		return  quoteRepository.findByAccount(account);   
	}
     
	@Override
	@Transactional
	public Quote saveQuote(Quote quote) {
		return quoteRepository.save(quote);		
	}

	@Override
	@Transactional
	public Quote findById(Long quoteId) {
		return quoteRepository.findOne(quoteId);		
	}

	@Override
	@Transactional
	public List<SalesOrder> getSalesFormListByQuote(Long quoteId) {			
		Quote quote = quoteRepository.findOne(quoteId);	 	
		return  salesOrderRepository.findByQuote(quote);   				
	}

	@Override
	public Page<Quote> viewQuoteDetails(String quoteNumber, String[] quoteDate,
			String contactName, BigDecimal estimatedValue,String condition,
			String contactByQuoteSalesRep, int pagesize, int pagenum,String sortOrderType, String sortField) throws ParseException {
		Pageable pageable = new PageRequest(pagenum, pagesize);
		List<Predicate> conditions = new ArrayList<Predicate>();
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Quote> quote = criteriaQuery.from(Quote.class);
		Join<Quote, Contact> contact = quote.join("contactByContactId", JoinType.LEFT);
		Join<Quote, Contact> contactByQuoteSalesRepId = quote.join("contactByQuoteSalesRepId",JoinType.LEFT);
		
//		Conditions
		conditions.add(builder.like(quote.<String>get("quoteNumber"), "%"+quoteNumber+"%"));
		if(quoteDate[0]!=null){
			
			Date fromDate = new Date(dateFormat.parse(quoteDate[0].substring(0, 15)).getTime());
			Date toDate = new Date(dateFormat.parse(quoteDate[1].substring(0, 15)).getTime());
		conditions.add(builder.between(quote.<Date> get("quoteDate"), fromDate,toDate));
		}
		conditions.add(builder.like(contact.<String>get("contactName"), "%"+ contactName+"%"));
		if(estimatedValue !=null && condition.equals("LESS_THAN_OR_EQUAL")){
			conditions.add(builder.le(quote.<BigDecimal> get("estimatedValue"), estimatedValue ));
			}else if(estimatedValue !=null && condition.equals("GREATER_THAN_OR_EQUAL")){
				conditions.add(builder.ge(quote.<BigDecimal> get("estimatedValue"), estimatedValue ));
			}else if(estimatedValue !=null){
				conditions.add(builder.equal(quote.<BigDecimal> get("estimatedValue"), estimatedValue ));	
			}
		conditions.add(builder.like(contactByQuoteSalesRepId.<String>get("contactName"), "%"+ contactByQuoteSalesRep+"%"));
		
		CriteriaQuery<Long> select = criteriaQuery.select(builder.count(quote));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = entityManager.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();
		System.out.println(" count "+totalRecords);
		
		CriteriaQuery<Quote> cQuery = builder.createQuery(Quote.class);
		quote = cQuery.from(Quote.class);
		contact = quote.join("contactByContactId", JoinType.LEFT);
		contactByQuoteSalesRepId = quote.join("contactByQuoteSalesRepId",JoinType.LEFT);
		
		cQuery.select(quote)
		.where(conditions.toArray(new Predicate[] {}));

		
		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.desc(quote.get(sortField)));
			}else if("contactByQuoteSalesRepId".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contactByQuoteSalesRepId.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contact.get(sortdataField[1])));
			}
		}else{
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.asc(quote.get(sortField)));
			}else if("contactByQuoteSalesRepId".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contactByQuoteSalesRepId.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contact.get(sortdataField[1])));
			} 
		}
		
		TypedQuery<Quote> postQuery = entityManager.createQuery(cQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<Quote> leads = postQuery.getResultList();
		Page<Quote> page = new PageImpl<Quote>(leads,
				pageable, totalRecords);

		return page;
	}  
	
}
