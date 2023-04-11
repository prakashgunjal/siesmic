package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.Question;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SfSpecActivity;
import com.seismic.crm.model.SoSpecQuestion;
import com.seismic.crm.model.SoSpecQuestionResponse;
import com.seismic.crm.model.SupplierProduct;

public interface SoSpecQuestionResponseRepository extends JpaRepository<SoSpecQuestionResponse, Long> {
	@Query("SELECT qr FROM SoSpecQuestionResponse qr JOIN qr.soSpecQuestion q "
			+ "WHERE q.productCategory = ?3 AND ((qr = null) OR (qr.salesOrder = ?1 AND "
			+ "qr.product = ?2 AND qr.soSpecQuestion = ?4)) ")
	SoSpecQuestionResponse getQuestionResponseWithDeps(SalesOrder so, Product product, 
			ProductCategory productCat, SoSpecQuestion question);

}
