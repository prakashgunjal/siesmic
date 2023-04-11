package com.seismic.crm.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;

import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
import com.seismic.crm.bean.FileUploadBean;
import com.seismic.crm.model.DocumentEntity;
import com.seismic.crm.service.DocumentEntityService;
import com.seismic.crm.utils.ExtJSResponse;

@Controller
@RequestMapping(value = "/commonjsppages/documentController")
public class DocumentController {

	@Autowired
	DocumentEntityService documentEntityService;

	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
	// get current date time with Date()
	Date date = new Date();

	@RequestMapping(value = "viewDocment", method = RequestMethod.GET)
	public ModelAndView viewDocment() {

		ModelAndView modelAndView = new ModelAndView(
				"commonjsppages/document/document");

		return modelAndView;
	}

	@RequestMapping(value = "/documentOpportunity", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ExtJSResponse documentOpportunity(FileUploadBean fileUpLoadBean,
			BindingResult result, @RequestParam String moduleName,
			@RequestParam String documentId,
			@RequestParam String lname) throws Exception {
		
		String moduleId = documentId;
		String docName = lname;
		
		
		String fileName = fileUpLoadBean.getFile().getOriginalFilename();
		String[] fileType = fileName.split("\\.");
		InputStream file = fileUpLoadBean.getFile().getInputStream();

		documentEntityService.saveDocumentInfoAndData(file, moduleName,
				fileType[1], moduleId, fileType[0], 4, 
						date,docName);

		System.out.println(" documentOpportunity ");
		return new ExtJSResponse(true, null);
	}

	@RequestMapping(value = "/viewDocument", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<DocumentEntity> viewDocument(@RequestParam String documentId,
			@RequestParam String moduleName) throws ParseException {
		
		List<DocumentEntity> documentEntities=documentEntityService.getViewDocumentDetails(documentId,moduleName);
		return documentEntities;
	}
	
	@RequestMapping(value = "/downloadDocument", method = RequestMethod.GET)
	public void  downloadDocument(@RequestParam String documentId,
			@RequestParam String documentEntityId,HttpServletResponse response) throws IOException{
		
		List<GridFSDBFile> inputStream = documentEntityService.getViewDocument(documentEntityId);
		String fileName =null;
		
		for (GridFSDBFile file : inputStream) {
			String id=(String) file.getId().toString();
			if(documentId.equals(id)){
			DBObject object = file.getMetaData();
			String entityName= object.get("entityName").toString();
			fileName = entityName+"."+object.get("contentType").toString();
			String tempPath = System.getProperty("java.io.tmpdir")+fileName;
			
			 file.writeTo(tempPath);
			 File downloadFile = new File(tempPath);
			 FileInputStream fileInputStream = new FileInputStream(downloadFile);
			 String mimeType = "application/"+object.get("contentType").toString();
				// set content attributes for the response
				response.setContentType(mimeType);
				response.setContentLength((int) downloadFile.length());
				// set headers for the response
				String headerKey = "Content-Disposition";
				String headerValue = String.format("attachment; filename=\"%s\"",
						fileName);
				response.setHeader(headerKey, headerValue);
				// get output stream of the response
				OutputStream outStream = response.getOutputStream();

				byte[] buffer = new byte[100000000];
				int bytesRead = -1;

				// write bytes read from the input stream into the output stream
				while ((bytesRead = fileInputStream.read(buffer)) != -1) {
					outStream.write(buffer, 0, bytesRead);
				}

				fileInputStream.close();
				outStream.close();
			}
		}
		System.out.println(" hello Download "+documentId);
	}
}
