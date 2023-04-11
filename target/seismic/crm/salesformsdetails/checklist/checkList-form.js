Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*'
]);
Ext.define('crm.sfequipinfo', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountName',
		mapping : 'account.accountName'
	},{
		name : 'accountNumber',
		mapping : 'account.accountNumber'
	}, 'salesOrderDate','salesOrderSalesRep','nameOfSalesOrder' ] 
});

Ext.onReady(function(){
	       
		var formPanel = new Ext.form.Panel({
		renderTo : 'checkListFormPanel',
		frame : true,
		title : 'Check List Form',
		id : 'checkListFormPanelID',
		width : '100%',
		bodyPadding : 8,
		waitMsgTarget : true,
		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto',
			msgTarget : 'side'
		},
		reader : new Ext.data.reader.Json({
			model : 'crm.sfequipinfo',
			successProperty : '@success'
		}),		
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
				items : [{
					xtype : 'textfield',
					fieldLabel : 'Account number',
					anchor : '90%',					
					readOnly :true,
					name : 'accountNumber'
				}, 		 
{
	xtype : 'textfield',
	fieldLabel : 'Sales rep',
	name : 'salesOrderSalesRep',
	readOnly :true,
	vtype:'alphanum',
	anchor : '90%'  ,
	emptyText : 'Sales rep' 
},
				 ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ 
{
	xtype : 'textfield',
	anchor : '90%',
	fieldLabel : 'Account name',					
	readOnly :true,					
	name : 'accountName'

},
					 ]
			}, {
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [  {      
					xtype : 'textfield',
					fieldLabel : 'Sales form number',				
					anchor : '90%',
					readOnly :true,				
					name : 'nameOfSalesOrder'
				}, ]
			},

			{
				xtype : 'container',
				flex : 1,
				layout : 'anchor',
				items : [ {
					xtype : 'datefield',
					fieldLabel : 'Date',
					name : 'salesOrderDate',
					readOnly :true,
					anchor : '90%' 					
				},   ]
			}, ]
		} ],
		 
	});
	
    formPanel.getForm().load({
		id : 'checkListFormPanelID',
		url : basePath +'salesOrder/' + soId + '/editSalesOrderReport.json',
		method : 'GET',
		waitMsg : 'Loading...'
	});
          
});

