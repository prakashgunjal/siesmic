package com.seismic.crm.validation;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.seismic.crm.model.SalesOrder;

@Component
public class SalesOderValidator implements Validator{


	private final static String SALES_ORDER_NUMBER = "salesOrderNumber";

	@Override
	public boolean supports(Class<?> clazz) {
		return SalesOrder.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
//		SalesOrder salesOrder = (SalesOrder) target;		

		ValidationUtils.rejectIfEmpty(errors, "NameOfSalesOrder", "SalesOrder.name.empty");
		ValidationUtils.rejectIfEmpty(errors, SALES_ORDER_NUMBER, "SalesOrder.salesOrderNumber.empty");
	}

}
