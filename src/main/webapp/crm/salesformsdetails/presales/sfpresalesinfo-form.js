Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.layout.container.Column' ]);

Ext.define('crm.sfpresalinfo', {
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
	}, {
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
	}, 'technicalContactName', 'technicalTelephoneNumber', 'technicalEmailId',
			'installationAddress1', 'installationAddress2',
			'installationAddress3', 'installationPostCode', 'salesOrderDate',
			'salesOrderSalesRep' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanel = new Ext.form.Panel({
		renderTo : 'presalesInfoEdit',
		frame : true,
		title : 'Pre-Sales-Info Form',
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
			model : 'crm.sfpresalinfo',
			// record : 'sfpresalinfo',
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
			title : 'Lead crm',
			defaultType : 'textfield',
			collapsible : true,
			frame : true,
			title : 'Lead Form',
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
				//	vtype : 'alphanum',
					readOnly :true,
					anchor : '90%',
					name : 'accountName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Company main telephone number',
					name : 'telephone',
					hideTrigger : true,
					anchor : '90%',
					readOnly :true,
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533'
				},

				{
					xtype : 'textfield',
					fieldLabel : 'Principal contact name',
					anchor : '90%',
				//	vtype : 'alpha',
					readOnly :true,
					emptyText : 'Principal contact name',
					name : 'primaryContactName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal telephone number',
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533',
					name : 'primaryTelephoneNumber',
					hideTrigger : true,
					readOnly :true,
					anchor : '90%'

				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal e-mail address',
					name : 'primaryEmailId',
				//	vtype : 'email',
					anchor : '90%',
					readOnly :true,
					emptyText : 'xxx@xxx.com'
				},

				]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Billing company name',
					anchor : '90%',
				//	vtype : 'alpha',
					emptyText : 'Billing company name',
					readOnly :true,
					name : 'billingName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 1',
					anchor : '90%',
				//	vtype : 'alphanum',
					emptyText : 'Address line 1',
					readOnly :true,
					name : 'billingAddress1'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 2',
					anchor : '90%',
				//	vtype : 'alphanum',
					emptyText : ' Address line 2',
					readOnly :true,
					name : 'billingAddress2'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 3',
					emptyText : ' Address line 3',
					anchor : '90%',
				//	vtype : 'alphanum',
					readOnly :true,
					name : 'billingAddress3'
				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Billing postcode',
					emptyText : '34212-2234',
				//	regex : /^(\d{5}(-\d{4})?)$/,
					readOnly :true,
					/*vtype : 'alphanum',*/
					name : 'billingPostCode'
				}, ]
			}, {
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Technical contact name',
					readOnly :true,
				//	vtype : 'alpha',
					name : 'technicalContactName',
					anchor : '90%',
					emptyText : 'Technical contact name'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Technical telephone number',
					name : 'technicalTelephoneNumber',
					hideTrigger : true,
					readOnly :true,
					anchor : '90%',
				//	regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Technical e-mail address',
					anchor : '90%',
				//	vtype : 'email',
					emptyText : 'xxx@xxx.com',
					readOnly :true,
					name : 'technicalEmailId'
				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Install or supply address line 1',
					emptyText : 'Address line 1',
					readOnly :true,
					name : 'installationAddress1'
					//vtype : 'alphanum'

				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Install or supply address line 2',
					emptyText : 'Address line 2',
					name : 'installationAddress2',
					readOnly :true
				//	vtype : 'alphanum'

				}, ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Install or supply address line 3',
					emptyText : 'Address line 3',
					name : 'installationAddress3',
					readOnly :true
					//vtype : 'alphanum'

				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Install or supply address postcode',
					name : 'installationPostCode',
					emptyText : '34212-2234',
					readOnly :true
				//	regex : /^(\d{5}(-\d{4})?)$/

				}, {
					xtype : 'datefield',
					anchor : '90%',
					fieldLabel :'Date',
					name : 'salesOrderDate',
					readOnly :true,
					emptyText : 'mm/dd/yy'

				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Project number',
					//vtype : 'alphanum',
					name : 'presalprojnum',
					emptyText : 'Project number',
					readOnly :true
					

				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Sales person name',
				//	vtype : 'alpha',
					readOnly :true,
					emptyText : 'Sales person',
					name : 'salesOrderSalesRep'

				}, ]
			}, ]
		} ],

	});

	formPanel.getForm().load({
		id : 'salesOrderId',
		url : basePath +'salesOrder/' + soId + '/editSalesOrderReport.json',
		method : 'GET',
		waitMsg : 'Loading...'
	});

});
