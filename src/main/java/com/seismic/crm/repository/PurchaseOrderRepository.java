/**
 * 
 */
package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.model.PurchaseOrder;

/**
 * @author sumang
 *
 */
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {
	@Query("select p.purchaseOrderId as key,p.purchaseOrderNumber as value from PurchaseOrder p")
	List<KeyValueMap> getPurchaseOrderDetails();

}
