Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.*',
		'Ext.layout.container.Column', 'Ext.util.Format.*',
		'Ext.form.field.VTypes.*' ]);        



Ext.define('example.quote', {
	extend : 'Ext.data.Model',
	fields : [ 'quoteId','quoteNumber','quoteDate' ,'quoteSalesRep','quoteRating','estimatedValue','contactId',
				'closeProbability','estimatedCloseDate','expectedDelDate','shippingMethod','shippingInstructions',
				'carrier','remarks',		
				{  name : 'lquoteSourceId'   , mapping : 'listValuesByQuoteSourceId.listValueId' }, 				
				{  name : 'lquotePriorityId' , mapping : 'listValuesByQuotePriorityId.listValueId' }, 				
				{  name : 'lquoteStatusId'   , mapping : 'listValuesByQuoteStatusId.listValueId' } ,
				
				{  name : 'lquoteRatingId'   ,    mapping : 'listValuesByQuoteRatingId.listValueId' } ,
				{  name : 'lshippingMethodId'   , mapping : 'listValuesByShippingMethod.listValueId' } ,
				{  name : 'salesOrderId'   ,      mapping : 'salesOrder.salesOrderId'     },  
				{  name : 'salesOrderNumber'   ,  mapping : 'salesOrder.salesOrderNumber'     }, 
				
				{  name : 'opportunityId'   ,   mapping : 'opportunity.opportunityId'     },   
				{  name : 'opportunityNumber' , mapping : 'opportunity.opportunityNumber' }, 
				
				{  name : 'accountId'   , mapping : 'account.accountId'     },   
				{  name : 'accountName' , mapping : 'account.accountName' }, 
				{  name : 'contactId',	  mapping : 'contactByContactId.contactId'		},
				{  name : 'contactName',  mapping : 'contactByContactId.contactName'	},
				{  name : 'quoteSalesRep',  mapping : 'contactByQuoteSalesRepId.contactId'	}
								
	]
});
                                            
Ext.define('example.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.define('accountList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountId',
		type : 'int'
	}, {
		name : 'accountName',
		type : 'string'
	},{
		name : 'accountNumber',
		type : 'string'
	}
] });  

Ext.define('contactList', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'contactId',
		type : 'int'
	    },{
		name : 'contactName',
		type : 'string'
	    }]
});

//=====================================================//
//Store for Account Contact
//=====================================================//

Ext.define('accountContactList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	}, {
		name : '1',
		type : 'string'
	}
	]
});
var selectAccountId =2;

var storeAccountContact = Ext.create('Ext.data.Store', {
	model : 'accountContactList',
	proxy : {
		type : 'ajax',	
		url : basePath +'quote/getAccountContact.json',
		reader : {
			root : '',
			type : 'json'
		}
	},
//	 autoLoad: false
});

//=====================================================//
//Store for AccountNumber
//=====================================================//

var contactStore = Ext.create('Ext.data.Store', {
	model : 'contactList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/ContactListData.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
contactStore.load();  
//=====================================================//
//Store for AccountNumber
//=====================================================//

var accountStore = Ext.create('Ext.data.Store', {
	model : 'accountList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/AccountData.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
accountStore.load();

//=====================================================//
//Store for SalesformNumber
//=====================================================//
Ext.define('salesformNumberList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'salesOrderId',
		type : 'int'
	}, {
		name : 'salesOrderNumber',
		type : 'string'
	} ]
});
var salesformNumberStore  = Ext.create('Ext.data.Store', {
	model : 'salesformNumberList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/salesFormNumberList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
salesformNumberStore.load();                       

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
		url : basePath +'quote/shippingMethod.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
}); 
shippingMethodListStore.load();

//=====================================================//
//Store for QuoteRating
//=====================================================//
Ext.define('quoteRatingList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var quoteRatingStore  = Ext.create('Ext.data.Store', {
	model : 'quoteRatingList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/quoteRating.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
quoteRatingStore.load(); 
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
//Store for QuoteStatus
//=====================================================//
Ext.define('quoteStatusList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var quoteStatusStore  = Ext.create('Ext.data.Store', {
	model : 'quoteStatusList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/quoteStatusList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
quoteStatusStore.load();   
//==========================================================//
//Store for Sales Rep
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
		url : basePath +'quote/getSalesRep.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
}); 
//=====================================================//
//Store for OpportunityNumber
//=====================================================//
Ext.define('opportunityNumberList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'opportunityId',
		type : 'int'
	}, {
		name : 'opportunityNumber',
		type : 'string'
	} ]
});
var opportunityNumberStore  = Ext.create('Ext.data.Store', {
	model : 'opportunityNumberList',
	proxy : {
		type : 'ajax',
		url : basePath +'quote/opportunityNumberList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
opportunityNumberStore.load();

//=========================================================//

Ext.onReady(function() {	
	  	   		 	
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
		renderTo : 'formquote',
		frame : true,
		title : 'Quote Form',
		width : '99.8%',	
		id : 'quoteId',
		bodyPadding : 8,
		waitMsgTarget : true,
		
		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto'		
		},
		reader : new Ext.data.reader.Json({
			model : 'example.quote',		
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
				title : 'Quote info',
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
			                    fieldLabel: 'Quote number',
								anchor:'90%',
								allowBlank:false,	
								readOnly :true,
								maxLength : 50,
			                    enforceMaxLength: 50,							
			                    emptyText: 'Enter quote number',
			                    name: 'quoteNumber'
							},  
							{
								xtype: 'datefield',
								anchor:'90%',
			                    fieldLabel: 'Quote date',
			                    allowBlank:false,
			                    emptyText : 'mm/dd/yy',			            
								vtype: 'daterange',
				                endDateField: 'estimatedCloseDate',
				                id:'quoteDate', 
			                    name: 'quoteDate',			                  
			                    style : 'margin-left:60px',			                  
			                    allowBlank: false
							}, 
							{
								xtype : 'combobox',
								fieldLabel : 'Account name',
								emptyText : 'Select account name',
								maxLength : 50,
								enforceMaxLength : 50,
								style : 'margin-left:60px',
								typeAhead : true,
								minChars: 4,
								queryMode: 'local',
								allowBlank : false,
								store: accountStore , 
								displayField : 'accountName',   // accountId
								valueField : 'accountId',
								id: 'accountId',
								anchor : '90%',
								name : 'accountId' ,
								listeners: {									
									select: {
						                   fn:function(combo, value) {
						                	   var stateCombo=Ext.getCmp('contactId');
						                       selectAccountId=Ext.getCmp('accountId').getValue();
						                       stateCombo.clearValue();
						                       storeAccountContact.load({
						                           params: { accountId: combo.getValue() }
						                       });
						                       var salesRepCombo=Ext.getCmp('quoteSalesRep');
						                       salesRepCombo.clearValue();
						                       salesRepListStore.load({
						                    	   params:{
						                    		   accountId:combo.getValue()
						                    	   }
						                       });
						                       var salesOrderIdCombo=Ext.getCmp('salesOrderId');
						                       salesOrderIdCombo.clearValue();
						                       storeSalesForm.load({
						                    	   params:{
						                    		   accountId:combo.getValue()
						                    	   }
						                       });
						                  }
						               },
						               change: function (combo, newValue, oldValue) {							            	  
											var value_index = accountStore.find('accountId', newValue);											  
											var record = accountStore.getAt(value_index);
																						
											if(record!=null ){  
											Ext.getCmp('accountNumber').setValue(record.get("accountNumber")); 											
											}
									   }
								}
							} ,{
								xtype:'textfield',
				                fieldLabel: 'Account number',
				                emptyText: 'select account number',								
								readOnly :true,
								style : 'margin-left:60px',
								maxLength : 50,
			                    enforceMaxLength: 50,
								anchor:'90%',
				                id: 'accountNumber', 
				                name: 'accountNumber'
							},

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
							{ 								
								xtype : 'combobox',
								fieldLabel : 'Account contact',
								emptyText: 'Select account contact',
								anchor : '90%',
								typeAhead : true,
								minChars: 4,
								name : 'contactId',
								id : 'contactId',
								store : storeAccountContact,							
								displayField : '1',
								valueField : '0',
								listeners: {
									render: {
						                   fn:function(model) { 					                	  						                     
						                  }
						               }
								}
								
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Opportunity number',
								emptyText : 'Select  Opportunity number...',	
								style : 'margin-left:60px',
								id:'opportunityId' , 
								name:'opportunityId' , 
								maxLength : 60,
								enforceMaxLength : 60,
								store: opportunityNumberStore,    
								displayField : 'opportunityNumber',  // opportunityNumber
								valueField : 'opportunityId'							
							},
							{     
								xtype : 'combobox',                
								fieldLabel : 'Sales form number',
								emptyText: 'Select sales form number',		
								style : 'margin-left:60px',
								id:'salesOrderId' , 
								name:'salesOrderId' , 
								maxLength : 50,
								enforceMaxLength : 50,
								store: storeSalesForm,   
								displayField : '1',
								valueField : '0',  // salesOrderNumber
								emptyText : 'Select Salesform Number...'    
																
							},
							{
								xtype : 'combobox',
								fieldLabel : 'Sales rep',
								emptyText: 'Enter sales rep',
								anchor : '90%',
								allowBlank: false,
								style : 'margin-left:60px',
								maxLength : 50,
								enforceMaxLength : 50,
								name : 'quoteSalesRep',
								id : 'quoteSalesRep',
								store : salesRepListStore,
								displayField : '1',
								valueField : '0'
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
						fieldLabel : 'Source',
						emptyText : 'Select  source...',						
						id:'lquoteSourceId' , 
						name:'lquoteSourceId' , 
						maxLength : 25,
						enforceMaxLength : 25,
						store: accountSourceStore,  
						displayField : 'listValueDescription',
						valueField : 'listValueId', 
						emptyText : 'Select a Source...'    

					},
					{  						
						xtype : 'combobox',
						fieldLabel : 'Rating',
						style : 'margin-left:60px',
						emptyText : 'Select  Rating...',						
						id:'lquoteRatingId' , 
						name:'lquoteRatingId' , 
						maxLength : 25,
						enforceMaxLength : 25,
						store: quoteRatingStore,  
						displayField : 'listValueDescription',
						valueField : 'listValueId', 
						emptyText : 'Select a Source...'    
					},					
					{
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Priority',
						maxLength : 16,
						style : 'margin-left:60px',
						enforceMaxLength : 16,
						emptyText : 'Select  priority...',					
						id:'lquotePriorityId' , 
						name:'lquotePriorityId' , 
						allowBlank : false,
						store:quotePriorityStore ,  
						displayField : 'listValueDescription',
						valueField : 'listValueId'				

					},  
					{
						xtype : 'numberfield',
						anchor : '90%',
						hideTrigger : true,
						fieldLabel : 'Estimated value',
						emptyText : 'Enter estimated value ',
						maxLength : 10,
						 maxLength : 10,
						 enforceMaxLength : 10,	
	                    minValue: 0,
	                    hideTrigger: true,	
						style : 'margin-left:60px',
						name : 'estimatedValue'
					},

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [
				    					{
			            xtype: 'numberfield',
						anchor:'90%',
			            fieldLabel: ' Close probability',
			            maxLength : 3,
						 enforceMaxLength : 3,		
			            minValue: 1,
			            maxValue:100,
			            hideTrigger: true,
			            emptyText : 'Set the percentage',
			            name: 'closeProbability'
						},
					
					{
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'Estimated close date',
						style : 'margin-left:60px',
						emptyText : 'mm/dd/yy',
						vtype: 'daterange',
		                startDateField: 'quoteDate',
		                endDateField: 'expectedDelDate',
						id : 'estimatedCloseDate',
						name : 'estimatedCloseDate'
					}, 
					{
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'Estimated delivery date',
						emptyText : 'mm/dd/yy',
						vtype: 'daterange',
		                startDateField: 'estimatedCloseDate',
						id : 'expectedDelDate',
						style : 'margin-left:60px',
						name : 'expectedDelDate'
					}, 
					{
						xtype : 'combobox',
						fieldLabel : 'Status',
						anchor : '90%',
						maxLength : 50,
						style : 'margin-left:60px',
						enforceMaxLength : 50,
						emptyText : 'Select  status...',
						allowBlank : false,
						vtype : 'alpha',				
						id:'lquoteStatusId' , 
						name:'lquoteStatusId' , 
						store: quoteStatusStore ,  
						displayField : 'listValueDescription',
						valueField : 'listValueId'
					},
					

					]
				}]
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
					},
					{
						xtype : 'textfield',
						fieldLabel : 'Shipping instructions',
						maxLength : 25,
						enforceMaxLength : 25,
						style : 'margin-left:60px',
						emptyText : 'Enter  shipping instructions',
						name : 'shipinst',
						anchor : '90%',
						name:'shippingInstructions'

					},

					{
						xtype : 'textfield',
						fieldLabel : ' Carrier',
						emptyText : 'Enter  carrier',
						maxLength : 10,
						enforceMaxLength : 10,
						style : 'margin-left:60px',
						anchor : '90%',
						name : 'carrier'
					}, 
					]
				} ]
			},{
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
						emptyText : '',
						anchor : '98%',
						fieldLabel : 'Notes',
						style : 'margin-left:7px',
						name : 'remarks'			
					},

					]
				},  ]
			},

			]
		} ],
		buttons : [
				{
					text : 'Save',        
					handler : function() { 						
						var form = formPanel.getForm();
						if (form.isValid()) {													
							var str = "";	          
							if(quoteId != "0"){
							str = "?quoteId=" + quoteId; 
							} 														
							formPanel.getForm().submit({
												url : basePath+ 'quote/saveQuote'+str ,
												method : 'POST',
												scope : this,
												submitEmptyText : false,
												waitMsg : 'Loading...',
												success : function(	f, a) {
													  Ext.MessageBox.show({
												           title:'Save Data',
												           msg: a.result.message ,
												           buttons: Ext.MessageBox.OK,
												           fn: function(f1, a1 ){  													        	   
			                 location.href = basePath +'crm/quote/createditquotes.htm?quoteId=' + a.result.obj.quoteId ;				        	 				
												           		
												           }  									          									         	        
												       });  																										
												},
												failure : function(	f, a) {													
												}
											});								
						}		  	
					 
					}
				}, 
				{
					text : 'Cancel',
					handler : function() {	
												
					  if(url2!=null && url2!="" && url2!="null" ){						
						  location.href =url2;	  
					  }else if(url!=null && url!="" && url!="null" ){						
						  location.href =url;	  
					  }else if(url2==null || url==null || url2=="" || url=="" || url2=="null" || url=="null" ){  
						   						 
						  location.href =basePath +'crm/quote/createditquotes.htm?quoteId=' + quoteId ; 
					  }
							
					 }
				} ]
	});
	if(accountId!=null && accountId!=""){
	storeAccountContact.load({
        params: { accountId: accountId }
    });
	 salesRepListStore.load({
  	   params:{
  		   accountId:accountId
  	   }
     });
	 
	 storeSalesForm.load({
  	   params:{
  		   accountId:accountId
  	   }
     });
	}
	if(quoteId==null || quoteId=="" ){
		formPanel.getForm().load({		
			url :  basePath + 'quote/randomNumberGenerationforQuoteOnLoad.json',
			method : 'GET',
			waitMsg : 'Loading...'
	  });
	}
		
	if(accountId!=null || accountId!="" ){  					 
		 formPanel.getForm().findField('accountId').setValue(accountId );			
		 formPanel.getForm().findField('accountNumber').setValue(accountNumber );	
		
	}
	if(quoteId!=null || quoteId!="" ){
	formPanel.getForm().load({    
		id : 'quoteId',
		url :  basePath + 'quote/' + quoteId + '/editQuoteReport.json',
		method : 'GET',
		waitMsg : 'Loading...'
	});
	}
	if((quoteId ==null || quoteId =="" ) && accountId != 'null' && accountId !=""){
		formPanel.getForm().load({		
			url :  basePath + 'quote/editCommonquoteOnLoad.json?accountId='+accountId,
			method : 'GET',
			waitMsg : 'Loading...'
		});
		}
});
