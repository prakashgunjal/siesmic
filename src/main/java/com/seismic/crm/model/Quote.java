package com.seismic.crm.model;

// Generated Nov 18, 2013 3:17:25 PM by Hibernate Tools 4.0.0

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

/**
 * Quote generated by hbm2java
 */
@Entity
@Table(name = "Quote", schema = "dbo", catalog = "Seismic_Crm_Dev")
public class Quote implements java.io.Serializable {

	private Long quoteId;	
	private java.sql.Date quoteDate;
	private String accountId;
	
	private Account account;
	private Contact contactByContactId;
	
	private Opportunity	opportunity;
		
	private String nameOfQuote;
	private String quoteNumber;
	private String contractRole;
	private String quoteLanguage;
	private String quoteState;
	private String quotePriority;
	private String quoteOrigin;
	private String quoteSalesRep;
	private String quoteBroker;
	private Date quoteValidFrom;
	private Date quoteExpiresOn;
	private Date quoteCancleOn;
	private Date quoteClosedOn;
	private String supplierName;
	private String quoteSource;
	private String quoteRating;
	private String closeProbability;
	private BigDecimal estimatedValue;
	private java.sql.Date estimatedCloseDate;
	private java.sql.Date expectedDelDate;
	private String nextSteps;
	private String shippingMethod;
	private String shippingInstructions;
	private String carrier;
	private String trackingNumber;
	private BigDecimal princingRule;
	private BigDecimal calculationRule;
	private String pricingStatus;
	private Date pricingDate;
	private String salesCommission;
	private String paymentTerms;
	private BigDecimal currency;
	private String freightTerms;
	private Boolean isActive;
	private String createdBy;
	private Date createdAt;
	private String modifiedBy;
	private Date modifiedAt;
	private String remarks;
		           	
	private ListValues listValuesByQuoteSourceId;	
	private ListValues listValuesByQuotePriorityId;	
	private ListValues listValuesByQuoteStatusId;
	
	private ListValues listValuesByQuoteRatingId;
	private ListValues listValuesByShippingMethod; 
	private Contact contactByQuoteSalesRepId;
	private SalesOrder salesOrder;
				
	public Quote() {
	}
	public Quote(Long quoteId) {
		this.quoteId = quoteId;
	}

	public Quote(Long quoteId, Long contactId, java.sql.Date quoteDate,
			String accountId, String nameOfQuote, String quoteNumber,
			String contractRole, String quoteLanguage, String quoteState,
			String quotePriority, String quoteOrigin, String quoteSalesRep,
			String quoteBroker, Date quoteValidFrom, Date quoteExpiresOn,
			Date quoteCancleOn, Date quoteClosedOn, String supplierName,
			String quoteSource, String quoteRating, String closeProbability,
			BigDecimal estimatedValue, java.sql.Date estimatedCloseDate,
			java.sql.Date expectedDelDate, String nextSteps, String shippingMethod,
			String shippingInstructions, String carrier, String trackingNumber,
			BigDecimal princingRule, BigDecimal calculationRule,
			String pricingStatus, Date pricingDate, String salesCommission,
			String paymentTerms, BigDecimal currency, String freightTerms,
			Boolean isActive, String createdBy, Date createdAt,
			String modifiedBy, Date modifiedAt, String remarks,
			Set quoteProductDetails, Set salesOrders, 
			ListValues listValuesByQuoteSourceId,ListValues listValuesByQuotePriorityId,ListValues listValuesByQuoteStatusId,
			Contact contactByQuoteSalesRepId,Contact contactByContactId) {
		this.quoteId = quoteId;
	//	this.contactId = contactId;
		this.quoteDate = quoteDate;
		this.accountId = accountId;
		this.nameOfQuote = nameOfQuote;
		this.quoteNumber = quoteNumber;
		this.contractRole = contractRole;
		this.quoteLanguage = quoteLanguage;
		this.quoteState = quoteState;
		this.quotePriority = quotePriority;
		this.quoteOrigin = quoteOrigin;
		this.quoteSalesRep = quoteSalesRep;
		this.quoteBroker = quoteBroker;
		this.quoteValidFrom = quoteValidFrom;
		this.quoteExpiresOn = quoteExpiresOn;
		this.quoteCancleOn = quoteCancleOn;
		this.quoteClosedOn = quoteClosedOn;
		this.supplierName = supplierName;
		this.quoteSource = quoteSource;
		this.quoteRating = quoteRating;
		this.closeProbability = closeProbability;
		this.estimatedValue = estimatedValue;
		this.estimatedCloseDate = estimatedCloseDate;
		this.expectedDelDate = expectedDelDate;
		this.nextSteps = nextSteps;
		this.shippingMethod = shippingMethod;
		this.shippingInstructions = shippingInstructions;
		this.carrier = carrier;
		this.trackingNumber = trackingNumber;
		this.princingRule = princingRule;
		this.calculationRule = calculationRule;
		this.pricingStatus = pricingStatus;
		this.pricingDate = pricingDate;
		this.salesCommission = salesCommission;
		this.paymentTerms = paymentTerms;
		this.currency = currency;
		this.freightTerms = freightTerms;
		this.isActive = isActive;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
		this.modifiedBy = modifiedBy;
		this.modifiedAt = modifiedAt;
		this.remarks = remarks;
		/*this.quoteProductDetails = quoteProductDetails;
		this.salesOrders = salesOrders;*/		
		this.listValuesByQuoteSourceId =listValuesByQuoteSourceId ;
		this.listValuesByQuotePriorityId =listValuesByQuotePriorityId ;
		this.listValuesByQuoteStatusId =listValuesByQuoteStatusId ;
		this.contactByQuoteSalesRepId = contactByQuoteSalesRepId;
		this.contactByContactId = contactByContactId;
	}

	@Id
	@GeneratedValue
	@Column(name = "QuoteID", unique = true, nullable = false)
	public Long getQuoteId() {
		return this.quoteId;
	}

	public void setQuoteId(Long quoteId) {
		this.quoteId = quoteId;
	}
     
	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "QuoteDate", length = 23)
	public java.sql.Date getQuoteDate() {
		return  this.quoteDate;
	}

	public void setQuoteDate(java.sql.Date quoteDate2) {
		this.quoteDate = quoteDate2;
	}


	@Column(name = "NameOfQuote")
	public String getNameOfQuote() {
		return this.nameOfQuote;
	}

	public void setNameOfQuote(String nameOfQuote) {
		this.nameOfQuote = nameOfQuote;
	}

	@Column(name = "QuoteNumber")
	public String getQuoteNumber() {
		return this.quoteNumber;
	}
	public void setQuoteNumber(String quoteNumber) {
		this.quoteNumber = quoteNumber;
	}

	@Column(name = "ContractRole")
	public String getContractRole() {
		return this.contractRole;
	}
	public void setContractRole(String contractRole) {
		this.contractRole = contractRole;
	}

	@Column(name = "QuoteLanguage")
	public String getQuoteLanguage() {
		return this.quoteLanguage;
	}
	public void setQuoteLanguage(String quoteLanguage) {
		this.quoteLanguage = quoteLanguage;
	}

	@Column(name = "QuoteState")
	public String getQuoteState() {
		return this.quoteState;
	}
	public void setQuoteState(String quoteState) {
		this.quoteState = quoteState;
	}

	@Column(name = "QuotePriority")
	public String getQuotePriority() {
		return this.quotePriority;
	}
	public void setQuotePriority(String quotePriority) {
		this.quotePriority = quotePriority;
	}

	@Column(name = "QuoteOrigin")
	public String getQuoteOrigin() {
		return this.quoteOrigin;
	}
	public void setQuoteOrigin(String quoteOrigin) {
		this.quoteOrigin = quoteOrigin;
	}

	@Column(name = "QuoteSalesRep")
	public String getQuoteSalesRep() {
		return this.quoteSalesRep;
	}
	public void setQuoteSalesRep(String quoteSalesRep) {
		this.quoteSalesRep = quoteSalesRep;
	}

	@Column(name = "QuoteBroker")
	public String getQuoteBroker() {
		return this.quoteBroker;
	}
	public void setQuoteBroker(String quoteBroker) {
		this.quoteBroker = quoteBroker;
	}

	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "QuoteValidFrom", length = 23)
	public Date getQuoteValidFrom() {
		return this.quoteValidFrom;
	}
	public void setQuoteValidFrom(Date quoteValidFrom) {
		this.quoteValidFrom = quoteValidFrom;
	}

	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "QuoteExpiresOn", length = 23)
	public Date getQuoteExpiresOn() {
		return this.quoteExpiresOn;
	}
	public void setQuoteExpiresOn(Date quoteExpiresOn) {
		this.quoteExpiresOn = quoteExpiresOn;
	}

	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "QuoteCancleOn", length = 23)
	public Date getQuoteCancleOn() {
		return this.quoteCancleOn;
	}
	public void setQuoteCancleOn(Date quoteCancleOn) {
		this.quoteCancleOn = quoteCancleOn;
	}

	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "QuoteClosedOn", length = 23)
	public Date getQuoteClosedOn() {
		return this.quoteClosedOn;
	}
	public void setQuoteClosedOn(Date quoteClosedOn) {
		this.quoteClosedOn = quoteClosedOn;
	}

	@Column(name = "SupplierName")
	public String getSupplierName() {
		return this.supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	@Column(name = "QuoteSource")
	public String getQuoteSource() {
		return this.quoteSource;
	}
	public void setQuoteSource(String quoteSource) {
		this.quoteSource = quoteSource;
	}

	@Column(name = "QuoteRating")
	public String getQuoteRating() {
		return this.quoteRating;
	}
	public void setQuoteRating(String quoteRating) {
		this.quoteRating = quoteRating;
	}

	@Column(name = "CloseProbability")
	public String getCloseProbability() {
		return this.closeProbability;
	}
	public void setCloseProbability(String closeProbability) {
		this.closeProbability = closeProbability;
	}

	@Column(name = "EstimatedValue", scale = 4)
	public BigDecimal getEstimatedValue() {
		return this.estimatedValue;
	}

	public void setEstimatedValue(BigDecimal estimatedValue) {
		this.estimatedValue = estimatedValue;
	}
	
   /// @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "EstimatedCloseDate", length = 23)		
	public java.sql.Date getEstimatedCloseDate() {
		return this.estimatedCloseDate;
	}
	public void setEstimatedCloseDate(java.sql.Date estimatedCloseDate) {
		this.estimatedCloseDate = estimatedCloseDate;
	}
	
   // @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ExpectedDel_Date", length = 23)		
	public java.sql.Date getExpectedDelDate() {
		return this.expectedDelDate;
	}

	public void setExpectedDelDate(java.sql.Date expectedDelDate) {
		this.expectedDelDate = expectedDelDate;
	}

	@Column(name = "NextSteps")
	public String getNextSteps() {
		return this.nextSteps;
	}
	public void setNextSteps(String nextSteps) {
		this.nextSteps = nextSteps;
	}

	@Column(name = "ShippingMethod")
	public String getShippingMethod() {
		return this.shippingMethod;
	}

	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}

	@Column(name = "ShippingInstructions")
	public String getShippingInstructions() {
		return this.shippingInstructions;
	}

	public void setShippingInstructions(String shippingInstructions) {
		this.shippingInstructions = shippingInstructions;
	}

	@Column(name = "Carrier")
	public String getCarrier() {
		return this.carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	@Column(name = "TrackingNumber")
	public String getTrackingNumber() {
		return this.trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	@Column(name = "PrincingRule", scale = 4)
	public BigDecimal getPrincingRule() {
		return this.princingRule;
	}

	public void setPrincingRule(BigDecimal princingRule) {
		this.princingRule = princingRule;
	}

	@Column(name = "CalculationRule", scale = 4)
	public BigDecimal getCalculationRule() {
		return this.calculationRule;
	}

	public void setCalculationRule(BigDecimal calculationRule) {
		this.calculationRule = calculationRule;
	}

	@Column(name = "PricingStatus")
	public String getPricingStatus() {
		return this.pricingStatus;
	}

	public void setPricingStatus(String pricingStatus) {
		this.pricingStatus = pricingStatus;
	}

	///@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "PricingDate", length = 23)
	public Date getPricingDate() {
		return this.pricingDate;
	}

	public void setPricingDate(Date pricingDate) {
		this.pricingDate = pricingDate;
	}

	@Column(name = "SalesCommission")
	public String getSalesCommission() {
		return this.salesCommission;
	}

	public void setSalesCommission(String salesCommission) {
		this.salesCommission = salesCommission;
	}

	@Column(name = "PaymentTerms")
	public String getPaymentTerms() {
		return this.paymentTerms;
	}

	public void setPaymentTerms(String paymentTerms) {
		this.paymentTerms = paymentTerms;
	}

	@Column(name = "Currency", scale = 4)
	public BigDecimal getCurrency() {
		return this.currency;
	}

	public void setCurrency(BigDecimal currency) {
		this.currency = currency;
	}

	@Column(name = "FreightTerms")
	public String getFreightTerms() {
		return this.freightTerms;
	}

	public void setFreightTerms(String freightTerms) {
		this.freightTerms = freightTerms;
	}

	@Column(name = "IsActive")
	public Boolean getIsActive() {
		return this.isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	@Column(name = "CreatedBy")
	public String getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "CreatedAt", length = 23)
	public Date getCreatedAt() {
		return this.createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	@Column(name = "ModifiedBy", length = 23)
	public String getModifiedBy() {
		return this.modifiedBy;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ModifiedAt" ,length = 23)
	public Date getModifiedAt() {
		return this.modifiedAt;
	}
	public void setModifiedAt(Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	@Column(name = "Remarks")
	public String getRemarks() {
		return this.remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteSourceID")
	public ListValues getListValuesByQuoteSourceId() {
		return listValuesByQuoteSourceId;
	}
	public void setListValuesByQuoteSourceId(ListValues listValuesByQuoteSourceId) {
		this.listValuesByQuoteSourceId = listValuesByQuoteSourceId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuotePriorityID")
	public ListValues getListValuesByQuotePriorityId() {
		return listValuesByQuotePriorityId;
	}
	public void setListValuesByQuotePriorityId(
			ListValues listValuesByQuotePriorityId) {
		this.listValuesByQuotePriorityId = listValuesByQuotePriorityId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteRatingID")
	public ListValues getListValuesByQuoteRatingId() {
		return listValuesByQuoteRatingId;
	}
	public void setListValuesByQuoteRatingId(ListValues listValuesByQuoteRatingId) {
		this.listValuesByQuoteRatingId = listValuesByQuoteRatingId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteStatusID")
	public ListValues getListValuesByQuoteStatusId() {
		return listValuesByQuoteStatusId;  
	}
	public void setListValuesByQuoteStatusId(ListValues listValuesByQuoteStatusId) {
		this.listValuesByQuoteStatusId = listValuesByQuoteStatusId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ShippingMethodID")
	public ListValues getListValuesByShippingMethod() {
		return listValuesByShippingMethod;
	}	
	public void setListValuesByShippingMethod(ListValues listValuesByShippingMethod) {
		this.listValuesByShippingMethod = listValuesByShippingMethod;
	}
	
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "AccountID")
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "OpportunityID")
	public Opportunity getOpportunity() {
		return opportunity;
	}
	public void setOpportunity(Opportunity opportunity) {
		this.opportunity = opportunity;
	}
	
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalesOrderID")
	public SalesOrder getSalesOrder() {
		return salesOrder;
	}
	public void setSalesOrder(SalesOrder salesOrder) {
		this.salesOrder = salesOrder;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ContactID")
	public Contact getContactByContactId() {
		return this.contactByContactId;
	}

	public void setContactByContactId(Contact contactByContactId) {
		this.contactByContactId = contactByContactId;
	}
		
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteSalesRepID")
	public Contact getContactByQuoteSalesRepId() {
		return this.contactByQuoteSalesRepId;
	}

	public void setContactByQuoteSalesRepId(Contact contactByQuoteSalesRepId) {
		this.contactByQuoteSalesRepId = contactByQuoteSalesRepId;
	}
	
}
