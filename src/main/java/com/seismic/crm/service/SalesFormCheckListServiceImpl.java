//package com.seismic.crm.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.seismic.crm.model.CheckList;
//import com.seismic.crm.model.CheckListProduct;
//import com.seismic.crm.repository.SalesFormCheckListProductRepository;
//import com.seismic.crm.repository.SalesFormCheckListRepository;
//
//@Service
//public class SalesFormCheckListServiceImpl implements SalesFormCheckListService {
//	@Autowired
//	private SalesFormCheckListRepository checkListRepository;   
//
//	@Autowired
//	private SalesFormCheckListProductRepository checkListProductRepository; 
//	
//	@Override
//	@Transactional
//	public List<CheckList> getAllCheckListDocument() {
//		return checkListRepository.findAll();
//		
//	}
//	
//	@Override
//	@Transactional
//	public List<CheckListProduct> getAllCheckListProduct() {
//		return checkListProductRepository.findAll();   
//		
//	}
//	
//
//	}
