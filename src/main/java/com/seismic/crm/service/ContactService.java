package com.seismic.crm.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;

public interface ContactService {
	public List<Contact> getContactDetails();
	public Contact saveContact(Contact contact);
	public Contact findById(Long contactId);
	public Contact updateContact(Contact contact);
	public Contact deleteContactDetail(Contact contact);
	public List<Contact> getContactDetailsByAccount(Long accountId);
	public Page<Contact> viewContactReport(String cName, String cNumber,
			String title, String telephone, String emailId,
			String listValueDescription, int pagesize, int pagenum, String sortOrderType, String sortField);
	
}
