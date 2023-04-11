package com.seismic.crm.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Address;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.Quote;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;
import com.seismic.crm.model.SupplierProduct;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.AddressRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.LeadRepository;
import com.seismic.crm.repository.ListValuesRepository;
import com.seismic.crm.repository.ProductCategoryRepository;
import com.seismic.crm.repository.ProductRepository;
import com.seismic.crm.repository.ProductSubCategoryRepository;
import com.seismic.crm.repository.ProductSubTypeRepository;
import com.seismic.crm.repository.PurchaseOrderRepository;
import com.seismic.crm.repository.QuoteRepository;
import com.seismic.crm.repository.SalesOrderProductDetailRepository;
import com.seismic.crm.repository.SalesOrderRepository;
import com.seismic.crm.repository.SupplierProductRepository;
import com.seismic.crm.service.MailService;
//import com.seismic.crm.service.ContactService;
import com.seismic.crm.service.SalesOrderService;
import com.seismic.crm.utils.CustomDateUtil;
import com.seismic.crm.utils.ExtJSResponse;
import com.seismic.crm.utils.MessagesUtil;
import com.seismic.crm.utils.RandomKeyGeneration;
import com.seismic.crm.utils.SecurityContextUtil;
import com.seismic.crm.validation.SalesOderValidator;

@Controller
@RequestMapping(value = "/salesOrder")
public class SalesOrderController {

	DateFormat df = new SimpleDateFormat("MM/dd/yyyy");

	@Autowired
	private SecurityContextUtil secContextUtil;

	@Autowired
	private HttpServletRequest request;

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private SalesOrderRepository salesOrderRepository;
	
	@Autowired
	private QuoteRepository quoteRepository;

	@Autowired
	private SupplierProductRepository supplierProductRepository;

	@Autowired
	private SalesOrderProductDetailRepository soProductDetailRepository;

	@Autowired
	private ListValuesRepository listValuesRepository;

	@Autowired
	private ProductCategoryRepository productCategoryRepository;

	@Autowired
	private ProductSubTypeRepository productSubTypeRepository;

	@Autowired
	private ProductSubCategoryRepository productSubCategoryRepository;

	@Autowired
	private SalesOrderService salesOrderService;
	
	@Autowired
	private MailService mailService;
	
	@Autowired
	private CustomDateUtil customDateUtil;
	
	@Autowired
	private SecurityContextUtil securityContextUtil;

	@Autowired
	private AddressRepository addressRepository;

	@Autowired
	private SalesOderValidator salesOderValidator;
	
	@Autowired
	private PurchaseOrderRepository purchaseOrderRepository;
	
	@Autowired
	private LeadRepository leadRepository;
	

	@RequestMapping(value = "/salesOrderReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Page<SalesOrder> salesOrderReport(@RequestParam String soType,
			@RequestParam int pagesize,
			@RequestParam int pagenum, @RequestParam int filterscount,
			HttpServletRequest request
			) throws ParseException {
		System.out.println("=======================SalesOrderController:: salesOrderReport========================");

		String filterdatafield[] = new String[6];
		String salesOrderNumber = "";
		String salesOrderDate[] = new String[2] ;
		String accountName = "";
		String salesformnumber = "";
		String contactBySalesOrderSalesRep = "";
		
		int d=0;
		Page<SalesOrder> list =  null;
		
		if (filterscount > 0) {
			for (int i = 0; i < filterscount; i++) {
				filterdatafield[i] = request
						.getParameter("filterdatafield" + i);
				if ((filterdatafield[i].toString()).equals("salesOrderNumber")) {
					salesOrderNumber = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("account.accountName")) {
					accountName = request.getParameter("filtervalue"
							+ i);

				} else if ((filterdatafield[i].toString())
						.equals("salesOrderSalesFormRefId")) {
					salesformnumber = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("contactBySalesOrderSalesRep.contactName")) {
					contactBySalesOrderSalesRep = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("salesOrderDate")) {
					
					salesOrderDate[d] = request.getParameter("filtervalue" + i);
					d++;
				}

			}
		}
		
		list = salesOrderService.viewSalesOrderDetails(salesOrderNumber,salesOrderDate,accountName,salesformnumber,
				contactBySalesOrderSalesRep,pagesize,pagenum,request
				.getParameter("sortorder")==null?"modifiedAt":request
						.getParameter("sortorder"),request.getParameter("sortdatafield")==null?"modifiedAt":request
								.getParameter("sortdatafield"));
		
		return list;
	}

	@RequestMapping(value = "/{salesOrderId}/equipmentInfo", method = RequestMethod.GET)
	public ModelAndView equipmentInfoPage(@PathVariable Long salesOrderId) {
		ModelAndView mav = new ModelAndView("equipmentinfo");
		SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	@RequestMapping(value = "/{salesOrderId}/profservInfo", method = RequestMethod.GET)
	public ModelAndView profServInfoPage(@PathVariable Long salesOrderId) {
		ModelAndView mav = new ModelAndView("profservinfo");
		SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	@RequestMapping(value = "/shippingMethod", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getShippingMethod(){
		return listValuesRepository.findByListValueCategory("Shipping Method");
	}
	
	@RequestMapping(value = "getSalesRep", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<KeyValueMap> getSalesRep(@RequestParam Long oppoAccountId){
		System.out.println("===================================getSalesRep:: oppoAccountId="+oppoAccountId ); 		
		Account account= accountRepository.findOne(oppoAccountId);
		List<KeyValueMap> keyValueMaps = new ArrayList<KeyValueMap>();
		if(account.getContactGroup() != null){
			keyValueMaps = contactRepository.getContactSalesRep(account.getContactGroup().getContactGroupId());
		}		
		return keyValueMaps;
	}
	@RequestMapping(value = "/randomNumberGenerationforSalesOrderOnLoad", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder randomNumberGenerationforSalesOrderOnLoad() throws FileNotFoundException, IOException {
		System.out.println("Inside randomNumberGenerationforSalesOrderOnLoad ==============================================>");
		String key = new RandomKeyGeneration().getRandomGeneration();
		SalesOrder salesOrder = new SalesOrder();                                                          
		salesOrder.setSalesOrderNumber(key);                
		return salesOrder;
	}
	
	@RequestMapping(value = "/CreateCover", method = RequestMethod.GET)
	public ModelAndView newSalesOrderPage() {
		SalesOrder so = new SalesOrder();
		ModelAndView mav = new ModelAndView("salesFormsDetails", "salesOrder",
				so);
		return mav;
	}
	
	
	@RequestMapping(value = "/saveSalesOrderData", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse saveSalesOrderData(
			@RequestParam(required=false) Long salesOrderId,@RequestParam Long accountId,
//			@RequestParam String salesOrderSalesRep,
			@RequestParam Long purchaseOrderId,			
			@RequestParam String salesOrderDate,@RequestParam String salesOrderLeadId,// @RequestParam String accountName,	// @RequestParam(required = false) String accountName1,
			@RequestParam String bankAccountName,@RequestParam String telephone,@RequestParam String webSite,// @RequestParam Long lvacquisition,
			@RequestParam Long listValuesByCustomerTypeId, @RequestParam String accountRating,@RequestParam BigDecimal accountCreditLimiit,
			@RequestParam String alternateAccountNumber,/*@RequestParam String primaryContactName,*/@RequestParam String primaryTelephoneNumber,
			/*@RequestParam String primaryEmailId,*/@RequestParam String billingContactName,@RequestParam String billingTelephoneNumber,
			@RequestParam String billingContactEmailId,	@RequestParam String billingName,@RequestParam String billingAddress1,@RequestParam String billingAddress2,
			@RequestParam String billingAddress3,@RequestParam String billingPostCode,@RequestParam String companyAddress1,	@RequestParam String companyAddress2,
			@RequestParam String companyAddress3,@RequestParam String companyPostCode,@RequestParam String technicalContactName,@RequestParam String technicalTelephoneNumber,
			@RequestParam String technicalEmailId,@RequestParam String installationAddress1,@RequestParam String installationAddress2,@RequestParam String installationAddress3,
			@RequestParam String installationPostCode,@RequestParam String bankName,@RequestParam String bankAccountSortCode,@RequestParam String bankAccountNumber,
			@RequestParam String bankAddress1,@RequestParam String bankAddress2,@RequestParam String bankAddress3,@RequestParam String bankPostCode,
			@RequestParam String accountRegistrationNumber,	@RequestParam String fax,@RequestParam String accountRegistrationDate,
			@RequestParam String title,@RequestParam String emailId,@RequestParam String accountNoOfEmployees,@RequestParam Long listValuesByAddressTypeId
			) throws ParseException, IOException {

	    System.out.println("  saveSalesOrderData>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	    System.out.println("       salesOrderId= "+salesOrderId );                  
//	    System.out.println(" salesOrderSalesRep= "+salesOrderSalesRep );  	  
		request.getUserPrincipal().getName();
		SalesOrder salesOrder;
		String message;	
		if(salesOrderId == null){
			salesOrder = new SalesOrder();
			salesOrder.setCreatedAt(CustomDateUtil.getDateAndTime());  
			salesOrder.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
		else {
			salesOrder = this.salesOrderRepository.findOne(salesOrderId);
			salesOrder.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
//		Contact contact = new Contact();
		salesOrder.setCreatedBy(request.getUserPrincipal().getName());
//		salesOrder.setSalesOrderSalesRep(salesOrderSalesRep);
		if(purchaseOrderId!=null){
		salesOrder.setPurchaseOrder(purchaseOrderRepository.findOne(purchaseOrderId));
		}
		salesOrder.setSalesOrderDate(new Date(df.parse(salesOrderDate)
				.getTime()));
		if(salesOrderLeadId !=null&& salesOrderLeadId !=""){
		salesOrder.setLead(leadRepository.findOne(Long.parseLong(salesOrderLeadId.toString())));
		}
		
		if(technicalContactName!=null){
		salesOrder.setTechnicalContactName(Long.parseLong(technicalContactName.toString()));
		}
		salesOrder.setTechnicalTelephoneNumber(technicalTelephoneNumber);
		salesOrder.setTechnicalEmailId(technicalEmailId);
		salesOrder.setInstallationAddress1(installationAddress1);
		salesOrder.setInstallationAddress2(installationAddress2);
		salesOrder.setInstallationAddress3(installationAddress3);
		salesOrder.setInstallationPostCode(installationPostCode);
		/*
		Quote quote; 		
		if (quoteId != null) {
			quote = quoteRepository.findOne(quoteId);
		}else{
			quote = new Quote();
		}		
		System.out.println("-------------------------->quote= "+quote );    
		salesOrder.setQuote(quote);  */
		
		/*contact.setContactRegistrationNumber(accountRegistrationNumber);
		contact.setFax(fax);
		if(!accountRegistrationDate.isEmpty()){
			contact.setContactRegistrationDate(new Date(df.parse(
					accountRegistrationDate).getTime()));
		}
		contact.setTitle(title);
		Contact newContact = contactRepository.save(contact);
		salesOrder.setContact(newContact);*/

		Account account;
		if (accountId != null) {
			account = accountRepository.findOne(accountId);
//			account.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
		else {
			account = new Account();
//			account.setCreatedAt(CustomDateUtil.getDateAndTime());  
//			account.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
		/*	account.setBankAccountName(bankAccountName);
		account.setTelephone(telephone);
		account.setWebSite(webSite);
		account.setAccountRating(accountRating);
		account.setAccountCreditLimiit(accountCreditLimiit);
		account.setAlternateAccountNumber(alternateAccountNumber);
//		account.setContactByPrimaryContactName(contactRepository.findOne(Long.parseLong(primaryContactName.toString())));
		account.setPrimaryTelephoneNumber(primaryTelephoneNumber);
//		account.setPrimaryEmailId(primaryEmailId);
		account.setBillingContactName(billingContactName);
		account.setBillingTelephoneNumber(billingTelephoneNumber);
		account.setBillingContactEmailId(billingContactEmailId);
		account.setBillingName(billingName);
		account.setBillingAddress1(billingAddress1);
		account.setBillingAddress2(billingAddress2);
		account.setBillingAddress3(billingAddress3);
		account.setBillingPostCode(billingPostCode);
		account.setCompanyAddress1(companyAddress1);
		account.setCompanyAddress2(companyAddress2);
		account.setCompanyAddress3(companyAddress3);
		account.setCompanyPostCode(companyPostCode);
		account.setBankName(bankName);
		account.setBankAccountSortCode(bankAccountSortCode);
		account.setBankAccountNumber(bankAccountNumber);
		account.setBankAddress1(bankAddress1);
		account.setBankAddress2(bankAddress2);
		account.setBankAddress3(bankAddress3);
		account.setBankPostCode(bankPostCode);*/
		if ((listValuesByCustomerTypeId!= null) && (listValuesByCustomerTypeId > 0)) {
			ListValues listValuesByAcquisition = listValuesRepository
					.findOne(listValuesByCustomerTypeId);
			salesOrder.setListValuesByCustomerTypeId(listValuesByAcquisition);
		} else {
			salesOrder.setListValuesByCustomerTypeId(null);
		}
		if(listValuesByAddressTypeId !=null){
		salesOrder.setListValuesByAddressTypeId(listValuesRepository.findOne(listValuesByAddressTypeId));
		}
//		Account newAccount = accountRepository.save(account);
//
//		
		salesOrder.setAccount(account);
		salesOrder.setSoType("salesForm");
		SalesOrder newSalesOrder = salesOrderService.saveSalesOrder(salesOrder);
		if(salesOrderId==null ){          			
		    message= MessagesUtil.showMessage("SalesForm", String.valueOf(newSalesOrder.getSalesOrderId()),  "Created" , "Successfully" ) ;			
		}else{					
			message= MessagesUtil.showMessage("SalesForm",String.valueOf(newSalesOrder.getSalesOrderId()),  "Updated" , "Successfully" ) ;
		}
		//return newSalesOrder;
		return new ExtJSResponse(true , newSalesOrder, message ); 
	}
	
	@RequestMapping(value = "/saveSalesOrderDataQuote", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder saveSalesOrderDataQuote(
			@RequestParam(required=false) Long salesOrderId,@RequestParam Long accountId,@RequestParam(required=false) Long quoteId,
			@RequestParam String salesOrderSalesRep,@RequestParam String nameOfSalesOrder,			
			@RequestParam String salesOrderDate,@RequestParam String salesOrderSource,// @RequestParam String accountName,	// @RequestParam(required = false) String accountName1,
			@RequestParam String bankAccountName,@RequestParam String telephone,@RequestParam String webSite,// @RequestParam Long lvacquisition,
			@RequestParam Long custTypeId, @RequestParam String accountRating,@RequestParam BigDecimal accountCreditLimiit,
			@RequestParam String alternateAccountNumber,@RequestParam String primaryContactName,@RequestParam String primaryTelephoneNumber,
			@RequestParam String primaryEmailId,@RequestParam String billingContactName,@RequestParam String billingTelephoneNumber,
			@RequestParam String billingContactEmailId,	@RequestParam String billingName,@RequestParam String billingAddress1,@RequestParam String billingAddress2,
			@RequestParam String billingAddress3,@RequestParam String billingPostCode,@RequestParam String companyAddress1,	@RequestParam String companyAddress2,
			@RequestParam String companyAddress3,@RequestParam String companyPostCode,@RequestParam String technicalContactName,@RequestParam String technicalTelephoneNumber,
			@RequestParam String technicalEmailId,@RequestParam String installationAddress1,@RequestParam String installationAddress2,@RequestParam String installationAddress3,
			@RequestParam String installationPostCode,@RequestParam String bankName,@RequestParam String bankAccountSortCode,@RequestParam String bankAccountNumber,
			@RequestParam String bankAddress1,@RequestParam String bankAddress2,@RequestParam String bankAddress3,@RequestParam String bankPostCode,
			@RequestParam String contactRegistrationNumber,	@RequestParam String fax,@RequestParam String contactRegistrationDate,
			@RequestParam String title) throws ParseException {

	    System.out.println("  saveSalesOrderDataQuote>>>>>>>>>>>>>>>>>>>>>>>>>>>");
	    System.out.println("       salesOrderId= "+salesOrderId );                  
	    System.out.println(" salesOrderSalesRep= "+salesOrderSalesRep );  
	    System.out.println("            quoteId= "+quoteId );   
		request.getUserPrincipal().getName();
		SalesOrder salesOrder;
		if(salesOrderId == null){
			salesOrder = new SalesOrder();
		}
		else {
			salesOrder = this.salesOrderRepository.findOne(salesOrderId);
		}
		Contact contact = new Contact();
		salesOrder.setCreatedBy(request.getUserPrincipal().getName());
		salesOrder.setSalesOrderSalesRep(salesOrderSalesRep);
		salesOrder.setNameOfSalesOrder(nameOfSalesOrder);
		salesOrder.setSalesOrderDate(new Date(df.parse(salesOrderDate)
				.getTime()));
		salesOrder.setSalesOrderSource(salesOrderSource);
		salesOrder.setTechnicalContactName(Long.parseLong(technicalContactName));
		salesOrder.setTechnicalTelephoneNumber(technicalTelephoneNumber);
		salesOrder.setTechnicalEmailId(technicalEmailId);
		salesOrder.setInstallationAddress1(installationAddress1);
		salesOrder.setInstallationAddress2(installationAddress2);
		salesOrder.setInstallationAddress3(installationAddress3);
		salesOrder.setInstallationPostCode(installationPostCode);
		Quote quote; 		
		if (quoteId != null) {
			quote = quoteRepository.findOne(quoteId);
		}else{
			quote = new Quote();
		}		
		System.out.println("-------------------------->quote= "+quote );    
		salesOrder.setQuote(quote);  
		
		contact.setContactRegistrationNumber(contactRegistrationNumber);
		contact.setFax(fax);
		if(!contactRegistrationDate.isEmpty()){
			contact.setContactRegistrationDate(new Date(df.parse(
					contactRegistrationDate).getTime()));
		}
		contact.setTitle(title);
		Contact newContact = contactRepository.save(contact);
		salesOrder.setContact(newContact);

		Account account;
		if (accountId != null) {
			account = accountRepository.findOne(accountId);
		}
		else {
			account = new Account();
		}
		account.setBankAccountName(bankAccountName);
		account.setTelephone(telephone);
		account.setWebSite(webSite);
		account.setAccountRating(accountRating);
		account.setAccountCreditLimiit(accountCreditLimiit);
		account.setAlternateAccountNumber(alternateAccountNumber);
		account.setContactByPrimaryContactName(contactRepository.findOne(Long.parseLong(primaryContactName.toString())));
		account.setPrimaryTelephoneNumber(primaryTelephoneNumber);
		account.setPrimaryEmailId(primaryEmailId);
		account.setBillingContactName(billingContactName);
		account.setBillingTelephoneNumber(billingTelephoneNumber);
		account.setBillingContactEmailId(billingContactEmailId);
		account.setBillingName(billingName);
		account.setBillingAddress1(billingAddress1);
		account.setBillingAddress2(billingAddress2);
		account.setBillingAddress3(billingAddress3);
		account.setBillingPostCode(billingPostCode);
		account.setCompanyAddress1(companyAddress1);
		account.setCompanyAddress2(companyAddress2);
		account.setCompanyAddress3(companyAddress3);
		account.setCompanyPostCode(companyPostCode);
		account.setBankName(bankName);
		account.setBankAccountSortCode(bankAccountSortCode);
		account.setBankAccountNumber(bankAccountNumber);
		account.setBankAddress1(bankAddress1);
		account.setBankAddress2(bankAddress2);
		account.setBankAddress3(bankAddress3);
		account.setBankPostCode(bankPostCode);
		if ((custTypeId!= null) && (custTypeId > 0)) {
			ListValues listValuesByAcquisition = listValuesRepository
					.findOne(custTypeId);
			account.setListValuesByAccountSourceId(listValuesByAcquisition);
		} else {
			account.setListValuesByAccountSourceId(null);
		}

		Account newAccount = accountRepository.save(account);

		
		salesOrder.setAccount(account);
		SalesOrder newSalesOrder = salesOrderService
				.saveSalesOrder(salesOrder);

		return newSalesOrder;
	}
	

	@RequestMapping(value = "{salesOrderId}/editSalesOrderReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder editSalesOrderReport(@PathVariable Long salesOrderId) {
   		SalesOrder salesOrder = null;
		if (salesOrderId > 0) {
			salesOrder = salesOrderService.findById(salesOrderId);
		} else {
			salesOrder = new SalesOrder();
			salesOrder.setAccount(new Account());
			salesOrder.setQuote(new Quote());  
		}
		return salesOrder;

	}

	@RequestMapping(value = "/editSalesOrderDetails/{salesOrderId}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder editSalesOrderDetails(
			// @RequestParam(required = false)
			// tried but not wrking
			@PathVariable Long salesOrderId, @RequestParam Long accountId, /*
																			 * @
																			 * RequestParam
																			 * Long
																			 * contactId
																			 * ,
																			 */
			@RequestParam String salesOrderSalesRep,
			@RequestParam String nameOfSalesOrder,
			@RequestParam String salesOrderDate,
			@RequestParam String salesOrderSource,
			@RequestParam String bankAccountName,
			@RequestParam String telephone, @RequestParam String webSite,
			@RequestParam String accountRating,
			@RequestParam BigDecimal accountCreditLimiit,
			@RequestParam String alternateAccountNumber,
			@RequestParam String primaryContactName,
			@RequestParam String primaryTelephoneNumber,
			@RequestParam String primaryEmailId,
			@RequestParam String billingContactName,
			@RequestParam String billingTelephoneNumber,
			@RequestParam String billingContactEmailId,
			@RequestParam String billingName,
			@RequestParam String billingAddress1,
			@RequestParam String billingAddress2,
			@RequestParam String billingAddress3,
			@RequestParam String billingPostCode,
			@RequestParam String companyAddress1,
			@RequestParam String companyAddress2,
			@RequestParam String companyAddress3,
			@RequestParam String companyPostCode,
			@RequestParam String technicalContactName,
			@RequestParam String technicalTelephoneNumber,
			@RequestParam String technicalEmailId,
			@RequestParam String installationAddress1,
			@RequestParam String installationAddress2,
			@RequestParam String installationAddress3,
			@RequestParam String installationPostCode,
			@RequestParam String bankName,
			@RequestParam String bankAccountSortCode,
			@RequestParam String bankAccountNumber,
			@RequestParam String bankAddress1,
			@RequestParam String bankAddress2,
			@RequestParam String bankAddress3,
			@RequestParam String bankPostCode, @RequestParam Long custTypeId )
			throws ParseException {

		System.out
				.println("In editSalesOrderDetails>>>>>>>>>>>>>>>>>>>>>>>>>>>");

		SalesOrder updatedSalesOrder = this.salesOrderRepository
				.findOne(salesOrderId);
		updatedSalesOrder.setSalesOrderSalesRep(salesOrderSalesRep);
		updatedSalesOrder.setNameOfSalesOrder(nameOfSalesOrder);
		updatedSalesOrder.setSalesOrderDate(new Date(df.parse(salesOrderDate)
				.getTime()));
		updatedSalesOrder.setSalesOrderSource(salesOrderSource);
		updatedSalesOrder.setTechnicalContactName(Long.parseLong(technicalContactName));
		updatedSalesOrder.setTechnicalTelephoneNumber(technicalTelephoneNumber);
		updatedSalesOrder.setTechnicalEmailId(technicalEmailId);
		updatedSalesOrder.setInstallationAddress1(installationAddress1);
		updatedSalesOrder.setInstallationAddress2(installationAddress2);
		updatedSalesOrder.setInstallationAddress3(installationAddress3);
		updatedSalesOrder.setInstallationPostCode(installationPostCode);

		/*
		 * Contact updateContact = contactRepository.findOne(contactId);
		 * 
		 * updateContact
		 * .setContactRegistrationNumber(contactRegistrationNumber);
		 * 
		 * 
		 * updateContact.setFax(fax);
		 * updateContact.setContactRegistrationDate(new Date(df.parse(
		 * contactRegistrationDate).getTime())); updateContact.setTitle(title);
		 */

		if (accountId != null) {
			Account updateAccountData = accountRepository.findOne(accountId);
			/* updateAccountData.setAccountName(accountName); */
			updateAccountData.setBankAccountName(bankAccountName);
			updateAccountData.setTelephone(telephone);
			updateAccountData.setWebSite(webSite);
			updateAccountData.setAccountRating(accountRating);
			updateAccountData.setAccountCreditLimiit(accountCreditLimiit);
			updateAccountData.setAlternateAccountNumber(alternateAccountNumber);
			updateAccountData.setContactByPrimaryContactName(contactRepository.findOne(Long.parseLong(primaryContactName.toString())));
			updateAccountData.setPrimaryTelephoneNumber(primaryTelephoneNumber);
			updateAccountData.setPrimaryEmailId(primaryEmailId);
			updateAccountData.setBillingContactName(billingContactName);
			updateAccountData.setBillingTelephoneNumber(billingTelephoneNumber);
			updateAccountData.setBillingContactEmailId(billingContactEmailId);
			updateAccountData.setBillingName(billingName);
			updateAccountData.setBillingAddress1(billingAddress1);
			updateAccountData.setBillingAddress2(billingAddress2);
			updateAccountData.setBillingAddress3(billingAddress3);
			updateAccountData.setBillingPostCode(billingPostCode);
			updateAccountData.setCompanyAddress1(companyAddress1);
			updateAccountData.setCompanyAddress2(companyAddress2);
			updateAccountData.setCompanyAddress3(companyAddress3);
			updateAccountData.setCompanyPostCode(companyPostCode);
			updateAccountData.setBankName(bankName);
			updateAccountData.setBankAccountSortCode(bankAccountSortCode);
			updateAccountData.setBankAccountNumber(bankAccountNumber);
			updateAccountData.setBankAddress1(bankAddress1);
			updateAccountData.setBankAddress2(bankAddress2);
			updateAccountData.setBankAddress3(bankAddress3);
			updateAccountData.setBankPostCode(bankPostCode);
			if (custTypeId > 0) {
				ListValues listValuesByAcquisition = listValuesRepository
						.findOne(custTypeId);
				updateAccountData
						.setListValuesByAccountSourceId(listValuesByAcquisition);
			} else {
				updateAccountData.setListValuesByAccountSourceId(null);
			}

			updatedSalesOrder.setAccount(updateAccountData);

		}
		// updatedSalesOrder.setContact(updateContact);
		System.out
				.println("technicalEmailId===============" + technicalEmailId);
		SalesOrder updateSalesOrderDetail = salesOrderService
				.saveSalesOrder(updatedSalesOrder);

		return updateSalesOrderDetail;

	}

	// =============================== order form
	// Get product List based on Product sub categories

	@RequestMapping(value = "/productSubCategory", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> productListBySubCategory(
			@RequestParam Long productSubCategoryId) {
		ProductSubCategory psc = productSubCategoryRepository
				.findOne(productSubCategoryId);
		return productRepository.findByProductSubCategory(psc);
	}

	@RequestMapping(value = "/productsByProdSubCat", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> productsBySubCategory(
			@RequestParam Long productSubCatId) {
		ProductSubCategory psc = productSubCategoryRepository
				.findOne(productSubCatId);
		return productRepository.findByProductSubCategory(psc);
	}

	@RequestMapping(value = "/{salesOrderId}/orderForm", method = RequestMethod.GET)
	public ModelAndView salesOrderFormPage(@PathVariable Long salesOrderId) {
		System.out.println("SalesOrder ID====>" + salesOrderId);
		ModelAndView mav = new ModelAndView("OrderForm");
		SalesOrder salesOrder = salesOrderService
				.findBySalesOrderID(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	@RequestMapping(value = "/{salesOrderId}/orderForm", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> getSalesOrderForm(@PathVariable Long salesOrderId) {

		SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> soDetails = salesOrderService.orderForm(salesOrder);		
		System.out.println("List======getSalesOrderFormById======>"+ salesOrder.getNameOfSalesOrder());
		return soDetails;
	}

	@RequestMapping(value = "/{salesOrderId}/orderForm/createOrder", method = RequestMethod.POST, consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail createOrderForm(@PathVariable Long salesOrderId,
			/*@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam String salesOrderDescription,
			@RequestParam String additionalInformation,
			@RequestParam String installLocation,
			@RequestParam Long productCategoryId,
			@RequestParam Long productSubCategoryId,
			@RequestParam Long productId, @RequestParam Long soChargeTypeId,*/
			@RequestBody Map<String, Object> reqMap) {
		System.out.println("In createOrderForm>>>>>>>>>>>>>>>>>>>>>>>>>>>salesOrderId="+salesOrderId );
		ListValues lineItemType = listValuesRepository.findByListValueCategoryAndListValueDescription("Line Item Type", "Order Form");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
		soProductDetail.setLvsoLineItem(lineItemType);
		soProductDetail.setSalesOrder(so);

		Double salesOrderProductQty = Double.valueOf(reqMap.get("salesOrderProductQty").toString());
		BigDecimal salesOrderProductRate = new BigDecimal(reqMap.get("salesOrderProductRate").toString());
		String salesOrderDescription = (String) reqMap.get("salesOrderDescription");
		String additionalInformation = (String) reqMap.get("additionalInformation");
		String installLocation = (String) reqMap.get("installLocation");
		Long productCategoryId = Long.valueOf(reqMap.get("productCategoryId").toString());
		Long productSubCategoryId = Long.valueOf(reqMap.get("productSubCategoryId").toString());
		Long productId = Long.valueOf(reqMap.get("productId").toString());
		Long soChargeTypeId = Long.valueOf(reqMap.get("soChargeTypeId").toString());

		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setSalesOrderProductRate(salesOrderProductRate);
		soProductDetail.setSalesOrderDescription(salesOrderDescription);
		soProductDetail.setAdditionalInformation(additionalInformation);
		soProductDetail.setInstallLocation(installLocation);

		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}

		if (soChargeTypeId > 0) {
			ListValues listValuesByLvsoChargeType = listValuesRepository
					.findOne(soChargeTypeId);
			soProductDetail.setLvsoChargeType(listValuesByLvsoChargeType);
		} else {
			soProductDetail.setLvsoChargeType(null);
		}
		if (productCategoryId > 0) {
			ProductCategory prodCat = productCategoryRepository
					.findOne(productCategoryId);
			soProductDetail.setProductCategory(prodCat);
		} else {
			soProductDetail.setProductCategory(null);
		}
		if (productSubCategoryId > 0) {
			ProductSubCategory prodSubCat = productSubCategoryRepository
					.findOne(productSubCategoryId);
			soProductDetail.setProductSubCategory(prodSubCat);
		} else {
			soProductDetail.setProductSubCategory(null);
		}
		soProductDetail.setCreatedAt(CustomDateUtil.getDateAndTime());  
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		
		SalesOrderProductDetail newSO = salesOrderService
				.createOrderForm(soProductDetail);
		return newSO;
	}
	
	@RequestMapping(value = "{salesOrderId}/createEditSalesOrderProductDetails", method = RequestMethod.POST ,produces = "application/json" )
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody 
	ExtJSResponse createEditSalesOrderProductDetails( @PathVariable Long salesOrderId, @RequestBody Map<String, Object> reqMap ) throws  IOException{	
			
		Long productId = Long.valueOf(reqMap.get("productId").toString());
		String  productCategoryId= reqMap.get("productCategoryId").toString();
		String  productSubCategoryId= reqMap.get("productSubCategoryId").toString();
		Double  SOQuantity= Double.valueOf(reqMap.get("SOQuantity").toString());
		String  SOUnitCost= reqMap.get("SOUnitCost").toString();
		BigDecimal  SOTotalAmount= BigDecimal.valueOf( Double.valueOf( reqMap.get("SOTotalAmount").toString())) ;	
		BigDecimal  SODiscount=  BigDecimal.valueOf( Double.valueOf(reqMap.get("SODiscount").toString())  );	
		String  editFlag= reqMap.get("editFlag").toString();	
		Long productDetailId =null;  
								
		SalesOrderProductDetail salesOrderProductDetail=null;
		if(editFlag == "false"  ){
			salesOrderProductDetail = new SalesOrderProductDetail();
			System.out.println("============creating new============");
		}else {
		    productDetailId = Long.valueOf(reqMap.get("productDetailId").toString());   		   
			if(productDetailId>0 ){					
				salesOrderProductDetail = soProductDetailRepository.findOne(productDetailId); 				
			System.out.println("========updating=======    salesOrderProductDetail="+salesOrderProductDetail);
			System.out.println("========updating=========salesOrderProductDetailId="+salesOrderProductDetail.getSalesOrderProductDetailId() ); 
			}
		} 		
		if(salesOrderId>0){ 		  					
			salesOrderProductDetail.setSalesOrder( salesOrderService.findById(salesOrderId) );  
		}
		if(productId>0){ 		  
			salesOrderProductDetail.setProduct(productRepository.findOne(productId)); 
		}		
		salesOrderProductDetail.setSalesOrderProductQty(SOQuantity);			
		salesOrderProductDetail.setSalesOrderProductDiscount(SODiscount);		
		salesOrderProductDetail.setProductTotal(SOTotalAmount ) ;
		salesOrderProductDetail.setUnitCost(SOUnitCost);  
		
		SalesOrderProductDetail salesOrderProductDetail1 =null;		
		salesOrderProductDetail.setCreatedAt(CustomDateUtil.getDateAndTime());  
		salesOrderProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		salesOrderProductDetail1=soProductDetailRepository.save(salesOrderProductDetail);	
		
		return new ExtJSResponse(true, salesOrderProductDetail1);	
	}
	
	

	@RequestMapping(value = "/productDetails/{salesOrderProductDetailId}/updateOrderForm", method = RequestMethod.POST, consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail updateOrderForm(
			@PathVariable Long salesOrderProductDetailId/*,
			@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam String salesOrderDescription,
			@RequestParam String additionalInformation,
			@RequestParam String installLocation,
			@RequestParam Long productCategoryId,
			@RequestParam Long productSubCategoryId,
			@RequestParam Long productId, @RequestParam Long soChargeTypeId*/,@RequestBody Map<String, Object> reqMap) {
		SalesOrderProductDetail soProductDetail = this.soProductDetailRepository
				.findOne(salesOrderProductDetailId);
		
		System.out.println("Inside updateOrderForm>>>>>>>>>>>>>>>>>");
		
		Double salesOrderProductQty = Double.valueOf(reqMap.get("salesOrderProductQty").toString());
		BigDecimal salesOrderProductRate = new BigDecimal(reqMap.get("salesOrderProductRate").toString());
		String salesOrderDescription = (String) reqMap.get("salesOrderDescription");
		String additionalInformation = (String) reqMap.get("additionalInformation");
		String installLocation = (String) reqMap.get("installLocation");
		Long productCategoryId = Long.valueOf(reqMap.get("productCategoryId").toString());
		Long productSubCategoryId = Long.valueOf(reqMap.get("productSubCategoryId").toString());
		Long productId = Long.valueOf(reqMap.get("productId").toString());
		Long soChargeTypeId = Long.valueOf(reqMap.get("soChargeTypeId").toString());

		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setSalesOrderProductRate(salesOrderProductRate);
		soProductDetail.setSalesOrderDescription(salesOrderDescription);
		soProductDetail.setAdditionalInformation(additionalInformation);
		soProductDetail.setInstallLocation(installLocation);

		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}
		if (soChargeTypeId > 0) {
			ListValues listValuesByLvsoChargeType = listValuesRepository
					.findOne(soChargeTypeId);
			soProductDetail.setLvsoChargeType(listValuesByLvsoChargeType);
		} else {
			soProductDetail.setLvsoChargeType(null);
		}
		if (productCategoryId > 0) {
			ProductCategory prodCat = productCategoryRepository
					.findOne(productCategoryId);
			soProductDetail.setProductCategory(prodCat);
		} else {
			soProductDetail.setProductCategory(null);
		}
		if (productSubCategoryId > 0) {
			ProductSubCategory prodSubCat = productSubCategoryRepository
					.findOne(productSubCategoryId);
			soProductDetail.setProductSubCategory(prodSubCat);
		} else {
			soProductDetail.setProductSubCategory(null);
		}

		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime());
		
		SalesOrderProductDetail updateSalesOrderProductDetail = salesOrderService
				.updateSOProductDetails(soProductDetail);
		return updateSalesOrderProductDetail;
	}

	// =============================== order form

	// For preSaleInfo
	@RequestMapping(value = "/{salesOrderId}/preSales", method = RequestMethod.GET)
	public ModelAndView preSaleInfoPage(@PathVariable Long salesOrderId) {
		System.out.println("SalesOrder ID==preSaleInfoPage==>" + salesOrderId);
		ModelAndView mav = new ModelAndView("presalesinfo");
		SalesOrder salesOrder = salesOrderService
				.findBySalesOrderID(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	// saving notes in presales
	@RequestMapping(value = "/savePresalesData/{salesOrderId}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse savePresalesData(@PathVariable Long salesOrderId,
			@RequestParam String prependData) {

		SalesOrder salesOrder = this.salesOrderRepository
				.findOne(salesOrderId);

		String remarks = "<" + secContextUtil.getUsername() + ">\t"+ (new java.util.Date()).toString() + "\n" + 
						prependData + "\t\n=================\n"+ salesOrder.getRemarks();

		salesOrder.setRemarks(remarks);
		salesOrder.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		SalesOrder updatedSalesOrder = salesOrderService.saveSalesOrder(salesOrder);

		return new ExtJSResponse(true, updatedSalesOrder);

	}

	// for maintenance info
	@RequestMapping(value = "/{salesOrderId}/maintenanceInfo", method = RequestMethod.GET)
	public ModelAndView maintenanceInfoPage(@PathVariable Long salesOrderId) {
		System.out.println("SalesOrder ID==maintenanceinfo= page=>"
				+ salesOrderId);
		ModelAndView mav = new ModelAndView("maintenanceinfo");
		SalesOrder salesOrder = salesOrderService
				.findBySalesOrderID(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	// get maintenance records
	@RequestMapping(value = "/{salesOrderId}/maintenanceRecords", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> soMaintenanceDetails(
			@PathVariable Long salesOrderId/*
											 * , @RequestParam Long
											 * supplierProductId
											 */) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Equipment Info");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> equipRecords = soProductDetailRepository
				.equipRecordsTickedForaintenance(so, lineItemType);

//		// checking for maintenance info records
//		ListValues lineItem = listValuesRepository
//				.findByListValueCategoryAndListValueDescription(
//						"Line Item Type", "Maintenance Info");
//		List<SalesOrderProductDetail> maintenanceRecords = soProductDetailRepository
//				.findBySalesOrderAndLvsoLineItem(so, lineItem);
//		// int numRecords = maintenanceRecords.size();
//		if (maintenanceRecords.size() == 0) {
//			for (SalesOrderProductDetail e : equipRecords) {
//				// for(int i=0; i<(10-numRecords); i++){
//				System.out
//						.println("===1=========Saving Maintenance Info records===================");
//				SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
//				soProductDetail.setLvsoLineItem(lineItem);
//				soProductDetail.setSalesOrder(so);
//				soProductDetail
//						.setTickForMaintenance(e.getTickForMaintenance());
//				soProductDetail.setProduct(e.getProduct());
//				soProductDetail.setSupplierProduct(e.getSupplierProduct());
//				soProductDetail.setSalesOrderProductQty(e
//						.getSalesOrderProductQty());
//				soProductDetail.setSalesOrderProductRate(e
//						.getSalesOrderProductRate());
//
//				// System.out.println("category============maintenance::::::::::::::::::"+e.getProductCategory()+":::::::::::"+e.getProductSubCategory());
//				soProductDetailRepository.save(soProductDetail);
//			}
//
//		}
//
//		maintenanceRecords = soProductDetailRepository
//				.findBySalesOrderAndLvsoLineItem(so, lineItem);
//		return maintenanceRecords;
		return equipRecords;
	}

	// update maintenanceinfo
	@RequestMapping(value = "/maintenanceInfo/{salesOrderProductDetailId}/update", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail updateMaintenanceInfo(
			@PathVariable Long salesOrderProductDetailId,
			@RequestParam BigDecimal retailRate, @RequestParam Long productId,
			@RequestParam Long supplierProductId) {
		System.out.println("product Detail ID for Update================="
				+ salesOrderProductDetailId);
		SalesOrderProductDetail soProductDetail = this.soProductDetailRepository
				.findOne(salesOrderProductDetailId);

		soProductDetail.setSalesOrderProductRate(retailRate);

		if ((productId != null) && (productId > 0)) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}
		if ((supplierProductId != null) && (supplierProductId > 0)) {
			SupplierProduct sp = supplierProductRepository
					.findOne(supplierProductId);
			soProductDetail.setSupplierProduct(sp);
		} else {
			soProductDetail.setSupplierProduct(null);
		}

		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime());
		
		SalesOrderProductDetail updatedSOProductDetail = salesOrderService
				.updateSOProductDetails(soProductDetail);
		// }
		return updatedSOProductDetail;
	}

	// Professional services
	@RequestMapping(value = "/{salesOrderId}/professionalInfo/{productCategory}/products", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> professionalInfo(@PathVariable Long salesOrderId,
			@PathVariable String productCategory) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		ProductCategory pc = productCategoryRepository
				.findByProductCategory(productCategory);
		SalesOrder so = salesOrderService.findById(salesOrderId);
		return productRepository.orderFormProducts(lineItemType, so, pc);
	}

	// JSON data
	@RequestMapping(value = "/salesOrderHome1", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrder> listOfSalesOrders1() {
		List<SalesOrder> salesOrder = salesOrderService.getSalesOrders();
		return salesOrder;
		// JSON data
	}

	
	@RequestMapping(value = "/sample1/{salesOrderId}", method = RequestMethod.GET)
	public ModelAndView sample1(@PathVariable Long salesOrderId) {
		ModelAndView mav = new ModelAndView("equipinfo");
		SalesOrder salesOrder = salesOrderService.findById(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}
	
	// Cover page edit
	@RequestMapping(value = "/{salesOrderId}/cover", method = RequestMethod.GET)
	public ModelAndView editSalesOrderDetailPage(@PathVariable Long salesOrderId) {
		System.out.println("SalesOrder ID====>" + salesOrderId);
		ModelAndView mav = new ModelAndView("salesFormsDetailsEdit");
		SalesOrder salesOrder = salesOrderService
				.findBySalesOrderID(salesOrderId);
		mav.addObject("salesOrder", salesOrder);
		return mav;
	}

	

	@RequestMapping(value = "/{salesOrderId}/equipmentInfoRecords", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> equipmentInfoRecords(
			@PathVariable Long salesOrderId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Equipment Info");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> salesOrderProductDetails = soProductDetailRepository
				.findBySalesOrderAndLvsoLineItem(so, lineItemType);
//		int numRecords = salesOrderProductDetails.size();
		/*if (salesOrderProductDetails.size() < 20) {
			for (int i = 0; i < (20 - numRecords); i++) {*/
				// this.createEquipmentInfo(salesOrderId, salesOrderProductQty,
				// salesOrderProductRate, remarks, productId);
				// this.createEquipmentInfo(salesOrderId, 0d, "0", null, -1L);
				// this.createEquipmentInfo(salesOrderId, null, null, null,
				// null);
/*				SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
				soProductDetail.setLvsoLineItem(lineItemType);
				soProductDetail.setSalesOrder(so);
				soProductDetailRepository.save(soProductDetail);*/
			/*}
		}*/
		salesOrderProductDetails = soProductDetailRepository
				.findBySalesOrderAndLvsoLineItem(so, lineItemType);

		// salesOrderProductDetails =
		// soProductDetailRepository.findBySalesOrderAndLvsoLineItem(so,
		// lineItemType);
		// SalesOrderProductDetail soProductDetail = new
		// SalesOrderProductDetail();
		// soProductDetail.setSoProdDetailtId(Long.valueOf(0xFFFFFFFF));
		// salesOrderProductDetails.add(soProductDetail); // FIXME : Dummy
		// records added to work around jquery js issue
		// soProductDetail = new SalesOrderProductDetail();
		// soProductDetail.setSoProdDetailtId(Long.valueOf(0xFFFFFFFF));
		// salesOrderProductDetails.add(soProductDetail); // FIXME : Dummy
		// records added to work around jquery js issue

		for (SalesOrderProductDetail item : salesOrderProductDetails) {
			if (item.getProduct() == null) {
				Product p = new Product();
				ProductCategory pc = new ProductCategory();
				pc.setProductCategoryId(-1L);
				pc.setProductCategory("");
				p.setProductCategory(pc);
				ProductSubCategory psc = new ProductSubCategory();
				psc.setProductSubCategoryId(-1);
				psc.setProductSubCategoryName("");
				p.setProductSubCategory(psc);
				item.setProduct(p);
			}
			if (item.getSupplierProduct() == null) {
				SupplierProduct s = new SupplierProduct();
				s.setSupplierProductId(-1);
				item.setSupplierProduct(s);
				Contact c = new Contact();
				c.setContactId(-1l);
				c.setContactName("");
				item.getSupplierProduct().setContact(c);
			}
			if (item.getSalesOrderProductQty() == null) {
				item.setSalesOrderProductQty(0d);
			}
			if (item.getSalesOrderProductRate() == null) {
				item.setSalesOrderProductRate(BigDecimal.ZERO);
			}
			if (item.getLvsoChargeType() == null) {
				ListValues lv = new ListValues();
				lv.setListValueId(-1);
				item.setLvsoChargeType(lv);
			}
		}
		return salesOrderProductDetails;
	}

	@RequestMapping(value = "/{salesOrderId}/equipmentInfo/create", method = RequestMethod.POST, consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail createEquipmentInfo(
			@PathVariable Long salesOrderId,
			@RequestBody Map<String, Object> reqMap) {
		
		System.out.println("inside equipment info create=============");
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Equipment Info");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
		soProductDetail.setLvsoLineItem(lineItemType);
		soProductDetail.setSalesOrder(so);
		
		Long productCategoryId = Long.valueOf(reqMap.get("productCategoryId").toString());
		Long productSubCategoryId = Long.valueOf(reqMap.get("productSubCategoryId").toString());
		Long productId = Long.valueOf(reqMap.get("productId").toString());
		Long soChargeTypeId = Long.valueOf(reqMap.get("soChargeTypeId").toString());
		Long supplierProductId = Long.valueOf(reqMap.get("supplierProductId").toString());
		Double salesOrderProductQty = Double.valueOf(reqMap.get("salesOrderProductQty").toString());
		Boolean tickForMaintenance = (Boolean) reqMap.get("tickForMaintenance");
		String installLocation = (String) reqMap.get("installLocation");
		BigDecimal salesOrderProductDiscount = new BigDecimal(reqMap
				.get("salesOrderProductDiscount").toString());
		
		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setInstallLocation(installLocation);
		soProductDetail.setSalesOrderProductDiscount(salesOrderProductDiscount);
		soProductDetail.setTickForMaintenance(tickForMaintenance);
		
		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}if (soChargeTypeId > 0) {
			ListValues listValuesByLvsoChargeType = listValuesRepository
					.findOne(soChargeTypeId);
			soProductDetail.setLvsoChargeType(listValuesByLvsoChargeType);
		} else {
			soProductDetail.setLvsoChargeType(null);
		}if ((supplierProductId != null) && (supplierProductId > 0)) {
			SupplierProduct sp = supplierProductRepository
					.findOne(supplierProductId);
			soProductDetail.setSupplierProduct(sp);
		} else {
			soProductDetail.setSupplierProduct(null);
		}
		if (productCategoryId > 0) {
			ProductCategory prodCat = productCategoryRepository
					.findOne(productCategoryId);
			soProductDetail.setProductCategory(prodCat);
		} else {
			soProductDetail.setProductCategory(null);
		}
		if (productSubCategoryId > 0) {
			ProductSubCategory prodSubCat = productSubCategoryRepository
					.findOne(productSubCategoryId);
			soProductDetail.setProductSubCategory(prodSubCat);
		} else {
			soProductDetail.setProductSubCategory(null);
		}

		soProductDetail.setCreatedAt(CustomDateUtil.getDateAndTime());  
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		SalesOrderProductDetail newSO = soProductDetailRepository
				.saveAndFlush(soProductDetail);
		
		return newSO;
	}

	@RequestMapping(value = "/equipmentInfo/{salesOrderProductDetailId}/update", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail updateEquipmentInfo(
			@PathVariable Long salesOrderProductDetailId,
			@RequestBody Map<String, Object> reqMap) {
		System.out.println("In equipmentInfo update==================== ");
		SalesOrderProductDetail soProductDetail = this.soProductDetailRepository
				.findOne(salesOrderProductDetailId);
		
		Long productCategoryId = Long.valueOf(reqMap.get("productCategoryId").toString());
		Long productSubCategoryId = Long.valueOf(reqMap.get("productSubCategoryId").toString());
		Long productId = Long.valueOf(reqMap.get("productId").toString());
		Long soChargeTypeId = Long.valueOf(reqMap.get("soChargeTypeId").toString());
		Long supplierProductId = Long.valueOf(reqMap.get("supplierProductId").toString());
		Double salesOrderProductQty = Double.valueOf(reqMap.get("salesOrderProductQty").toString());
		Boolean tickForMaintenance = (Boolean) reqMap.get("tickForMaintenance");
		String installLocation = (String) reqMap.get("installLocation");
		BigDecimal salesOrderProductDiscount = new BigDecimal(reqMap.get("salesOrderProductDiscount").toString());
		
//		soProductDetail.setTickForMaintenance(tickForMaintenance);
		
		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setInstallLocation(installLocation);
		soProductDetail.setSalesOrderProductDiscount(salesOrderProductDiscount);
		soProductDetail.setTickForMaintenance(tickForMaintenance);
		
		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}if (soChargeTypeId > 0) {
			ListValues listValuesByLvsoChargeType = listValuesRepository
					.findOne(soChargeTypeId);
			soProductDetail.setLvsoChargeType(listValuesByLvsoChargeType);
		} else {
			soProductDetail.setLvsoChargeType(null);
		}if ((supplierProductId != null) && (supplierProductId > 0)) {
			SupplierProduct sp = supplierProductRepository
					.findOne(supplierProductId);
			soProductDetail.setSupplierProduct(sp);
		} else {
			soProductDetail.setSupplierProduct(null);
		}
		if (productCategoryId > 0) {
			ProductCategory prodCat = productCategoryRepository
					.findOne(productCategoryId);
			soProductDetail.setProductCategory(prodCat);
		} else {
			soProductDetail.setProductCategory(null);
		}
		if (productSubCategoryId > 0) {
			ProductSubCategory prodSubCat = productSubCategoryRepository
					.findOne(productSubCategoryId);
			soProductDetail.setProductSubCategory(prodSubCat);
		} else {
			soProductDetail.setProductSubCategory(null);
		}
		
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		SalesOrderProductDetail updatedSOProductDetail = salesOrderService
				.updateSOProductDetails(soProductDetail);
		AddEmptyObjsToEquipInfoRec(updatedSOProductDetail);
		// }
		return updatedSOProductDetail;
	}

	private void AddEmptyObjsToEquipInfoRec(SalesOrderProductDetail soProdDetail) {
		if (soProdDetail.getProduct() == null) {
			Product p = new Product();
			ProductCategory pc = new ProductCategory();
			pc.setProductCategoryId(-1L);
			pc.setProductCategory("");
			p.setProductCategory(pc);
			ProductSubCategory psc = new ProductSubCategory();
			psc.setProductSubCategoryId(-1);
			psc.setProductSubCategoryName("");
			p.setProductSubCategory(psc);
			soProdDetail.setProduct(p);
		}
		if (soProdDetail.getSupplierProduct() == null) {
			SupplierProduct s = new SupplierProduct();
			s.setSupplierProductId(-1);
			soProdDetail.setSupplierProduct(s);
			Contact c = new Contact();
			c.setContactId(-1l);
			c.setContactName("");
			soProdDetail.getSupplierProduct().setContact(c);
		}
		if (soProdDetail.getSalesOrderProductQty() == null) {
			soProdDetail.setSalesOrderProductQty(0d);
		}
		if (soProdDetail.getSalesOrderProductRate() == null) {
			soProdDetail.setSalesOrderProductRate(BigDecimal.ZERO);
		}
		if (soProdDetail.getLvsoChargeType() == null) {
			ListValues lv = new ListValues();
			lv.setListValueId(-1);
			soProdDetail.setLvsoChargeType(lv);
		}
	}

	@RequestMapping(value = "/{salesOrderId}/profServices", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> profServices(@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> soDetails = salesOrderService
				.profServices(so);
		return soDetails;
	}

	@RequestMapping(value = "/{salesOrderId}/product/{productId}/profServiceResponses", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> profServiceResponses(
			@PathVariable Long salesOrderId,
			@PathVariable Long productId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Professional Services");
		Product product = productRepository.findOne(productId);
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> paddedResponseList = new ArrayList<SalesOrderProductDetail>();
		List responses = productRepository.profServResponses(product.getProductSubType().getProductType(),
				product.getProductSubType(), so, lineItemType, product);
		Iterator itr = responses.iterator();
		while(itr.hasNext()){
			Object[] arr = (Object[])itr.next();
			if(arr[1] == null){
				SalesOrderProductDetail s = new SalesOrderProductDetail();
				s.setProfServProduct((Product)arr[0]);
				s.setSalesOrder(so);
				s.setProduct(product);
				s.setInternalEngg(false);
				paddedResponseList.add(s);
			}
			else {
				paddedResponseList.add((SalesOrderProductDetail)arr[1]);
			}
		}
		return paddedResponseList;
		
	}

	@RequestMapping(value = "/{salesOrderId}/profServices/save", method = RequestMethod.POST,
			consumes = "application/json", produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail saveProfServiceProduct(@PathVariable Long salesOrderId,
			/*@RequestParam(required = false) Long salesOrderProductDetailId,
			@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam Long productId,
			@RequestParam Long profServProductId,
			@RequestParam Long listValueId*/@RequestBody Map<String, Object> reqMap) {
		SalesOrderProductDetail soProductDetail;
		Long salesOrderProductDetailId = Long.valueOf(reqMap.get("salesOrderProductDetailId").toString());
		if((salesOrderProductDetailId != null) && (salesOrderProductDetailId > 0)){
			soProductDetail = this.soProductDetailRepository.findOne(salesOrderProductDetailId);
			soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
		else {
			soProductDetail = new SalesOrderProductDetail();
			soProductDetail.setCreatedAt(CustomDateUtil.getDateAndTime());  
			soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}
		SalesOrder salesOrder = this.salesOrderRepository.findOne(salesOrderId);
		soProductDetail.setSalesOrder(salesOrder);

		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Professional Services");
		soProductDetail.setLvsoLineItem(lineItemType);
		soProductDetail.setProduct(productRepository.findOne(Long.valueOf(reqMap.get("productId").toString())));
		soProductDetail.setProfServProduct(productRepository.findOne(Long.valueOf(reqMap.get("profServProductId").toString())));

		soProductDetail.setSalesOrderProductQty(Double.valueOf(reqMap.get("salesOrderProductQty").toString()));
		soProductDetail.setSalesOrderProductRate(new BigDecimal(reqMap.get("salesOrderProductRate").toString()));
		soProductDetail.setInternalEngg(Boolean.valueOf(reqMap.get("internalEngg").toString()));

		return this.soProductDetailRepository.save(soProductDetail);
	}

	@RequestMapping(value = "/{salesOrderId}/maintenanceProducts", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> maintenanceProducts(
			@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> soDetails = salesOrderService
				.maintenanceProducts(so);
		return soDetails;
	}

	@RequestMapping(value = "/{salesOrderId}/maintenance/create", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail createMaintenanceProduct(
			@PathVariable Long salesOrderId,
			@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam String remarks, @RequestParam Long productId,
			@RequestParam Long listValueId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
		soProductDetail.setSalesOrder(so);
		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setSalesOrderProductRate(salesOrderProductRate);
		soProductDetail.setRemarks(remarks);
		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}

//		if (listValueId > 0) {
//			ListValues lv = listValuesRepository.findOne(listValueId);
//			soProductDetail.setLvsoExecutionModeId(lv);
//		} else {
//			soProductDetail.setLvsoExecutionModeId(null);
//		}
		soProductDetail.setCreatedAt(CustomDateUtil.getDateAndTime());  
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		SalesOrderProductDetail newSO = salesOrderService
				.createMaintenanceProduct(soProductDetail);
		return newSO;
	}

	@RequestMapping(value = "/productDetails/{salesOrderProductDetailId}/delete", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Boolean deleteSOProductDetails(@PathVariable Long salesOrderProductDetailId) {
		salesOrderService.deleteSOProductDetail(salesOrderProductDetailId);
		return true;
	}

	@RequestMapping(value = "/productDetails/{salesOrderProductDetailId}/update", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail updateSOProductDetail(
			@PathVariable Long salesOrderProductDetailId,
			@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam String remarks, @RequestParam Long productId,
			@RequestParam Long listValueId) {
		SalesOrderProductDetail soProductDetail = this.soProductDetailRepository
				.findOne(salesOrderProductDetailId);
		// if((!soProductDetail.getSalesOrderProductQty().equals(salesOrderProductQty))
		// ||
		// (!soProductDetail.getSalesOrderProductRate().equals(salesOrderProductRate))
		// ||
		// (!soProductDetail.getRemarks().equals(remarks))) {
		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setSalesOrderProductRate(salesOrderProductRate);
		soProductDetail.setRemarks(remarks);
		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}
//		if (listValueId > 0) {
//			ListValues lv = listValuesRepository.findOne(listValueId);
//			soProductDetail.setLvsoExecutionModeId(lv);
//		} else {
//			soProductDetail.setLvsoExecutionModeId(null);
//		}
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		SalesOrderProductDetail updatedSOProductDetail = salesOrderService
				.updateSOProductDetails(soProductDetail);
		// }
		return updatedSOProductDetail;
	}

	@RequestMapping(value = "/{salesOrderId}/orderFormRecords", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrderProductDetail> soProductDetails(
			@PathVariable Long salesOrderId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<SalesOrderProductDetail> soDetails = soProductDetailRepository
				.findBySalesOrderAndLvsoLineItem(so, lineItemType);
		return soDetails;
	}

	@RequestMapping(value = "/productDetails/create/{salesOrderId}", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrderProductDetail createSOProductDetails(
			@PathVariable Long salesOrderId,
			@RequestParam Double salesOrderProductQty,
			@RequestParam BigDecimal salesOrderProductRate,
			@RequestParam String remarks, @RequestParam Long productId,
			@RequestParam Long listValueId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		SalesOrderProductDetail soProductDetail = new SalesOrderProductDetail();
		soProductDetail.setSalesOrder(so);
		soProductDetail.setSalesOrderProductQty(salesOrderProductQty);
		soProductDetail.setSalesOrderProductRate(salesOrderProductRate);
		soProductDetail.setRemarks(remarks);
		if (productId > 0) {
			Product p = productRepository.findOne(productId);
			soProductDetail.setProduct(p);
		} else {
			soProductDetail.setProduct(null);
		}

//		if (listValueId > 0) {
//			ListValues lv = listValuesRepository.findOne(listValueId);
//			soProductDetail.setLvsoExecutionModeId(lv);
//		} else {
//			soProductDetail.setLvsoExecutionModeId(null);
//		}
		soProductDetail.setCreatedAt( CustomDateUtil.getDateAndTime() );  
		soProductDetail.setModifiedAt(CustomDateUtil.getDateAndTime() ); 
		SalesOrderProductDetail newSO = salesOrderService
				.createSOProductDetails(soProductDetail);
		return newSO;
	}

	

	@RequestMapping(value = "/productCategories", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ProductCategory> productCategory() {
		List<ProductCategory> productCategory = salesOrderService
				.productCategory();
		return productCategory;
	}

	@RequestMapping(value = "/productSubCategories", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ProductSubCategory> getProductSubCategory(
			@RequestParam(value = "id") Long id) {
		List<ProductSubCategory> productSubCategory = salesOrderService
				.getProductSubCategory(id);
		return productSubCategory;
	}
	
	@RequestMapping(value = "/products", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> products() {
		List<Product> products = salesOrderService.products();
		return products;
	}

	@RequestMapping(value = "/execModes", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> ExecutionModes() {
		return listValuesRepository.findByListValueCategory("Execution Mode");
	}

	@RequestMapping(value = "/chargeType", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> chargeTypes() {
		return listValuesRepository.findByListValueCategory("Charge Type");
	}

	@RequestMapping(value = "/{salesOrderId}/orderFormProductCategories", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ProductCategory> orderFormProductCategories(
			@PathVariable Long salesOrderId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		SalesOrder so = salesOrderService.findById(salesOrderId);
		return this.productCategoryRepository.orderFormProductCategories(
				lineItemType, so);
	}

	@RequestMapping(value = "/{salesOrderId}/productCategory/{productCategoryId}/orderFormProductSubcategories", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ProductSubCategory> orderFormProductSubCategories(
			@PathVariable Long salesOrderId,
			@PathVariable Long productCategoryId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		ProductCategory pc = productCategoryRepository
				.findOne(productCategoryId);
		SalesOrder so = salesOrderService.findById(salesOrderId);
		List<ProductSubCategory> l = productSubCategoryRepository
				.orderFormProductSubCategories(lineItemType, so, pc);
		return l;
	}

	@RequestMapping(value = "/{salesOrderId}/productCategory/{productCategoryId}/productSubCategory/{productSubCategoryId}/orderFormProducts", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> orderFormProducts(@PathVariable Long salesOrderId,
			@PathVariable Long productCategoryId,
			@PathVariable Long productSubCategoryId) {
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		ProductCategory pc = productCategoryRepository
				.findOne(productCategoryId);
		ProductSubCategory psc = productSubCategoryRepository
				.findOne(productSubCategoryId);
		SalesOrder so = salesOrderService.findById(salesOrderId);
		return productRepository.orderFormProducts(lineItemType, so, pc, psc);
		// return productRepository.orderFormProducts(lineItemType, so);
	}

	@RequestMapping(value = "product/{productId}/supplierProducts", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SupplierProduct> supplierProducts(@PathVariable Long productId) {
		Product product = productRepository.findOne(productId);
		return supplierProductRepository.findByProduct(product);
	}

	@RequestMapping(value = "/emptyArray", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Product> emptyArray() {
		return new ArrayList<>();
		// return productRepository.orderFormProducts(lineItemType, so);
	}

	@RequestMapping(value = "/AccountData", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Account> AccountData() {
		return accountRepository.findAll();
	}

	@RequestMapping(value = "{accountId}/accountDataById", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Account accountDataById(@PathVariable Long accountId) {
		return accountRepository.findOne(accountId);
	}

	@RequestMapping(value = "/CustomerType", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> customerType() {
		return listValuesRepository
				.findByListValueCategory("Account Acquisition");
	}

	@RequestMapping(value = "/{salesOrderId}/hasOrderFormProducts", method = RequestMethod.GET)
	public @ResponseBody
	Boolean hasOrderFormProducts(@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Order Form");
		return (this.soProductDetailRepository.soProductLineItemsCount(so,
				lineItemType) > 0l);
	}

	@RequestMapping(value = "/{salesOrderId}/hasMaintenanceTicked", method = RequestMethod.GET)
	public @ResponseBody
	Boolean hasMaintenanceTicked(@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderService.findById(salesOrderId);
		ListValues lineItemType = listValuesRepository
				.findByListValueCategoryAndListValueDescription(
						"Line Item Type", "Equipment Info");
//		return (this.soProductDetailRepository.soProductLineItemsCount(so,
//				lineItemType) > 0l);
		return (this.soProductDetailRepository.soTickedForMaintenceCount(so,
				lineItemType) > 0l);
	}

	public Map<String, Boolean> getSOTabsEnableDisableFlags(Long salesOrderId) {
		Map<String, Boolean> soTabsFlags = new HashMap<>();
		Boolean isNewSalesOrder = true;
		Boolean hasOrderFormProducts = false;
		Boolean hasMaintenanceTicked = false;
		if ((salesOrderId != null) && (salesOrderId > 0)) {
			isNewSalesOrder = false;
			hasOrderFormProducts = hasOrderFormProducts(salesOrderId);
			if (hasOrderFormProducts == true) {
				hasMaintenanceTicked = hasMaintenanceTicked(salesOrderId);
			}
		}
		soTabsFlags.put("isNewSalesOrder", isNewSalesOrder);
		soTabsFlags.put("hasOrderFormProducts", hasOrderFormProducts);
		soTabsFlags.put("hasMaintenanceTicked", hasMaintenanceTicked);
		return soTabsFlags;
	}

	public void getSOTabsEnableDisableFlags(Long salesOrderId, ModelAndView mav) {
		Map<String, Boolean> soTabsFlags = getSOTabsEnableDisableFlags(salesOrderId);
		mav.addObject("isNewSalesOrder", soTabsFlags.get("isNewSalesOrder"));
		mav.addObject("hasOrderFormProducts",
				soTabsFlags.get("hasOrderFormProducts"));
		mav.addObject("hasMaintenanceTicked",
				soTabsFlags.get("hasMaintenanceTicked"));
	}
	
	@RequestMapping(value = "/saveSalesOrderDataDetails", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse saveSalesOrderDataDetails(
			@RequestParam(required=false) Long salesOrderId, @RequestParam String salesOrderNumber, @RequestParam String salesOrderDate,
			@RequestParam Long accountId/*,@RequestParam String accountName*/,@RequestParam Long contactId,	@RequestParam Long leadSalesRepId,@RequestParam Long quoteId,			
			@RequestParam Long lSourceId,@RequestParam Long lPriorityId,@RequestParam String expectedDelivDate,@RequestParam Long lshippingMethodId,			
			@RequestParam String shippingInstructions,@RequestParam String carrier,@RequestParam String trackingNumber,@RequestParam String remarks,
			@RequestParam Long salesOrderSalesFormRefId
			) throws ParseException, FileNotFoundException, IOException, MessagingException {
       
	    System.out.println("   saveSalesOrderDataDetails>>>>>>>>>>>>>>>>>>>>>>>>>>>");	      
	    System.out.println(" ------------------------>salesOrderId= "+salesOrderId );  
	    String message;	
		request.getUserPrincipal().getName();
		SalesOrder salesOrder;
		if(salesOrderId == null){
			salesOrder = new SalesOrder();
			salesOrder.setCreatedAt( CustomDateUtil.getDateAndTime());  
			salesOrder.setModifiedAt(CustomDateUtil.getDateAndTime()); 
		}else{
			salesOrder = this.salesOrderRepository.findOne(salesOrderId);
			System.out.println("========updating=========salesOrder="+salesOrder.getSalesOrderId() ); 			
			salesOrder.setModifiedAt(CustomDateUtil.getDateAndTime()); 	
		}
		salesOrder.setSalesOrderNumber(salesOrderNumber); 
		System.out.println("accountId---------->" + accountId);		
		Account account;
		if (accountId != null) {
			account = accountRepository.findOne(accountId);
		}else{
			account = new Account();
		}		
		salesOrder.setAccount(account);		
		if(!salesOrderDate.isEmpty() ){
		salesOrder.setSalesOrderDate(new Date(df.parse(salesOrderDate).getTime()));	
		}
		System.out.println("contactId---------->" + contactId);
		if(salesOrderSalesFormRefId !=null){
		salesOrder.setSalesOrderSalesFormRefId(salesOrderSalesFormRefId);
		}
		Contact contact;
		if (contactId != null) {
			contact = contactRepository.findOne(contactId);
		}else{
			contact = new Contact();
		}		
		salesOrder.setContact(contact);
		
		Contact contactBySalesOrderSalesRep;
		if (leadSalesRepId!=null && leadSalesRepId >0 ) {
			contactBySalesOrderSalesRep = contactRepository.findOne(leadSalesRepId);
		}else{
			contactBySalesOrderSalesRep = new Contact();
		}				   
		salesOrder.setContactBySalesOrderSalesRep(contactBySalesOrderSalesRep); 
				
		Quote quote; 		
		if (quoteId!=null && quoteId >0 ) {
			quote = quoteRepository.findOne(quoteId);
		}else{
			quote = null;
		}				   
		salesOrder.setQuote(quote);	
		System.out.println("lSourceId---------->" + lSourceId); 
		
		if(lSourceId!=null && lSourceId > 0) {
			ListValues listValuesBySourceId = listValuesRepository.findOne(lSourceId);
			salesOrder.setListValuesBySourceId(listValuesBySourceId);            					
	    }else{
	    	salesOrder.setListValuesBySourceId(null);
	    }
		System.out.println("lPriorityId---------->" + lPriorityId); 
		
		if (lPriorityId!=null && lPriorityId > 0) {
			ListValues listValuesByPriorityId = listValuesRepository.findOne(lPriorityId);
			salesOrder.setListValuesByPriorityId(listValuesByPriorityId);          					
	    }else{
	    	salesOrder.setListValuesByPriorityId(null);
	    }
		if(!expectedDelivDate.isEmpty() ){					
			salesOrder.setExpectedDelivDate(new Date(df.parse(expectedDelivDate).getTime()));  
		} 
		
		if (lshippingMethodId!=null && lshippingMethodId > 0) {
			ListValues listValuesByShippingMethod = listValuesRepository.findOne(lshippingMethodId);
			salesOrder.setListValuesByShippingMethod(listValuesByShippingMethod);  					
	    }else{
	    	salesOrder.setListValuesByShippingMethod(null);
	    }
		
		salesOrder.setShippingInstructions(shippingInstructions); 
		salesOrder.setCarrier(carrier); 
		salesOrder.setTrackingNumber(trackingNumber); 
		salesOrder.setRemarks(remarks); 
		
		salesOrder.setSoType("salesOrder"); 		
		salesOrder.setCreatedBy(request.getUserPrincipal().getName());
		if(salesOrderId==null ){          			
		    message= MessagesUtil.showMessage("SalesOrder", salesOrderNumber,  "Created" , "Successfully" ) ;			
		}else{					
			message= MessagesUtil.showMessage("SalesOrder", salesOrderNumber,  "Updated" , "Successfully" ) ;
		}		
		SalesOrder newSalesOrder = salesOrderService.saveSalesOrder(salesOrder);    
		Long moduleId=newSalesOrder.getSalesOrderId();
		try{
	    mailService.sendEmaildata(newSalesOrder.getSalesOrderNumber(),"Sales Order");
		}catch(Exception e){		    	
			return new ExtJSResponse(true,newSalesOrder,message );  
	    }
		return new ExtJSResponse(true,newSalesOrder,message );   
	}
	 
	@RequestMapping(value = "{salesOrderId}/editSalesOrderDataReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder editSalesOrderDataReport(@PathVariable Long salesOrderId) {
            
		SalesOrder salesOrder = null;
		if (salesOrderId > 0) {
			salesOrder = salesOrderService.findById(salesOrderId);
		} 
		return salesOrder;

	}
	
	@RequestMapping(value = "/getSalesForm", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<KeyValueMap> getLeadName(@RequestParam Long accountId){
		
		List<KeyValueMap> keyValueMaps= salesOrderService.getSalesFormForAccountId(accountId);
		
		return keyValueMaps;
	}
	
	
	@RequestMapping(value = "/getTechContactName", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Contact> getTechContactName() {
		return contactRepository.findAll();
	}
	
	@RequestMapping(value = "/getAddressTypeList", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getAddressTypeList() {
		return listValuesRepository.findByListValueCategory("Address Type");
	}
	
	@RequestMapping(value = "/getAddressList", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody Address getAddressList(@RequestParam Long addressId,
							@RequestParam Long accountId) {
		Address addresses = null;//addressRepository.getAddressDetails(addressId,accountId);
		return addresses;
	}
	
	@RequestMapping(value = "/getPurchaseOrderNumber", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<KeyValueMap> getPurchaseOrderNumber() {
		
		return purchaseOrderRepository.getPurchaseOrderDetails();
	}
	
	@RequestMapping(value = "/getSalesOrderSource", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<KeyValueMap> getSalesOrderSource() {
		
		return leadRepository.getLeadDetailsByLeadName();
	}
	
	@RequestMapping(value = "{accountId}/getSalesOrderList", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrder> getSalesOrderList(@PathVariable Long accountId) {
		Account account = accountRepository.findOne(accountId);
		List<SalesOrder> saleOrderLIst =salesOrderRepository.findByAccountAndSoType(account,"salesOrder");
		
		return saleOrderLIst;
	}
	
	@RequestMapping(value = "/randomGenerationforSalesOrderOnLoad", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder randomGenerationforSalesOrderOnLoad(@RequestParam(required = false) Long accountId) throws FileNotFoundException, IOException {

		System.out.println("Inside EditContactReport ==============================================>");
		String key = new RandomKeyGeneration().getRandomGeneration();
		SalesOrder salesOrder = new SalesOrder();                                                          
		salesOrder.setSalesOrderNumber(key); 
		
		if(accountId!=null){
			salesOrder.setAccount(accountRepository.findOne(accountId));
		}
		return salesOrder;

	}
	
	@RequestMapping(value = "/editCommonSalesOrderOnLoad", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	SalesOrder editCommonSalesOrderOnLoad(@RequestParam Long accountId) {
   		SalesOrder salesOrder = null;
		if (accountId != null) {
			salesOrder = new SalesOrder();
			salesOrder.setAccount(accountRepository.findOne(accountId));
			salesOrder.setQuote(new Quote()); 
		} else {
			salesOrder = new SalesOrder();
			salesOrder.setAccount(new Account());
			salesOrder.setQuote(new Quote());  
		}
		return salesOrder;

	}
	
	@RequestMapping(value = "{accountId}/getSalesFormList", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<SalesOrder> getSalesFormList(@PathVariable Long accountId) {
		Account account = accountRepository.findOne(accountId);
		List<SalesOrder> saleOrderLIst =salesOrderRepository.findByAccountAndSoType(account,"salesForm");
		
		return saleOrderLIst;
	}
}









