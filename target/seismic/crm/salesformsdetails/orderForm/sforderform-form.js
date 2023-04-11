Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.layout.container.Column' ]);

Ext.define('crm.sforderfrm', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountName',
		mapping : 'account.accountName'
	}, 'nameOfSalesOrder', {
		name : 'contactRegistrationNumber',
		mapping : 'contact.contactRegistrationNumber'
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
		name : 'billingTelephoneNumber',
		mapping : 'account.billingTelephoneNumber'
	}, {
		name : 'billingContactEmailId',
		mapping : 'account.billingContactEmailId'
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
	}, 'installationAddress1', 'installationAddress2', 'installationAddress3','installationPostCode','salesOrderSalesRep' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanel = new Ext.form.Panel({
		renderTo : 'formsforderfrm',
		frame : true,
		title : 'Order Form',
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
			model : 'crm.sforderfrm',
			// record : 'sforderfrm',
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
					/*vtype : 'alphanum',*/
					anchor : '90%',
					readOnly :true,
					name : 'accountName'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Purchase order number',
					name : 'nameOfSalesOrder',
					/*vtype : 'alphanum',*/
					anchor : '90%',
					readOnly :true,
					emptyText : 'Purchase order number'
				},
				 {
						xtype : 'datefield',
						fieldLabel : 'Date',
						name : 'salesOrderDate',
						readOnly :true,
						anchor : '90%',
						emptyText : 'mm/dd/yy'
					},

				{
					xtype : 'textfield',
					fieldLabel : 'Company registration number',
					anchor : '90%',
					/*vtype : 'alphanum',*/
					emptyText : 'Company registration number',
					readOnly :true,
					name : 'contactRegistrationNumber'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal telephone number',
					name : 'primaryTelephoneNumber',
					hideTrigger : true,
					readOnly :true,
					anchor : '90%',
					//regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Principal e-mail address',
					/*vtype : 'email',*/
					name : 'primaryEmailId',
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
					fieldLabel : 'Billing contact name',
					name : 'billingName',
					anchor : '90%',
					/*vtype : 'alpha',*/
					readOnly :true,
					emptyText : 'Billing contact name'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing telephone number',
					name : 'billingTelephoneNumber',
					regex : /^([+]?[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{4})$/,
					emptyText : ' +1-234-543-4533',
					hideTrigger : true,
					readOnly :true,
					anchor : '90%'

				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing contact e-mail address',
					anchor : '90%',
					/*vtype : 'email',*/
					emptyText : 'xxx@xxx.com',
					readOnly :true,
					name : 'billingContactEmailId'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing company name',
					anchor : '90%',
				/*	vtype : 'alpha',*/
					readOnly :true,
					emptyText : 'Billing company name',
					name : 'ordbillcompnme'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 1',
					anchor : '90%',
				//	vtype : 'alphanum',
					emptyText : 'Address line 1',
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
					anchor : '90%',
					/*vtype : 'alphanum',*/
					readOnly :true,
					emptyText : 'Address line 2',
					name : 'billingAddress2'
				}, {
					xtype : 'textfield',
					fieldLabel : 'Billing address line 3',
					anchor : '90%',
					/*vtype : 'alphanum',*/
					emptyText : 'Address line 3',
					readOnly :true,
					name : 'billingAddress3'
				}, {
					xtype : 'textfield',
					anchor : '90%',
					readOnly :true,
					/*vtype : 'alphanum',*/
					fieldLabel : ' Billing postcode',
					/*regex : /^(\d{5}(-\d{6})?)$/,*/
					emptyText : '23456-345678',
					name : 'billingPostCode'

				}, {
					xtype : 'textfield',
					anchor : '90%',
					readOnly :true,
					fieldLabel : 'Install or supply address line 1',
					emptyText : 'Address line 1',
					name : 'installationAddress1'

				}, {
					xtype : 'textfield',
					anchor : '90%',
					readOnly :true,
					/*vtype : 'alphanum',*/
					fieldLabel : 'Install or supply address line 2',
					emptyText : 'Address line 2',
					name : 'installationAddress2'

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
					/*vtype : 'alphanum'*/

				}, {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Install or supply address postcode',
					emptyText : 'Postcode',
					name : 'installationPostCode',
					readOnly :true
					/*vtype : 'alphanum'
*/
				}, {
					xtype : 'textfield',
					anchor : '90%',
					emptyText : 'Sales person name',
					fieldLabel : 'Sales person name',
					name : 'salesOrderSalesRep',
					readOnly :true
					/*vtype : 'alpha'*/

				}, {
					xtype : 'combobox',
					anchor : '90%',
					fieldLabel : 'Number of employees',
					emptyText : 'Select number of employees',
					readOnly :true,
					name : 'ordnoofemp'

				}, {
					xtype : 'combobox',
					anchor : '90%',
					fieldLabel : 'Minimum period',
					emptyText : 'Select period',
					readOnly :true,
					name : 'ordminperiod'
					

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
