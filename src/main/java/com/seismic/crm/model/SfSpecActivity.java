package com.seismic.crm.model;

// Generated Jan 6, 2014 9:20:23 PM by Hibernate Tools 4.0.0

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
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * SfSpecActivity generated by hbm2java
 */
@Entity
@Table(name = "SfSpecActivity", schema = "dbo", catalog = "SEISMIC_CRM_DEV")
public class SfSpecActivity implements java.io.Serializable {

	private long activityId;
	private SoSpecTask soSpecTask;
	private String activityName;
	private Integer activitySeq;
	private Set<SfSpecActivityResponse> sfSpecActivityResponses = new LinkedHashSet(0);
	
//	private Long taskResponseId;
//	private Long responseId;
//	private Boolean responseSelectedFlag;
//	private Date responseStartDate;
//	private Date responseEndDate;
//	private String responseAssignedTo;

	public SfSpecActivity() {
	}

	public SfSpecActivity(long activityId) {
		this.activityId = activityId;
	}

	public SfSpecActivity(long activityId, SoSpecTask soSpecTask,
			String activityName, Integer activitySeq, Set sfSpecActivityResponses) {
		this.activityId = activityId;
		this.soSpecTask = soSpecTask;
		this.activityName = activityName;
		this.activitySeq = activitySeq;
		this.sfSpecActivityResponses = sfSpecActivityResponses;
	}

	@Id
	@GeneratedValue
	@Column(name = "ActivityID", unique = true, nullable = false)
	public long getActivityId() {
		return this.activityId;
	}

	public void setActivityId(long activityId) {
		this.activityId = activityId;
	}

	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "TaskID")
	public SoSpecTask getSoSpecTask() {
		return this.soSpecTask;
	}

	public void setSoSpecTask(SoSpecTask soSpecTask) {
		this.soSpecTask = soSpecTask;
	}

	@Column(name = "ActivityName")
	public String getActivityName() {
		return this.activityName;
	}

	public void setActivityName(String activityName) {
		this.activityName = activityName;
	}

	@Column(name = "ActivitySeq")
	public Integer getActivitySeq() {
		return this.activitySeq;
	}

	public void setActivitySeq(Integer activitySeq) {
		this.activitySeq = activitySeq;
	}

	@JsonManagedReference
	@OneToMany(fetch = FetchType.LAZY, mappedBy = "sfSpecActivity")
	public Set<SfSpecActivityResponse> getSfSpecActivityResponses() {
		return this.sfSpecActivityResponses;
	}

	public void setSfSpecActivityResponses(Set<SfSpecActivityResponse> sfSpecActivityResponses) {
		this.sfSpecActivityResponses = sfSpecActivityResponses;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (activityId ^ (activityId >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (!(obj instanceof SfSpecActivity))
			return false;
		SfSpecActivity other = (SfSpecActivity) obj;
		if (activityId != other.activityId)
			return false;
		return true;
	}

//	@Transient
//	public Long getTaskResponseId() {
//		if(this.soSpecTask.getSoSpecTaskResponses().isEmpty()){
//			return -1l;
//		}
//		return ((SoSpecTaskResponse)this.soSpecTask.getSoSpecTaskResponses().iterator().next()).getTaskResponseId();
//	}
//
//	@Transient
//	public Long getResponseId() {
//		if(sfSpecActivityResponses.isEmpty()){
//			return -1l;
//		}
//		return ((SfSpecActivityResponse)this.sfSpecActivityResponses.iterator().next()).getActivityResponseId();
//	}
//
//	@Transient
//	public Boolean getResponseSelectedFlag() {
//		if(sfSpecActivityResponses.isEmpty()){
//			return false;
//		}
//		return ((SfSpecActivityResponse)this.sfSpecActivityResponses.iterator().next()).getSelectedFlag();
//	}
//
//	@Transient
//	public Date getResponseStartDate() {
//		if(sfSpecActivityResponses.isEmpty()){
//			return null;
//		}
//		return ((SfSpecActivityResponse)this.sfSpecActivityResponses.iterator().next()).getActivityStartDate();
//	}
//
//	@Transient
//	public Date getResponseEndDate() {
//		if(sfSpecActivityResponses.isEmpty()){
//			return null;
//		}
//		return ((SfSpecActivityResponse)this.sfSpecActivityResponses.iterator().next()).getActivityEndDate();
//	}
//
//	@Transient
//	public String getResponseAssignedTo() {
//		if(sfSpecActivityResponses.isEmpty()){
//			return null;
//		}
//		return ((SfSpecActivityResponse)this.sfSpecActivityResponses.iterator().next()).getAssignedTo();
//	}

	
	
}
