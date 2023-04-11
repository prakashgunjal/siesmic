package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.Question;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SfSpecActivity;
import com.seismic.crm.model.SfSpecActivityResponse;
import com.seismic.crm.model.SoSpecQuestion;
import com.seismic.crm.model.SoSpecQuestionResponse;
import com.seismic.crm.model.SoSpecTask;
import com.seismic.crm.model.SoSpecTaskResponse;
import com.seismic.crm.model.SupplierProduct;

public interface SfSpecActivityRepository extends JpaRepository<SfSpecActivity, Long> {

	@Query("SELECT a FROM SfSpecActivity a JOIN FETCH a.soSpecTask t JOIN FETCH t.soSpecTaskResponses tr "
			+ "JOIN tr.soSpecQuestionResponse trqr "
			+ "WHERE trqr.questionResponseId = ?1 "
			+ "ORDER BY t.taskSeq ASC, a.activitySeq ASC")
	List<SfSpecActivity> activitiesWithTasks(Long questionResponseId);

//	@Query("SELECT a FROM SfSpecActivity a JOIN FETCH a.soSpecTask t "
//			+ "JOIN FETCH t.soSpecTaskResponses tr JOIN tr.soSpecQuestionResponse trqr "
//			+ "JOIN t.soSpecQuestion q "
//			+ "WHERE EXISTS (SELECT qr FROM SoSpecQuestionResponse qr JOIN qr.soSpecTaskResponses tr "
//			+ "WHERE qr.soSpecQuestion = q AND qr.questionResponseId = ?1 AND tr.soSpecTask = t AND "
//			+ "tr.selectedFlag = true) AND trqr.questionResponseId = questionResponseId "
//			+ "ORDER BY t.taskSeq ASC, a.activitySeq ASC")
//	List<SfSpecActivity> activitiesWithTasks(Long questionResponseId);

//	@Query("SELECT ar FROM SfSpecActivityResponse ar JOIN FETCH ar.sfSpecActivity "
//			+ "JOIN ar.soSpecTaskResponse tr JOIN tr.soSpecQuestionResponse qr "
//			+ "WHERE qr.questionResponseId = ?1 AND ar.selectedFlag = true) ")
//	List<SfSpecActivityResponse> activityResponses(Long questionResponseId);

	@Query("SELECT ar FROM SfSpecActivityResponse ar JOIN FETCH ar.sfSpecActivity "
			+ "JOIN ar.soSpecTaskResponse tr JOIN tr.soSpecQuestionResponse qr "
			+ "WHERE qr.questionResponseId = ?1 AND ar.selectedFlag = true) ")
	List<SfSpecActivityResponse> activityResponses(Long questionResponseId);

}
