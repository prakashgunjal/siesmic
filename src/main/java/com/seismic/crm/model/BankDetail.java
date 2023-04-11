package com.seismic.crm.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "SEISMIC_CRM_DEV.dbo.BankDetail")
public class BankDetail {
	@Id
	@GeneratedValue
	@Column(name = "BankID")
	private Integer BankID;

	@Column(name = "BankContactID")
	private Integer BankContactID;

	@Column(name = "AccountID")
	private Integer AccountID;

	@Column(name = "BankAccountNumbar")
	private String BankAccountNumbar;

	@Column(name = "BankAccountName")
	private String BankAccountName;

	@Column(name = "BankAccountSortCode")
	private String BankAccountSortCode;

	@Column(name = "CreatedBy")
	/* IsActive; */
	private String CreatedBy;

	@Column(name = "CreatedAt")
	private Date CreatedAt;

	@Column(name = "ModifiedBy")
	private String ModifiedBy;

	@Column(name = "ModifiedAt")
	private Date ModifiedAt;

	@Column(name = "Remarks")
	private String Remarks;
	
/*	// Join with SalesOrder Table
	@JsonBackReference
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "bankDetail")
	private Set<SalesOrder> salesOrder;

	// Join with Account
	@JsonManagedReference
	@ManyToOne(fetch = FetchType.EAGER, targetEntity = Account.class)
	@JoinColumn(name = "AccountID", insertable = false, updatable = false)
	private Account account;*/



	public BankDetail() {
	}

	// Getter and setter

	/*public Set<SalesOrder> getSalesOrder() {
		return salesOrder;
	}

	public void setSalesOrder(Set<SalesOrder> salesOrder) {
		this.salesOrder = salesOrder;
	}

	public Account getAccount() {
		return account;
	}

	public void setAccount(Account account) {
		this.account = account;
	}*/

	public Integer getBankID() {
		return BankID;
	}

	public void setBankID(Integer bankID) {
		BankID = bankID;
	}

	public Integer getBankContactID() {
		return BankContactID;
	}

	public void setBankContactID(Integer bankContactID) {
		BankContactID = bankContactID;
	}

	public Integer getAccountID() {
		return AccountID;
	}

	public void setAccountID(Integer accountID) {
		AccountID = accountID;
	}

	public String getBankAccountNumbar() {
		return BankAccountNumbar;
	}

	public void setBankAccountNumbar(String bankAccountNumbar) {
		BankAccountNumbar = bankAccountNumbar;
	}

	public String getBankAccountName() {
		return BankAccountName;
	}

	public void setBankAccountName(String bankAccountName) {
		BankAccountName = bankAccountName;
	}

	public String getBankAccountSortCode() {
		return BankAccountSortCode;
	}

	public void setBankAccountSortCode(String bankAccountSortCode) {
		BankAccountSortCode = bankAccountSortCode;
	}

	public String getCreatedBy() {
		return CreatedBy;
	}

	public void setCreatedBy(String createdBy) {
		CreatedBy = createdBy;
	}

	public Date getCreatedAt() {
		return CreatedAt;
	}

	public void setCreatedAt(Date createdAt) {
		CreatedAt = createdAt;
	}

	public String getModifiedBy() {
		return ModifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		ModifiedBy = modifiedBy;
	}

	public Date getModifiedAt() {
		return ModifiedAt;
	}

	public void setModifiedAt(Date modifiedAt) {
		ModifiedAt = modifiedAt;
	}

	public String getRemarks() {
		return Remarks;
	}

	public void setRemarks(String remarks) {
		Remarks = remarks;
	}
}
