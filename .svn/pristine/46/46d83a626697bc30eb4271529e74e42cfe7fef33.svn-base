package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.GeneralActivities;

public interface AddressRepository extends JpaRepository<Address, Long> {
	
	//@Query("select a1 from Address a1 join a1.listValuesByAddressTypeId al where al.listValueId =:listValuesByAddressTypeId and a1.entityID =:accountId")
    //Address getAddressDetails(@Param ("listValuesByAddressTypeId") Long listValuesByAddressTypeId,@Param ("accountId") Long accountId);
	
	//List<Address> findByContact(Contact contact);   
	
	@Query("select ga from Address ga where ga.entityNumber=:entityNumber")
	List<Address> findByContact(@Param("entityNumber")String moduleId);
	
}