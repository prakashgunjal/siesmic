/**
 * 
 */
package com.seismic.crm.service;

import java.math.BigDecimal;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

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

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Opportunity;

/**
 * @author sumang
 * 
 */

@Service
public class OpportunityServiceImpl implements OpportunityService {

	@PersistenceContext
	EntityManager em;
//	SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
	SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
	@Override
	public Page<Opportunity> getOpportunityView(String opportunityNumber,
			String accountName, String accountNumber,
			String opportunitySalesRep, BigDecimal estimatedValue,String condition,
			String opportunityPriority,String[] opportunityDate, int pagenum, int pagesize,
			String sortOrderType, String sortField) throws ParseException {

		Pageable pageable = new PageRequest(pagenum, pagesize);

		CriteriaBuilder builder = em.getCriteriaBuilder();
		CriteriaQuery<Long> cQuery = builder.createQuery(Long.class);
		Root<Opportunity> opportunity = cQuery.from(Opportunity.class);
		Join<Opportunity, ListValues> listValuesByOpportunity = opportunity.join("listValuesByOpportunityPriorityId", JoinType.LEFT);
		Join<Opportunity, Account> account = opportunity.join("account", JoinType.LEFT);
		Join<Opportunity, Contact> contactByOpportunitySalesRep = opportunity.join("contactByOpportunitySalesRep", JoinType.LEFT);
		List<Predicate> conditions = new ArrayList<Predicate>();
		conditions.add(builder.like(opportunity.<String> get("opportunityNumber"), "%"+ opportunityNumber + "%"));
		conditions.add(builder.like(account.<String> get("accountName"), "%"+ accountName + "%"));
		conditions.add(builder.like(account.<String> get("accountNumber"), "%"+ accountNumber + "%"));
		
		if(opportunityDate[0]!=null){
			String[] fromDateOf = opportunityDate[0].split(" 00:");
			String[] toDateOf = opportunityDate[0].split(" 23:");
//			Date fromDate = new Date(dateFormat.parse(fromDateOf[0]).getTime());
			Date fromDate = new Date(dateFormat.parse(opportunityDate[0].substring(0, 15)).getTime());
			Date toDate = new Date(dateFormat.parse(opportunityDate[1].substring(0, 15)).getTime());
		conditions.add(builder.between(opportunity.<Date> get("opportunityDate"), fromDate,toDate));
		}
		conditions.add(builder.like(contactByOpportunitySalesRep.<String> get("contactName"), "%"+ opportunitySalesRep + "%"));
	
		if(estimatedValue !=null && condition.equals("LESS_THAN_OR_EQUAL")){
		conditions.add(builder.le(opportunity.<BigDecimal> get("estimatedValue"), estimatedValue ));
		}else if(estimatedValue !=null && condition.equals("GREATER_THAN_OR_EQUAL")){
			conditions.add(builder.ge(opportunity.<BigDecimal> get("estimatedValue"), estimatedValue ));
		}else if(estimatedValue !=null){
			conditions.add(builder.equal(opportunity.<BigDecimal> get("estimatedValue"), estimatedValue ));	
		}
		conditions.add(builder.like(listValuesByOpportunity.<String> get("listValueDescription"),"%" + opportunityPriority + "%"));
		
//		List<Predicate> conditions = countConditions;
		CriteriaQuery<Long> select = cQuery.select(builder.count(opportunity));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = em.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();

		CriteriaQuery<Opportunity> criteriaQuery = builder
				.createQuery(Opportunity.class);
		opportunity = criteriaQuery.from(Opportunity.class);
		listValuesByOpportunity = opportunity.join("listValuesByOpportunityPriorityId", JoinType.LEFT);
		account = opportunity.join("account", JoinType.LEFT);
		contactByOpportunitySalesRep = opportunity.join("contactByOpportunitySalesRep", JoinType.LEFT);
		
		
		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			criteriaQuery.select(opportunity)
					.where(conditions.toArray(new Predicate[] {}));
				if(sortdataField.length!=2){
						criteriaQuery.orderBy(builder.desc(opportunity.get(sortField)));
				}else if("account".equals(sortdataField[0])){
					criteriaQuery.orderBy(builder.desc(account.get(sortdataField[1])));
				}else if("contactByOpportunitySalesRep".equals(sortdataField[0])){
					criteriaQuery.orderBy(builder.desc(contactByOpportunitySalesRep.get(sortdataField[1])));
				}else if("listValuesByOpportunityPriorityId".equals(sortdataField[0])){
					criteriaQuery.orderBy(builder.desc(listValuesByOpportunity.get(sortdataField[1])));
				}
		} else {
			criteriaQuery.select(opportunity);
			criteriaQuery.where(conditions.toArray(new Predicate[] {}));
			if(sortdataField.length!=2){
					criteriaQuery.orderBy(builder.asc(opportunity.get(sortField)));
			}else if("account".equals(sortdataField[0])){
				criteriaQuery.orderBy(builder.asc(account.get(sortdataField[1])));
			}else if("contactByOpportunitySalesRep".equals(sortdataField[0])){
				criteriaQuery.orderBy(builder.asc(contactByOpportunitySalesRep.get(sortdataField[1])));
			}else if("listValuesByOpportunityPriorityId".equals(sortdataField[0])){
				criteriaQuery.orderBy(builder.asc(listValuesByOpportunity.get(sortdataField[1])));
			}
			
		}

		TypedQuery<Opportunity> postQuery = em.createQuery(criteriaQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<Opportunity> opportunities = postQuery.getResultList();
		Page<Opportunity> page = new PageImpl<Opportunity>(opportunities,
				pageable, totalRecords);

		return page;

	}

}
