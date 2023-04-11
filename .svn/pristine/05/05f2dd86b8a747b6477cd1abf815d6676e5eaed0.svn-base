package com.seismic.crm.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.LeadRepository;
import com.seismic.crm.repository.ListValuesRepository;
import com.seismic.crm.service.AccountService;
import com.seismic.crm.service.ContactService;
import com.seismic.crm.service.LeadService;
import com.seismic.crm.service.MailService;
import com.seismic.crm.utils.CustomDateUtil;
import com.seismic.crm.utils.ExtJSResponse;
import com.seismic.crm.utils.MessagesUtil;
import com.seismic.crm.utils.RandomKeyGeneration;
import com.seismic.crm.utils.SecurityContextUtil;

@Controller
@RequestMapping(value = "/lead")
public class LeadController {
	
	@Autowired
	private LeadService leadService;
	
	@Autowired
	private LeadRepository leadRepository;
	
	@Autowired
	private ContactRepository contactRepository;
	
	@Autowired
	private AccountRepository accountRepository;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private ContactService contactService;
	
	@Autowired
	private ListValuesRepository listValuesRepository;
	
	@Autowired
	private MailService mailService;
	
	@Autowired
	private CustomDateUtil customDateUtil;
	
	@Autowired
	private SecurityContextUtil securityContextUtil;
	
	DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
	
		@RequestMapping(value = "/leadRating", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		List<ListValues> getLeadRatingList() {			 
			return listValuesRepository.findByListValueCategory("Lead Rating");          
		}  
		
		@RequestMapping(value = "getSalesRep", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		List<KeyValueMap> getSalesRep(@RequestParam Long oppoAccountId){
			
			List<KeyValueMap> keyValueMaps = new ArrayList<KeyValueMap>();
			if(oppoAccountId!=null){
			Account account= accountRepository.findOne(oppoAccountId);
			if(account.getContactGroup() != null){
				keyValueMaps = contactRepository.getContactSalesRep(account.getContactGroup().getContactGroupId());
			}
		}
			return keyValueMaps;
		}
	
		@RequestMapping(value = "/leadReport", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		Page<Lead> leadReport(
				@RequestParam int pagesize,
				@RequestParam int pagenum, @RequestParam int filterscount,
				HttpServletRequest request
				) throws ParseException {		

			String filterdatafield[] = new String[6];
			String leadName = "";
			String leadNumber = "";
			String leadDate[] = new String[2] ;
			String contactName = "";
			String contactByLeadSalesRep = "";
			String listValuesByStatus = "";
			int d=0;
			Page<Lead> list =  null;

			if (filterscount > 0) {
				for (int i = 0; i < filterscount; i++) {
					filterdatafield[i] = request
							.getParameter("filterdatafield" + i);
					if ((filterdatafield[i].toString()).equals("leadName")) {
						leadName = request.getParameter("filtervalue" + i);
					} else if ((filterdatafield[i].toString())
							.equals("leadNumber")) {
						leadNumber = request.getParameter("filtervalue"
								+ i);

					} else if ((filterdatafield[i].toString())
							.equals("contact.contactName")) {
						contactName = request.getParameter("filtervalue" + i);
					} else if ((filterdatafield[i].toString())
							.equals("listValuesByStatusId.listValueDescription")) {
						listValuesByStatus = request.getParameter("filtervalue" + i);
					} else if ((filterdatafield[i].toString())
							.equals("contactByLeadSalesRepId.contactName")) {
						contactByLeadSalesRep = request.getParameter("filtervalue"
								+ i);
					} else if ((filterdatafield[i].toString())
							.equals("leadDate")) {
						
						leadDate[d] = request.getParameter("filtervalue" + i);
						d++;
					}

				}
			}
			
			list = leadService.viewLeadDetails(leadName,leadNumber,leadDate,contactName,listValuesByStatus,contactByLeadSalesRep,pagesize,
					pagenum,request
					.getParameter("sortorder")==null?"modifiedAt":request
							.getParameter("sortorder"),request.getParameter("sortdatafield")==null?"modifiedAt":request
									.getParameter("sortdatafield"));
			
			return list;       
		}
		
		@RequestMapping(value = "{leadId}/editLeadReport", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		Lead editLeadReport(@PathVariable Long leadId) {			
			Lead lead = leadService.findById(leadId); 		
			
			return lead;   
		}
		
		@RequestMapping(value = "/randomNumberGenerationforLeadOnLoad", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		Lead randomNumberGenerationforLeadOnLoad() throws FileNotFoundException, IOException {
			System.out.println("Inside randomNumberGenerationforLeadOnLoad ==============================================>");
			String key = new RandomKeyGeneration().getRandomGeneration();
			Lead lead = new Lead();
			lead.setLeadNumber(key);    
				
			return lead;
		}
			
		@RequestMapping(value = "/saveLeadData", method = RequestMethod.POST)
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		ExtJSResponse saveLeadData(@RequestParam(required=false) Long leadId, @RequestParam String leadNumber,@RequestParam String leadName,@RequestParam Long contactId,
				@RequestParam String leadDate,@RequestParam Long accountId,/*@RequestParam String accountName,*/
				
				@RequestParam Long lvSourceId,@RequestParam Long leadSalesRepId,@RequestParam Long lvStatusId,@RequestParam Long lvPriorityId,
				@RequestParam(required=false) String leadExpiresOn,@RequestParam Long lvRatingId,@RequestParam BigDecimal leadCloseProbability,
				@RequestParam BigDecimal estimatedValue,@RequestParam(required=false) String estimatedCloseDate	) throws ParseException, FileNotFoundException, IOException, MessagingException {  				
				
		    Lead lead;
		    System.out.println("--------------------------------- saveLeadData----------------------------------------------- ");		
		    String message;	
		    if(leadId == null){  
				lead = new Lead();
				System.out.println("============creating new============");
				lead.setCreatedAt( CustomDateUtil.getDateAndTime() );  
				lead.setModifiedAt(CustomDateUtil.getDateAndTime() ); 
			}else {
				lead = leadService.findById(leadId);
				System.out.println("========updating=======leadId="+leadId);
				System.out.println("========updating=========lead="+lead); 
				lead.setModifiedAt(CustomDateUtil.getDateAndTime() ); 
			}			
		   		    
		    lead.setLeadNumber(leadNumber); 
		    lead.setLeadName(leadName); 
		    if(!leadDate.isEmpty() ){ 
		    lead.setLeadDate(new Date(df.parse(leadDate).getTime())); 
		    }
		    
		    if(accountId>0){ 			
			   Account account = accountService.findById(accountId ); 		
//			   account.setAccountName(accountName);
			   lead.setAccount(account);
			}
		    if(leadSalesRepId>0){ 	  		
			 Contact contact = contactService.findById(leadSalesRepId ); 
			 System.out.println("leadSalesRepId:: contact="+contact); 
			 lead.setContactByLeadSalesRepId(contact);  
		    	     
			}
		    if(contactId !=null ){
		    	 Contact contact = contactService.findById(contactId ); 
		    	 lead.setContact(contact);
		    }
		    if(lvSourceId > 0){
			   ListValues listValuesBySourceId = listValuesRepository.findOne(lvSourceId);
			   lead.setListValuesBySourceId(listValuesBySourceId);				
			}else{
			   lead.setListValuesBySourceId(null);
			}		
		    if(lvStatusId > 0){
		       ListValues listValuesByStatusId = listValuesRepository.findOne(lvStatusId);
			   lead.setListValuesByStatusId(listValuesByStatusId);			
			}else{
			   lead.setListValuesByStatusId(null);
			}
		    if(lvPriorityId > 0){
		       ListValues listValuesByPriorityId = listValuesRepository.findOne(lvPriorityId);
			   lead.setListValuesByPriorityId(listValuesByPriorityId);		
			}else{
			   lead.setListValuesByPriorityId(null);
			}
		    if(lvRatingId> 0){   
			  ListValues listValuesByRatingId = listValuesRepository.findOne(lvRatingId);
			  lead.setListValuesByRatingId(listValuesByRatingId);				
			}else{
			  lead.setListValuesByRatingId(null);
			}
		    if(!leadExpiresOn.isEmpty() ){
		    lead.setLeadExpiresOn( new Date(df.parse(leadExpiresOn).getTime())); 	
		    }
		    lead.setLeadCloseProbability(leadCloseProbability );  
		    
		    lead.setEstimatedValue(estimatedValue); 
		    if(!estimatedCloseDate.isEmpty() ){
		    lead.setEstimatedCloseDate(new Date(df.parse(estimatedCloseDate).getTime())); 
		    }
		    if(leadId==null ){          			
			    message= MessagesUtil.showMessage("Lead", leadNumber,  "Created" , "Successfully" ) ;			
			}else{					
				message= MessagesUtil.showMessage("Lead", leadNumber,  "Updated" , "Successfully" ) ;
			}
		    Lead newLead = leadService.saveLead(lead);
		    Long moduleId = newLead.getLeadId();
		    try{
		    mailService.sendEmaildata(newLead.getLeadNumber(),"Lead");
		    }catch(Exception e){		    	
		    	return new ExtJSResponse(true,newLead,message ); 	
		    }
			return new ExtJSResponse(true,newLead,message ); 		
		    
		}
		
		@RequestMapping(value = "/getAccountContact", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		List<KeyValueMap> getAccountContact(@RequestParam Long oppoAccountId){
			List<KeyValueMap> keyValueMaps= contactRepository.getAccountAndDepartment(oppoAccountId);
			
			return keyValueMaps;
		}

		@RequestMapping(value = "/viewLeadStatusList", method = RequestMethod.GET, produces = "application/json")
		@ResponseStatus(HttpStatus.OK)
		public @ResponseBody
		List<ListValues> viewLeadStatusList() {			 
			return listValuesRepository.findByListValueCategory("Lead Status");  // Account Status
		}
}
