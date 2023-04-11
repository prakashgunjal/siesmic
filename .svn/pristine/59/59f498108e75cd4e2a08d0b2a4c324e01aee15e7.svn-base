package com.seismic.crm.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;
import com.seismic.crm.repository.AddressRepository;
import com.seismic.crm.repository.ContactRepository;

@Service
public class AddressServiceImpl implements AddressService {
	@Resource
	private AddressRepository addressRepository;
	
	@Resource
	private ContactRepository contactRepository;
	
	@Override
	@Transactional
	public List<Address> getAddressDetails(String contactNumber) {			         
		return  addressRepository.findByContact(contactNumber);   
	}	

	@Override
	@Transactional
	public Address saveAddress(Address address) {
			return addressRepository.save(address);
	}
	
	@Override
	@Transactional
	public Address findById(Long addressId) {
		return addressRepository.findOne(addressId);
	}

	

}
