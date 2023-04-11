Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.layout.container.Column' ]);

Ext.define('crm.spec', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountName',
		mapping : 'account.accountName'
	}, {
		name : 'telephone',
		mapping : 'account.telephone'
	}, {
		name : 'primaryContactName',
		mapping : 'account.primaryContactName'
	}, {
		name : 'primaryTelephoneNumber',
		mapping : 'account.primaryTelephoneNumber'
	}, {
		name : 'primaryEmailId',
		mapping : 'account.primaryEmailId'
	}, 'technicalContactName', 'technicalTelephoneNumber', 'technicalEmailId',
			{
				name : 'billingName',
				mapping : 'account.billingName'
			}, {
				name : 'billingAddress1',
				mapping : 'account.billingAddress1'
			}, {
				name : 'billingAddress2',
				mapping : 'account.billingAddress2'
			}, {
				name : 'billingAddress3',
				mapping : 'account.billingAddress3'
			}, {
				name : 'billingPostCode',
				mapping : 'account.billingPostCode'
			}, 'salesOrderDate', 'salesOrderSalesRep', 'installationAddress1',
			'installationAddress2', 'installationAddress3',
			'installationPostCode' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanel = new Ext.form.Panel({
		renderTo : 'formspec',
		frame : true,
		title : 'Specification Form',
		id : 'salesOrderId',
		width : '100%',
		bodyPadding : 8,
		waitMsgTarget : true,

		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto',
		/* msgTarget : 'side' */
		},
		reader : new Ext.data.reader.Json({
			model : 'crm.spec',
			// record : 'spec',
			successProperty : '@success'
		}),

		// configure how to read the XML error, using a config
		// errorReader: {
		// type: 'xml',
		// model: 'crm.fielderror',
		// record : 'field',
		// successProperty: '@success'
		// },

		items : [ {
			xtype : 'container',
			anchor : '100%',
			layout : 'hbox',
			defaultType : 'textfield',
			collapsible : true,
			frame : true,
			bodyPadding : '7 7 0',
			defaults : {
				width : "auto"
			},
			items : [ {
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Company name',
					emptyText : 'Company name',
					readOnly :true,
					anchor : '90%',
					name : 'accountName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Company main telephone number',
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533',
					readOnly :true,
					anchor : '90%',
					name : 'telephone'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal contact name',
					emptyText : 'Principal contact name',
					readOnly :true,
					anchor : '90%',
				//	vtype : 'alpha',
					name : 'primaryContactName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal telephone number',
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533',
					readOnly :true,
					anchor : '90%',
					name : 'primaryTelephoneNumber'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal e-mail address',
				//	vtype : 'email',
					emptyText : 'xxx@xxx.com',
					readOnly :true,
					anchor : '90%',
					name : 'primaryEmailId'
				},

				]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Technical contact name',
					emptyText : 'Technical contact name',
					readOnly :true,
					anchor : '90%',
					name : 'technicalContactName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Technical telephone number',
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533',
					readOnly :true,
					anchor : '90%',
					name : 'technicalTelephoneNumber'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Technical e-mail address',
					emptyText : 'xxx@xxx.com',
					hideTrigger : true,
					anchor : '90%',
					readOnly :true,
					inputType : 'email',
					name : 'technicalEmailId'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing company name',
				//	vtype : 'alpha',
					name : 'billingName',
					anchor : '90%',
					readOnly :true,
					emptyText : 'Billing company name'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 1',
					emptyText : 'Address 1',
				//	vtype : 'alphanum',
					anchor : '90%',
					readOnly :true,
					name : 'billingAddress1'
				}, ]
			}, {
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 2',
					emptyText : 'Address line 2',
				//	vtype : 'alphanum',
					readOnly :true,
					anchor : '90%',
					name : 'billingAddress2'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 3',
				//	vtype : 'alphanum',
					emptyText : 'Address line 3',
					readOnly :true,
					anchor : '90%',
					name : 'billingAddress3'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing postcode',
					/*vtype : 'alphanum',*/
					emptyText : 'Postcode',
					readOnly :true,
					anchor : '90%',
					name : 'billingPostCode'
				}, {
					xtype : 'datefield',
					fieldLabel : 'Date',
					emptyText : 'mm/dd/yy',
					readOnly :true,
					anchor : '90%',
					name : 'salesOrderDate'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Project number',
					emptyText : 'Project number',
					readOnly :true,
				//	vtype : 'alphanum',
					anchor : '90%',
					name : 'specprojnum'
				}, ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Sales person name',
					emptyText : 'Sales person',
					readOnly :true,
				//	vtype : 'alpha',
					anchor : '90%',
					name : 'salesOrderSalesRep'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Install or supply address line 1',
				//	vtype : 'alphanum',
					emptyText : 'Address line 1',
					readOnly :true,
					anchor : '90%',
					name : 'installationAddress1'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Install or supply address line 2',
				//	vtype : 'alphanum',
					emptyText : 'Address line 2',
					readOnly :true,
					anchor : '90%',
					name : 'installationAddress2'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Install or supply address line 3',
				//	vtype : 'alphanum',
					emptyText : 'Address line 3',
					readOnly :true,
					anchor : '90%',
					name : 'installationAddress3'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Install or supply address postcode',
				//	vtype : 'alphanum',
					emptyText : 'Postcode',
					readOnly :true,
					anchor : '90%',
					name : 'installationPostCode'
				}, ]
			}, ]
		} ],

	});
	formPanel.getForm().load({
		id : 'salesOrderId',
		url : basePath + 'salesOrder/' + soId + '/editSalesOrderReport.json',
		method : 'GET',
		waitMsg : 'Loading...'
	});

});
