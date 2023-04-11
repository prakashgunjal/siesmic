Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.*',
		'Ext.layout.container.Column', 'Ext.util.Format.*',
		'Ext.form.field.VTypes.*' ]);

Ext.define('example.contact', {
	extend : 'Ext.data.Model',
	fields : [ 'salutation', 'fname', 'mname', 'lname', 'gender',
			'dob', 'martialstatus', 'pic', 'preflang', 'type',
			'dept', 'title', 'stdate', 'endate',
			'add1', 'add2', 'add3', 'postcode', 'mailid',
			'altemailid', 'telenum', 'mobnum', 'faxnum', 'linkin',
			'facebookid', 'supervisor', 'dontphone', 
			'dontemail', 'dontsms'

	]
});

Ext.define('example.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

Ext.onReady(function() {

	var formPanel = new Ext.form.Panel({
		renderTo : 'formcontacts',
		frame : true,
		title : 'Location Form',
		width : '99.8%',
		defaultType: 'checkbox',
		/*autoScroll: true,
		height:350,*/
		bodyPadding : 8,
		waitMsgTarget : true,
		
		fieldDefaults : {
			labelAlign : 'top',
			labelWidth : 'auto'
		/* msgTarget: 'side' */
		},
		reader : new Ext.data.reader.Json({
			model : 'example.contact',
			record : 'contact',
			successProperty : '@success'
		}),

		// configure how to read the XML error, using a config
		// errorReader: {
		// type: 'xml',
		// model: 'example.fielderror',
		// record : 'field',
		// successProperty: '@success'
		// },

		items : [ {
			xtype : 'container',
			autoWidth : true,
			layout : 'vbox',

			items : [ {
				xtype : 'fieldset',
				title : 'Location info',
				style : 'margin-top:10px;',
				bodyPadding : '7 7 7 7',

				width : '100%',
				/* border: false, */
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',

					layout : 'hbox',
					items : [ {
						xtype : 'combobox',
						fieldLabel : 'Related to',
						maxLength : 50,
						enforceMaxLength : 50,
						allowBlank : false,
						anchor : '90%',
						vtype : 'alpha',						
						name : 'salutation'
					}, {
						xtype : 'combobox',
						fieldLabel : 'Related number',
						maxLength : 15,
						style : 'margin-left:60px',
						enforceMaxLength : 15,
						allowBlank : false,
						anchor : '90%',
						vtype : 'alpha',
						name : 'fname'
					}, {
						xtype : 'combobox',
						fieldLabel : 'Location number',
						emptyText : 'Select location number',
						maxLength : 25,
						allowBlank : false,
						style : 'margin-left:60px',
						enforceMaxLength : 25,
						anchor : '90%',
						vtype : 'alpha',
						name : 'mname'
					}, {
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Location name',
						style : 'margin-left:60px',
						allowBlank : false,
						maxLength : 15,
						enforceMaxLength : 15,
						name : 'lname'
					},

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ {
						xtype : 'combobox',
						fieldLabel : 'Location type',
						emptyText:'Select type.....',
						allowBlank : false,
						anchor : '90%',
						maxLength : 15,
						enforceMaxLength : 15,
						name : 'acctype'
					},
					]
				}]
			},

			{
				xtype : 'fieldset',
				title : 'Site info',
				style : 'margin-top:5px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ {
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Site number',
						maxLength : 16,						
						enforceMaxLength : 16,
						name : 'telenum'
						/*allowBlank : false*/

					}, {
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Site name',
						maxLength : 16,
						/*allowBlank : false,*/
						style : 'margin-left:60px',
						enforceMaxLength : 16,
						name : 'mobnum'

					},
					{
						xtype : 'combobox',
						fieldLabel : 'Site type',
						maxLength : 15,
						enforceMaxLength : 15,
						style : 'margin-left:60px',
						emptyText:'enter fax number',
						name : 'faxnum'

					},
					
					
					
					]
				}]
			}, {
				xtype : 'fieldset',
				title : 'Premises info',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					          
					{
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Premises number',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises name',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'combobox',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Premises type',
						name : 'supervisor'
					},
					/*{
						xtype : 'numberfield',
						anchor : '90%',
						fieldLabel : 'Number of units',
						style : 'margin-left:60px',
						hideTrigger:true,
						name : 'stdate'

					},*/

					]
				} ]
			},  
			{
				xtype : 'fieldset',
				title : 'Premises wing info',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					          
					{
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Premises wing number',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises wing name',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'combobox',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Premises wing type',
						name : 'supervisor'
					},
					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises wing area',
						style : 'margin-left:60px',
						hideTrigger:true,
						name : 'stdate'

					},

					]
				},{
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					          
					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises wing size',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises wing length',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'textfield',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Bin number available',
						name : 'supervisor'
					},
					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Key number',
						style : 'margin-left:60px',
						hideTrigger:true,
						name : 'stdate'

					},

					]
				} ]
			},{
				xtype : 'fieldset',
				title : 'Premises location info',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					          
					{
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Premises location number',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises location name',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'combobox',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Premises location type',
						name : 'supervisor'
					},
					

					]
				} ]
			},{
				xtype : 'fieldset',
				title : 'Premises section Info',
				style : 'margin-top:10px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					          
					{
						xtype : 'combobox',
						anchor : '90%',
						fieldLabel : 'Premises section number',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Premises section name',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'textfield',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Premises section size',
						name : 'supervisor'
					},
					{
						xtype : 'textfield',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Key number',
						name : 'supervisor'
					},

					]
				} ]
			},

			]
		} ],

		buttons : [
				{
					text : 'Save',
					formBind : true,
					disabled : true,
					handler : function() {
						Ext.Msg.alert('Save Data',
								'Location has been created sucessfully');
					}
				},  {
					text : 'Cancel',
					formBind : true,
					disabled : true,
				/*
				 * handler: function(){ this.up('form').getForm().submit({ url:
				 * 'acc-form-errors.xml', submitEmptyText: false, waitMsg:
				 * 'Saving Data...' }); }
				 */
				} ]
	});

});
