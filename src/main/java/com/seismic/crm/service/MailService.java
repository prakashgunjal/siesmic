package com.seismic.crm.service;

import java.io.FileNotFoundException;
import java.io.IOException;

import javax.mail.MessagingException;

import com.seismic.crm.bean.Email;

public interface MailService {

	public void sendEmaildata(String moduleId, String moduleName) throws FileNotFoundException, IOException, MessagingException;
	public void sendEmail(Email email,String moduleId,String moduleName) throws MessagingException, FileNotFoundException, IOException;
}
