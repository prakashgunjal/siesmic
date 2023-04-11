package com.seismic.crm.service;

import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.bean.KeyValueMap;
import com.seismic.crm.exception.SalesOrderNotFound;
import com.seismic.crm.model.Account;
import com.seismic.crm.model.Contact;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.ListValues;
import com.seismic.crm.model.Product;
import com.seismic.crm.model.ProductCategory;
import com.seismic.crm.model.ProductSubCategory;
import com.seismic.crm.model.SalesOrder;
import com.seismic.crm.model.SalesOrderProductDetail;
import com.seismic.crm.repository.AccountRepository;
import com.seismic.crm.repository.ContactRepository;
import com.seismic.crm.repository.ProductCategoryRepository;
import com.seismic.crm.repository.ProductRepository;
import com.seismic.crm.repository.ProductSubCategoryRepository;
import com.seismic.crm.repository.SalesOrderProductDetailRepository;
import com.seismic.crm.repository.SalesOrderRepository;

@Service
public class SalesOrderServiceImpl implements SalesOrderService {
	@Autowired
	private HttpServletRequest request;
	
	@Autowired
	private SalesOrderRepository salesOrderRepository;

	@Autowired
	private SalesOrderProductDetailRepository soProductDetailRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private ContactRepository contactRepository;

	@Autowired
	private ProductCategoryRepository productCategoryRepository;

	@Autowired
	private ProductSubCategoryRepository productSubCategoryRepository;
	
	@PersistenceContext
	EntityManager entityManager;

	SimpleDateFormat dateFormat = new SimpleDateFormat("EEE MMM dd yyyy");
	/*
	 * @Autowired private AddressRepository addressRepository;
	 * 
	 * @Autowired private BankDetailRepository bankDetailRepository;
	 */
	
	
	@Override
	@Transactional
	public List<SalesOrder> getSalesOrderDetails() {
		/*request.getUserPrincipal().getName();
		System.out.println("Principal-----------"+request.getUserPrincipal().getName());*/
		return salesOrderRepository.findAll();
		// return salesOrderRepository.findByIsActive();
	}
	
	@Override
	@Transactional
	public SalesOrder saveSalesOrder(SalesOrder salesOrder) {
//		SalesOrder createdSalesOrder = salesOrder;
//		Account account = salesOrder.getAccount();
//		Contact contact = salesOrder.getContact();
//
//		// set Account
//		Account newAccount = (Account) accountRepository.save(account);
//		createdSalesOrder.setAccountID(newAccount.getAccountId());
//
//		// set Contact
//		Contact newContact = (Contact) contactRepository.save(contact);
//		createdSalesOrder.setContactID(newContact.getContactId());
//
//		System.out
//				.println("created SalesOrder implemented.......................");

		return salesOrderRepository.save(salesOrder);

	}

//	@Override
//	@Transactional
//	public SalesOrder updateSalesOrder(SalesOrder salesOrder) {
//		SalesOrder updateSalesOrder = salesOrderRepository.findOne(salesOrder
//				.getSalesOrderId());
//
//		Account account = salesOrder.getAccount();
//		Contact contact = salesOrder.getContact();
//
//		updateSalesOrder.setSalesOrderSalesRep(salesOrder
//				.getSalesOrderSalesRep());
//		updateSalesOrder.setNameOfSalesOrder(salesOrder.getNameOfSalesOrder());
//		updateSalesOrder.setSalesOrderDate(salesOrder.getSalesOrderDate());
//		updateSalesOrder.setSalesOrderSource(salesOrder.getSalesOrderSource());
//		updateSalesOrder.setTechnicalContactName(salesOrder
//				.getTechnicalContactName());
//		updateSalesOrder.setTechnicalTelephoneNumber(salesOrder
//				.getTechnicalTelephoneNumber());
//		updateSalesOrder.setTechnicalEmailId(salesOrder.getTechnicalEmailId());
//		updateSalesOrder.setInstallationAddress1(salesOrder
//				.getInstallationAddress1());
//		updateSalesOrder.setInstallationAddress2(salesOrder
//				.getInstallationAddress2());
//		updateSalesOrder.setInstallationAddress3(salesOrder
//				.getInstallationAddress3());
//		updateSalesOrder.setInstallationPostCode(salesOrder
//				.getInstallationPostCode());
//
//		Account newAccount = (Account) accountRepository.save(account);
//		updateSalesOrder.setAccountID(newAccount.getAccountId());
//
//		Contact newContact = (Contact) contactRepository.save(contact);
//		updateSalesOrder.setContactID(newContact.getContactId());
//
//
//		
//		System.out.println("SalesOrder Data updated............");
//		return salesOrderRepository.saveAndFlush(updateSalesOrder);
//	}

//	@Override
//	public SalesOrder updateSalesOrderRemarks(SalesOrder salesOrder) {
//		System.out
//				.println("updateSalesOrderRemarks implemented......................");
//		SalesOrder updateRemarks = salesOrderRepository.findOne(salesOrder
//				.getSalesOrderId());
//		updateRemarks.setRemarks(salesOrder.getRemarks());
//		return salesOrderRepository.saveAndFlush(salesOrder);
//	}

	@Override
	@Transactional
	public SalesOrder findById(Long salesOrderId) {
		return salesOrderRepository.findOne(salesOrderId);
	}

	// This method is for SalesOrderEditForm
	@Override
	@Transactional
	public SalesOrder findBySalesOrderID(Long salesOrderId) {
		return salesOrderRepository.findOne(salesOrderId);
	}

		
	@Override
	@Transactional(rollbackFor = SalesOrderNotFound.class)
	public SalesOrder delete(Long salesOrderId) throws SalesOrderNotFound {
		SalesOrder deletedSalesOrder = salesOrderRepository
				.findOne(salesOrderId);

		if (deletedSalesOrder == null)
			throw new SalesOrderNotFound();

		salesOrderRepository.delete(deletedSalesOrder);
		return deletedSalesOrder;
	}

	@Override
	@Transactional
	public List<SalesOrder> getSalesOrders() {
		return salesOrderRepository.findAll();
	}

	@Override
	@Transactional(rollbackFor = SalesOrderNotFound.class)
	public SalesOrder update(SalesOrder salesOrder) throws SalesOrderNotFound {
		SalesOrder updatedSalesOrder = salesOrderRepository.findOne(salesOrder
				.getSalesOrderId());

		if (updatedSalesOrder == null)
			throw new SalesOrderNotFound();

		updatedSalesOrder.setNameOfSalesOrder(salesOrder.getNameOfSalesOrder());
		// updatedSalesOrder.setPriority(salesOrder.getPriority());
		return updatedSalesOrder;
	}

	

	@Override
	@Transactional
	public List<SalesOrderProductDetail> soProductDetails(SalesOrder salesOrder) {
		// TODO Auto-generated method stub
		return soProductDetailRepository.findBySalesOrder(salesOrder);
		// return soProductDetailRepository.findAll();
	}

	@Override
	@Transactional
	public SalesOrderProductDetail deleteSOProductDetail(Long id) {
		SalesOrderProductDetail soProductDetail = soProductDetailRepository
				.findOne(id);

		soProductDetailRepository.delete(soProductDetail);
		return soProductDetail;
	}

	@Override
	@Transactional
	public SalesOrderProductDetail createSOProductDetails(
			SalesOrderProductDetail soProductDetail) {
		return soProductDetailRepository.saveAndFlush(soProductDetail);
	}

	@Override
	@Transactional
	public SalesOrderProductDetail updateSOProductDetails(
			SalesOrderProductDetail soProductDetail) {
		return soProductDetailRepository.saveAndFlush(soProductDetail);
	}

	@Override
	@Transactional
	public SalesOrderProductDetail findBySOProductDetailId(
			Long soProductDetailId) {
		return soProductDetailRepository.findOne(soProductDetailId);
	}

	@Override
	@Transactional
	public List<Product> products() {
		return productRepository.findAll();
	}

	@Override
	public List<SalesOrderProductDetail> profServices(SalesOrder salesOrder) {
		ProductCategory category = productCategoryRepository
				.findByProductCategory("Professional Services");
		// return
		// soProductDetailRepository.findBySalesOrderAndProductCategory(salesOrder,
		// category);
		return null;
	}

	@Override
	public SalesOrderProductDetail createProfService(
			SalesOrderProductDetail soProductDetail) {
		ProductCategory category = productCategoryRepository
				.findByProductCategory("Professional Services");
		// soProductDetail.setProductCategory(category);
		return soProductDetailRepository.saveAndFlush(soProductDetail);
	}

	@Override
	public List<SalesOrderProductDetail> maintenanceProducts(
			SalesOrder salesOrder) {
		ProductCategory category = productCategoryRepository
				.findByProductCategory("Maintenance");
		// return
		// soProductDetailRepository.findBySalesOrderAndProductCategory(salesOrder,
		// category);
		return null;
	}

	@Override
	public SalesOrderProductDetail createMaintenanceProduct(
			SalesOrderProductDetail soProductDetail) {
		ProductCategory category = productCategoryRepository
				.findByProductCategory("Maintenance");
		// soProductDetail.setProductCategory(category);
		return soProductDetailRepository.saveAndFlush(soProductDetail);
	}

	@Override
	@Transactional
	public List<ProductCategory> productCategory() {
		return productCategoryRepository.findAll();
	}

	@Override
	@Transactional
	public List<ProductSubCategory> getProductSubCategory(Long categoryId) {
		ProductCategory productCategory = productCategoryRepository
				.findOne(categoryId);
		return productSubCategoryRepository
				.findByProductCategory(productCategory);
	}

	@Override
	public List<SalesOrderProductDetail> orderForm(SalesOrder salesOrder) {
		ProductCategory category = productCategoryRepository
				.findByProductCategory("");
		return soProductDetailRepository.findBySalesOrderAndProductCategory(
				salesOrder, category);
	}

//	@Override
//	public List<SalesOrderProductDetail> preSalesForm(SalesOrder salesOrder) {
//		ProductCategory category = productCategoryRepository
//				.findByProductCategory("");
//		return soProductDetailRepository.findBySalesOrderAndProductCategory(
//				salesOrder, category);
//	}

	@Override
	public SalesOrderProductDetail createOrderForm(
			SalesOrderProductDetail soProductDetail) {
		/*ProductCategory category = productCategoryRepository.findByProductCategory(productCategory);
				.findByProductCategory("");
		soProductDetail.setProductCategory(category);*/
		return soProductDetailRepository.saveAndFlush(soProductDetail);
	}

	@Override
	public List<KeyValueMap> getSalesFormForAccountId(Long accountId) {
		
		return salesOrderRepository.getSalesFormForAccountId(accountId);
	}

	@Override
	public Page<SalesOrder> viewSalesOrderDetails(String salesOrderNumber,
			String[] salesOrderDate, String accountName,
			String salesformnumber, String contactBySalesOrderSalesRep,
			int pagesize, int pagenum,String sortOrderType, String sortField) throws ParseException {
		Pageable pageable = new PageRequest(pagenum, pagesize);
		List<Predicate> conditions = new ArrayList<Predicate>();
		
		CriteriaBuilder builder = entityManager.getCriteriaBuilder();
		CriteriaQuery<Long> criteriaQuery = builder.createQuery(Long.class);
		Root<SalesOrder> salesOrder = criteriaQuery.from(SalesOrder.class);
		Join<SalesOrder, Account> accountJoin = salesOrder.join("account", JoinType.LEFT);
		Join<SalesOrder, Contact> contactBySoSalesRep = salesOrder.join("contactBySalesOrderSalesRep",JoinType.LEFT);
//		Conditions
		conditions.add(builder.like(salesOrder.<String>get("salesOrderNumber"), "%"+salesOrderNumber+"%"));
		if(salesOrderDate[0]!=null){
			
			Date fromDate = new Date(dateFormat.parse(salesOrderDate[0].substring(0, 15)).getTime());
			Date toDate = new Date(dateFormat.parse(salesOrderDate[1].substring(0, 15)).getTime());
		conditions.add(builder.between(salesOrder.<Date> get("salesOrderDate"), fromDate,toDate));
		}
		conditions.add(builder.like(contactBySoSalesRep.<String>get("contactName"), "%"+ contactBySalesOrderSalesRep+"%"));
		conditions.add(builder.like(accountJoin.<String>get("accountName"), "%"+ accountName+"%"));
		/*conditions.add(builder.like(salesOrder.<String>get("salesOrderSalesFormRefId"), "%"+salesformnumber+"%"));*/
		
		CriteriaQuery<Long> select = criteriaQuery.select(builder.count(salesOrder));
		select.where(conditions.toArray(new Predicate[] {}));

		TypedQuery<Long> typedQuery = entityManager.createQuery(select);
		Long totalRecords = typedQuery.getSingleResult();
		System.out.println(" count "+totalRecords);
		
		CriteriaQuery<SalesOrder> cQuery = builder.createQuery(SalesOrder.class);
		salesOrder = cQuery.from(SalesOrder.class);
		accountJoin = salesOrder.join("account", JoinType.LEFT);
		contactBySoSalesRep = salesOrder.join("contactBySalesOrderSalesRep",JoinType.LEFT);
		
		cQuery.select(salesOrder)
		.where(conditions.toArray(new Predicate[] {}));

		String[] sortdataField = sortField.split("\\.");
		if (sortOrderType.equals("desc")) {
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.desc(salesOrder.get(sortField)));
			}else if("contactBySalesOrderSalesRep".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(contactBySoSalesRep.get(sortdataField[1])));
			}else if("account".equals(sortdataField[0])){
				cQuery.orderBy(builder.desc(accountJoin.get(sortdataField[1])));
			}
		}else{
			if(sortdataField.length!=2){
				cQuery.orderBy(builder.asc(salesOrder.get(sortField)));
			}else if("contactBySalesOrderSalesRep".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(contactBySoSalesRep.get(sortdataField[1])));
			}else if("account".equals(sortdataField[0])){
				cQuery.orderBy(builder.asc(accountJoin.get(sortdataField[1])));
			}
		}
		
		TypedQuery<SalesOrder> postQuery = entityManager.createQuery(cQuery);
		postQuery.setFirstResult((pagenum) * (pagesize))
				.setMaxResults(pagesize);
		List<SalesOrder> salesOrders = postQuery.getResultList();
		Page<SalesOrder> page = new PageImpl<SalesOrder>(salesOrders,
				pageable, totalRecords);

		return page;
		
	}

//	@Override
//	public SalesOrderProductDetail savePresalesForm(
//			SalesOrderProductDetail soProductDetail) {
//		// soProductDetail.setRemarks(remarks);
//		return soProductDetailRepository.save(soProductDetail);
//
//	}


	/*
	 * @Override
	 * 
	 * @Transactional public Product deleteProductDetails(Long id) { Product
	 * product = productRepository.findOne(id);
	 * productRepository.delete(product); return product; }
	 */

	/*
	 * @Override
	 * 
	 * @Transactional public Product createProductDetails(Product product) {
	 * return productRepository.saveAndFlush(product); }
	 */

	/*
	 * @Override
	 * 
	 * @Transactional public Product updateProductDetails(Product product) {
	 * return productRepository.saveAndFlush(product); }
	 */

	/*
	 * @Override
	 * 
	 * @Transactional public Product findByProductID(Long productID) { return
	 * productRepository.findOne(productID); }
	 */

}
