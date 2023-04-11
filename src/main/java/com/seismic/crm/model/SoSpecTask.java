package com.seismic.crm.model;

// Generated Jan 3, 2014 9:30:19 PM by Hibernate Tools 4.0.0

import java.util.Date;
import java.util.HashSet;
import java.util.LinkedHashSet;
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

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


/**
 * SoSpecTask generated by hbm2java
 */
@Entity
@Table(name = "SoSpecTask", schema = "dbo", catalog = "SEISMIC_CRM_DEV")
public class SoSpecTask implements java.io.Serializable {

	private long taskId;
	private SoSpecQuestion soSpecQuestion;
	private String taskName;
	private String taskDesc;
	private Integer taskSeq;
	private Boolean isActive;
	private String createdBy;
	private Date createdAt;
	private String modifiedBy;
	private String modifiedAt;
	private String remarks;
	private Set<SoSpecTaskResponse> soSpecTaskResponses = new LinkedHashSet(0);
	private Set<SfSpecActivity> sfSpecActivities = new HashSet<SfSpecActivity>(
			0);

	public SoSpecTask() {
	}

	public SoSpecTask(long taskId) {
		this.taskId = taskId;
	}

	public SoSpecTask(long taskId, SoSpecQuestion soSpecQuestion,
			String taskName, String taskDesc, Integer taskSeq,
			Boolean isActive, String createdBy, Date createdAt,
			String modifiedBy, String modifiedAt, String remarks,
			Set soSpecTaskResponses) {
		this.taskId = taskId;
		this.soSpecQuestion = soSpecQuestion;
		this.taskName = taskName;
		this.taskDesc = taskDesc;
		this.taskSeq = taskSeq;
		this.isActive = isActive;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
		this.modifiedBy = modifiedBy;
		this.modifiedAt = modifiedAt;
		this.remarks = remarks;
		this.soSpecTaskResponses = soSpecTaskResponses;
	}

	@Id
	@GeneratedValue
	@Column(name = "TaskID", unique = true, nullable = false)
	public long getTaskId() {
		return this.taskId;
	}

	public void setTaskId(long taskId) {
		this.taskId = taskId;
	}

	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "QuestionID")
	public SoSpecQuestion getSoSpecQuestion() {
		return this.soSpecQuestion;
	}

	public void setSoSpecQuestion(SoSpecQuestion soSpecQuestion) {
		this.soSpecQuestion = soSpecQuestion;
	}

	@Column(name = "TaskName")
	public String getTaskName() {
		return this.taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	@Column(name = "TaskDesc")
	public String getTaskDesc() {
		return this.taskDesc;
	}

	public void setTaskDesc(String taskDesc) {
		this.taskDesc = taskDesc;
	}

	@Column(name = "TaskSeq")
	public Integer getTaskSeq() {
		return this.taskSeq;
	}

	public void setTaskSeq(Integer taskSeq) {
		this.taskSeq = taskSeq;
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

	@Column(name = "ModifiedAt")
	public String getModifiedAt() {
		return this.modifiedAt;
	}

	public void setModifiedAt(String modifiedAt) {
		this.modifiedAt = modifiedAt;
	}

	@Column(name = "Remarks")
	public String getRemarks() {
		return this.remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "soSpecTask")
	public Set<SoSpecTaskResponse> getSoSpecTaskResponses() {
		return this.soSpecTaskResponses;
	}

	public void setSoSpecTaskResponses(Set<SoSpecTaskResponse> soSpecTaskResponses) {
		this.soSpecTaskResponses = soSpecTaskResponses;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "soSpecTask")
	public Set<SfSpecActivity> getSfSpecActivities() {
		return this.sfSpecActivities;
	}

	public void setSfSpecActivities(Set<SfSpecActivity> sfSpecActivities) {
		this.sfSpecActivities = sfSpecActivities;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (taskId ^ (taskId >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof SoSpecTask))
			return false;
		SoSpecTask other = (SoSpecTask) obj;
		if (taskId != other.taskId)
			return false;
		return true;
	}

}