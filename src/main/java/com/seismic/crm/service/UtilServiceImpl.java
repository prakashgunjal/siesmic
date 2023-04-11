package com.seismic.crm.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.transaction.annotation.Transactional;

import com.seismic.crm.model.Product;
import com.seismic.crm.repository.ProductRepository;

public class UtilServiceImpl implements UtilService {

	@Resource
	private ProductRepository productRepository;

	@Override
	@Transactional
	public List<Product> getProducts() {
		return productRepository.findAll();
	}
}
