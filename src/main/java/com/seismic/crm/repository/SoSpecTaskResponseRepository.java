package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.Question;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SoSpecQuestion;
import com.seismic.crm.model.SoSpecQuestionResponse;
import com.seismic.crm.model.SoSpecTask;
import com.seismic.crm.model.SoSpecTaskResponse;
import com.seismic.crm.model.SupplierProduct;

public interface SoSpecTaskResponseRepository extends JpaRepository<SoSpecTaskResponse, Long> {
//	@Query("SELECT qr FROM SoSpecQuestionResponse qr JOIN qr.soSpecQuestion q "
//			+ "WHERE q.productCategory = ?3 AND ((qr = null) OR (qr.salesOrder = ?1 AND "
//			+ "qr.product = ?2 AND qr.soSpecQuestion = ?4)) ")
//	SoSpecQuestionResponse getQuestionResponseWithDeps(SalesOrder so, Product product, 
//			ProductCategory productCat, SoSpecQuestion question);
	
	List<SoSpecTaskResponse> findBySoSpecQuestionResponse(SoSpecQuestionResponse quesResponse);

	@Modifying  
	@Transactional
	@Query("UPDATE SoSpecTaskResponse tr SET tr.selectedFlag = false WHERE tr.soSpecQuestionResponse = ?1")
	public void unselectTasksRespsOfQuesResp(SoSpecQuestionResponse quesResponse);	

	@Query("SELECT tr FROM SoSpecTaskResponse tr JOIN FETCH tr.soSpecQuestionResponse qr JOIN FETCH "
			+ "tr.soSpecTask t WHERE qr = ?1 AND t.taskId = ?2")
	public List<SoSpecTaskResponse> taskRespByQuesRespAndTaskId(SoSpecQuestionResponse quesResponse, Long taskId);	

}
