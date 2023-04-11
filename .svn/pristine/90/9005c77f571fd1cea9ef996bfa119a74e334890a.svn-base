package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;

public interface SalesOrderProductDetailRepository extends JpaRepository<SalesOrderProductDetail, Long> {
	List<SalesOrderProductDetail> findBySalesOrder(SalesOrder salesOrder);
	
	@Query("SELECT o FROM SalesOrderProductDetail o WHERE o.salesOrder = ?1 AND o.lvsoLineItem = ?2 "
			+ "ORDER BY o.modifiedAt DESC")
	List<SalesOrderProductDetail> findBySalesOrderAndLvsoLineItem(SalesOrder salesOrder, ListValues lineItemType);	
	List<SalesOrderProductDetail> findBySalesOrderAndProductCategory(SalesOrder salesOrder, ProductCategory productCategory);
	
	@Query("SELECT o FROM SalesOrderProductDetail o where o.tickForMaintenance = true and o.salesOrder = ?1 AND  o.lvsoLineItem = ?2 "
			+ "ORDER BY o.modifiedAt DESC")
	List<SalesOrderProductDetail> equipRecordsTickedForaintenance(SalesOrder so, ListValues orderFormType);	
	
//	@Query("SELECT s FROM SalesOrderProductDetail s WHERE s.salesOrder = ?1 AND s.lvsoLineItem = ?2 AND s.product = ?3")
//	List<SalesOrderProductDetail> profResponses(SalesOrder so, ListValues lineItemType, Product product);
	
	@Query("SELECT COUNT(s) FROM SalesOrderProductDetail s WHERE s.salesOrder = ?1 AND s.lvsoLineItem = ?2")
	Long soProductLineItemsCount(SalesOrder so, ListValues lineItemType);
	
	@Query("SELECT COUNT(s) FROM SalesOrderProductDetail s WHERE s.salesOrder = ?1 AND s.lvsoLineItem = ?2 AND s.tickForMaintenance = true")
	Long soTickedForMaintenceCount(SalesOrder so, ListValues lineItemType);
	
	
	
	
}
