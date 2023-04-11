package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SupplierProduct;

public interface SupplierProductRepository extends JpaRepository<SupplierProduct, Long> {
	List<SupplierProduct> findByProduct(Product product);	
}
