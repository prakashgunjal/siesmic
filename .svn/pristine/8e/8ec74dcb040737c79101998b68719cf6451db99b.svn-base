/*package com.seismic.crm.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.seismic.crm.model.SalesOrder;

@Repository
public class SalesOrderDAOImpl implements SalesOrderDAO {
	@Autowired
	private SessionFactory sessionFactory;

	private Session getCurrentSession() {
		return sessionFactory.getCurrentSession();
	}

	public void addSalesOrder(SalesOrder salesOrder) {
		getCurrentSession().save(salesOrder);
	}

	public void updateSalesOrder(SalesOrder salesOrder) {
		SalesOrder salesOrderToUpdate = getSalesOrder(salesOrder
				.getSalesOrderId());
		// contractToUpdate.setName(contract.getName());
		// contractToUpdate.setRating(contract.getRating());
//		salesOrderToUpdate
//				.setSalesOrderStatus(salesOrder.getSalesOrderStatus());
		getCurrentSession().update(salesOrderToUpdate);
	}

	public SalesOrder getSalesOrder(long salesOrderId) {
		SalesOrder salesOrder = (SalesOrder) getCurrentSession().get(
				SalesOrder.class, salesOrderId);
		return salesOrder;
	}

	public void deleteSalesOrder(long salesOrderId) {
		SalesOrder salesOrder = getSalesOrder(salesOrderId);
		if (salesOrder != null)
			getCurrentSession().delete(salesOrder);
	}

	
	@SuppressWarnings("unchecked")
	public List<SalesOrder> getSalesOrders() {
		System.out.println("here=================2");
//		System.out.println(">>>>>>>>>>>>>>>>>"+getCurrentSession().createQuery("from Interim_DB.dbo.SalesOrder").list());
		return getCurrentSession().createQuery("from Interim_DB.dbo.SalesOrder").list();
	}

	

}
*/