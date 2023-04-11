Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.layout.container.Column' ]);

Ext.define('crm.presaleNotes', {
	extend : 'Ext.data.Model',
	fields : [ 'remarks' ]
});

Ext.define('crm.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanelNotes = new Ext.form.Panel({
		renderTo : 'presalesInfoNotes',
		frame : true,
		/*id : 'salesOrderId',*/
		title : 'Pre-Sales-Info Notes',
		width : '100%',
		bodyPadding : 8,
		reset : true,
		waitMsgTarget : true,

		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto',
			msgTarget : 'side'
		},

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
			title : 'Presale Form',
			bodyPadding : '7 7 0',
			defaults : {
				width : "auto"
			},
			items : [
					{
						xtype : 'container',
						flex : 1,
						layout : 'anchor',
						items : [
								{
									xtype : 'textarea',
									fieldLabel : '',
									emptyText : '',
									allowBlank : false,
									anchor : '100%',
									name : 'prependData',
									id : 'prependData'

								},
								{
									xtype : 'button',
									formBind : true,
									disabled : true,
									text : 'Add',
									anchor : '10%',
									emptyText : '',
									name : 'presal',
									handler : function() {

										/*var tf = Ext
												.getCmp(
														'presalprepend')
												.getValue();
										var tf1 = Ext.getCmp(
												'remarks')
												.getValue();

										Ext
												.getCmp('remarks')
												.setValue('<'+ 'UserName'+ '>'+ '\t'+ Date()+ '\n' + tf + '\t'+ '\n'+'================='+ '\n'+ tf1);*/
										
										formPanelNotes
										.getForm()
										.submit(
												{
													url : basePath +'salesOrder/savePresalesData/'
															+ soId,
													method : 'POST',
													waitMsg : 'Updating remarks...',
													success : function (f, a) {
														formPanelNotes.getForm().reset();
//														alert(a.result.obj.remarks)
														Ext
														.getCmp('remarks')
														.setValue(a.result.obj.remarks);
									                },
													failure : function (f,a) {
														alert("Failed to update as message limit exceeded.");
									                }
												});
									}
								},
						]
					},

			]
		} ],

	});
	
	var formPanelSummary = new Ext.form.Panel({
		renderTo : 'presalesInfoSummary',
		frame : true,
		/*id : 'salesOrderId',*/
		/*title : 'Summary',*/
		width : '100%',
		bodyPadding : 8,
		waitMsgTarget : true,

		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto',
			msgTarget : 'side'
		},
		reader : new Ext.data.reader.Json({
			model : 'crm.presaleNotes',
			 //record : 'presaleNotes',
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
			//title : 'Presale Form',
			bodyPadding : '7 7 0',
			defaults : {
				width : "auto"
			},
			items : [
					{
						xtype : 'container',
						flex : 1,
						layout : 'anchor',
						items : [
								{
									xtype : 'textarea',
									fieldLabel : '',
									readOnly : true,
									name : 'remarks',
									id : 'remarks',
									anchor : '100%',
									emptyText : ''
								},
						]
					},

			]
		} ],

	});

	formPanelSummary.getForm().load(
			{
				id : 'salesOrderId',
				url : basePath +'salesOrder/' + soId
						+ '/editSalesOrderReport.json',
				method : 'GET',
				waitMsg : 'Loading...'
			});

});


