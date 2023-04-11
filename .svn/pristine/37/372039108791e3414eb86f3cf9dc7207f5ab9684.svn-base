package com.seismic.crm.service;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;

import com.seismic.crm.exception.SalesOrderNotFound;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;
import com.seismic.crm.model.SoSpecQuestion;
import com.seismic.crm.model.SoSpecQuestionResponse;

public interface SalesOrderSpecService {

	List<SoSpecQuestion> specResponses(@PathVariable Long salesOrderId, @PathVariable Long productId);
	
//	public SoSpecQuestion saveSpecTasks(/*Long salesOrderId, Long quesRespId, 
//			Map<String, Object> reqMap*/SoSpecQuestionResponse soSpecQuesResp);
}
