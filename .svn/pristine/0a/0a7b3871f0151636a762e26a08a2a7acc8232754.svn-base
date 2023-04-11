Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);
            
Ext.define('crm.lead', {
    extend: 'Ext.data.Model',
    fields: [   
          'leadNumber','leadName','leadDate','leadExpiresOn','leadSalesRep','estimatedCloseDate','leadCloseProbability',
          'estimatedValue', 'leadId','contactId',
          
            {
				name : 'accountId',
				mapping : 'account.accountId'
			},{
				name : 'accountNumber',
				mapping : 'account.accountNumber'
			},{
				name : 'accountName',
				mapping : 'account.accountName'
			},{
				name : 'lvlanguageId',
				mapping : 'listValuesByLanguageId.listValueId'				
			},{  
				name : 'lvStatusId' , 
				mapping : 'listValuesByStatusId.listValueId'
			},{  
				name : 'lvSourceId' , 
				mapping : 'listValuesBySourceId.listValueId'
			},{  
				name : 'lvPriorityId' , 
				mapping : 'listValuesByPriorityId.listValueId'
			},{  
				name : 'lvRatingId' , 
				mapping : 'listValuesByRatingId.listValueId'
			},{
				name : 'leadSalesRepId',
				mapping : 'contactByLeadSalesRepId.contactId'
			},{
				name : 'contactId',
				mapping : 'contact.contactId'
			}            
    ]
});
      //  'leadRating', firstName      
Ext.define('crm.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

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
//Store for LeadRating
//=====================================================//
Ext.define('leadRatingList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var leadRatingStore  = Ext.create('Ext.data.Store', {
	model : 'leadRatingList',
	proxy : {
		type : 'ajax',
		url : basePath +'lead/leadRating.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});   
leadRatingStore.load();

//=====================================================//
//Store for StatusType
//=====================================================//
Ext.define('statusTypeList', {      
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var statusTypeStore  = Ext.create('Ext.data.Store', {
	model : 'statusTypeList',
	proxy : {
		type : 'ajax',
		url : basePath +'lead/viewLeadStatusList.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});  
statusTypeStore.load();

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
//Store for Language
//=====================================================//
Ext.define('languageList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var storeLanguage = Ext.create('Ext.data.Store', {
	model : 'languageList',
	proxy : {
		type : 'ajax',
		url : basePath +'contact/Language.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
storeLanguage.load();

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
		url : basePath +'lead/getSalesRep.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
}); 

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
	} ]
});

var storeAccountContact = Ext.create('Ext.data.Store', {
	model : 'accountContactList',
	proxy : {
		type : 'ajax',
		url : basePath +'lead/getAccountContact.json',
		reader : {
			root : '',
			type : 'json'
		}
	},
//autoLoad: false
});
//=====================================================//

Ext.onReady(function(){
	        
    var formPanel = new Ext.form.Panel({
        renderTo: 'formlead',
        frame: true,
        title:'Lead Form',
		id:'leadId',
        width: '100%',      
        bodyPadding : 8,
		waitMsgTarget : true,
        fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto'		
		},
			reader : new Ext.data.reader.Json({
            model: 'crm.lead',          
            successProperty: '@success'
        }),       
        items: [{
            xtype: 'container',
            autoWidth: true,
            layout: 'vbox',
            title: 'Lead crm',
            defaultType: 'textfield',
			title: 'Lead Form',           
            items: [{
						xtype: 'fieldset',					
						title: 'Lead Info',
						style:'margin-top:10px',
						bodyPadding: '7 7 7 7',						
						width:'100%',						
						collapsible: true,						
			items: [  {
				xtype: 'fieldcontainer',
				layout:'hbox',
				items: [				        
					  {
						xtype:'textfield',
					    fieldLabel: 'Lead number',
					    readOnly :true,
						emptyText: 'Enter lead number',
						allowBlank:true,			
						maxLength : 50,
						enforceMaxLength: 50,
					    name: 'leadNumber'
						},
				        {				
						xtype:'textfield',
	                    fieldLabel: 'Lead name',                  
	                    emptyText: 'Enter lead name',	                 
	                    vtype:'alpha',
	                    style : 'margin-left:60px',		
	                    maxLength : 50,                  
	                    enforceMaxLength: 50,
						allowBlank:false,
	                    name: 'leadName'
						},	
					
					{
						xtype:'datefield',
						anchor:'90%',
						fieldLabel: 'Lead Date',
						style : 'margin-left:60px',
						emptyText : 'mm/dd/yy',
						allowBlank:false,						
						name: 'leadDate'
					}, 
					{   						
						xtype : 'combobox',
						fieldLabel : 'Account name',
						style : 'margin-left:60px',
						name : 'accountId',
						id : 'accountId',
						allowBlank : false,
						store : storeAccountNumber,
						displayField : 'accountName',
						valueField : 'accountId',
						anchor : '90%',
						emptyText: 'select account name',
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
								    	   var salesRepCombo=Ext.getCmp('leadSalesRepId');
					                       salesRepCombo.clearValue();
					                       salesRepListStore.load({
					                    	   params:{
					                    		   oppoAccountId:combo.getValue()
					                    	   }
					                       });
					                       var salesRepCombo=Ext.getCmp('contactId');
					                       salesRepCombo.clearValue();
					                       storeAccountContact
											.load({
												params : {
													oppoAccountId : combo
															.getValue()
												}
											});
					                       
								  }
								}
							}
						
					},			
					]
			     },{
						xtype: 'fieldcontainer',
						layout:'hbox',
						items: [ { 							
								    xtype:'textfield',
									fieldLabel: 'Account number',									
									readOnly :true,								
									emptyText: 'select account name',
									id : 'accountNumber',
									name : 'accountNumber' 								                    
								},   
								{ 							
								    xtype:'combobox',  
									fieldLabel: 'Contact name',									
									allowBlank : true,
									style : 'margin-left:60px',
									emptyText: 'Select contact name',
									id : 'contactId',
									name : 'contactId',
									store : storeAccountContact,
									displayField : '1',
									valueField : '0'
								},
									
									{   									
										xtype : 'combobox',
										fieldLabel : 'Source',
										anchor : '90%',
										id:'lvSourceId' , 
										name:'lvSourceId' , 
										style : 'margin-left:60px',
										allowBlank : false,
										maxLength : 50,
										enforceMaxLength : 50,
										store: accountSourceStore,  
										displayField : 'listValueDescription',
										valueField : 'listValueId', 
										emptyText : 'Select  Source...'    	
									}
									
							]
					     }					
				]},
				
				{
					xtype: 'fieldset',					
					title: 'Other Info',
					style:'margin-top:10px',
					width:'100%',
					border: false,
					collapsible: true,
					
		items: [{
			xtype: 'fieldcontainer',
			layout:'hbox',
			items: [{  				
						xtype : 'combobox',
						fieldLabel : 'Sales rep',
						anchor : '90%',
						allowBlank: false,  
						emptyText : 'Select Sales Rep...' ,
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
						fieldLabel : ' Status',					
						anchor : '90%',
						style : 'margin-left:60px',
						maxLength : 20,
						enforceMaxLength : 20,					
						id:'lvStatusId' ,
						name:'lvStatusId' ,
						allowBlank : false,
						store: statusTypeStore, 
						displayField : 'listValueDescription',
						valueField : 'listValueId', 
						emptyText : 'Select status...' 
					},
					{  						
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Priority',
						maxLength : 16,
						style : 'margin-left:60px',
						enforceMaxLength : 16,
						emptyText : 'Select  priority...',					
						id:'lvPriorityId' , 
						name:'lvPriorityId' , 
						allowBlank : false,
						store:quotePriorityStore ,  
						displayField : 'listValueDescription',
						valueField : 'listValueId'				
					},
					{
						xtype:'datefield',
	                    fieldLabel: 'Closed on',	                 
	                    style:'margin-left:60px',
	                    emptyText : 'mm/dd/yy',
						 anchor:'90%',
	                    name: 'leadExpiresOn'
					},	
				]},
				{
					xtype: 'fieldcontainer',
					layout:'hbox',
					items: [{ 								
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Rating ',
						maxLength : 16,						
						enforceMaxLength : 16,
						emptyText : 'Select  Rating...',					
						id:'lvRatingId' , 
						name:'lvRatingId' , 
						allowBlank : false,
						store:leadRatingStore ,  
						displayField : 'listValueDescription',
						valueField : 'listValueId'	
						
					},
						
					{
			            xtype: 'numberfield',  
						anchor:'90%',
			            fieldLabel: ' Close probability',
			            maxLength : 3,
						enforceMaxLength : 3,		
			            minValue: 0,
			            maxValue:100,
			            hideTrigger: true,
			            style:'margin-left:60px',
			            emptyText : 'Set the percentage',
			            name: 'leadCloseProbability'
						},
						{
			            xtype: 'numberfield',
						 anchor:'90%',
			            fieldLabel: 'Estimated value',
			            emptyText : 'Enter estimated value ',
			            maxLength : 10,
						 enforceMaxLength : 10,	
	                    minValue: 0,
			            style:'margin-left:60px',
			            name: 'estimatedValue',
			            hideTrigger: true
			           
						},{
			                    xtype: 'datefield',
								anchor:'90%',
			                    fieldLabel: 'Estimated close date',
			                    style:'margin-left:60px',
			                    emptyText : 'mm/dd/yy',
			                    name: 'estimatedCloseDate',
								}
							]}
			]},
					
								
            ]
        }],

        buttons: [
					{
						text : 'Save',        
						handler : function() { 						
							var form = formPanel.getForm();
							if (form.isValid()) {													
								var str = "";	          
								if(leadId != "0"){
								str = "?leadId=" + leadId; 
								} 		
																
								formPanel.getForm().submit({
													url : basePath+ 'lead/saveLeadData'+str ,
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
													        	   location.href = basePath+ 'crm/Lead/createditlead.htm?leadId='+ a.result.obj.leadId;									        	   										        	    
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
								  location.href = basePath+ 'crm/Lead/createditlead.htm?leadId='+ leadId;													
						   }				
					}
                 ]
    });
    
    if(leadId==null || leadId=="" ){
    	formPanel.getForm().load({		
			url :  basePath + 'lead/randomNumberGenerationforLeadOnLoad.json',
			method : 'GET',
			waitMsg : 'Loading...'
	  });
	}
	if(accountId!=null || accountId!="" ){
		 salesRepListStore.load({
		   	   params:{
		   		   oppoAccountId:accountId
		   	   }
		      });
		 storeAccountContact
			.load({
				params : {
					oppoAccountId : accountId
				}
			});
	}
    formPanel.getForm().load({    
		id : 'leadId',
		url :  basePath + 'lead/' + leadId + '/editLeadReport.json',
		method : 'GET',
		waitMsg : 'Loading...'
	});

});


