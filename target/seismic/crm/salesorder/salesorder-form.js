
Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.*',	'Ext.layout.container.Column', 'Ext.util.Format.*',	'Ext.form.field.VTypes.*' ]);
Ext.define('example.salesorder', {
	extend : 'Ext.data.Model',
	fields : [
	            'salesOrderId', 'salesOrderNumber' ,'salesOrderDate' ,'expectedDelivDate','shippingMethod','shippingInstructions',
	            'carrier','trackingNumber','remarks',	         
				{  name : 'accountId'   , mapping : 'account.accountId'     },
				{  name : 'accountName' , mapping : 'account.accountNumber' }, 
				{  name : 'contactId',	  mapping : 'contact.contactId'		},
				{  name : 'contactName',  mapping : 'contact.contactName'	},
				{  name : 'quoteId'   ,   mapping : 'quote.quoteId'     },
				{  name : 'quoteNumber' , mapping : 'quote.quoteNumber' },				
				{  name : 'lSourceId'   , mapping : 'listValuesBySourceId.listValueId' }, 				
				{  name : 'lPriorityId' , mapping : 'listValuesByPriorityId.listValueId' },
				
				{  name : 'lshippingMethodId', mapping : 'listValuesByShippingMethod.listValueId' } ,
				{  name : 'leadSalesRepId',	   mapping : 'contactBySalesOrderSalesRep.contactId'	},
				'salesOrderSalesFormRefId' 
	]
});      /// salesOrderSalesRep , leadSalesRepId
 

Ext.define('example.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

//=====================================================//
//Store for AccountNumber
//=====================================================//
Ext.define('accountNumberList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountId',
		type : 'int'
	}, {
		name : 'accountNumber',
		type : 'string'
	},
	{name : 'accountName'}
	]
});
var storeAccountNumber = Ext.create('Ext.data.Store', {
	model : 'accountNumberList',
	proxy : {
		type : 'ajax',
		url : basePath +'contact/AccountNumber.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
storeAccountNumber.load();
//=====================================================//
//Store for AccountSource
//=====================================================//
Ext.define('accountSourceList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var accountSourceStore  = Ext.create('Ext.data.Store', {
	model : 'accountSourceList',
	proxy : {
		type : 'ajax',
		url : basePath +'accountController/accountSourceList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
accountSourceStore.load();
//=====================================================//
//Store for QuotePriority
//=====================================================//
Ext.define('quotePriorityList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var quotePriorityStore  = Ext.create('Ext.data.Store', {
	model : 'quotePriorityList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/quotePriorityList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
quotePriorityStore.load();  

//=====================================================//
//Store for QuoteNumber
//=====================================================//
Ext.define('quoteNumberList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'quoteId',
		type : 'int'
	},{
		name : 'quoteNumber',
		type : 'string'
	}	
	]
});
var storeQuoteNumber = Ext.create('Ext.data.Store', {
	model : 'quoteNumberList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/viewQuoteByAccountList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});

//=====================================================//
//Store for ContactName
//=====================================================//
Ext.define('contactNameList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'contactId',
		type : 'int'
	},{
		name : 'contactName',
		type : 'string'
	}
	]
});
var storeContactName = Ext.create('Ext.data.Store', {
	model : 'contactNameList',
	proxy : {
		type : 'ajax',
		url : basePath +'contact/commonContactReport.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});

//=====================================================//
//Store for Sales Form List
//=====================================================//
Ext.define('salesFormList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	},{
		name : '1',
		type : 'string'
	}
	]
});
var storeSalesForm = Ext.create('Ext.data.Store', {
	model : 'salesFormList',
	proxy : {
		type : 'ajax',
		url : basePath +'salesOrder/getSalesForm.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
//=====================================================//
Ext.define('salesformNumberList', {
	extend : 'Ext.data.Model',
	fields : [
	          {  name : 'salesOrderId',	 type : 'int'
         	 },{  name : 'salesOrderNumber', type : 'string'
	         },{  name : 'salesOrderDate', type : 'date'
	         },{  name : 'salesOrderSalesRep', type : 'string'
	         },{  name : 'expectedDelivDate', type : 'date'
	         },{  name : 'shippingMethod', type : 'string'
	         },{  name : 'shippingInstructions', type : 'string'
	         },{  name : 'carrier', type : 'string'
	         },{  name : 'trackingNumber', type : 'string'
	         },{  name : 'remarks', type : 'string'
	         },{  name : 'accountId', type : 'string'
	         },{  name : 'accountName', type : 'string'
	         },{  name : 'contactId', type : 'string'
	         },{  name : 'contactName', type : 'string'
	         },{  name : 'quoteId', type : 'string'
	         },{  name : 'quoteNumber', type : 'string' 
	         },{  name : 'lSourceId', type : 'string'
	         },{  name : 'lPriorityId', type : 'string'
	         },
	         {  name : 'accountId'   , mapping : 'account.accountId'     },
			 {  name : 'accountName' , mapping : 'account.accountNumber' }, 
			 {  name : 'contactId',	  mapping : 'contact.contactId'		},
		 	 {  name : 'contactName',  mapping : 'contact.contactName'	},
			 {  name : 'quoteId'   ,   mapping : 'quote.quoteId'     },
			 {  name : 'quoteNumber' , mapping : 'quote.quoteNumber' },				
			 {  name : 'lSourceId'   , mapping : 'listValuesBySourceId.listValueId' }, 				
			 {  name : 'lPriorityId' , mapping : 'listValuesByPriorityId.listValueId' }	       	        
	]
});
var storeSalesformNumber = Ext.create('Ext.data.Store', {
	model : 'salesformNumberList',
	proxy : {
		type : 'ajax',
		url : basePath +'salesOrder/salesOrderReport.json?soType=salesForm',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
storeSalesformNumber.load();

//=======================================================//
//Store for SalesRep 
//=====================================================//
Ext.define('salesRepList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	},{
		name : '1',
		type : 'String'
	} ]
});
var salesRepListStore  = Ext.create('Ext.data.Store', {
	model : 'salesRepList',
	proxy : {
		type : 'ajax',	
		url : basePath +'salesOrder/getSalesRep.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
}); 

//=====================================================//
//Store for ShippingMethod
//=====================================================//
Ext.define('shippingMethodList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	},{
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var shippingMethodListStore  = Ext.create('Ext.data.Store', {
	model : 'shippingMethodList',
	proxy : {
		type : 'ajax',		
		url : basePath +'salesOrder/shippingMethod.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
}); 
shippingMethodListStore.load();

Ext.onReady(function(){
	
	
	 Ext.apply(Ext.form.field.VTypes, {
	        daterange: function(val, field) {
	            var date = field.parseDate(val);

	            if (!date) {
	                return false;
	            }
	            if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
	                var start = field.up('form').down('#' + field.startDateField);
	                start.setMaxValue(date);
	                start.validate();
	                this.dateRangeMax = date;
	            }
	            else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
	                var end = field.up('form').down('#' + field.endDateField);
	                end.setMinValue(date);
	                end.validate();
	                this.dateRangeMin = date;
	            }
	            /*
	             * Always return true since we're only using this vtype to set the
	             * min/max allowed values (these are tested for after the vtype test)
	             */
	            return true;
	        },

	        daterangeText: 'Start date must be less than end date',
	    });
	 
	 
	var formPanel = new Ext.form.Panel({
		renderTo : 'formsalesorder',
		frame : true,
		title : 'Sales Order Form',
		width : '99.8%',	
		id : 'salesOrderId',
		height:350,
		autoScroll:true,
		bodyPadding : 8,
		waitMsgTarget : true,
		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto'		
		},
		reader : new Ext.data.reader.Json({
			model : 'example.salesorder',
			successProperty : '@success'
		}),		
		items : [ {
			xtype : 'container',
			autoWidth : true,
			layout : 'vbox',
			title : 'Lead crm',
			defaultType : 'textfield',
			title : 'Lead Form',	
			items : [ {
				xtype : 'fieldset',
				title : 'Sales order info',
				style : 'margin-top:10px;',
				bodyPadding : '7 7 7 7',
				width : '100%',			
				collapsible : true,
				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [
					{  
						xtype:'textfield',
						fieldLabel : 'Sales order number',
						anchor:'90%',
						allowBlank:false,	
						readOnly :true,
						maxLength : 50,
	                    enforceMaxLength: 50,							
	                    emptyText : 'Select Sales order number',
	                    name: 'salesOrderNumber'
					}, 
					{
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'Sales order date',
						emptyText : 'mm/dd/yy',
						style : 'margin-left:60px',
						
						vtype: 'daterange',
		                endDateField: 'expectedDelivDate',
						allowBlank : false,
						id:'salesOrderDate' , 
						name : 'salesOrderDate',				
						allowBlank : false
					},
					{ 
						xtype : 'combobox',
						fieldLabel : 'Account name',
						//vtype : 'alphanum',
						style : 'margin-left:60px',
						name : 'accountId',
						id : 'accountId',
						forceSelection : true,
						allowBlank : false,
						store : storeAccountNumber,
						displayField : 'accountName',
						valueField : 'accountId',
						anchor : '90%',
						emptyText: 'Select account name'  ,
							listeners: {
								change: function (combo, newValue, oldValue) {
									var value_index = storeAccountNumber.find('accountId', newValue);										
									if(value_index!=-1 ){
									var record = storeAccountNumber.getAt(value_index);																													
									if(record){
									 Ext.getCmp('accountNumber').setValue(record.get("accountNumber"));
									}
							  	  }										
								},select: {
								     fn:function(combo, value) {
								    	 
								    	 var contactNameCombo=Ext.getCmp('contactId');								    	  						    	   
								    	 contactNameCombo.clearValue();
								    	 storeContactName.load({
								    		 params:{
								    			 accountId:combo.getValue()
					                    	   }
								    	 });
								    	   var salesRepCombo=Ext.getCmp('leadSalesRepId');								    	  						    	   
					                       salesRepCombo.clearValue();
					                       salesRepListStore.load({
					                    	   params:{
					                    		   oppoAccountId:combo.getValue()
					                    	   }
					                       });
					                       
					                       var salesFormCombo=Ext.getCmp('salesOrderSalesFormRefId');								    	  						    	   
					                       salesFormCombo.clearValue();
					                       storeSalesForm.load({
					                    	   params:{
					                    		   accountId:combo.getValue()
					                    	   }
					                       });
					                       
					                       var quoteIdCombo=Ext.getCmp('quoteId');								    	  						    	   
									    	 quoteIdCombo.clearValue();
					                       storeQuoteNumber.load({
					                    	   params:{
					                    		   accountId:combo.getValue()
					                    	   }
					                       });
								       }
								    }			
							  }
					}, { 
	                    xtype:'textfield',
						fieldLabel: 'Account number',
						emptyText: 'Select account number',
						readOnly :true,
						style : 'margin-left:60px',						
						id : 'accountNumber',
						name : 'accountNumber',
						width: 210	                   
					} ,

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [  {  						
						xtype : 'combobox',
						fieldLabel : 'Contact name',
						emptyText : 'Select contact name',
						anchor : '90%',									
						id:'contactId' , 
						name:'contactId' , 					
						allowBlank : false,
						forceSelection : true,
						maxLength : 25,
						enforceMaxLength : 25,
						store: storeContactName,  
						displayField : 'contactName',
						valueField : 'contactId'							
					}, 
					{ 								
						xtype : 'combobox',
						fieldLabel : 'Sales form number',
						emptyText: 'Select sales form number',
						anchor : '90%',
						name : 'salesOrderSalesFormRefId',
						style : 'margin-left:60px',
						id : 'salesOrderSalesFormRefId',
						store: storeSalesForm,  
						displayField : '1',
						valueField : '0'
						
					},
					{ 						
						xtype : 'combobox',
						fieldLabel : 'Quote number',
						emptyText : 'Select Quote number',
						anchor : '90%',									
						id:'quoteId' , 
						name:'quoteId' , 
						style : 'margin-left:60px',
						maxLength : 25,
						enforceMaxLength : 25,
						store: storeQuoteNumber,  
						displayField : 'quoteNumber',
						valueField : 'quoteId' 		
							
					},					
					]
				} ]
			},

			{
				xtype : 'fieldset',
				title : 'Other info',
				style : 'margin-top:5px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					{ 	
						xtype : 'combobox',
						fieldLabel : 'Sales rep',
						anchor : '90%',
						allowBlank: false,  
						emptyText : 'Select Sales Rep...' ,
						forceSelection : true,
						maxLength : 50,
						enforceMaxLength : 50,					
						name : 'leadSalesRepId',
						id : 'leadSalesRepId',
						store : salesRepListStore,
						displayField : '1',
						valueField : '0' 
												
					},
					   { 						
						xtype : 'combobox',
						fieldLabel : 'Source',
						anchor : '90%',									
						id:'lSourceId' , 
						name:'lSourceId' ,
						style : 'margin-left:60px',
						allowBlank : false,
						maxLength : 25,
						enforceMaxLength : 25,
						store: accountSourceStore,  
						forceSelection : true,
						displayField : 'listValueDescription',
						valueField : 'listValueId', 
						emptyText : 'Select  source...' 
					},			
					{  
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Priority',
						maxLength : 16,
						style : 'margin-left:60px',
						enforceMaxLength : 16,
						emptyText : 'Select a priority...',					
						id:'lPriorityId' , 
						name:'lPriorityId' , 
						allowBlank : false,
						store:quotePriorityStore ,  
						displayField : 'listValueDescription',
						valueField : 'listValueId'				

					}, {
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'Estimated delivery date',
						emptyText : 'mm/dd/yy',
						style : 'margin-left:60px',
						name : 'expectedDelivDate',
						vtype: 'daterange',
		                startDateField: 'salesOrderDate',
						id : 'expectedDelivDate'
					}, ]
				} ]
			}, {
				xtype : 'fieldset',
				title : 'Shipping info',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ { 
						
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Shipping method',
						emptyText : 'Select Shipping Method', 
						allowBlank: false,
						name : 'lshippingMethodId',
						id : 'lshippingMethodId',
						store : shippingMethodListStore,
						displayField : 'listValueDescription',
						valueField : 'listValue' 						
					}, {
						xtype : 'textfield',
						fieldLabel : 'Shipping instructions',
						maxLength : 25,
						emptyText : 'Enter shipping instructions',
						enforceMaxLength : 25,
						style : 'margin-left:60px',
						name : 'shippingInstructions',
						id : 'shippingInstructions',
						anchor : '90%'

					},
					{
						xtype : 'textfield',
						fieldLabel : ' Carrier',
						emptyText : 'Enter carrier',
						maxLength : 10,
						enforceMaxLength : 10,
						style : 'margin-left:60px',
						anchor : '90%',
						name : 'carrier',
						id : 'carrier'
					}, {
						xtype : 'textfield',
						fieldLabel : 'Tracking number',
						emptyText : 'Enter tracking number',
						maxLength : 10,
						enforceMaxLength : 10,
						style : 'margin-left:60px',
						anchor : '90%',
						vtype : 'alphanum',
						name : 'trackingNumber',
						id : 'trackingNumber'
					},

					]
				} ]
			}, {
				xtype : 'container',
				title : 'Description',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'container',
					layout : 'anchor',
					items : [ {
						xtype : 'textarea',
						anchor : '98%',
						emptyText : '',
						fieldLabel : 'Notes',
						style : 'margin-left:7px',
						name : 'remarks'			,
						id : 'remarks'			
					},

					]
				}, ]
			},

			]
		} ],

		buttons : [
					{
						text : 'Save',
						handler : function() {							
							var form = formPanel.getForm();
							if(form.isValid()) {
									var str = "";
									if(salesOrderId != "0"){
									str = "?salesOrderId=" + salesOrderId; 
								}   
																
									formPanel.getForm().submit({
													url : basePath+ 'salesOrder/saveSalesOrderDataDetails'+ str,
													method : 'POST',
													scope : this,
													submitEmptyText : false,
													waitMsg : 'Loading...',
													success : function(f, a) {  
														 Ext.MessageBox.show({
													           title:'Save Data',
													           msg: a.result.message ,
													           buttons: Ext.MessageBox.OK,
													           fn: function(f1, a1 ){  										        	      
													        	   location.href = basePath +'crm/salesorder/createditsalesorder.htm?salesOrderId=' 
																		+ a.result.obj.salesOrderId+"&moduleName="+moduleName;										        	   										        	    
													           }  									          									         	        
													       }); 
																												
													},
													failure : function(	f, a) {				
													}
					
												});			
							}
					
						}
					},{
						text : 'Cancel',
						handler : function() {						 	
							 if(url!=null && url!="" && url!="null" ){						
								  location.href =url;	  
						     }else if(url1!=null && url1!="" && url1!="null" ){						
								  location.href =url1;	  
						     }else if(url1==null || url==null || url1=="" || url=="" || url1=="null" || url=="null" ){ 		   						 
						    	 location.href = basePath +'crm/salesorder/createditsalesorder.htm?salesOrderId=' + salesOrderId+"&moduleName="+moduleName;	
							  }  
							 
					   }
			        }
				 ]
	});
			if(accountId!='null' && accountId!="" ){
				
				 salesRepListStore.load({
				   	   params:{
				   		   oppoAccountId:accountId
				   	   }
				      });
				 
				 storeSalesForm.load({
              	   params:{
              		   accountId:accountId
              	   }
                 });
				 
				 storeContactName.load({
		    		 params:{
		    			 accountId:accountId
                	   }
		    	 });
				 
				 storeQuoteNumber.load({
              	   params:{
              		   accountId:accountId
              	   }
                 });
			}	    
			
			if(salesOrderId=='null' || salesOrderId=="" ){
				formPanel.getForm().load({		
					url :  basePath + 'salesOrder/randomNumberGenerationforSalesOrderOnLoad.json',
					method : 'GET',
					waitMsg : 'Loading...'
			  });
			}   
			
			if((salesOrderId=='null' || salesOrderId=="") && accountId != 'null' && accountId !=""){
				formPanel.getForm().load({		
					url :  basePath + 'salesOrder/randomGenerationforSalesOrderOnLoad.json?accountId='+accountId,
					method : 'GET',
					waitMsg : 'Loading...'
			  });
			} 
			
			if(salesOrderId !='null' && salesOrderId !="" ){	
		       formPanel.getForm().load({   	    	  
				id : 'salesOrderId',
				url :  basePath + 'salesOrder/' + salesOrderId  + '/editSalesOrderDataReport.json',
				method : 'GET',
				waitMsg : 'Loading...'				
		      });
			}
    
});



