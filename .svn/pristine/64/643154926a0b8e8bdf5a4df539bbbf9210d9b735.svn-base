//Store for Entity type
//=====================================================//
Ext.define('entityTypeList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});

var storeEntityType = Ext.create('Ext.data.Store', {
	model : 'entityTypeList',
	proxy : {
		type : 'ajax',
		url : basePath + 'address/EntityType.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
 storeEntityType.load();
// =====================================================//
// Store for Address type
// =====================================================//
Ext.define('addressTypeList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValueCategory',
		type : 'string'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});

var storeAddressType = Ext.create('Ext.data.Store', {
	model : 'addressTypeList',
	proxy : {
		type : 'ajax',
		url : basePath + 'address/AddressType.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
 storeAddressType.load();
// =====================================================//
//Store for Contact Id
//=====================================================//
Ext.define('contactIdList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'contactId',
		type : 'int'
	} ]
});

var storeContactId = Ext.create('Ext.data.Store', {
	model : 'contactIdList',
	proxy : {
		type : 'ajax',
		url : basePath + 'contact/ContactNumber.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
storeContactId.load();
//=====================================================//

Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.*',
		'Ext.layout.container.Column', 'Ext.util.Format.*',
		'Ext.form.field.VTypes.*' ]);

Ext.define('crm.address', {
	extend : 'Ext.data.Model',
	fields : [ 
	 {
		name : 'lvEntityTypeId',
		mapping : 'listValuesByEntityTypeId.listValueId'
	},{
		name : 'lvEntityTypeName',
		mapping : 'listValuesByEntityTypeId.listValueDescription'
	},'entityName',
	{
		name : 'addressTypeId',
		mapping : 'listValuesByAddressTypeId.listValueId'
	},{
		name : 'contactId',
		mapping : 'contact.contactId'
	},{
		name : 'contactNumber',
		mapping : 'contact.contactNumber'
	},{
		name : 'entityNumber',
		mapping : 'contact.contactNumber'
	}, 'address1','address2','address3','address4','postalCode','phone','mobile','email' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {	
		
	var formPanel = new Ext.form.Panel({
		renderTo : 'formaddress',
		frame : true,
		title : 'Address Form',
		width : '99.8%',		
		bodyPadding : 8,
		waitMsgTarget : true,
		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto'		
		},
		reader : new Ext.data.reader.Json({
			model : 'crm.address',			
			successProperty : '@success'
		}),
		
		items : [ {
			xtype : 'container',
			autoWidth : true,
			layout : 'vbox',
			title : 'address crm',
			defaultType : 'textfield',
			title : 'Address Form',			
			
			items : [ {
				xtype : 'fieldset',				
				style : 'margin-top:10px;',
				bodyPadding : '7 7 7 7',
				width : '100%',			
				collapsible : false,
				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					   {
						xtype : 'textfield',
						hidden : true,  
						name : 'lvEntityTypeId',
						id : 'lvEntityTypeId'
					   },      
					   {
						xtype : 'textfield',
						fieldLabel : 'Related to',			
						maxLength : 50,
						enforceMaxLength : 50,					
						typeAhead : true,
						name : 'lvEntityTypeName',
						id : 'lvEntityTypeName',		
						readOnly : true,   
						anchor : '90%',
						listeners: {
				            render: function( component ) {
				            	Ext.getCmp('lvEntityTypeName').setValue(lvEntityTypeName);
				            }
				        }
					},{
						xtype : 'textfield',
						hidden : true,  
						name : 'contactId' ,
						id : 'contactId'
					   }, 					
					{
						xtype : 'textfield',
						fieldLabel : 'Related number',
						maxLength : 50,
						enforceMaxLength : 50,
						style : 'margin-left:60px',
						name : 'entityNumber',  
						id : 'entityNumber',						
						readOnly : true,
						anchor : '90%',
						emptyText : 'Related number.....',
					}, 
					{
						
						xtype : 'combobox',
						fieldLabel : 'Address type',
						vtype : 'alpha',
						style : 'margin-left:60px',
						emptyText : 'Type',
						allowBlank : true,
						maxLength : 15,
						enforceMaxLength : 15,						
						name : 'addressTypeId',
						id : 'addressTypeId',						 
						store : storeAddressType,
						displayField : 'listValueDescription',
						valueField : 'listValueId',
						anchor : '90%',
						emptyText : 'select type.....',
					},{
						xtype : 'textfield',
						fieldLabel : 'Postcode',
						style : 'margin-left:60px',
						anchor : '90%',
						maxLength : 15,
						enforceMaxLength : 15,
						regex:/^(\d{5}(-\d{6})?)$/ ,
						regexText: 'Must be in the format 23456-345678',
						emptyText : '23456-345678',					
						name : 'postalCode'
					}

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 		 	 
			 	    
			 	    {
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Address line 1',						
						allowBlank : false,
						maxLength : 300,
						emptyText : 'Enter plot no',
						enforceMaxLength : 300,
						name : 'address1'
					}, {
						xtype : 'textfield',
						fieldLabel : 'Address line 2',
						style : 'margin-left:60px',
						allowBlank : false,
						emptyText : 'Enter street name',
						anchor : '90%',
						maxLength : 50,
						enforceMaxLength : 50,
						name : 'address2'
					},

					{
						xtype : 'textfield',
						fieldLabel : 'Address line 3',
						name : 'address3',
						style : 'margin-left:60px',
						allowBlank : false,
						maxLength : 50,
						enforceMaxLength : 50,
						emptyText : 'Enter area name ',
						anchor : '90%'

					},{
						xtype : 'textfield',
						fieldLabel : 'Telephone number',
						style : 'margin-left:60px',
						maxLength : 16,
						regex:/^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/ ,
						emptyText : ' +1-234-543-4533',
						enforceMaxLength : 16,				
						width : 210,
						name : 'phone'
					}
					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 					 
					{
						xtype : 'textfield',
						fieldLabel : 'Mobile number',
						maxLength : 16,
						regex:/^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/ ,
						emptyText : ' +1-234-543-4533',
						enforceMaxLength : 16,
					//	style : 'margin-left:60px',
						allowBlank : false,
						name : 'mobile',
						anchor : '90%'
					}, {
						xtype : 'textfield',
						fieldLabel : ' Email address',
						vtype : 'email',
						allowBlank : false,
						style : 'margin-left:60px',
						width : 210,
						name : 'email',
						emptyText : 'xxx@xxx.com'
						
					},

					]
				} ]
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
							if(addressId != "0"){
								str = "?addressId=" + addressId; 
							}
						formPanel.getForm().submit({
							url : basePath + 'address/saveAddressData'+ str,
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
                                        location.href = basePath +'commonjsppages/address/address.htm?addressId=' + a.result.obj.addressId ;			        	 				
							           		
							           }  									          									         	        
							       });  	
							},failure : function(f, a) {								
								if (addressId == "") {
									location.href = basePath+ 'commonjsppages/address/address.htm?addressId='+ a.result.addressId;
								}
							}
						});
					}
					
					}
				}, {
					text : 'Cancel',
					handler : function() {												
						location.href = url; 						
						//window.close();
					}
				} ]
	});
	
		
	if(contactId!=null || contactId!="" ){					
		formPanel.getForm().load({
			id : 'addressId',
			url :  basePath + 'address/' + addressId + '/editAddressReport.json?contactId='+contactId+'&entityName='+entityName,
			method : 'GET',
			waitMsg : 'Loading...'
		});
	}

});

