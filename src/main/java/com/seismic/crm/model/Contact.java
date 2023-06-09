package com.seismic.crm.model;

// Generated Oct 18, 2013 11:08:37 AM by Hibernate Tools 4.0.0

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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * Contact generated by hbm2java
 */
@Entity
@Table(name = "Contact", schema = "dbo", catalog = "Seismic_Crm_Dev")
public class Contact implements java.io.Serializable {

	private Long contactId;
	private ListValues listValues;
	private ListValues listValuesByLanguageId;
	private ListValues listValuesByGenderId;
	private ListValues listValuesByMaritalStausId;
	private ListValues listValuesBySalulationId;
	private Account account;
	
	//private Address address;
		
	private String contactNumber;
	private String contactName;
	private String contactOrganizationName;
	private String contactOrganizationDesc;
	// private ListValues salutation;
	private String title;
	private String firstName;
	private String middelName;
	private String lastName;
	// private String sex;
	// private String maritalStatus;
	private byte[] image;
	private java.sql.Date dateOfBirth;
	private String emailId;
	private String otherEmailId;
	private String telephone;
	private String mobile;
	private String fax;
	private String contactParentId;
	private Date contactRegistrationDate;
	private String contactRegistrationNumber;
	private String contactOrganizationSiccode;
	private Integer numberOfEmployee;
	private java.sql.Date contactStartDate;
	private java.sql.Date contactEndDate;
	private String website;
	private String linkedinId;
	private String facebookId;
	private String map;
	private Boolean primaryContact;
	private Boolean doNotPhone;
	private Boolean doNotMail;
	private Boolean doNoTEmail;
	private Boolean doNotSms;
	private Boolean isActive;
	private String createdBy;
	private Date createdAt;
	private String modifiedBy;
	private Date modifiedAt;
	private String remarks;
	
	private String message;
	private ContactGroup contactGroup;
	// private Set inventoryIssues = new HashSet(0);
	// private Set inventoryBookings = new HashSet(0);
	private Set leads = new HashSet(0);
	private Set salesOrders = new HashSet(0);
	private Set addresses = new HashSet(0);
	private Set generalActivitieses = new HashSet(0);
	
	private Account contactAccountId;
	// private Set accountContacts = new HashSet(0);
	/*
	 * private Set quotes = new HashSet(0); private Set supplierProducts = new
	 * HashSet(0);
	 */
	public Contact() {
	}

	public Contact(Long contactId) {
		this.contactId = contactId;
	}

	public Contact(Long contactId, ListValues listValues,
			ListValues listValuesByLanguageId, ListValues listValuesByGenderId,
			ListValues listValuesByMaritalStausId,
			ListValues listValuesBySalulationId, Account account,
			String contactName, String contactOrganizationName,
			String contactOrganizationDesc, ListValues salutation,
			String title, String firstName, String middelName, String lastName,
			String sex, String maritalStatus, byte[] image, java.sql.Date dateOfBirth,
			String emailId, String otherEmailId, String telephone,
			String mobile, String fax, 
			String contactParentId, Date contactRegistrationDate,
			String contactRegistrationNumber,
			String contactOrganizationSiccode, Integer numberOfEmployee,
			java.sql.Date contactStartDate, java.sql.Date contactEndDate, String website,
			String linkedinId, String facebookId, String map,
			Boolean primaryContact, Boolean doNotPhone, Boolean doNotMail,
			Boolean doNoTEmail, Boolean doNotSms, Boolean isActive,
			String createdBy, Date createdAt, String modifiedBy,
			Date modifiedAt, String remarks, Set inventoryIssues,
			Set inventoryBookings, Set opportunities, Set leads,
			Set accountContacts, Set quotes, Set addresses, Set salesOrders,
			Set generalActivitieses, Set supplierProducts,String contactNumber,ContactGroup contactGroup) {
		this.contactId = contactId;
		this.listValues = listValues;
		this.listValuesByLanguageId = listValuesByLanguageId;
		this.listValuesByGenderId = listValuesByGenderId;
		this.listValuesByMaritalStausId = listValuesByMaritalStausId;
		this.listValuesBySalulationId = listValuesBySalulationId;
		this.contactName = contactName;
		this.contactOrganizationName = contactOrganizationName;
		this.contactOrganizationDesc = contactOrganizationDesc;
		// this.salutation = salutation;
		this.title = title;
		this.firstName = firstName;
		this.middelName = middelName;
		this.lastName = lastName;
		/*
		 * this.sex = sex; this.maritalStatus = maritalStatus;
		 */
		this.image = image;
		this.dateOfBirth = dateOfBirth;
		this.emailId = emailId;
		this.otherEmailId = otherEmailId;
		this.telephone = telephone;
		this.mobile = mobile;
		this.fax = fax;
		this.contactParentId = contactParentId;
		this.contactRegistrationDate = contactRegistrationDate;
		this.contactRegistrationNumber = contactRegistrationNumber;
		this.contactOrganizationSiccode = contactOrganizationSiccode;
		this.numberOfEmployee = numberOfEmployee;
		this.contactStartDate = contactStartDate;
		this.contactEndDate = contactEndDate;
		this.website = website;
		this.linkedinId = linkedinId;
		this.facebookId = facebookId;
		this.map = map;
		this.primaryContact = primaryContact;
		this.doNotPhone = doNotPhone;
		this.doNotMail = doNotMail;
		this.doNoTEmail = doNoTEmail;
		this.doNotSms = doNotSms;
		this.isActive = isActive;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
		this.modifiedBy = modifiedBy;
		this.modifiedAt = modifiedAt;
		this.addresses = addresses;
		this.remarks = remarks;
		// this.inventoryIssues = inventoryIssues;
		this.account = account;
		// this.inventoryBookings = inventoryBookings;
		// this.opportunities = opportunities;
		this.leads = leads;
		this.salesOrders = salesOrders;
		this.generalActivitieses = generalActivitieses;
		// this.accountContacts = accountContacts;
		/*
		 * this.quotes = quotes; this.supplierProducts = supplierProducts;
		 */
		this.contactGroup = contactGroup;
		this.contactNumber = contactNumber;
	}

	@Id
	@GeneratedValue
	@Column(name = "ContactID", unique = true, nullable = false)
	public Long getContactId() {
		return this.contactId;
	}

	
	
	public void setContactId(Long contactId) {
		this.contactId = contactId;
	}

	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "ContactTypeID")
	public ListValues getListValues() {
		return this.listValues;
	}

	public void setListValues(ListValues listValues) {
		this.listValues = listValues;
	}

	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "LanguageID")
	public ListValues getListValuesByLanguageId() {
		return listValuesByLanguageId;
	}

	public void setListValuesByLanguageId(ListValues listValuesByLanguageId) {
		this.listValuesByLanguageId = listValuesByLanguageId;
	}

	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "GenderID")
	public ListValues getListValuesByGenderId() {
		return listValuesByGenderId;
	}

	public void setListValuesByGenderId(ListValues listValuesByGenderId) {
		this.listValuesByGenderId = listValuesByGenderId;
	}

	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "MaritalStausID")
	public ListValues getListValuesByMaritalStausId() {
		return listValuesByMaritalStausId;
	}

	public void setListValuesByMaritalStausId(
			ListValues listValuesByMaritalStausId) {
		this.listValuesByMaritalStausId = listValuesByMaritalStausId;
	}

	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "SalulationID")
	public ListValues getListValuesBySalulationId() {
		return listValuesBySalulationId;
	}

	public void setListValuesBySalulationId(ListValues listValuesBySalulationId) {
		this.listValuesBySalulationId = listValuesBySalulationId;
	}
	
	@Column(name = "ContactNumber")
	public String getContactNumber() {
		return this.contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	@Column(name = "ContactName")
	public String getContactName() {
		return this.contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	@Column(name = "ContactOrganizationName")
	public String getContactOrganizationName() {
		return this.contactOrganizationName;
	}

	public void setContactOrganizationName(String contactOrganizationName) {
		this.contactOrganizationName = contactOrganizationName;
	}

	@Column(name = "ContactOrganizationDesc")
	public String getContactOrganizationDesc() {
		return this.contactOrganizationDesc;
	}

	public void setContactOrganizationDesc(String contactOrganizationDesc) {
		this.contactOrganizationDesc = contactOrganizationDesc;
	}

	/*
	 * @Column(name = "Salutation") public ListValues getSalutation() { return
	 * this.salutation; }
	 * 
	 * public void setSalutation(ListValues listValuesBySalutation) {
	 * this.salutation = listValuesBySalutation; }
	 */

	@Column(name = "Title")
	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Column(name = "FirstName")
	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Column(name = "MiddelName")
	public String getMiddelName() {
		return this.middelName;
	}

	public void setMiddelName(String middelName) {
		this.middelName = middelName;
	}

	@Column(name = "LastName")
	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/*
	 * @Column(name = "sex") public String getSex() { return this.sex; }
	 * 
	 * public void setSex(String sex) { this.sex = sex; }
	 * 
	 * @Column(name = "MaritalStatus") public String getMaritalStatus() { return
	 * this.maritalStatus; }
	 * 
	 * public void setMaritalStatus(String maritalStatus) { this.maritalStatus =
	 * maritalStatus; }
	 */

	@Column(name = "Image")
	public byte[] getImage() {
		return this.image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	// @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "DateOfBirth", length = 23)
	public java.sql.Date getDateOfBirth() {
		return this.dateOfBirth;
	}

	public void setDateOfBirth(java.sql.Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	@Column(name = "EmailID")
	public String getEmailId() {
		return this.emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Column(name = "OtherEmailID")
	public String getOtherEmailId() {
		return this.otherEmailId;
	}

	public void setOtherEmailId(String otherEmailId) {
		this.otherEmailId = otherEmailId;
	}

	@Column(name = "Telephone")
	public String getTelephone() {
		return this.telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	@Column(name = "Mobile")
	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Column(name = "Fax")
	public String getFax() {
		return this.fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	@Column(name = "ContactParentID")
	public String getContactParentId() {
		return this.contactParentId;
	}

	public void setContactParentId(String contactParentId) {
		this.contactParentId = contactParentId;
	}

	// @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ContactRegistrationDate", length = 23)
	public Date getContactRegistrationDate() {
		return this.contactRegistrationDate;
	}

	public void setContactRegistrationDate(Date contactRegistrationDate) {
		this.contactRegistrationDate = contactRegistrationDate;
	}

	@Column(name = "ContactRegistrationNumber")
	public String getContactRegistrationNumber() {
		return this.contactRegistrationNumber;
	}

	public void setContactRegistrationNumber(String contactRegistrationNumber) {
		this.contactRegistrationNumber = contactRegistrationNumber;
	}

	@Column(name = "ContactOrganizationSICCode")
	public String getContactOrganizationSiccode() {
		return this.contactOrganizationSiccode;
	}

	public void setContactOrganizationSiccode(String contactOrganizationSiccode) {
		this.contactOrganizationSiccode = contactOrganizationSiccode;
	}

	@Column(name = "NumberOfEmployee")
	public Integer getNumberOfEmployee() {
		return this.numberOfEmployee;
	}

	public void setNumberOfEmployee(Integer numberOfEmployee) {
		this.numberOfEmployee = numberOfEmployee;
	}

	// @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ContactStartDate", length = 23)
	public java.sql.Date getContactStartDate() {
		return this.contactStartDate;
	}

	public void setContactStartDate(java.sql.Date contactStartDate) {
		this.contactStartDate = contactStartDate;
	}

	// @Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ContactEndDate", length = 23)
	public java.sql.Date getContactEndDate() {
		return this.contactEndDate;
	}

	public void setContactEndDate(java.sql.Date contactEndDate) {
		this.contactEndDate = contactEndDate;
	}

	@Column(name = "WebSite")
	public String getWebsite() {
		return this.website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	@Column(name = "LinkedinID")
	public String getLinkedinId() {
		return this.linkedinId;
	}

	public void setLinkedinId(String linkedinId) {
		this.linkedinId = linkedinId;
	}

	@Column(name = "FacebookID")
	public String getFacebookId() {
		return this.facebookId;
	}

	public void setFacebookId(String facebookId) {
		this.facebookId = facebookId;
	}

	@Column(name = "Map")
	public String getMap() {
		return this.map;
	}

	public void setMap(String map) {
		this.map = map;
	}

	@Column(name = "PrimaryContact")
	public Boolean getPrimaryContact() {
		return this.primaryContact;
	}

	public void setPrimaryContact(Boolean primaryContact) {
		this.primaryContact = primaryContact;
	}

	@Column(name = "Do_Not_Phone")
	public Boolean getDoNotPhone() {
		return this.doNotPhone;
	}

	public void setDoNotPhone(Boolean doNotPhone) {
		this.doNotPhone = doNotPhone;
	}

	@Column(name = "Do_Not_Mail")
	public Boolean getDoNotMail() {
		return this.doNotMail;
	}

	public void setDoNotMail(Boolean doNotMail) {
		this.doNotMail = doNotMail;
	}

	@Column(name = "Do_NoT_Email")
	public Boolean getDoNoTEmail() {
		return this.doNoTEmail;
	}

	public void setDoNoTEmail(Boolean doNoTEmail) {
		this.doNoTEmail = doNoTEmail;
	}

	@Column(name = "Do_Not_SMS")
	public Boolean getDoNotSms() {
		return this.doNotSms;
	}

	public void setDoNotSms(Boolean doNotSms) {
		this.doNotSms = doNotSms;
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

	@Column(name = "ModifiedBy")
	public String getModifiedBy() {
		return this.modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "ModifiedAt", length = 23)
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

	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getInventoryIssues() { return this.inventoryIssues; }
	 * 
	 * public void setInventoryIssues(Set inventoryIssues) {
	 * this.inventoryIssues = inventoryIssues; }
	 */
	@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "AccountID")
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
	
	/*
	@JsonBackReference
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "EntityID")
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	} */
	
	
	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getInventoryBookings() { return this.inventoryBookings; }
	 * 
	 * public void setInventoryBookings(Set inventoryBookings) {
	 * this.inventoryBookings = inventoryBookings; }
	 */
	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getOpportunities() { return this.opportunities; }
	 * 
	 * public void setOpportunities(Set opportunities) { this.opportunities =
	 * opportunities; }
	 */
	@JsonBackReference
	@OneToMany(fetch = FetchType.LAZY)
	public Set<Lead> getLeads() {
		return leads;
	}

	public void setLeads(Set<Lead> leads) {
		this.leads = leads;
	}

	@JsonBackReference
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "contact")
	public Set<SalesOrder> getSalesOrders() {
		return this.salesOrders;
	}

	public void setSalesOrders(Set<SalesOrder> salesOrders) {
		this.salesOrders = salesOrders;
	}
   
	@JsonBackReference
	@OneToMany(fetch = FetchType.LAZY)
	public Set<Address> getAddresses() {
		return this.addresses;
	}

	public void setAddresses(Set<Address> addresses) {
		this.addresses = addresses;
	}

	@JsonBackReference
	@OneToMany(fetch = FetchType.LAZY)
	public Set<GeneralActivities> getGeneralActivitieses() {
		return this.generalActivitieses;
	}

	public void setGeneralActivitieses(
			Set<GeneralActivities> generalActivitieses) {
		this.generalActivitieses = generalActivitieses;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "DepartmentID")
	public ContactGroup getContactGroup() {
		return this.contactGroup;
	}

	public void setContactGroup(ContactGroup contactGroup) {
		this.contactGroup = contactGroup;
	}

	@Transient
	public Account getContactAccountId() {
		return contactAccountId;
	}

	public void setContactAccountId(Account contactAccountId) {
		this.contactAccountId = contactAccountId;
	}
	
	
	/*public String getMessage() {
		return message;
	}*/


	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getAccountContacts() { return this.accountContacts; }
	 * 
	 * public void setAccountContacts(Set accountContacts) {
	 * this.accountContacts = accountContacts; }
	 */

	/*
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getQuotes() { return this.quotes; }
	 * 
	 * public void setQuotes(Set quotes) { this.quotes = quotes; }
	 * 
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getSalesOrders() { return this.salesOrders; }
	 * 
	 * public void setSalesOrders(Set salesOrders) { this.salesOrders =
	 * salesOrders; }
	 * 
	 * @OneToMany(fetch = FetchType.LAZY, mappedBy = "contact") public Set
	 * getSupplierProducts() { return this.supplierProducts; }
	 * 
	 * public void setSupplierProducts(Set supplierProducts) {
	 * this.supplierProducts = supplierProducts; }
	 */
}
