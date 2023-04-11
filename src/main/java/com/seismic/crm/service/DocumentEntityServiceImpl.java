package com.seismic.crm.service;

import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.stereotype.Service;

import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
import com.seismic.crm.model.DocumentEntity;
import com.seismic.crm.utils.SecurityContextUtil;
@Configuration
@Service
public class DocumentEntityServiceImpl implements DocumentEntityService {
	
	@Autowired
	GridFsOperations gridFsOperations;
	
	@Autowired
	SecurityContextUtil securityContextUtil;
	
	DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
	
	String dateStr = "Mon Jun 18 00:00:00 IST 2012";
	DateFormat formatter = new SimpleDateFormat("E MMM dd HH:mm:ss Z yyyy");
	
	@Override
	public void saveDocumentInfoAndData(InputStream filePath, String moduleName, String contentType,
			String moduleId, String entityName, int version,
			Date createdDate,String docName) throws ParseException {

		InputStream inputStream = null;
		try {
			DocumentEntity documentEntity = new DocumentEntity();

			documentEntity.setEntityID(moduleId);
			documentEntity.setDocName(docName);
			documentEntity.setEntityName(entityName);
			documentEntity.setContentType(contentType);
			documentEntity.setVersion(version);
			documentEntity.setOwner(securityContextUtil.getUsername());
			documentEntity.setCreatedDate(createdDate);

			DocumentEntity documentEntityData = new DocumentEntity(documentEntity.getEntityID(),
					documentEntity.getDocName(), documentEntity.getEntityName(),
					documentEntity.getVersion(), documentEntity.getCreatedDate(),documentEntity.getContentType(),documentEntity.getOwner());

			gridFsOperations.store(filePath, moduleName,
					moduleId, documentEntityData);
			
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		System.out.println("Done");
	}

	@Override
	public void saveDocumentInfoAndData(String fileKey, InputStream fileStream, String fileName, String contentType,
			String moduleName, int version,
			Date createdDate) throws ParseException {

		InputStream inputStream = null;
		try {
			DocumentEntity documentEntity = new DocumentEntity();

			documentEntity.setId(fileKey);
//			documentEntity.setEntityID(moduleId);
			documentEntity.setDocName(fileName);
//			documentEntity.setEntityName(entityName);
			documentEntity.setContentType(contentType);
			documentEntity.setVersion(version);
			documentEntity.setOwner(securityContextUtil.getUsername());
			documentEntity.setCreatedDate(createdDate);
//			documentEntity.setParam1(param1);
//			documentEntity.setParam2(param2);

//			DocumentEntity documentEntityData = new DocumentEntity(documentEntity.getEntityID(),
//					documentEntity.getDocName(), documentEntity.getEntityName(),
//					documentEntity.getVersion(), documentEntity.getCreatedDate(),documentEntity.getContentType(),documentEntity.getOwner());

			gridFsOperations.store(fileStream, fileName,
					contentType, documentEntity);
			
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		System.out.println("Done");
	}

	@Override
	public List<DocumentEntity> getViewDocumentDetails(String documentId, String moduleName) throws ParseException {

		List<GridFSDBFile> resultFirstDoc = gridFsOperations.find(new Query()
		.addCriteria(Criteria.where("filename").is(moduleName).and("contentType").is(documentId) ));
			System.out.println("size-----" + resultFirstDoc.size());
			System.out.println("Done");
			
			List<DocumentEntity> documentEntities =new ArrayList<DocumentEntity>();
			
			for (GridFSDBFile file : resultFirstDoc) {
				DBObject object = file.getMetaData();
				String id=(String) file.getId().toString();
				String documentEntityId=(object.get("entityID").toString());
				String linkPath="http://ec2-54-201-35-141.us-west-2.compute.amazonaws.com:8080/seismic/commonjsppages/documentController/downloadDocument.htm?documentId="+id+"&documentEntityId="+documentEntityId;
				DocumentEntity documentEntity = new DocumentEntity(); 
				System.out.println(" file.getId() "+file.getId());
				System.out.println(file.getContentType());
				documentEntity.setLink(linkPath);
				documentEntity.setId((String) file.getId().toString());
				documentEntity.setDocName(object.get("docName").toString());
				documentEntity.setEntityName(object.get("entityName").toString());
				if(object.get("owner")!=null){
				documentEntity.setOwner(object.get("owner").toString());
				}
				
				
				try{
//					Date date = df.parse(object.get("createdDate").toString());	
					Date date = (Date)formatter.parse(object.get("createdDate").toString());
					System.out.println(date); 
					documentEntity.setCreatedDate(date);
				}catch(Exception e){
					
				}
				
				
//				documentEntity.setCreatedDate(date);
				documentEntities.add(documentEntity);
			}
			
			return documentEntities;
	}

	@Override
	public List<GridFSDBFile> getViewDocument(String documentId) {

		List<GridFSDBFile> resultFirstDoc = gridFsOperations.find(new Query()
		.addCriteria(Criteria.where("contentType").is(documentId)));
		return resultFirstDoc;
	}

	@Override
	public GridFSDBFile getDocumentByFileKey(String fileKey) {

		GridFSDBFile resultDoc = gridFsOperations.findOne(new Query()
		.addCriteria(Criteria.where("metadata._id").is(fileKey)));
		return resultDoc;
	}

}
