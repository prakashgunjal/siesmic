package com.seismic.crm.utils;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class RandomKeyGeneration {

	private static final String NUMBERS = "0123456789";
	private static final String UPPER_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final String LOWER_ALPHABETS = "abcdefghijklmnopqrstuvwxyz";
	private static final int MINLENGTH = 17;

	public static String getRandomGeneration() throws FileNotFoundException, IOException {
		
//		 String workingDir = System.getProperty("user.dir").concat("\\src\\main\\resources\\seismic.properties");
//		 Properties properties = new Properties();
//		 properties.load(new FileInputStream(workingDir));
		   //properties.getProperty("customerKey");
		
	    StringBuilder generatedValue = new StringBuilder();
	    int j = 0;
	    for (int i = 0; i < MINLENGTH; i++) {

	    	generatedValue.append(getRandomGenerationCharacters(j));
	        j++;
	        if (j == 3) {
	            j = 0;
	        }
	    }
	    String key="SEIS".concat(generatedValue.toString()); 
	    String randomValue = new String();
	    int start = 0;
	    int endValue=4;
	    		for(int i=1;i<=5;i++){
	    			String temp=key.substring(start, endValue);
	    			 
	    			if(endValue<=16){
	    				randomValue=randomValue.concat(temp.concat("-"));
	    				start=endValue;
	    				if(endValue!=16){
	    				endValue = endValue+4;
	    				}else{
	    					endValue = endValue+5;
	    				}
	    			}else{
	    				randomValue=randomValue.concat(temp);
	    				endValue = endValue+5;
	    			}	
	    		}
	    return randomValue;
	}

	private static String getRandomGenerationCharacters(int pos) {
	    Random randomNum = new Random();
	    StringBuilder randomChar = new StringBuilder();
	    switch (pos) {
	        case 0:
	            randomChar.append(NUMBERS.charAt(randomNum.nextInt(NUMBERS.length() - 1)));
	            break;
	        case 1:
	            randomChar.append(UPPER_ALPHABETS.charAt(randomNum.nextInt(UPPER_ALPHABETS.length() - 1)));
	            break;
	        case 2:
	            randomChar.append(LOWER_ALPHABETS.charAt(randomNum.nextInt(LOWER_ALPHABETS.length() - 1)));
	            break;
	    }
	    return randomChar.toString();
	}
   /* public static void main (String[] args) throws FileNotFoundException, IOException {
    		System.out.println(getRandomGeneration());
    }*/
	
}
