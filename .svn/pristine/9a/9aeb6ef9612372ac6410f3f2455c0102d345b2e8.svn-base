package com.seismic.crm.utils;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.sql.Date;

import org.springframework.stereotype.Service;

@Service
public class CustomDateUtil {

	public static java.util.Date getDateFromUniversalDateFmtString(String s){
	    try {
			s = s.substring(0, s.length() - 1);
		    SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
		    sf.setLenient(false);
			return new Date(sf.parse(s).getTime());
		} catch (Exception e) {
			return null;
		}
	}
	
	public static Date getDateAndTime(){
		java.util.Calendar cal = java.util.Calendar.getInstance();
		java.util.Date utilDate = cal.getTime();
		Date sqlDate2 = new Date(utilDate.getTime());
		
		return sqlDate2;
	}
	
	public static Date getCustomDateAndTime(String s ) throws Exception{
		DateFormat df = new SimpleDateFormat("MM/dd/yyyy");			
		java.sql.Date cal =  new java.sql.Date(df.parse(s).getTime()) ;   
		
		return cal;
	} 
	
	public static java.util.Date getUtilDateAndTime(){
		java.util.Calendar cal = java.util.Calendar.getInstance();
		java.util.Date utilDate = cal.getTime();
		
		return utilDate;
	}
	
}
