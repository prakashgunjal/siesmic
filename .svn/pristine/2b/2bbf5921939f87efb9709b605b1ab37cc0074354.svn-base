package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.SalesOrder;

public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Long> {
	List<ProductSubCategory> findByProductCategory(ProductCategory productCategory);

	@Query("SELECT o.product.productSubCategory FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2 AND o.product.productCategory = ?3")
	List<ProductSubCategory> orderFormProductSubCategories(ListValues orderFormType, SalesOrder so, ProductCategory productCategory);	
}
