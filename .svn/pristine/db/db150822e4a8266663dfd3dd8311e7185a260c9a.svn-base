package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.ProductSubType;
import com.seismic.crm.model.ProductType;
import com.seismic.crm.model.SalesOrder;

public interface ProductRepository extends JpaRepository<Product, Long> {
	@Query("SELECT o.product FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2 AND o.product.productCategory = ?3 AND o.product.productSubCategory = ?4")
	List<Product> orderFormProducts(ListValues orderFormType, SalesOrder so, ProductCategory productCategory, ProductSubCategory productSubCategory);	

	@Query("SELECT o.product FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2 AND o.product.productCategory = ?3")
	List<Product> orderFormProducts(ListValues orderFormType, SalesOrder so, ProductCategory productCategory);

//	@Query("SELECT o.product FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2")
//	List<Product> orderFormProducts(ListValues orderFormType, SalesOrder so);
	@Query("SELECT o.product FROM SalesOrderProductDetail o WHERE o.lvsoLineItem = ?1 AND o.salesOrder = ?2 AND o.product.productSubType = ?3")
	List<Product> orderFormProduct(ListValues orderFormType, SalesOrder so, ProductSubType productSubType);
	
	List<Product> findByProductSubCategory(ProductSubCategory productSubCategory);
	
//	@Query("SELECT s FROM Product s WHERE s.productType = ?1 AND s.productSubType = ?2")
//	List<Product> profServProducts(ProductType productType, ProductSubType productSubType);	

	@Query("SELECT p, (SELECT s FROM SalesOrderProductDetail s WHERE s.salesOrder = ?3 AND s.lvsoLineItem = ?4 AND s.product = ?5 AND s.profServProduct = p) "
			+ "FROM Product p WHERE  (p.productType = ?1 AND p.productSubType = ?2)")
	List profServResponses(ProductType profProdType, ProductSubType profProdSubType, SalesOrder so, ListValues lineItemType, Product product);

}
