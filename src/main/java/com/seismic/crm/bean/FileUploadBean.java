package com.seismic.crm.bean;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

/**
 * Represents file uploaded from extjs form
 * 
 * @author Loiane Groner
 * http://loiane.com
 * http://loianegroner.com
 */
public class FileUploadBean {

	private String fileName;
	 private String filePath;
	private CommonsMultipartFile file;

	public CommonsMultipartFile getFile() {
		return file;
	}

	public void setFile(CommonsMultipartFile file) {
		this.file = file;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
}