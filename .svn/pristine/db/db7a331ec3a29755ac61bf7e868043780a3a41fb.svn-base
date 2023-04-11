package com.seismic.crm.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Date;
import java.util.List;

import javax.activation.DataSource;
import javax.imageio.stream.FileImageInputStream;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.util.ByteArrayDataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.seismic.crm.bean.Attachment;
import com.seismic.crm.bean.Email;
import com.seismic.crm.model.GeneralAlerts;
import com.seismic.crm.repository.GeneralAlertsRepository;
import com.seismic.crm.utils.RandomKeyGeneration;
import com.seismic.crm.utils.SecurityContextUtil;

@Service(value="mailService")
public class MailServiceImpl implements MailService{

	@Autowired
	private JavaMailSenderImpl mailSender;
	
	@Autowired
	private GeneralAlertsRepository generalAlertsRepository;
	
	@Autowired
	private SecurityContextUtil securityContextUtil;
	
	/* public void setMailSender(JavaMailSenderImpl mailSender)
	 {
	  this.mailSender = mailSender;
	 }*/
	java.util.Calendar cal = java.util.Calendar.getInstance();
	java.util.Date utilDate = cal.getTime();
	java.sql.Date sqlDate = new Date(utilDate.getTime());
	public void sendEmaildata(String moduleId,String moduleName) throws FileNotFoundException, IOException, MessagingException {
			Email email = new Email();
		    email.setFrom("SeismicAlerts@seismic-crm.com");
		    email.setSubject("Test Mail-Alert Framework");
		    email.setTo("SeismicAlerts@seismic-crm.com");
//		    String to[] = { "srinivas.bhaskara@aligned-systems.com","suman.gondi@aligned-systems.com","thrinadhm@aligned-system.com" };
//		    String to[] = { "prakashbj@aligned-system.com" };
//		    email.setCc(to);
//		    email.setBcc("vikask@aligned-systems.com");
		    email.setText("Dear Test Mail-alert Framework ignore and Delete ");
		     
//		    byte[] data = null;
//		    File img = new File("C:/Users/sumang/Desktop/Chrysanthemum.jpg");
//		    FileImageInputStream fileImageInputStream = new FileImageInputStream(img);
//		    data = new byte[(int) fileImageInputStream.length()];
//		    while((fileImageInputStream.read(data)!=-1));
//		    fileImageInputStream.close();
//		    Attachment attachment = new Attachment(data, "suman", "image/jpg", false);
//		    email.addAttachment(attachment);
		   sendEmail(email,moduleId,moduleName);
//		   return email;
		}
	
	@Override
	public void sendEmail(Email email, String moduleId,String moduleName) throws MessagingException, FileNotFoundException, IOException {


		  MimeMessage mimeMessage = mailSender.createMimeMessage();
		  // use the true flag to indicate you need a multipart message
		  boolean hasAttachments = (email.getAttachments()!=null && 
		         email.getAttachments().size() > 0 );
		  MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, hasAttachments);
		  helper.setTo(email.getTo());
		  helper.setFrom(email.getFrom());
		  
		  if((email.getCc())!=null){
			  helper.setCc(email.getCc());
		  }
		  
		  if((email.getBcc())!=null){
			  helper.setBcc(email.getBcc());
		  }
		  
		  helper.setSubject(email.getSubject());
		  helper.setText(email.getText(), true);
		  
		  /*List<Attachment> attachments = email.getAttachments();
		     if(attachments != null && attachments.size() > 0)
		     {
		      for (Attachment attachment : attachments) 
		      {
		          String filename = attachment.getFilename() ;
		          DataSource dataSource = new ByteArrayDataSource(attachment.getData(), 
		                 attachment.getMimeType());
		          if(attachment.isInline())
		          {
		           helper.addInline(filename, dataSource);
		          }else{
		           helper.addAttachment(filename, dataSource);
		          }
		   }
		     }*/
		  
		  mailSender.send(mimeMessage);
		 insertGeneralAlerts(email,moduleId,moduleName);
		
	}

	private void insertGeneralAlerts(Email email, String moduleId, String moduleName) throws FileNotFoundException, IOException {
			GeneralAlerts generalAlerts = new GeneralAlerts();
			generalAlerts.setGeneralAlertsId(new RandomKeyGeneration().getRandomGeneration());
			generalAlerts.setModuleId(moduleId);
			generalAlerts.setModuleName(moduleName);
			generalAlerts.setGeneralAlertsFrom(email.getFrom());
			
			String[] tempTo= email.getTo();
			String to = new String();
				for(int i=0;i<tempTo.length;i++){
					to = to.concat(tempTo[i]+",");
				}
			
			generalAlerts.setGeneralAlertsTo(to);
			
			if(email.getCc()!=null){
				String[] tempCc= email.getCc();
				String cc = new String();
					for(int i=0;i<tempCc.length;i++){
						cc = cc.concat(tempCc[i]+",");
					}
			generalAlerts.setGeneralAlertsCc(cc);
			}
			
			if(email.getBcc()!=null){
				String[] tempBcc= email.getCc();
				String bcc = new String();
					for(int i=0;i<tempBcc.length;i++){
						bcc = bcc.concat(tempBcc[i]+",");
					}
				generalAlerts.setGeneralAlertsBcc(bcc);
			}
			
			generalAlerts.setGeneralAlertsSubject(email.getSubject());
			generalAlerts.setGeneralAlertsBody(email.getText());
			generalAlerts.setCreatedBy(securityContextUtil.getUsername());
			generalAlerts.setCreatedAt(sqlDate);
			generalAlerts.setModifiedBy(securityContextUtil.getUsername());
			generalAlerts.setModifiedAt(sqlDate);
			generalAlertsRepository.save(generalAlerts);
	}

}
