package com.seismic.crm.service;

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

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Opportunity;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.ContactRepository;

@Service
public class ContactServiceImpl implements ContactService {
	@Autowired
	private ContactRepository contactRepository;
	
	@Autowired
	private AccountRepository accountRepository;

	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	@Transactional
	public List<Contact> getContactDetails() {
		return contactRepository.findAll();
	}
	
	
	@Override
	@Transactional
	public List<Contact> getContactDetailsByAccount(Long accountId) {	
		Account account = accountRepository.findOne(accountId);	 		 		
		return  contactRepository.findByAccount(account);   
	}
	    	
	
	@Override
	@Transactional
	public Contact saveContact(Contact contact) {
		System.out.println("created Contact implemented.......................");       
		return contactRepository.save(contact);
		

	}

	@Override
	@Transactional
	public Contact findById(Long contactId) {
		return contactRepository.findOne(contactId);
	}

	@Override
	@Transactional
	public Contact updateContact(Contact contact) {
		Contact updateContact = contactRepository.findOne(contact
				.getContactId());

		updateContact.setFirstName(contact.getFirstName());
		updateContact.setMiddelName(contact.getMiddelName());
		updateContact.setLastName(contact.getLastName());
		updateContact.setDateOfBirth(contact.getDateOfBirth());
		updateContact.setContactGroup(contact.getContactGroup());
		updateContact.setTitle(contact.getTitle());
		updateContact.setContactStartDate(contact.getContactStartDate());
		updateContact.setContactEndDate(contact.getContactEndDate());
		updateContact.setEmailId(contact.getEmailId());
		updateContact.setOtherEmailId(contact.getOtherEmailId());
		updateContact.setTelephone(contact.getTelephone());
		updateContact.setMobile(contact.getMobile());
		updateContact.setFax(contact.getFax());
		updateContact.setWebsite(contact.getWebsite());
		updateContact.setLinkedinId(contact.getLinkedinId());
		updateContact.setFacebookId(contact.getFacebookId());
		
		updateContact.setListValues(contact.getListValues());
		updateContact.setListValuesBySalulationId(contact.getListValuesBySalulationId());
		updateContact.setListValuesByGenderId(contact.getListValuesByGenderId());
		updateContact.setListValuesByMaritalStausId(contact.getListValuesByMaritalStausId());
		updateContact.setListValuesByLanguageId(contact.getListValuesByLanguageId());
		
		System.out.println("Contact Data updated............");
		return contactRepository.saveAndFlush(updateContact);
	}
	
	@Override
	@Transactional
	public Contact deleteContactDetail(Contact contact) {
		
		System.out.println("in deleteContactDetail>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		Contact contactDetail = contactRepository.findOne(contact.getContactId());
//		contactRepository.delete(contactDetail);
		contactDetail.setIsActive(Boolean.parseBoolean("false"));
		return contactDetail;
	}


	public Page<Contact> viewContactReport(String cName, String cNumber,
			String title, String telephone, String emailId,
			String listValueDescription,int pagesize, int pagenum,String sortOrderType, String sortField) {
		
		Pageable pageable = new PageRequest(pagenum, pagesize);
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<Contact> contact = criteriaQuery.from(Contact.class);
		Join< Contact, ListValues> listValues = contact.join("listValues", JoinType.LEFT);
		List<Predicate> conditions = new ArrayList<Predicate>();
		conditions.add(builder.like(contact.<String>get("contactName"), "%"+ cName +"%"));
		conditions.add(builder.like(contact.<String>get("contactNumber"), "%"+ cNumber +"%"));
		conditions.add(builder.like(listValues.<String>get("listValueDescription"), "%"+ listValueDescription +"%"));
		conditions.add(builder.like(contact.<String>get("title"), "%"+ title +"%"));
		conditions.add(builder.like(contact.<String>get("telephone"), "%"+ telephone +"%"));
		conditions.add(builder.like(contact.<String>get("emailId"), "%"+ emailId +"%"));
		
		CriteriaQuery<Long> select = criteriaQuery.select(builder.count(contact));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = entityManager.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();
		
		CriteriaQuery<Contact> cQuery = builder.createQuery(Contact.class);
		contact = cQuery.from(Contact.class);
		listValues = contact.join("listValues", JoinType.LEFT);
		
		cQuery.select(contact)
		.where(conditions.toArray(new Predicate[] {}));

		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.desc(contact.get(sortField)));
			}else if("listValues".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(listValues.get(sortdataField[1])));
			}
		}else{
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.asc(contact.get(sortField)));
			}else if("listValues".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(listValues.get(sortdataField[1])));
			}
		}
		
		TypedQuery<Contact> postQuery = entityManager.createQuery(cQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<Contact> contacts = postQuery.getResultList();
		Page<Contact> page = new PageImpl<Contact>(contacts,
				pageable, totalRecords);
		return page;
	}

}
