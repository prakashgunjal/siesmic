package com.seismic.crm.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.seismic.crm.model.Product;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderSpecResponse;

public interface SalesOrderSpecResponseRepository extends JpaRepository<SalesOrderSpecResponse, Long> {
	@Query("SELECT s FROM SalesOrderSpecResponse s WHERE s.salesOrder = ?1 AND s.product = ?2")
	List<SalesOrderSpecResponse> specResponses(SalesOrder so, Product product);
}
