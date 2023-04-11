package com.seismic.crm.model;

// Generated Nov 8, 2013 12:48:36 PM by Hibernate Tools 4.0.0

import java.math.BigDecimal;
import java.sql.Date;
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

/**
 * SalesOrder generated by hbm2java
 */
@Entity
@Table(name = "SalesOrder", schema = "dbo", catalog = "Seismic_Crm_Dev")
public class SalesOrder implements java.io.Serializable {

	private long salesOrderId;
	private Contact contact;
	private Account account;
	private Project project;
	private Quote quote;
	private Contact contactBySalesOrderSalesRep;	
	private PurchaseOrder purchaseOrder;
	private Date salesOrderDate;
	private String nameOfSalesOrder;
	private String salesOrderNumber;
	private Long contractId;
	private String salesOrderLangauge;
	private String salesOrderPriority;
	private String salesOrderSalesRep;
	private Date salesOrderValidFrom;
	private Date salesOrderExpiresOn;
	private Date salesOrderCancleOn;
	private Date salesOrderClosedOn;
	private String salesOrderSupplierName;
	private String salesOrderSource;
	private Date submitDate;
	private boolean submittedStatus = false;
	private String submittedBy;
	private Long technicalContactName;
	private String technicalTelephoneNumber;
	private String technicalEmailId;
	private String installationAddress1;
	private String installationAddress2;
	private String installationAddress3;
	private String installationPostCode;
	private Date expectedDelivDate;
	private BigDecimal estimatedValue;
	private Date estimatedCloseDate;
	private String shippingMethod;
	private String shippingInstructions;
	private String carrier;
	private String trackingNumber;
	private BigDecimal princingRule;
	private BigDecimal calculationRule;
	private Date pricingDate;
	private String salesCommission;
	private String paymentTerms;
	private BigDecimal currency;
	private String freightTerms;
	private Boolean isActive;
	private String createdBy;
	private Date createdAt;
	private String modifiedBy;
	private java.util.Date modifiedAt;
	private String remarks;
	
	private String soType;	
	private ListValues listValuesBySourceId;	
	private ListValues listValuesByPriorityId;	
	private ListValues listValuesByShippingMethod; 
	
//	private Set contracts = new HashSet(0);
	private Set salesOrderProductDetails = new HashSet(0);
//	private Set projects = new HashSet(0);
//	private Set assetMovements = new HashSet(0);
	//private Long AccountID;
//	private Long ContactID;

	// private Long contactId;
	private Long salesOrderSalesFormRefId;
	private ListValues listValuesByAddressTypeId;
	private ListValues listValuesByCustomerTypeId;
	private Lead lead;
	public SalesOrder() {
	}

	public SalesOrder(long salesOrderId) {
		this.salesOrderId = salesOrderId;
	}

//	public SalesOrder(long salesOrderId, Contact contact, Account account,
//			Project project, Quote quote,PurchaseOrder purchaseOrder,
//			Date salesOrderDate, String nameOfSalesOrder,
//			String salesOrderNumber, Long contractId,
//			String salesOrderLangauge, String salesOrderPriority,
//			String salesOrderSalesRep, Date salesOrderValidFrom,
//			Date salesOrderExpiresOn, Date salesOrderCancleOn,
//			Date salesOrderClosedOn, String salesOrderSupplierName,
//			String salesOrderSource, Date submitDate, Date expectedDelivDate,
//			BigDecimal estimatedValue, Date estimatedCloseDate,
//			String shippingMethod, String shippingInstructions, String carrier,
//			String trackingNumber, BigDecimal princingRule,
//			BigDecimal calculationRule, Date pricingDate,
//			String salesCommission, String paymentTerms, BigDecimal currency,
//			String freightTerms, Boolean isActive, String createdBy,
//			Date createdAt, String modifiedBy, String modifiedAt,
//			String remarks, Set contracts, Set salesOrderProductDetails,
//			Set projects, Set assetMovements) {
//		this.salesOrderId = salesOrderId;
//		this.contact = contact;
//		this.account = account;
//		this.project = project;
//		this.quote = quote;
//		this.purchaseOrderId = purchaseOrderId;
//		this.salesOrderDate = salesOrderDate;
//		this.nameOfSalesOrder = nameOfSalesOrder;
//		this.salesOrderNumber = salesOrderNumber;
//		this.contractId = contractId;
//		this.salesOrderLangauge = salesOrderLangauge;
//		this.salesOrderPriority = salesOrderPriority;
//		this.salesOrderSalesRep = salesOrderSalesRep;
//		this.salesOrderValidFrom = salesOrderValidFrom;
//		this.salesOrderExpiresOn = salesOrderExpiresOn;
//		this.salesOrderCancleOn = salesOrderCancleOn;
//		this.salesOrderClosedOn = salesOrderClosedOn;
//		this.salesOrderSupplierName = salesOrderSupplierName;
//		this.salesOrderSource = salesOrderSource;
//		this.submitDate = submitDate;
//		this.expectedDelivDate = expectedDelivDate;
//		this.estimatedValue = estimatedValue;
//		this.estimatedCloseDate = estimatedCloseDate;
//		this.shippingMethod = shippingMethod;
//		this.shippingInstructions = shippingInstructions;
//		this.carrier = carrier;
//		this.trackingNumber = trackingNumber;
//		this.princingRule = princingRule;
//		this.calculationRule = calculationRule;
//		this.pricingDate = pricingDate;
//		this.salesCommission = salesCommission;
//		this.paymentTerms = paymentTerms;
//		this.currency = currency;
//		this.freightTerms = freightTerms;
//		this.isActive = isActive;
//		this.createdBy = createdBy;
//		this.createdAt = createdAt;
//		this.modifiedBy = modifiedBy;
//		this.modifiedAt = modifiedAt;
//		this.remarks = remarks;
//		this.contracts = contracts;
//		this.salesOrderProductDetails = salesOrderProductDetails;
//		this.projects = projects;
//		this.assetMovements = assetMovements;
//	}

	@Id
	@GeneratedValue
	@Column(name = "SalesOrderID", unique = true, nullable = false)
	public long getSalesOrderId() {
		return this.salesOrderId;
	}

	public void setSalesOrderId(long salesOrderId) {
		this.salesOrderId = salesOrderId;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ContactID")
	public Contact getContact() {
		return this.contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "AccountID")
	public Account getAccount() {
		return this.account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ProjectID")
	public Project getProject() {
		return this.project;
	}

	public void setProject(Project project) {
		this.project = project;
	}
                    
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalesOrderQuoteID")
	public Quote getQuote() {
		return this.quote;
	}

	public void setQuote(Quote quote) {
		this.quote = quote;
	}

	@Column(name = "SalesOrderDate")
	public Date getSalesOrderDate() {
		return this.salesOrderDate;
	}

	public void setSalesOrderDate(Date salesOrderDate) {
		this.salesOrderDate = salesOrderDate;
	}

	@Column(name = "NameOfSalesOrder")
	public String getNameOfSalesOrder() {
		return this.nameOfSalesOrder;
	}

	public void setNameOfSalesOrder(String nameOfSalesOrder) {
		this.nameOfSalesOrder = nameOfSalesOrder;
	}

	@Column(name = "SalesOrderNumber")
	public String getSalesOrderNumber() {
		return this.salesOrderNumber;
	}

	public void setSalesOrderNumber(String salesOrderNumber) {
		this.salesOrderNumber = salesOrderNumber;
	}

	@Column(name = "ContractID")
	public Long getContractId() {
		return this.contractId;
	}

	public void setContractId(Long contractId) {
		this.contractId = contractId;
	}

	@Column(name = "SalesOrderLangauge")
	public String getSalesOrderLangauge() {
		return this.salesOrderLangauge;
	}

	public void setSalesOrderLangauge(String salesOrderLangauge) {
		this.salesOrderLangauge = salesOrderLangauge;
	}
    
	@Column(name = "SalesOrderPriority")
	public String getSalesOrderPriority() {
		return this.salesOrderPriority;
	} 
	public void setSalesOrderPriority(String salesOrderPriority) {
		this.salesOrderPriority = salesOrderPriority;
	} 

	@Column(name = "SalesOrderSalesRep")
	public String getSalesOrderSalesRep() {
		return this.salesOrderSalesRep;
	}

	public void setSalesOrderSalesRep(String salesOrderSalesRep) {
		this.salesOrderSalesRep = salesOrderSalesRep;
	}

	
	@Column(name = "SalesOrderValidFrom", length = 23)
	public Date getSalesOrderValidFrom() {
		return this.salesOrderValidFrom;
	}

	public void setSalesOrderValidFrom(Date salesOrderValidFrom) {
		this.salesOrderValidFrom = salesOrderValidFrom;
	}

	
	@Column(name = "SalesOrderExpiresOn", length = 23)
	public Date getSalesOrderExpiresOn() {
		return this.salesOrderExpiresOn;
	}

	public void setSalesOrderExpiresOn(Date salesOrderExpiresOn) {
		this.salesOrderExpiresOn = salesOrderExpiresOn;
	}

	
	@Column(name = "SalesOrderCancleOn", length = 23)
	public Date getSalesOrderCancleOn() {
		return this.salesOrderCancleOn;
	}

	public void setSalesOrderCancleOn(Date salesOrderCancleOn) {
		this.salesOrderCancleOn = salesOrderCancleOn;
	}

	
	@Column(name = "SalesOrderClosedOn", length = 23)
	public Date getSalesOrderClosedOn() {
		return this.salesOrderClosedOn;
	}

	public void setSalesOrderClosedOn(Date salesOrderClosedOn) {
		this.salesOrderClosedOn = salesOrderClosedOn;
	}

	@Column(name = "SalesOrderSupplierName")
	public String getSalesOrderSupplierName() {
		return this.salesOrderSupplierName;
	}

	public void setSalesOrderSupplierName(String salesOrderSupplierName) {
		this.salesOrderSupplierName = salesOrderSupplierName;
	}
  
	@Column(name = "SalesOrderSource")
	public String getSalesOrderSource() {
		return this.salesOrderSource;
	}
	public void setSalesOrderSource(String salesOrderSource) {
		this.salesOrderSource = salesOrderSource;
	}

	
	@Column(name = "SubmitDate", length = 23)
	public Date getSubmitDate() {
		return this.submitDate;
	}

	public void setSubmitDate(Date submitDate) {
		this.submitDate = submitDate;
	}

	
	@Column(name = "ExpectedDeliv_Date", length = 23)
	public Date getExpectedDelivDate() {
		return this.expectedDelivDate;
	}

	public void setExpectedDelivDate(Date expectedDelivDate) {
		this.expectedDelivDate = expectedDelivDate;
	}

	@Column(name = "EstimatedValue", scale = 4)
	public BigDecimal getEstimatedValue() {
		return this.estimatedValue;
	}

	public void setEstimatedValue(BigDecimal estimatedValue) {
		this.estimatedValue = estimatedValue;
	}

	
	@Column(name = "EstimatedCloseDate", length = 23)
	public Date getEstimatedCloseDate() {
		return this.estimatedCloseDate;
	}

	public void setEstimatedCloseDate(Date estimatedCloseDate) {
		this.estimatedCloseDate = estimatedCloseDate;
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

	
	@Column(name = "CreatedAt", length = 23)
	public Date getCreatedAt() {
		return this.createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	@Column(name = "ModifiedBy")
	public String getModifiedBy() {
		return this.modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	@Column(name = "ModifiedAt")
	public java.util.Date getModifiedAt() {
		return this.modifiedAt;
	}

	public void setModifiedAt(java.util.Date modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	@Column(name = "Remarks")
	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	/*@Column(name = "AccountID")
	public Long getAccountID() {
		return AccountID;
	}

	public void setAccountID(Long accountID) {
		AccountID = accountID;
	}*/
//
//	@Column(name = "ContactID")
//	public Long getContactID() {
//		return ContactID;
//	}
//
//	public void setContactID(Long contactID) {
//		ContactID = contactID;
//	}

	@Column(name = "TechnicalContactName")
	public Long getTechnicalContactName() {
		return technicalContactName;
	}

	public void setTechnicalContactName(Long technicalContactName) {
		this.technicalContactName = technicalContactName;
	}

	@Column(name = "TechnicalTelephoneNumber")
	public String getTechnicalTelephoneNumber() {
		return technicalTelephoneNumber;
	}

	public void setTechnicalTelephoneNumber(String technicalTelephoneNumber) {
		this.technicalTelephoneNumber = technicalTelephoneNumber;
	}

	@Column(name = "TechnicalEmailID")
	public String getTechnicalEmailId() {
		return technicalEmailId;
	}

	public void setTechnicalEmailId(String technicalEmailId) {
		this.technicalEmailId = technicalEmailId;
	}

	@Column(name = "InstallationAddress1")
	public String getInstallationAddress1() {
		return installationAddress1;
	}

	public void setInstallationAddress1(String installationAddress1) {
		this.installationAddress1 = installationAddress1;
	}

	@Column(name = "InstallationAddress2")
	public String getInstallationAddress2() {
		return installationAddress2;
	}

	public void setInstallationAddress2(String installationAddress2) {
		this.installationAddress2 = installationAddress2;
	}

	@Column(name = "InstallationAddress3")
	public String getInstallationAddress3() {
		return installationAddress3;
	}

	public void setInstallationAddress3(String installationAddress3) {
		this.installationAddress3 = installationAddress3;
	}

	@Column(name = "InstallationPostCode")
	public String getInstallationPostCode() {
		return installationPostCode;
	}

	public void setInstallationPostCode(String installationPostCode) {
		this.installationPostCode = installationPostCode;
	}
	
	@Column(name = "SalesOrderType")
	public String getSoType() {
		return soType;
	}

	public void setSoType(String soType) {
		this.soType = soType;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalesOrderSourceId")
	public ListValues getListValuesBySourceId() {
		return listValuesBySourceId;
	}
	public void setListValuesBySourceId(ListValues listValuesBySourceId) {
		this.listValuesBySourceId = listValuesBySourceId;
	}
    
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalesOrderPriorityId")
	public ListValues getListValuesByPriorityId() {
		return listValuesByPriorityId;
	}
	public void setListValuesByPriorityId(ListValues listValuesByPriorityId) {
		this.listValuesByPriorityId = listValuesByPriorityId;
	}

	 @OneToMany(fetch = FetchType.LAZY, mappedBy = "salesOrder") 
	 public Set<SalesOrderProductDetail> getSalesOrderProductDetails() { 
		 return this.salesOrderProductDetails; 
	 }

	public void setSalesOrderProductDetails(Set<SalesOrderProductDetail> salesOrderProductDetails) {
		this.salesOrderProductDetails = salesOrderProductDetails;
	}

	@Column(name = "SubmittedStatus", nullable = false)
	public boolean getSubmittedStatus() {
		return submittedStatus;
	}

	public void setSubmittedStatus(boolean submittedStatus) {
		this.submittedStatus = submittedStatus;
	}

	@Column(name = "SubmittedBy")
	public String getSubmittedBy() {
		return submittedBy;
	}

	public void setSubmittedBy(String submittedBy) {
		this.submittedBy = submittedBy;
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
	@JoinColumn(name = "SalesOrderSalesRepID")
	public Contact getContactBySalesOrderSalesRep() {
		return contactBySalesOrderSalesRep;
	}
	public void setContactBySalesOrderSalesRep(Contact contactBySalesOrderSalesRep) {
		this.contactBySalesOrderSalesRep = contactBySalesOrderSalesRep;
	}
	
	@Column(name = "SalesOrderSalesFormRefID")
	public Long getSalesOrderSalesFormRefId() {
		return this.salesOrderSalesFormRefId;
	}

	public void setSalesOrderSalesFormRefId(Long salesOrderSalesFormRefId) {
		this.salesOrderSalesFormRefId = salesOrderSalesFormRefId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "CustomerTypeID")
	public ListValues getListValuesByCustomerTypeId() {
		return this.listValuesByCustomerTypeId;
	}

	public void setListValuesByCustomerTypeId(
			ListValues listValuesByCustomerTypeId) {
		this.listValuesByCustomerTypeId = listValuesByCustomerTypeId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "AddressTypeID")
	public ListValues getListValuesByAddressTypeId() {
		return this.listValuesByAddressTypeId;
	}

	public void setListValuesByAddressTypeId(
			ListValues listValuesByAddressTypeId) {
		this.listValuesByAddressTypeId = listValuesByAddressTypeId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "PurchaseOrderID")
	public PurchaseOrder getPurchaseOrder() {
		return this.purchaseOrder;
	}

	public void setPurchaseOrder(PurchaseOrder purchaseOrder) {
		this.purchaseOrder = purchaseOrder;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalesOrderLeadId")
	public Lead getLead() {
		return this.lead;
	}

	public void setLead(Lead lead) {
		this.lead = lead;
	}
	
	/*
	 * public Long getContactId() { return contactId; }
	 * 
	 * public void setContactId(Long contactId) { this.contactId = contactId; }
	 */

	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "salesOrder") public Set
	 * getContracts() { return this.contracts; }
	 * 
	 * public void setContracts(Set contracts) { this.contracts = contracts; }
	 * 
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "salesOrder") public Set
	 * getSalesOrderProductDetails() { return this.salesOrderProductDetails; }
	 * 
	 * public void setSalesOrderProductDetails(Set salesOrderProductDetails) {
	 * this.salesOrderProductDetails = salesOrderProductDetails; }
	 * 
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "salesOrder") public Set
	 * getProjects() { return this.projects; }
	 * 
	 * public void setProjects(Set projects) { this.projects = projects; }
	 * 
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "salesOrder") public Set
	 * getAssetMovements() { return this.assetMovements; }
	 * 
	 * public void setAssetMovements(Set assetMovements) { this.assetMovements =
	 * assetMovements; }
	 */
}
