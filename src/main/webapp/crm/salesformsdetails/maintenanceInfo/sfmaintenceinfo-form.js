Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.layout.container.Column' ]);

Ext.define('crm.sfmaininfo', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountName',
		mapping : 'account.accountName'
	}, 'salesOrderDate', 'salesOrderSalesRep' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanel = new Ext.form.Panel({
		renderTo : 'formsfmaininfo',
		frame : true,
		title : 'Maintenance Info Form',
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
			model : 'crm.sfmaininfo',
//			record : 'sfmaininfo',
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
					readOnly :true,
					fieldLabel : 'Company name',
					emptyText : 'Company name',
				//	vtype : 'alphanum',
					anchor : '90%',
					name : 'accountName'
				}, ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'datefield',
					readOnly :true,
					fieldLabel : 'Date',
					name : 'salesOrderDate',
					anchor : '90%',
					emptyText : 'mm/dd/yy'
				}, ]
			}, {
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					fieldLabel : 'Project number',
					name : 'profservprojnum',
					readOnly :true,
				
				//	vtype : 'alphanum',
					anchor : '90%',
					emptyText : 'Project number'
				}, ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'textfield',
					anchor : '90%',
					fieldLabel : 'Sales person name',
				//	vtype : 'alpha',
					readOnly :true,
					name : 'salesOrderSalesRep',
					emptyText : 'Project number'

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
