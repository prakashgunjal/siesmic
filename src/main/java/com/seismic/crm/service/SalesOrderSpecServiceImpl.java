package com.seismic.crm.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.exception.SalesOrderNotFound;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;
import com.seismic.crm.model.SoSpecQuestion;
import com.seismic.crm.model.SoSpecQuestionResponse;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.ProductCategoryRepository;
import com.seismic.crm.repository.ProductRepository;
import com.seismic.crm.repository.ProductSubCategoryRepository;
import com.seismic.crm.repository.SalesOrderProductDetailRepository;
import com.seismic.crm.repository.SalesOrderRepository;
import com.seismic.crm.repository.SoSpecQuestionRepository;
import com.seismic.crm.repository.SoSpecTaskResponseRepository;

@Service
public class SalesOrderSpecServiceImpl implements SalesOrderSpecService {

	@Autowired
	private SalesOrderRepository salesOrderRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private SoSpecQuestionRepository soSpecQuestionRepository;

	@Autowired
	private SoSpecTaskResponseRepository soSpecTaskResponseRepository;
	
	@Transactional
	@Override
	public List<SoSpecQuestion> specResponses(Long salesOrderId, Long productId) {
		Product product = productRepository.findOne(productId);
		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
		return soSpecQuestionRepository.specResponses(so, product, product.getProductCategory());
	}

//	@Transactional
//	@Override
//	public SoSpecQuestion saveSpecTasks(/*Long salesOrderId, Long quesRespId, 
//			Map<String, Object> reqMap*/SoSpecQuestionResponse soSpecQuesResp) {
////		Long productId = Long.valueOf(reqMap.get("productId").toString());
////		Long questionId = Long.valueOf(reqMap.get("questionId").toString());
////		List<Object> arrTaskIds = (ArrayList<Object>)reqMap.get("arrTaskIds");
////		SalesOrder so = salesOrderRepository.findOne(salesOrderId);
////		Product product = productRepository.findOne(productId);
////		SoSpecQuestion question = soSpecQuestionRepository.findOne(questionId);
////		SoSpecQuestionResponse quesResp = null;
////		if((quesRespId != null) && (quesRespId > 0)){
////			quesResp = soSpecQuestionResponseRepository.findOne(quesRespId);
////		}
////		else{
////			quesResp = new SoSpecQuestionResponse();
////			quesResp.setSalesOrder(so);
////			quesResp.setProduct(product);
////			
////			quesResp.setSoSpecQuestion(question);
////			quesResp = soSpecQuestionResponseRepository.save(quesResp);
////		}
//////		List<SoSpecTaskResponse> taskRespRecs = soSpecTaskResponseRepository.findBySoSpecQuestionResponse(quesResp);
//		soSpecTaskResponseRepository.unselectTasksRespsOfQuesResp(soSpecQuesResp);
//		
////		for(Object taskId:arrTaskIds){
////			SoSpecTaskResponse rec = new SoSpecTaskResponse();
////			rec.setSelectedFlag(true);
////			rec.setSoSpecTask(soSpecTaskRepository.findOne(Long.valueOf(taskId.toString())));
////			rec.setSoSpecQuestionResponse(quesResp);
////			soSpecTaskResponseRepository.saveAndFlush(rec);
////		}
////		return soSpecQuestionRepository.specQuestionWithDeps(so, product, question);
//		return null;
//	}
}
