package com.seismic.crm.service;

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

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.repository.LeadRepository;
@Service
public class LeadServiceImpl implements LeadService{
	@Autowired
	private LeadRepository leadRepository;

	@PersistenceContext
	EntityManager entityManager;
	
	SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
	
	@Override
	public List<Lead> getLeadDetails() {
		return leadRepository.findAll();
	}

	@Override
	public List<KeyValueMap> getLeadName(Long accountId) {
		
		return leadRepository.getLeadName(accountId);
	}

	@Override
	@Transactional
	public Lead findById(Long leadId) {
		return leadRepository.findOne(leadId);			
	}

	@Override
	@Transactional
	public Lead saveLead(Lead lead) {
		return leadRepository.save(lead);			
	}

	@Override
	public Page<Lead> viewLeadDetails(String leadName, String leadNumber,String[] leadDate,
			String contactName, String listValuesByStatus,
			String contactByLeadSalesRep, int pagesize, int pagenum,
			String sortOrderType, String sortField) throws ParseException {

		Pageable pageable = new PageRequest(pagenum, pagesize);
		List<Predicate> conditions = new ArrayList<Predicate>();
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Lead> lead = criteriaQuery.from(Lead.class);
		Join<Lead, Contact> contact = lead.join("contact", JoinType.LEFT);
		Join<Lead, Contact> contactByLeadSalesRepId = lead.join("contactByLeadSalesRepId",JoinType.LEFT);
		Join<Lead, ListValues> listValuesByStatusId = lead.join("listValuesByStatusId", JoinType.LEFT);
//		Conditions
		conditions.add(builder.like(lead.<String>get("leadName"), "%"+leadName+"%"));
		conditions.add(builder.like(lead.<String>get("leadNumber"), "%"+leadNumber+"%"));
		if(leadDate[0]!=null){
			
			Date fromDate = new Date(dateFormat.parse(leadDate[0].substring(0, 15)).getTime());
			Date toDate = new Date(dateFormat.parse(leadDate[1].substring(0, 15)).getTime());
		conditions.add(builder.between(lead.<Date> get("leadDate"), fromDate,toDate));
		}
		conditions.add(builder.like(contact.<String>get("contactName"), "%"+ contactName+"%"));
		conditions.add(builder.like(contactByLeadSalesRepId.<String>get("contactName"), "%"+ contactByLeadSalesRep+"%"));
		conditions.add(builder.like(listValuesByStatusId.<String>get("listValueDescription"), "%"+ listValuesByStatus+"%"));
		
		
		
		CriteriaQuery<Long> select = criteriaQuery.select(builder.count(lead));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = entityManager.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();
		System.out.println(" count "+totalRecords);
		
		CriteriaQuery<Lead> cQuery = builder.createQuery(Lead.class);
		lead = cQuery.from(Lead.class);
		contact = lead.join("contact", JoinType.LEFT);
		contactByLeadSalesRepId = lead.join("contactByLeadSalesRepId",JoinType.LEFT);
		listValuesByStatusId = lead.join("listValuesByStatusId", JoinType.LEFT);
		
		cQuery.select(lead)
		.where(conditions.toArray(new Predicate[] {}));

		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.desc(lead.get(sortField)));
			}else if("contactByLeadSalesRepId".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contactByLeadSalesRepId.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contact.get(sortdataField[1])));
			}else if("listValuesByStatusId".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(listValuesByStatusId.get(sortdataField[1])));
			}
		}else{
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.asc(lead.get(sortField)));
			}else if("contactByLeadSalesRepId".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contactByLeadSalesRepId.get(sortdataField[1])));
			}else if("contact".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contact.get(sortdataField[1])));
			}else if("listValuesByStatusId".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(listValuesByStatusId.get(sortdataField[1])));
			}
		}
		
		TypedQuery<Lead> postQuery = entityManager.createQuery(cQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<Lead> leads = postQuery.getResultList();
		Page<Lead> page = new PageImpl<Lead>(leads,
				pageable, totalRecords);

		return page;
	}

}
