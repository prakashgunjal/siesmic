package com.seismic.crm.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.data.domain.Page;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.exception.SalesOrderNotFound;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.QuoteProductDetail;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;

public interface SalesOrderService {

	public List<SalesOrder> getSalesOrderDetails();

	public SalesOrder delete(Long salesOrderId) throws SalesOrderNotFound;

	public List<SalesOrder> getSalesOrders();

	public SalesOrder update(SalesOrder salesOrder) throws SalesOrderNotFound;

	// public SalesOrder updateSalesOrder(SalesOrder salesOrder) throws
	// SalesOrderNotFound;
	public SalesOrder findById(Long salesOrderId);

	public SalesOrder findBySalesOrderID(Long salesOrderID);

	public SalesOrder saveSalesOrder(SalesOrder salesOrder);

//	public SalesOrder updateSalesOrder(SalesOrder salesOrder);

//	public SalesOrder updateSalesOrderRemarks(SalesOrder salesOrder);

	public List<SalesOrderProductDetail> soProductDetails(SalesOrder salesOrder);

	public SalesOrderProductDetail createSOProductDetails(
			SalesOrderProductDetail soProductDetail);

	public SalesOrderProductDetail deleteSOProductDetail(Long id);

	public SalesOrderProductDetail updateSOProductDetails(
			SalesOrderProductDetail soProductDetail);

	public SalesOrderProductDetail findBySOProductDetailId(
			Long soProductDetailId);

		
	public List<Product> products();

	public List<ProductCategory> productCategory();

	public List<ProductSubCategory> getProductSubCategory(Long categoryId);

	/*
	 * public Product createProductDetails(Product product); public Product
	 * deleteProductDetails(Long productID); public Product
	 * updateProductDetails(Product product); public Product
	 * findByProductID(Long productID);
	 */

	public List<SalesOrderProductDetail> orderForm(SalesOrder salesOrder);

//	public List<SalesOrderProductDetail> preSalesForm(SalesOrder salesOrder);

	public SalesOrderProductDetail createOrderForm(
			SalesOrderProductDetail soProductDetail);

//	public SalesOrderProductDetail savePresalesForm(
//			SalesOrderProductDetail soProductDetail);

	
	public List<SalesOrderProductDetail> profServices(SalesOrder salesOrder);

	public SalesOrderProductDetail createProfService(
			SalesOrderProductDetail soProductDetail);

	public List<SalesOrderProductDetail> maintenanceProducts(
			SalesOrder salesOrder);

	public SalesOrderProductDetail createMaintenanceProduct(
			SalesOrderProductDetail soProductDetail);

	public List<KeyValueMap> getSalesFormForAccountId(Long accountId);

	public Page<SalesOrder> viewSalesOrderDetails(String salesOrderNumber,
			String[] salesOrderDate, String accountName,
			String salesformnumber, String contactBySalesOrderSalesRep,
			int pagesize, int pagenum,String sortOrderType, String sortField) throws ParseException;

}
