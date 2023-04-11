package com.seismic.crm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.seismic.crm.model.Account;
import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.GeneralActivities;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.service.AccountService;
import com.seismic.crm.service.AddressService;
import com.seismic.crm.service.ContactService;
import com.seismic.crm.service.GeneralActivitiesService;
import com.seismic.crm.service.LeadService;
import com.seismic.crm.service.QuoteService;
import com.seismic.crm.service.SalesOrderService;

@Controller
public class LinkController {
	
	@Autowired
	private SalesOrderService salesOrderService;
	
	@Autowired
	private ContactService contactService;
	
	@Autowired
	private AddressService addressService;
	
	@Autowired
	private GeneralActivitiesService generalActivitiesService;
	
	@Autowired
	private SalesOrderController salesOrderController;
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private QuoteService quoteService;
	
	@Autowired
	private LeadService leadService;
	
	@Autowired
	private ContactController contactController;
	
	@RequestMapping(value={"/login"}, method=RequestMethod.GET)
	public ModelAndView loginPage() {
		ModelAndView mav = new ModelAndView("login");
		return mav;
	}
	
	@RequestMapping(value={/*"/",*/ "crm"}, method=RequestMethod.GET)
	public ModelAndView salesOrderListPage() {
//		ModelAndView mav = new ModelAndView("salesorder-list");
		ModelAndView mav = new ModelAndView("crm");
		List<SalesOrder> salesOrderList = salesOrderService.getSalesOrders();
		int i = salesOrderList.size();
		System.out.println("Size>>>>>>>>>>>>>"+i);
		mav.addObject("salesOrderList", salesOrderList);
		return mav;
	}
	
	//JSON data
			@RequestMapping(value = "/crm1", method = RequestMethod.GET, produces = "application/json")
			@ResponseStatus(HttpStatus.OK)
			public @ResponseBody
			List<SalesOrder> listOfSalesOrders1() {
				
				List<SalesOrder> salesOrder = salesOrderService.getSalesOrders();
				System.out.println("List============>"+ salesOrder.size());
				return salesOrder;
	//JSON data
			}
			@RequestMapping(value = "/salesOrders", method = RequestMethod.GET, produces = "application/json")
			@ResponseStatus(HttpStatus.OK)
			public @ResponseBody
			SalesOrder getSalesOrderById(@RequestParam(value="id") Long salesOrderId) {
				
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				System.out.println("List============>"+ salesOrder.getNameOfSalesOrder());
				return salesOrder;
	//JSON data
			}
	
	
			@RequestMapping(value = "/crm/salesformsdetails/cover", method = RequestMethod.GET)
			public ModelAndView coverPage(@RequestParam(required=false) Long salesOrderId,@RequestParam(required=false) Long accountId,
					@RequestParam(required = false) String url ) {
				ModelAndView mav = new ModelAndView("crm/salesformsdetails/cover");
				SalesOrder salesOrder = null;	
				if(salesOrderId == null){
					salesOrder = new SalesOrder();
				}
				else{
					salesOrder = salesOrderService.findById(salesOrderId);
				}				
				System.out.println("/crm/salesformsdetails/cover::salesOrder="+salesOrder  );
				System.out.println(":::::::::::                          url="+url );   
				 
				mav.addObject("salesOrder", salesOrder);
				mav.addObject("url", url);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/coverAccounts", method = RequestMethod.GET)
			public ModelAndView coverPageAccounts(@RequestParam(required=false) Long accountId) {
				ModelAndView mav = new ModelAndView("crm/salesformsdetails/coverAccounts");
				SalesOrder salesOrder = null;
				Account account = null;	 									
				account = accountService.findById(accountId);				
				mav.addObject("account", account);
				this.salesOrderController.getSOTabsEnableDisableFlags(accountId, mav);
				return mav;
			}
			@RequestMapping(value = "/crm/salesformsdetails/coverEditAccounts", method = RequestMethod.GET)
			public ModelAndView coverPageAccountsEdit(@RequestParam(required=false) Long salesOrderId) {
				ModelAndView mav = new ModelAndView("crm/salesformsdetails/coverEditAccounts");
				SalesOrder salesOrder = null;
				if(salesOrderId == null){
					salesOrder = new SalesOrder();
				}
				else{
					salesOrder = salesOrderService.findById(salesOrderId);
				}				   
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
					
			@RequestMapping(value = "/crm/salesformsdetails/presales", method = RequestMethod.GET)
			public ModelAndView presalesPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/presales");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/orderForm", method = RequestMethod.GET)
			public ModelAndView orderFormPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/orderForm");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/equipmentInfo", method = RequestMethod.GET)
			public ModelAndView equipmentInfoPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/equipmentInfo");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/profServInfo", method = RequestMethod.GET)
			public ModelAndView profServInfoPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/profServInfo");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/maintenanceInfo", method = RequestMethod.GET)
			public ModelAndView maintenanceInfoPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/maintenanceInfo");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/specifications", method = RequestMethod.GET)
			public ModelAndView specificationsPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/specifications");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/checklistform", method = RequestMethod.GET)
			public ModelAndView checklistformPage(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/checklistform");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);     
				System.out.println("checklistformPage:: salesOrderId=" +salesOrderId );
				
				this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/NewFile", method = RequestMethod.GET)
			public ModelAndView specificationsPage2(@RequestParam Long salesOrderId) {
				ModelAndView mav = new ModelAndView("/crm/salesformsdetails/NewFile");
				SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
				mav.addObject("salesOrder", salesOrder);
				return mav;
			}			
			@RequestMapping(value = "/crm/contacts/contact", method = RequestMethod.GET)
			public ModelAndView contactEditPage(
					@RequestParam(required = false) Long contactId, @RequestParam(required = false) String url ) {
				System.out.println("contactEditPage:::::::::::::::::::");
				ModelAndView mav = new ModelAndView("crm/contacts/createditcontacts");				
				Contact contact = null;		
				if (contactId == null) {
					contact = new Contact();
				} else {
					contact = contactService.findById(contactId);
				}
				mav.addObject("url", url);    
				mav.addObject("contact", contact);
				//this.contactController.getContactTabsEnableDisableFlags(contactId, mav);
				return mav;
			}
			
			@RequestMapping(value = "/crm/account/accounts", method = RequestMethod.GET)
			public ModelAndView accountEditPage( @RequestParam(required = false) Long accountId ) {								
				ModelAndView mav = new ModelAndView("crm/account/createditaccounts");
				Account account = null;		       
				if (accountId == null) {
					account = new Account();
				} else {
					account = accountService.findById(accountId); 
				}				
				mav.addObject("account", account);    
				return mav;
			}
			
			@RequestMapping(value = "/commonjsppages/address/address", method = RequestMethod.GET)
			public ModelAndView addressEditPage(@RequestParam(required = false) Long addressId,@RequestParam(required = false) Long contactId ,
					@RequestParam(required = false) String url ) {
				
				System.out.println("addressEditPage:::::::::::::::::::");
				System.out.println(":::::::::::::::::  addressId="+addressId ); 
				System.out.println(":::::::::::::::::  contactId="+contactId ); 
				System.out.println(":::::::::::::::::        url="+url );  
				
				ModelAndView mav = new ModelAndView("commonjsppages/address/address");
				Address address = null;
				Contact contact = null;
				
				if (addressId == null) {
					address = new Address();
				} else {
					address = addressService.findById(addressId);
				}
				if (contactId == null) {
					contact = new Contact();
				} else {
					contact = contactService.findById(contactId);
				}
				address.setContact(contact);	 			
				mav.addObject("address", address);
				mav.addObject("url", url);
				return mav;
			}
			
			@RequestMapping(value = "/crm/contacts/createditcontactsAccounts", method = RequestMethod.GET)
			public ModelAndView accountContactEditPage(	@RequestParam(required = false) Long accountId,@RequestParam(required = false) Long contactId ) {
				System.out.println("createditcontactsAccounts:::::::::::::::::::");
				System.out.println(":::::::::::::::::  accountId="+accountId ); 
				System.out.println(":::::::::::::::::  contactId="+contactId ); 
				ModelAndView mav = new ModelAndView("crm/contacts/createditcontactsAccounts");
				Account account = null;
				Contact contact = null;
				if (accountId == null) {
					account = new Account();
				} else {
					account = accountService.findById(accountId);
				}
				if (contactId == null) {
					contact = new Contact();
				} else {
					contact = contactService.findById(contactId);
				}				
				mav.addObject("account", account);
				mav.addObject("contact", contact); 
				return mav;
			}
			
			@RequestMapping(value = "/crm/contacts/createditcontactsAccounts1", method = RequestMethod.GET)
			public ModelAndView accountContactEditPage1(	@RequestParam(required = false) Long contactId ) {
				System.out.println("accountContactEditPage1:::::::::::::::::::");				
				System.out.println(":::::::::::::::::  contactId="+contactId ); 
				ModelAndView mav = new ModelAndView("crm/contacts/createditcontactsAccounts");
				Account account = null;  
				Contact contact = null;				
				if (contactId == null) {
					contact = new Contact();
				} else {
					contact = contactService.findById(contactId);
					account=contact.getAccount(); 
				}				
				mav.addObject("account", account);
				mav.addObject("contact", contact); 
				return mav;
			}
			
			@RequestMapping(value = "/crm/quote/createditquotes", method = RequestMethod.GET)
			public ModelAndView editQuotes(	@RequestParam(required = false) Long quoteId, @RequestParam(required = false) String url   ) {
				System.out.println("editQuotes:::::::::::::::::::");				
				System.out.println("::::::::::editQuotes  quoteId="+quoteId ); 
				System.out.println("::::::::::editQuotes      url="+url );   
				ModelAndView mav = new ModelAndView("crm/quote/createditquotes");		
				Quote quote = null;				
				if (quoteId == null) {
					quote = new Quote();
				} else { 
					quote = quoteService.findById(quoteId);					
				}
				if(url!=null){
				mav.addObject("url", url);
				}else{
				mav.addObject("url", null);	  
				}
				mav.addObject("quote", quote); 
				return mav;
			} 
			                
		
			@RequestMapping(value = "/crm/quote/createditquotesForm", method = RequestMethod.GET)
			public ModelAndView createditquotesForm(@RequestParam(required = false) Long accountId, @RequestParam(required = false) Long quoteId,
					@RequestParam(required = false) String url ) { 
				System.out.println("createditquotesForm:::::::::::::::::::");				
				System.out.println("::::::::::createditquotesForm  accountId="+accountId ); 
				System.out.println("::::::::::createditquotesForm    quoteId="+quoteId );  
				System.out.println("::::::::::createditquotesForm        url="+url );  
			
				ModelAndView mav = new ModelAndView("crm/quote/createditquotes");		
				Quote quote = null;	
				Account account = null; 
				if(accountId != null  ) 
				{
					account = accountService.findById(accountId);
					if (quoteId == null) {
						quote = new Quote();						
					}else{ 
						quote = quoteService.findById(quoteId);	
					}			
					quote.setAccount(account); 
				}					
				mav.addObject("url", url);					
				mav.addObject("quote", quote); 
				return mav;
			}
			
			
			@RequestMapping(value = "/crm/quote/editQuotesAccounts", method = RequestMethod.GET)
			public ModelAndView editQuotesAccounts(	@RequestParam(required = false) Long accountId, @RequestParam(required = false) Long quoteId) {
				System.out.println("editQuotesAccounts:::::::::::::::::::");				
				System.out.println("::::::::::editQuotesAccounts  accountId="+accountId ); 
				System.out.println("::::::::::editQuotesAccounts    quoteId="+quoteId ); 
				ModelAndView mav = new ModelAndView("crm/quote/createditquotesAcc");		
				Quote quote = null;		
				Account account = null; 
				if (accountId == null) {
					account = new Account();
				}else{ 					
					account = accountService.findById(accountId);
					if (quoteId == null) {
						quote = new Quote();						
					}else{ 
						quote = quoteService.findById(quoteId);	
					}						
				}			
				quote.setAccount(account); 				
				mav.addObject("quote", quote);				
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/coverQuotes", method = RequestMethod.GET)
			public ModelAndView coverQuotes(@RequestParam(required = false) Long accountId, @RequestParam(required = false) Long quoteId) {
				System.out.println("coverQuotes:::::::::::::::::::");				
				System.out.println("::::::::::coverQuotes  accountId="+accountId ); 
				System.out.println("::::::::::coverQuotes    quoteId="+quoteId ); 
				ModelAndView mav = new ModelAndView("crm/salesformsdetails/coverQuotes");		
				Quote quote = null;		
				Account account = null; 
				if (accountId == null) {
					account = new Account();
				}else{ 					
					account = accountService.findById(accountId);
					if (quoteId == null) {
						quote = new Quote();						
					}else{ 
						quote = quoteService.findById(quoteId);	
					}						
				}			
				quote.setAccount(account); 				
				mav.addObject("quote", quote);				
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesformsdetails/coverQuotesEdit", method = RequestMethod.GET)
			public ModelAndView coverQuotesEdit(@RequestParam(required=false) Long salesOrderId,@RequestParam(required = false) Long quoteId) {
				ModelAndView mav = new ModelAndView("crm/salesformsdetails/coverQuotes");			 
				SalesOrder salesOrder = null;
				Quote quote = null;	
				if(salesOrderId == null){
					salesOrder = new SalesOrder();
				}
				else{
					salesOrder = salesOrderService.findById(salesOrderId);
				}			
				if (quoteId == null) {
					quote = new Quote();						
				}else{ 
					quote = quoteService.findById(quoteId);	
				}					
				salesOrder.setQuote(quote);  
				mav.addObject("salesOrder", salesOrder);
				//this.salesOrderController.getSOTabsEnableDisableFlags(salesOrderId, mav);
				return mav;
			}
			
			
			@RequestMapping(value = "/crm/quote/editQuotesAccounts1", method = RequestMethod.GET)
			public ModelAndView editQuotesAccounts1(	@RequestParam(required = false) Long quoteId ) {
				System.out.println("editQuotesAccounts1:::::::::::::::::::");				
				System.out.println("::::::::::editQuotesAccounts1  quoteId="+quoteId ); 
				ModelAndView mav = new ModelAndView("crm/quote/createditquotesAcc");		
				Quote quote = null;				
				if (quoteId == null) {
					quote = new Quote();
				} else { 
					quote = quoteService.findById(quoteId);					
				}									
				mav.addObject("quote", quote); 
				return mav;
			}
			
			@RequestMapping(value = "/crm/Lead/createditlead", method = RequestMethod.GET)
			public ModelAndView editLeades(	@RequestParam(required = false) Long leadId,@RequestParam(required = false) String url  ) {
				System.out.println("editLeades:::::::::::::::::::leadId="+leadId);		
				System.out.println(":::::::::::::::::               url="+url );  
				ModelAndView mav = new ModelAndView("crm/Lead/createditlead");		
				Lead lead = null;				
				if (leadId == null) {
					lead = new Lead();
				} else { 
					lead = leadService.findById(leadId);					
				}			
				mav.addObject("url", url);
				mav.addObject("lead", lead); 
				return mav;
			}
			
			@RequestMapping(value = "/commonjsppages/activities/activities", method = RequestMethod.GET)
			public ModelAndView activitiesEditPage(
					@RequestParam(required = false) Long generalActivityId, @RequestParam(required = false) String url ) {
				System.out.println("activitiesEditPage:::::::::::::::::::");
				ModelAndView mav = new ModelAndView("commonjsppages/activities/activities");
				System.out.println(":::::::::::::::::               url="+url );  
				GeneralActivities generalActivities = null;
				if (generalActivityId == null) {
					generalActivities = new GeneralActivities();
				} else {
					generalActivities = generalActivitiesService.findById(generalActivityId);
				}	
				mav.addObject("url", url);  
				mav.addObject("generalActivities", generalActivities);				
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesorder/editsalesorder", method = RequestMethod.GET)
			public ModelAndView editSalesOrder( @RequestParam(required = false) Long salesOrderId) {								
				ModelAndView mav = new ModelAndView("crm/salesorder/editsalesorder");								
				SalesOrder salesOrder = null;		       
				if (salesOrderId == null) {
					salesOrder = new SalesOrder();
				} else {
					salesOrder = salesOrderService.findById(salesOrderId); 
				}		
			
				mav.addObject("salesOrder", salesOrder);    
				return mav;
			}
			
			@RequestMapping(value = "/crm/salesorder/createditsalesorder", method = RequestMethod.GET)
			public ModelAndView createditsalesorder( @RequestParam(required = false) Long salesOrderId, @RequestParam(required = false) String url) {								
				ModelAndView mav = new ModelAndView("crm/salesorder/createditsalesorder");								
				SalesOrder salesOrder = null;		       
				if (salesOrderId == null) {
					salesOrder = new SalesOrder();
				} else {
					salesOrder = salesOrderService.findById(salesOrderId); 
				}		
				mav.addObject("url", url);
				mav.addObject("salesOrder", salesOrder);    
				return mav;
			}

}
