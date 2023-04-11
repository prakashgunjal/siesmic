package com.seismic.crm.utils;

import java.util.Locale;
import java.util.ResourceBundle;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Enumeration;
import java.util.Properties;

public class MessagesUtil {

	public static void main(String[] args) throws Exception {		
		String str;
		//str=findVaueForKey("dataSource");  
       // System.out.println("========================  str ="+str);   
	}
            	
	public static String getMessage( ) throws IOException {
		System.out.println("=================== getMessage =============================");
		String str="Hello Aligned Systems ";
		return str;
	}
	
	       
	public static String showMessage( String entity,String entityNumber, String action ,String msgId) throws IOException {		
		 System.out.println("msgId="+msgId+"  ,entity="+entity+" entityNumber="+entityNumber );  	                	
		 String msg= entity+ " Number " + entityNumber+" " +action+" " +msgId;   		               
	     return msg;   		
     } 
	
	public static String findVaueForKey(String url ) throws IOException {
		    Properties prop = new Properties();		
		    Locale defaultLocale = Locale.getDefault();
		    String fileName = "seismic.properties";      		 
			File file = new File(fileName);
			FileInputStream fileInput = new FileInputStream(file);
			Properties properties = new Properties();
			properties.load(fileInput);
			fileInput.close();
            String key,value = null;  
			Enumeration<?> enuKeys = properties.keys();
			while (enuKeys.hasMoreElements()) {
			   key = (String) enuKeys.nextElement();      
			   value = properties.getProperty(key);					
			   if(url.compareTo(key) == 0 ){		            
		        break;                  
		       }		      
		   }
	     return value;   		
	} 
	
}















