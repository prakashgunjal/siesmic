package com.seismic.crm.model;

// Generated 6 Jan, 2014 3:41:50 PM by Hibernate Tools 4.0.0

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * OpportunityProductDetail generated by hbm2java
 */
@Entity
@Table(name = "QuoteProductDetail", schema = "dbo", catalog = "SEISMIC_CRM_DEV")
public class QuoteProductDetail implements java.io.Serializable {
	
	private static final long serialVersionUID = 1L;
	private long quoteProdDetailId; 
	private Quote quote; 
	private Product product; 
	private String quoteName; 
	private String quoteProductUnitOfMesure; 
	private String quoteProductQty;
	private String quoteProductRate; 
	private String quoteProductDiscount; 	
	private String unitCost; 
	private BigDecimal quoteProductTotal; 
	private BigDecimal quoteProductCurrency; 
	private Boolean isActive; 
	private String createdBy;
	private Date createdAt; 
	private String modifiedBy; 
	private String modifiedAt; 
	private String remarks; 

	
	public QuoteProductDetail() {
	}

	public QuoteProductDetail(long quoteProdDetailId) {
		this.quoteProdDetailId = quoteProdDetailId;
	}
	public QuoteProductDetail(long quoteProdDetailId, Quote quote,
			Product product, String quoteName, String quoteProductUnitOfMesure,
			String quoteProductQty, String quoteProductRate,
			String quoteProductDiscount, BigDecimal quoteProductTotal,
			BigDecimal quoteProductCurrency, Boolean isActive,
			String createdBy, Date createdAt, String modifiedBy,
			String modifiedAt, String remarks) {
		super();
		this.quoteProdDetailId = quoteProdDetailId;
		this.quote = quote;
		this.product = product;
		this.quoteName = quoteName;
		this.quoteProductUnitOfMesure = quoteProductUnitOfMesure;
		this.quoteProductQty = quoteProductQty;
		this.quoteProductRate = quoteProductRate;
		this.quoteProductDiscount = quoteProductDiscount;
		this.quoteProductTotal = quoteProductTotal;
		this.quoteProductCurrency = quoteProductCurrency;
		this.isActive = isActive;
		this.createdBy = createdBy;
		this.createdAt = createdAt;
		this.modifiedBy = modifiedBy;
		this.modifiedAt = modifiedAt;
		this.remarks = remarks;
	}
	
	@Id
	@GeneratedValue
	@Column(name = "QuoteProductDetailID", unique = true, nullable = false)
	public long getQuoteProdDetailId() {
		return quoteProdDetailId;
	}

	public void setQuoteProdDetailId(long quoteProdDetailId) {
		this.quoteProdDetailId = quoteProdDetailId;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteID")
	public Quote getQuote() {
		return quote;
	}

	public void setQuote(Quote quote) {
		this.quote = quote;
	}
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "QuoteProductID")
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	@Column(name = "QuoteName")
	public String getQuoteName() {
		return quoteName;
	}

	public void setQuoteName(String quoteName) {
		this.quoteName = quoteName;
	}
	
    @Column(name = "QuoteProductUOM")
	public String getQuoteProductUnitOfMesure() {
		return quoteProductUnitOfMesure;
	}

	public void setQuoteProductUnitOfMesure(String quoteProductUnitOfMesure) {
		this.quoteProductUnitOfMesure = quoteProductUnitOfMesure;
	}
	
	@Column(name = "QuoteProductQty")
	public String getQuoteProductQty() {
		return quoteProductQty;
	}

	public void setQuoteProductQty(String quoteProductQty) {
		this.quoteProductQty = quoteProductQty;
	}
	
	@Column(name = "QuoteProductRate")
	public String getQuoteProductRate() {
		return quoteProductRate;
	}

	public void setQuoteProductRate(String quoteProductRate) {
		this.quoteProductRate = quoteProductRate;
	}
	
	@Column(name = "QuoteProductDiscount")
	public String getQuoteProductDiscount() {
		return quoteProductDiscount;
	}

	public void setQuoteProductDiscount(String quoteProductDiscount) {
		this.quoteProductDiscount = quoteProductDiscount;
	}
	
	@Column(name = "QuoteProductTotal")
	public BigDecimal getQuoteProductTotal() {
		return quoteProductTotal;
	}
	public void setQuoteProductTotal(BigDecimal quoteProductTotal) {
		this.quoteProductTotal = quoteProductTotal;
	}
	
	@Column(name = "QuoteCurrency")
	public BigDecimal getQuoteProductCurrency() {
		return quoteProductCurrency;
	}    
	public void setQuoteProductCurrency(BigDecimal quoteProductCurrency) {
		this.quoteProductCurrency = quoteProductCurrency;
	}
	
	@Column(name = "IsActive")
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	
	@Column(name = "CreatedBy")
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	
	@Column(name = "CreatedAt")
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	@Column(name = "ModifiedBy")
	public String getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	
	@Column(name = "ModifiedAt")
	public String getModifiedAt() {
		return modifiedAt;
	}
	public void setModifiedAt(String modifiedAt) {
		this.modifiedAt = modifiedAt;
	}
	
	@Column(name = "Remarks")
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	@Column(name = "UnitCost")
	public String getUnitCost() {
		return unitCost;
	}
	public void setUnitCost(String unitCost) {
		this.unitCost = unitCost;
	}
	
}
