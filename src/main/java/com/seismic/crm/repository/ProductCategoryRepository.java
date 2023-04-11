package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.SalesOrder;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
	ProductCategory findByProductCategory(String productCategory);

	@Query("SELECT DISTINCT o.product.productCategory FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2")
	List<ProductCategory> orderFormProductCategories(ListValues orderFormType, SalesOrder so);	
}
