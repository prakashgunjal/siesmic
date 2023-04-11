package com.seismic.crm.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

@Document(collection = "entities")
public class DocumentEntity {

	@Id
	private String id;

	@Indexed
	private String entityID;
	private String docName;
	private String entityName;
	private String contentType;
	private int version;
	private String link;
	private String owner;
	private Date createdDate;

	public DocumentEntity() {
	}

	public DocumentEntity(String entityID, String docName, String entityName,
			int version, Date createdDate, String contentType, String owner) {
		super();
		this.entityID = entityID;
		this.docName = docName;
		this.entityName = entityName;
		this.version = version;
		this.createdDate = createdDate;
		this.contentType = contentType;
		this.owner = owner;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getEntityID() {
		return entityID;
	}

	public void setEntityID(String entityID) {
		this.entityID = entityID;
	}

	public String getDocName() {
		return docName;
	}

	public void setDocName(String docName) {
		this.docName = docName;
	}

	public String getEntityName() {
		return entityName;
	}

	public void setEntityName(String entityName) {
		this.entityName = entityName;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	@Override
	public String toString() {
		return "Entity [id=" + id + ", entityID=" + entityID + ", docName="
				+ docName + ", entityName=" + entityName + ", version="
				+ version + ", createdDate=" + createdDate + ", contentType="
				+ contentType + " ,owner" + owner + "]";
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

}
