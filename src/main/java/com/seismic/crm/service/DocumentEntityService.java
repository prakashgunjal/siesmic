package com.seismic.crm.service;

import java.io.InputStream;
import java.text.ParseException;
import java.util.Date;
import java.util.List;

import org.springframework.data.mongodb.gridfs.GridFsOperations;

import com.mongodb.gridfs.GridFSDBFile;
import com.seismic.crm.model.DocumentEntity;


public interface DocumentEntityService {

	void saveDocumentInfoAndData(InputStream file,String fileName, String contentType, String EntityID, String moduleName,
			int version, Date date, String docName) throws ParseException;

	public void saveDocumentInfoAndData(String fileKey, InputStream fileStream, String fileName, String contentType,
			String moduleName, int version, Date createdDate) throws ParseException;
			
	List<DocumentEntity> getViewDocumentDetails(String documentId, String moduleName) throws ParseException;

	List<GridFSDBFile> getViewDocument(String documentId);
	
	public GridFSDBFile getDocumentByFileKey(String fileKey);
	
}
