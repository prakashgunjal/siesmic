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

public interface SfSpecActivityResponseRepository extends JpaRepository<SfSpecActivityResponse, Long> {

}
