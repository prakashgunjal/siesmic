package com.seismic.crm.controller;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.Lead;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Opportunity;
import com.seismic.crm.model.OpportunityProductDetail;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.LeadRepository;
import com.seismic.crm.repository.ListValuesRepository;
import com.seismic.crm.repository.OpportunityProductDetailRepository;
import com.seismic.crm.repository.OpportunityRepository;
import com.seismic.crm.repository.ProductRepository;
import com.seismic.crm.service.LeadService;
import com.seismic.crm.service.MailService;
import com.seismic.crm.service.OpportunityService;
import com.seismic.crm.utils.CustomDateUtil;
import com.seismic.crm.utils.ExtJSResponse;
import com.seismic.crm.utils.MessagesUtil;
import com.seismic.crm.utils.RandomKeyGeneration;
import com.seismic.crm.utils.SecurityContextUtil;

@Controller
@RequestMapping(value = "/crm/opportunity")
public class OpportunityController {

	@Autowired
	private OpportunityRepository opportunityRepository;

	@Autowired
	private OpportunityProductDetailRepository opportunityProductDetailRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private ContactController contactController;

	@Autowired
	private ListValuesRepository listValuesRepository;

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private LeadRepository leadRepository;

	@Autowired
	private LeadService leadService;

	@Autowired
	private MailService mailService;

	@Autowired
	private OpportunityService opportunityService;

	DateFormat df = new SimpleDateFormat("MM/dd/yyyy");

	@RequestMapping(value = "/viewOpportunities")
	private ModelAndView viewopportunities() {
		ModelAndView view = new ModelAndView("crm/opportunity");

		return view;
	}

	@RequestMapping(value = "/opportunityReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Page<Opportunity> opportunityReport(@RequestParam int pagesize,
			@RequestParam int pagenum, @RequestParam int filterscount,
			HttpServletRequest request) throws ParseException {

		String filterdatafield[] = new String[6];
		String accountName = "";
		String accountNumber = "";
		String opportunityNumber = "";
		String opportunityPriority = "";
		String opportunitySalesRep = "";
		BigDecimal estimatedValue = null;
		String opportunityDate[] = new String[2] ;
		String condition = "";
		int d=0;
		if (filterscount > 0) {
			for (int i = 0; i < filterscount; i++) {
				filterdatafield[i] = request
						.getParameter("filterdatafield" + i);
				if ((filterdatafield[i].toString()).equals("account.accountName")) {
					accountName = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("listValuesByOpportunityPriorityId.listValueDescription")) {
					opportunityPriority = request.getParameter("filtervalue"
							+ i);

				} else if ((filterdatafield[i].toString())
						.equals("opportunityNumber")) {
					opportunityNumber = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("account.accountNumber")) {
					accountNumber = request.getParameter("filtervalue" + i);
				} else if ((filterdatafield[i].toString())
						.equals("contactByOpportunitySalesRep.contactName")) {
					opportunitySalesRep = request.getParameter("filtervalue"
							+ i);
				} else if ((filterdatafield[i].toString())
						.equals("estimatedValue")) {
					estimatedValue = new BigDecimal(request.getParameter("filtervalue" + i));
					condition = request.getParameter("filtercondition" + i);
				} else if ((filterdatafield[i].toString())
						.equals("opportunityDate")) {
					
					opportunityDate[d] = request.getParameter("filtervalue" + i);
					d++;
				}

			}
		}
		Page<Opportunity> list = null;
		

			list = opportunityService.getOpportunityView(opportunityNumber,
					accountName, accountNumber, opportunitySalesRep,
					estimatedValue,condition, opportunityPriority,opportunityDate, pagenum, pagesize,request
					.getParameter("sortorder")==null?"modifiedAt":request
							.getParameter("sortorder"),request.getParameter("sortdatafield")==null?"modifiedAt":request
									.getParameter("sortdatafield"));

		return list;
	}

	@RequestMapping(value = "/createditOpportunity", method = RequestMethod.GET)
	public ModelAndView createditopportunity(
			@RequestParam(required = false) Long opportunityId)
			throws FileNotFoundException, IOException {

		ModelAndView view = new ModelAndView(
				"crm/opportunities/createditopportunity");
		Opportunity opportunity;
		if (opportunityId == null) {
			opportunity = new Opportunity();
			opportunity.setOpportunityNumber(RandomKeyGeneration
					.getRandomGeneration());
		} else {
			opportunity = opportunityRepository.findOne(opportunityId);
		}

		view.addObject("opportunity", opportunity);
		return view;

	}

	@RequestMapping(value = "/getAccountNumber", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Account> getAccountNumber() {
		return contactController.AccountNumber();
	}

	@RequestMapping(value = "/getLeadName", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<KeyValueMap> getLeadName(@RequestParam Long oppoAccountId) {

		List<KeyValueMap> keyValueMaps = leadService.getLeadName(oppoAccountId);

		return keyValueMaps;
	}

	@RequestMapping(value = "/getAccountContact", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<KeyValueMap> getAccountContact(@RequestParam Long oppoAccountId) {

		List<KeyValueMap> keyValueMaps = contactRepository
				.getAccountAndDepartment(oppoAccountId);

		return keyValueMaps;
	}

	@RequestMapping(value = "getSource", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getSource() {
		return listValuesRepository.findByListValueCategory("Source");
	}

	@RequestMapping(value = "getRating", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getRating() {
		return listValuesRepository
				.findByListValueCategory("Opportunity Rating");
	}

	@RequestMapping(value = "getPriority", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getPriority() {
		return listValuesRepository.findByListValueCategory("Priority");
	}

	@RequestMapping(value = "getStaus", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getStaus() {
		return listValuesRepository
				.findByListValueCategory("Opportunity Status");
	}

	@RequestMapping(value = "saveOpportunityDetails", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody
	ExtJSResponse saveOpportunityDetails(
			@RequestParam(required = false) Long opportunityId,
			@RequestParam String opportunityNumber,
			@RequestParam String opportunityDate,
			@RequestParam String oppoAccountId,
			// @RequestParam String accountName,
			@RequestParam String contactId,
			@RequestParam String leadname,
			@RequestParam Long opportunitySourceId,
			@RequestParam Long opportunityStatusId,
			@RequestParam Long opportunityPriorityId,
			@RequestParam Long opportunityRatingId,
			// @RequestParam String contractRole,
			@RequestParam Long opportunitySalesRep,
			@RequestParam String opportunitySource,
			@RequestParam String opportunityRating,
			@RequestParam String opportunityPriority,
			@RequestParam Long estimatedValue,
			@RequestParam String closeProbability,
			@RequestParam String estimatedCloseDate,
			@RequestParam String pricingStatus,
			@RequestParam Long opportunityShippingMethod,
			@RequestParam String shippingInstructions,
			@RequestParam String carrier, @RequestParam String remarks,
			@RequestParam String moduleName) throws FileNotFoundException,
			IOException, ParseException, MessagingException {

		boolean alertflag = false;
		String message;
		Opportunity opportunity;

		opportunity = this.opportunityRepository.findOne(opportunityId);

		if (opportunity == null) {
			alertflag = true;
			opportunity = new Opportunity();

		}
		opportunity.setOpportunityNumber(opportunityNumber);
		Account account = accountRepository.findOne(Long
				.parseLong(oppoAccountId));
		opportunity.setAccount(account);
		Contact contact;
		if (contactId != null && contactId != "") {
			contact = contactRepository.findOne(Long.parseLong(contactId));
			opportunity.setContactByContactId(contact);
		} else {
			contact = null;
			opportunity.setContactByContactId(contact);
		}
		Lead lead;
		if (leadname != null && leadname != "") {
			lead = leadRepository.findOne(Long.parseLong(leadname));
		} else {
			lead = new Lead();
		}
		opportunity.setOpportunityDate(new Date(df.parse(opportunityDate)
				.getTime()));
		opportunity.setAccount(account);

		if (lead.getLeadId() != 0) {
			opportunity.setLead(lead);
		}
		ListValues oppoSourceId = null;
		ListValues oppoRatingId = null;
		if (opportunitySourceId != null) {
			oppoSourceId = listValuesRepository.findOne(Long
					.parseLong(opportunitySourceId.toString()));
			opportunity.setListValuesByOpportunitySourceId(oppoSourceId);
			opportunity.setOpportunitySource(opportunitySource);
		}

		if (opportunityRatingId != null) {
			oppoRatingId = listValuesRepository.findOne(Long
					.parseLong(opportunityRatingId.toString()));
			opportunity.setListValuesByOpportunityRatingId(oppoRatingId);
			opportunity.setOpportunityRating(opportunityRating);
		}

		ListValues oppoPriorityId;
		if (opportunityPriorityId != null) {
			oppoPriorityId = listValuesRepository.findOne(Long
					.parseLong(opportunityPriorityId.toString()));
			opportunity.setListValuesByOpportunityPriorityId(oppoPriorityId);
		}
		ListValues oppoStatusId;
		if (opportunityStatusId != null) {
			oppoStatusId = listValuesRepository.findOne(Long
					.parseLong(opportunityStatusId.toString()));
			opportunity.setListValuesByOpportunityStatusId(oppoStatusId);
		}

		opportunity.setContactByOpportunitySalesRep(contactRepository
				.findOne(opportunitySalesRep));

		opportunity.setOpportunityPriority(opportunityPriority);
		if (!estimatedCloseDate.isEmpty()) {
			opportunity.setEstimatedCloseDate(new Date(df.parse(
					estimatedCloseDate).getTime()));
		}
		if (!closeProbability.isEmpty()) {
			opportunity.setCloseProbability(closeProbability);
		}
		if (estimatedValue != null) {
			opportunity.setEstimatedValue(new BigDecimal(estimatedValue));
		}
		opportunity.setOpportunityState(pricingStatus);
		ListValues oppoShippingMethod;
		oppoShippingMethod = listValuesRepository
				.findOne(opportunityShippingMethod);
		opportunity.setListValuesByShippingMethod(oppoShippingMethod);

		if (shippingInstructions != null) {
			opportunity.setShippingInstructions(shippingInstructions);
		}
		if (carrier != null) {
			opportunity.setCarrier(carrier);
		}
		if (remarks != null) {
			opportunity.setRemarks(remarks);
		}
		if (alertflag) {
			opportunity.setCreatedBy(SecurityContextUtil.getUsername());
			opportunity.setCreatedAt(CustomDateUtil.getDateAndTime());
		}
		opportunity.setModifiedBy(SecurityContextUtil.getUsername());
		opportunity.setModifiedAt(CustomDateUtil.getDateAndTime());

		if (opportunityId == null) {
			message = MessagesUtil.showMessage("Opportunity",
					opportunityNumber, "Created", "Successfully");
		} else {
			message = MessagesUtil.showMessage("Opportunity",
					opportunityNumber, "Updated", "Successfully");
		}

		Opportunity opportunity2 = null;
		opportunity2 = opportunityRepository.save(opportunity);
		try {
			if (alertflag) {
				mailService.sendEmaildata(opportunity.getOpportunityNumber(),
						moduleName);
			}
		} catch (Exception e) {
			return new ExtJSResponse(true, opportunity2, message);
		}

		return new ExtJSResponse(true, opportunity2, message);
	}

	@RequestMapping(value = "{opportunityId}/editOpportunityForm", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Opportunity editForm(@PathVariable Long opportunityId,
			@RequestParam String opportunityNumber) {
		Opportunity opportunity = null;
		if (opportunityId == 0) {
			opportunity = new Opportunity();
		} else {
			opportunity = opportunityRepository.findOne(opportunityId);
		}

		if (opportunity.getOpportunityNumber() == null) {
			opportunity = new Opportunity();
			opportunity.setOpportunityNumber(opportunityNumber);
		}
		return opportunity;
	}

	@RequestMapping(value = "getShippingMethod", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getShippingMethod() {
		return listValuesRepository.findByListValueCategory("Shipping Method");
	}

	@RequestMapping(value = "getSalesRep", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<KeyValueMap> getSalesRep(@RequestParam Long oppoAccountId) {
		Account account = accountRepository.findOne(oppoAccountId);
		List<KeyValueMap> keyValueMaps = new ArrayList<KeyValueMap>();
		if (account.getContactGroup() != null) {
			keyValueMaps = contactRepository.getContactSalesRep(account
					.getContactGroup().getContactGroupId());
		}

		return keyValueMaps;
	}

	@RequestMapping(value = "getUnitOfMeasure", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ListValues> getUnitOfMeasure() {
		return listValuesRepository.findByListValueCategory("Unit of Measure");
	}

	@RequestMapping(value = "{opportunityId}/createProductDetails", method = RequestMethod.POST, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse createProductDetails(@PathVariable Long opportunityId,
			@RequestBody Map<String, Object> reqMap)
			throws FileNotFoundException, IOException {

		Long productId = Long.valueOf(reqMap.get("productId").toString());
		String productQty = reqMap.get("opporQuantity").toString();
		String productRate = reqMap.get("opporUnitCost").toString();
		String opporDiscount = reqMap.get("opporDiscount").toString();
		BigDecimal opporTotalCost = new BigDecimal(reqMap.get("opporTotalCost")
				.toString());
		boolean serialized = Boolean.parseBoolean(reqMap.get("serialized")
				.toString());
		// String unitOfMeasure = reqMap.get("unitOfMeasure").toString();

		OpportunityProductDetail opportunityProductDetail = new OpportunityProductDetail();

		if (reqMap.get("opportunityProdDetailId") != null) {
			String opportunityProdDetailId = reqMap.get(
					"opportunityProdDetailId").toString();
			opportunityProductDetail = opportunityProductDetailRepository
					.findOne(opportunityProdDetailId);
			opportunityProductDetail.setModifiedBy(SecurityContextUtil
					.getUsername());
			opportunityProductDetail.setModifiedAt(CustomDateUtil
					.getUtilDateAndTime().toString());
		} else {
			opportunityProductDetail
					.setOpportunityProdDetailId(RandomKeyGeneration
							.getRandomGeneration());
			opportunityProductDetail.setCreatedAt(CustomDateUtil
					.getUtilDateAndTime());
			opportunityProductDetail.setCreatedBy(SecurityContextUtil
					.getUsername());
			opportunityProductDetail.setModifiedBy(SecurityContextUtil
					.getUsername());
			opportunityProductDetail.setModifiedAt(CustomDateUtil
					.getUtilDateAndTime().toString());
		}

		opportunityProductDetail.setOpportunity(opportunityRepository
				.findOne(opportunityId));
		opportunityProductDetail.setProduct(productRepository
				.findOne(productId));
		opportunityProductDetail.setOpportunityProductQty(productQty);
		// opportunityProductDetail.setUnitofMeasure(unitOfMeasure);
		opportunityProductDetail.setOpportunityProductDiscount(opporDiscount);
		opportunityProductDetail.setOpportunityProductRate(productRate);
		opportunityProductDetail.setSerialized(serialized);
		opportunityProductDetail.setOpportunityProductTotal(opporTotalCost);

		OpportunityProductDetail opportunityProductDetail2 = null;
		opportunityProductDetail2 = opportunityProductDetailRepository
				.save(opportunityProductDetail);
		return new ExtJSResponse(true, opportunityProductDetail2);
	}

	@RequestMapping(value = "/{opportunityId}/getProductRecords", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<OpportunityProductDetail> getProductRecords(
			@PathVariable Long opportunityId) {
		Sort sort = new Sort(Sort.Direction.DESC, "modifiedAt");
		List<OpportunityProductDetail> opportunityProductDetail = null;
		Opportunity opportunity;
		if (opportunityId != 0) {
			opportunity = opportunityRepository.findOne(opportunityId);
			opportunityProductDetail = opportunityProductDetailRepository
					.findByOpportunity(opportunity);
		}
		return opportunityProductDetail;
	}

	@RequestMapping(value = "/{opportunityProdDetailId}/updateProduct", method = RequestMethod.POST, consumes = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	OpportunityProductDetail updateProduct(
			@PathVariable String opportunityProdDetailId,
			@RequestBody Map<String, Object> reqMap) {

		OpportunityProductDetail opportunityProductDetail = opportunityProductDetailRepository
				.findOne(opportunityProdDetailId);

		Long productId = Long.valueOf(reqMap.get("productId").toString());
		String productQty = reqMap.get("opporQuantity").toString();
		String productRate = reqMap.get("opporUnitCost").toString();
		String opporDiscount = reqMap.get("opporDiscount").toString();
		BigDecimal opporTotalCost = new BigDecimal(reqMap.get("opporTotalCost")
				.toString());
		boolean serialized = Boolean.parseBoolean(reqMap.get("serialized")
				.toString());
		// String unitOfMeasure = reqMap.get("unitOfMeasure").toString();

		opportunityProductDetail.setProduct(productRepository
				.findOne(productId));
		opportunityProductDetail.setOpportunityProductQty(productQty);
		opportunityProductDetail.setOpportunityProductRate(productRate);
		opportunityProductDetail.setOpportunityProductDiscount(opporDiscount);
		opportunityProductDetail.setOpportunityProductTotal(opporTotalCost);
		opportunityProductDetail.setSerialized(serialized);
		opportunityProductDetail.setModifiedBy(SecurityContextUtil
				.getUsername());
		opportunityProductDetail.setModifiedAt(CustomDateUtil
				.getUtilDateAndTime().toString());
		// opportunityProductDetail.setUnitofMeasure(unitOfMeasure);
		opportunityProductDetail = opportunityProductDetailRepository
				.save(opportunityProductDetail);
		return opportunityProductDetail;
	}

	@RequestMapping(value = "/contactOpportunityReport", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Opportunity> contactOpportunityReport(@RequestParam Long contactId) {
		List<Opportunity> Opportunity = opportunityRepository
				.getContactOpportunityReport(contactId);
		return Opportunity;
	}

}
