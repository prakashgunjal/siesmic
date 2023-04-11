//package com.seismic.crm.service;
//
//import java.util.List;
//
//import javax.annotation.Resource;
//
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.seismic.crm.exception.BankDetailNotFound;
//import com.seismic.crm.model.BankDetail;
//import com.seismic.crm.repository.BankDetailRepository;
//
//@Service
//public class BankDetailServiceImpl implements BankDetailService {
//
//	@Resource
//	private BankDetailRepository bankDetailRepository;
//
//	@Override
//	@Transactional
//	public BankDetail create(BankDetail bankDetail) {
//		BankDetail createdBankDetail = bankDetail;
//		return bankDetailRepository.save(createdBankDetail);
//	}
//
//	@Override
//	@Transactional(rollbackFor = BankDetailNotFound.class)
//	public BankDetail delete(int bankID) throws BankDetailNotFound {
//		BankDetail deletedBankDetail = bankDetailRepository.findOne(bankID);
//
//		if (deletedBankDetail == null)
//			throw new BankDetailNotFound();
//
//		bankDetailRepository.delete(deletedBankDetail);
//		return deletedBankDetail;
//	}
//
//	@Override
//	@Transactional
//	public List<BankDetail> getBankDetails() {
//		return bankDetailRepository.findAll();
//	}
//
//	@Override
//	@Transactional(rollbackFor = BankDetailNotFound.class)
//	public BankDetail update(BankDetail bankDetail) throws BankDetailNotFound {
//
//		BankDetail updatedbankBankDetail = bankDetailRepository
//				.findOne(bankDetail.getBankID());
//
//		if (updatedbankBankDetail == null)
//			throw new BankDetailNotFound();
//
//		updatedbankBankDetail.setRemarks(bankDetail.getRemarks());
//		return updatedbankBankDetail;
//	}
//
//	@Override
//	@Transactional
//	public BankDetail findById(int bankID) {
//		return bankDetailRepository.findOne(bankID);
//	}
//}