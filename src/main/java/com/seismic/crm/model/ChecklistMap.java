package com.seismic.crm.model;

// Generated Jan 13, 2014 1:28:37 PM by Hibernate Tools 4.0.0

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ChecklistMap generated by hbm2java
 */
@Entity
@Table(name = "ChecklistMap", schema = "dbo", catalog = "SEISMIC_CRM_DEV")
public class ChecklistMap implements java.io.Serializable {

	private long checklistMapId;
	private ChecklistProductCategory checklistProductCategory;
	private ChecklistDocument checklistDocument;
	private Boolean checklistReference;
	private Boolean isActive;
	private String createdby;
	private Date createdAt;
	private String modifiedBy;
	private Date modifiedAt;
	private String remarks;

	public ChecklistMap() {
	}

	public ChecklistMap(long checklistMapId) {
		this.checklistMapId = checklistMapId;
	}

	public ChecklistMap(long checklistMapId,
			ChecklistProductCategory checklistProductCategory,
			ChecklistDocument checklistDocument, Boolean checklistReference,
			Boolean isActive, String createdby, Date createdAt,
			String modifiedBy, Date modifiedAt, String remarks) {
		this.checklistMapId = checklistMapId;
		this.checklistProductCategory = checklistProductCategory;
		this.checklistDocument = checklistDocument;
		this.checklistReference = checklistReference;
		this.isActive = isActive;
		this.createdby = createdby;
		this.createdAt = createdAt;
		this.modifiedBy = modifiedBy;
		this.modifiedAt = modifiedAt;
		this.remarks = remarks;
	}

	@Id
	@GeneratedValue
	@Column(name = "ChecklistMapID", unique = true, nullable = false)
	public long getChecklistMapId() {
		return this.checklistMapId;
	}

	public void setChecklistMapId(long checklistMapId) {
		this.checklistMapId = checklistMapId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ChecklistProductCategoryID")
	public ChecklistProductCategory getChecklistProductCategory() {
		return this.checklistProductCategory;
	}

	public void setChecklistProductCategory(
			ChecklistProductCategory checklistProductCategory) {
		this.checklistProductCategory = checklistProductCategory;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ChecklistDocumentID")
	public ChecklistDocument getChecklistDocument() {
		return this.checklistDocument;
	}

	public void setChecklistDocument(ChecklistDocument checklistDocument) {
		this.checklistDocument = checklistDocument;
	}

	@Column(name = "ChecklistReference")
	public Boolean getChecklistReference() {
		return this.checklistReference;
	}

	public void setChecklistReference(Boolean checklistReference) {
		this.checklistReference = checklistReference;
	}

	@Column(name = "IsActive")
	public Boolean getIsActive() {
		return this.isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	@Column(name = "Createdby")
	public String getCreatedby() {
		return this.createdby;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
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

}
