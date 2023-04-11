package com.seismic.crm.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.repository.AddressRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.ListValuesRepository;
import com.seismic.crm.service.AddressService;
import com.seismic.crm.utils.ExtJSResponse;
import com.seismic.crm.utils.MessagesUtil;

@Controller
@RequestMapping(value = "/address")
public class AddressController {
	@Autowired
	private AddressService addressService;

	@Autowired
	private AddressRepository addressRepository;
	
	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private ListValuesRepository listValuesRepository;

	
	@RequestMapping(value = "{contactNumber}/getAddressListPerContact", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Address> getAddressListPerContact(@PathVariable String contactNumber) {			    		
		List<Address> addresstList =null;     								
		addresstList =  addressService.getAddressDetails(contactNumber);	 
		return addresstList;      
	}

	@RequestMapping(value = "/saveAddressData", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse saveAddressData(@RequestParam(required = false) Long contactId,
			@RequestParam(required = false) Long addressId,
			@RequestParam Long lvEntityTypeId, @RequestParam String entityNumber,
			@RequestParam Long addressTypeId, @RequestParam String address1,
			@RequestParam String address2, @RequestParam String address3,
			@RequestParam String postalCode, @RequestParam String phone,
			@RequestParam String mobile, @RequestParam String email 		
			) throws IOException {  

		System.out.println("In saveAddressData>>>>>>>>>>> contactId="+contactId );   		
		Address address;
		String message;	
		if (addressId == null) {
			address = new Address();
			System.out.println("=========creating new address============");
		} else {
			address = this.addressRepository.findOne(addressId);
			System.out.println("========updating address=========" + addressId);
		}		
		address.setEntityNumber(entityNumber); 
		address.setAddress1(address1);
		address.setAddress2(address2);
		address.setAddress3(address3);
		address.setPostalCode(postalCode);
		address.setPhone(phone);
		address.setMobile(mobile);
		address.setEmail(email);

		if ((lvEntityTypeId != null) && (lvEntityTypeId > 0)) {
			ListValues listValuesByEntity = listValuesRepository.findOne(lvEntityTypeId);
			address.setListValuesByEntityTypeId(listValuesByEntity);
		} else {
			address.setListValuesByEntityTypeId(null);
		}
		if ((addressTypeId != null) && (addressTypeId > 0)) {
			ListValues listValuesByAddressType = listValuesRepository.findOne(addressTypeId);
			address.setListValuesByAddressTypeId(listValuesByAddressType);
		} else {
			address.setListValuesByAddressTypeId(null);
		}
		if((contactId != null) && (contactId > 0)){
		Contact contact = contactRepository.findOne(contactId);		
    	address.setContact(contact);
		}else{
		address.setContact(null);
		}						
		System.out.println("lvEntityTypeId------------>" + lvEntityTypeId);
		System.out.println("addressTypeId------------>" + addressTypeId);
		System.out.println("Contcat------"+contactId);
		if(addressId==null ){          			
		    message= MessagesUtil.showMessage("Address", entityNumber,  "Created" , "Successfully" ) ;			
		}else{					
			message= MessagesUtil.showMessage("Address", entityNumber,  "Updated" , "Successfully" ) ;
		}	
		Address newAddress = addressService.saveAddress(address);	
		return new ExtJSResponse(true, newAddress,message );
	}

	@RequestMapping(value = "{addressId}/editAddressReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Address editAddressReport(@PathVariable Long addressId, @RequestParam(required = false) Long contactId,@RequestParam(required = false) String entityName) {

		System.out.println("=======================Inside editAddressReport ==============================>");		
		Address address = null; 
		Contact contact;
		if(addressId!=null && addressId!=0){
		  address = addressRepository.findOne(addressId);		
		  address.setListValuesByEntityTypeId(listValuesRepository.findByListValueCategoryAndListValueDescription("Entity Type",entityName)  ); 		
		}else if(addressId==0 ){		 		  
		  address=new Address();  
		  contact = contactRepository.findOne(contactId);				
		  address.setContact(contact);		
		  address.setListValuesByEntityTypeId(listValuesRepository.findByListValueCategoryAndListValueDescription("Entity Type",entityName)  ); 	 		  			  
		}
		return address;

	}

	@RequestMapping(value = "/EntityType", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> entityType() {
		return listValuesRepository.findByListValueCategory("Entity Type");
	}

	@RequestMapping(value = "/AddressType", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> addressType() {
		return listValuesRepository.findByListValueCategory("Employee Address Type");
	}
}
