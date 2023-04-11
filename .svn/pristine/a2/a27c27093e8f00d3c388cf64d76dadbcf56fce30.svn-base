package com.seismic.crm.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.multipart.MultipartFile;

import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
import com.seismic.crm.bean.FileUploadBean;
import com.seismic.crm.model.ChecklistDocument;
import com.seismic.crm.model.ChecklistProductCategory;
import com.seismic.crm.model.ChecklistResponse;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.repository.ChecklistDocumentRepository;
import com.seismic.crm.repository.ChecklistProductCategoryRepository;
import com.seismic.crm.repository.ChecklistResponseRepository;
import com.seismic.crm.repository.SalesOrderRepository;
import com.seismic.crm.service.DocumentEntityService;
import com.seismic.crm.utils.ExtJSResponse;
import com.seismic.crm.utils.SecurityContextUtil;


@Controller
@RequestMapping(value = "/salesOrder")
public class SalesFormChecklistController {
				
	@Autowired
	SecurityContextUtil securityContextUtil;
	
	@Autowired
	private SalesOrderRepository salesOrderRepository;

	@Autowired
	private ChecklistProductCategoryRepository checklistProductCategoryRepository;
	
	@Autowired
	private ChecklistDocumentRepository checklistDocumentRepository;
	
	@Autowired
	private ChecklistResponseRepository checklistResponseRepository;
	
	@Autowired
	DocumentEntityService documentEntityService;

//	@Autowired
//	private SalesFormChecklistProductRepository checklistProductRepository;
		
//	@Autowired
//	private SalesFormChecklistService checklistService;
   
	
	@RequestMapping(value = "{salesOrderId}/checklistProductCategories", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<ProductCategory> checklistProductCategories(@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
//		List<ProductCategory> list = checklistProductCategoryRepository.relevantProdCat(so);
		List<ProductCategory> list = checklistProductCategoryRepository.allProdCat();
		return list;
	} 
	     
	@RequestMapping(value = "{salesOrderId}/checklistDocResponses", method = RequestMethod.GET, produces = "application/json")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	List<Object> checklistDocResponses(@PathVariable Long salesOrderId) {
		Object[] objArr= new Object[2]; 
		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
//		List<ChecklistDocument> uiDocs = checklistDocumentRepository.documents(so);
		List<ChecklistDocument> uiDocs1 = checklistDocumentRepository.allDocuments();
		Set<ChecklistDocument> uiAllDocs = new LinkedHashSet<ChecklistDocument>(uiDocs1);
		List<ProductCategory> relProdCats = checklistProductCategoryRepository.relevantProdCat(so);
//		Set<ChecklistDocument> docResps = new LinkedHashSet<ChecklistDocument>(checklistDocumentRepository.documents(so));

		List<ProductCategory> uiCats = checklistProductCategories(salesOrderId);
//		List<ProductCategory> uiCats = checklistProductCategoryRepository.relevantProdCat(so);
//		List<ProductCategory> allCats = checklistProductCategories(salesOrderId);
		List<ChecklistResponse> responses = checklistResponseRepository.responses(so);
		Boolean allUploaded = true;
		
		if((uiAllDocs == null) || (uiAllDocs.isEmpty())){
			return Arrays.asList(uiAllDocs, allUploaded);
		}
		
		for(ChecklistDocument doc:uiAllDocs){
//			doc.setChecklistResponses(new LinkedHashSet(0));

			Set<ChecklistProductCategory> docCats = doc.getChecklistProductCategories();

			if((uiCats == null) || (uiCats.isEmpty())){
				break;
			}
			
//			Long chPcId = -1L;
			for(ProductCategory cat:uiCats){
				Map<String, String> uiItems = new HashMap<String,String>();
//				Long dummyRespId = -1L;
//				Boolean respAddedflag = false;
				Boolean respFlag = false;
				if((responses != null) && (!responses.isEmpty())){
					for(ChecklistResponse resp:responses){
						if(resp.getChecklistProductCategory().getProductCategory().equals(cat) &&
								resp.getChecklistDocument().equals(doc)){
//							doc.getChecklistResponses().add(resp);
//							doc.getUiResponses().add("Uploaded");
//							doc.getUiFilenames().add(resp.getChecklistFilename());
							Map<String, String> m = new HashMap<String,String>();
							m.put("status", "Uploaded");
							m.put("filename", resp.getChecklistFilename());
							m.put("fileKey", resp.getChecklistFileKey());
							doc.getUiResps().add(m);
//							resp.setChecklistDocument(null);
//							resp.setChecklistProductCategory(null);
							respFlag = true;
//							respAddedflag = true;
							break;
						}
					}
				}

				if((docCats != null) && (!docCats.isEmpty()) && (respFlag == false)){
					Boolean tempFlag = false;
					if((relProdCats != null) && (!relProdCats.isEmpty())){
						for(ProductCategory item:relProdCats){
							if(item.equals(cat)){
								tempFlag = true;
							}
						}
					}
					
					if(tempFlag == true){
						for(ChecklistProductCategory chpc:docCats){
							if(chpc.getProductCategory().equals(cat)){
//								doc.getUiResponses().add("Editable");
//								doc.getUiFilenames().add("");
								Map<String, String> m = new HashMap<String,String>();
								m.put("status", "Editable");
								m.put("filename", "");
								m.put("fileKey", "");
								doc.getUiResps().add(m);
								allUploaded = false;
								respFlag = true;
								break;
							}
						}
					}
				}
				
				if(respFlag == false){
//					ChecklistProductCategory dummyChpc = new ChecklistProductCategory();
//					dummyChpc.setChecklistProductCategoryId(chPcId--);
//					doc.getChecklistProductCategories().add(dummyChpc);
//					doc.getUiResponses().add("Noneditable");
//					doc.getUiFilenames().add("");
					Map<String, String> m = new HashMap<String,String>();
					m.put("status", "Noneditable");
					m.put("filename", "");
					m.put("fileKey", "");
					doc.getUiResps().add(m);
				}
				

//				
//				if(respAddedflag == false){
//					ChecklistResponse r = new ChecklistResponse();
//					r.setChecklistResponseId(dummyRespId--);
//					doc.getChecklistResponses().add(r);
//				}
			}
		}
		
		return Arrays.asList(uiAllDocs, allUploaded);
	}
	
	@RequestMapping(value = "/{salesOrderId}/checklistDocument/save", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	ChecklistResponse saveChecklistDocument(@RequestParam("file") MultipartFile file,/*FileUploadBean fileUpLoadBean,
			BindingResult result,*/ @PathVariable Long salesOrderId, @RequestParam Long checklistDocId,
			@RequestParam Long productCatId/*, @RequestParam String documentId,
			@RequestParam String lname*/) throws Exception {
		
		String moduleId = "Sales form checklist document";
		/*String docName = "SF-checklist-doc-" + salesOrderId.toString() + "-" + 
							checklistDocId.toString() + "-" + productCatId.toString();*/
		

//		String fileName = file.getFile().getOriginalFilename();
//		String[] fileType = fileName.split("\\.");
		if(file.isEmpty()){
			throw new Exception("No file selected or file is empty.");
		}
		file.getName();
		InputStream fileStream = file.getInputStream();
		String fileKey = java.util.UUID.randomUUID().toString();
		documentEntityService.saveDocumentInfoAndData(fileKey, file.getInputStream(),
				file.getOriginalFilename(), file.getContentType(), "Salesform checklist", 4, 
						new Date());
		
		List<ChecklistResponse> respList = checklistResponseRepository.getChecklistResponse(salesOrderId, checklistDocId, productCatId);
		ChecklistResponse respItem = null;
		if(respList == null || respList.isEmpty()){
			respItem = new ChecklistResponse();
		}
		else{
			respItem = respList.get(0); 
		}
		respItem.setChecklistFileKey(fileKey);
		respItem.setChecklistFilename(file.getOriginalFilename());
		respItem.setSalesOrder(salesOrderRepository.findOne(salesOrderId));
		respItem.setChecklistDocument(checklistDocumentRepository.findOne(checklistDocId));
		respItem.setChecklistProductCategory(checklistProductCategoryRepository.getChecklistProductCategory(productCatId, checklistDocId));
		return checklistResponseRepository.save(respItem);
	}

	@RequestMapping(value = "/{salesOrderId}/checklistGridSubmit", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody
	Boolean saveSalesOrderSubmittedStatus(@PathVariable Long salesOrderId) {
		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
		so.setSubmittedStatus(true);
		so.setSubmittedBy(securityContextUtil.getUsername());
		so.setSubmitDate(new java.sql.Date((new Date()).getTime()));
		salesOrderRepository.save(so);
		return true;
	}

	@RequestMapping(value = "/{salesOrderId}/viewChecklistFilename", method = RequestMethod.GET)
	public void  downloadDocument(@RequestParam String fileKey,
			@RequestParam String filename,HttpServletResponse response) throws IOException{
		
//		List<GridFSDBFile> inputStream = documentEntityService.getViewDocumentByFileKey(fileKey);
		GridFSDBFile file = documentEntityService.getDocumentByFileKey(fileKey);
		String fileName =file.getFilename();
		
//		for (GridFSDBFile file : inputStream) {
			String id=(String) file.getId().toString();
//			if(documentId.equals(id)){
			DBObject object = file.getMetaData();
//			String entityName= object.get("entityName").toString();
//			fileName = filename + "." + object.get("contentType").toString();
			String tempPath = System.getProperty("java.io.tmpdir")+fileName;
			
			 file.writeTo(tempPath);
			 File downloadFile = new File(tempPath);
			 FileInputStream fileInputStream = new FileInputStream(downloadFile);
//			 String mimeType = "application/"+object.get("contentType").toString();
			 String mimeType = file.getContentType();
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
//			}
//		}
//		System.out.println(" hello Download "+documentId);
	}

//	@RequestMapping(value = "{salesOrderId}/checklistDocResponses", method = RequestMethod.GET, produces = "application/json")
//	@ResponseStatus(HttpStatus.OK)
//	public @ResponseBody
//	List<ChecklistDocument> checklistDocResponses(@PathVariable Long salesOrderId) {
//		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
//		List<ChecklistDocument> list = checklistDocumentRepository.docWithResponses(so);
//		
//		List<ChecklistResponse> list1 = checklistDocumentRepository.docWithResponses1(so);
//		
//		//Hibernate config error is present, so filter repeated lists records.
//		List<ChecklistDocument> jsonList = new ArrayList<ChecklistDocument>();
//		if(list != null || list.isEmpty()){
//			return null;
//		}
//		
//		Long curDocId = -1L;
//		for(Integer i=0; i < list.size(); i++ ){
//			ChecklistDocument doc = list.get(i);
////			doc.getChecklistResponses().add(list1.get(i));
//			jsonList.add(doc);
////			if(doc.getChecklistDocumentId() != curDocId){
////				curDocId = doc.getChecklistDocumentId();
////				jsonList.add(doc);
////			}
//		}
////		List<ChecklistDocument> jsonList = new ArrayList<ChecklistDocument>();
////		Long curDocId = -1L;
////		for(ChecklistDocument doc:list){
////			if(doc.getChecklistDocumentId() != curDocId){
////				curDocId = doc.getChecklistDocumentId();
////				jsonList.add(doc);
////			}
////		}
//		return jsonList;
////		return list;
//	} 
	     
//	@RequestMapping(value = "/checklistDocument", method = RequestMethod.GET, produces = "application/json")
//	@ResponseStatus(HttpStatus.OK)
//	public @ResponseBody
//	List<ChecklistDocument> getAllChecklistDocument() {	   		
//		List<ChecklistDocument> list = checklistRepository.findAll();    
//		System.out.println("Controller:: Checklist Data="+list  );  
//		return list;
//	} 
//	     
//   
//	@RequestMapping(value = "/checklistProduct", method = RequestMethod.GET, produces = "application/json")
//	@ResponseStatus(HttpStatus.OK)
//	public @ResponseBody
//	List<ChecklistProduct> getAllChecklistProduct() {	   		
//		List<ChecklistProduct> list = checklistProductRepository.findAll();  
//		for(ChecklistProduct clp:list ){
//		System.out.println("  ProductCategoryID=  " + clp.getProductCategoryID() );	 
//		System.out.println(" ProductCategoryName= " + clp.getProductCategoryName() );
//		}
//		System.out.println("Controller:: Checklist Product="+list  );  
//		return list;
//	} 

}



