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
		title : 'Contact Form',
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
				title : 'Personal Info',
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
						fieldLabel : 'Salutation',
						emptyText : 'select.....',
						maxLength : 50,
						enforceMaxLength : 50,
						anchor : '90%',
						vtype : 'alpha',
						
						name : 'salutation'
					}, {
						xtype : 'textfield',
						fieldLabel : 'First name',
						emptyText : 'enter first name',
						maxLength : 15,
						style : 'margin-left:60px',
						enforceMaxLength : 15,
						hideTrigger : true,
						allowBlank : false,
						anchor : '90%',
						vtype : 'alpha',
						name : 'fname'
					}, {
						xtype : 'textfield',
						fieldLabel : 'Middle name',
						emptyText : 'enter middle name',
						maxLength : 15,
						style : 'margin-left:60px',
						enforceMaxLength : 15,
						anchor : '90%',
						vtype : 'alpha',
						name : 'mname'
					}, {
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Last name',
						emptyText : 'enter last name',
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
						fieldLabel : 'Gender',
						emptyText:'select gender.....',
						anchor : '90%',
						maxLength : 15,
						enforceMaxLength : 15,
						name : 'acctype'
					},

					{
						xtype : 'datefield',
						fieldLabel : 'Date of birth',
						emptyText:'select date of birth',
						name : 'dob',
						style : 'margin-left:60px',
						/*format: 'd m Y',*/
						maxValue: new Date(),
						anchor : '90%'

					},

					{
						xtype : 'combobox',
						fieldLabel : 'Martial status',
						anchor : '90%',
						maxLength :15,
						style : 'margin-left:60px',
						enforceMaxLength : 15,
						emptyText : 'select martial status...',
						vtype : 'alpha',
						name : 'martialstatus'
					}, {
	                    xtype:'combobox',
						fieldLabel: 'Category',
						style : 'margin-left:60px',
						allowBlank : false,
						width: 210,
	                    name: 'type',
	                     emptyText: 'select category.....'
						},

					]
				},{
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 

					{
						xtype : 'combobox',
						fieldLabel : 'Preferred language',
						emptyText:'select a language.....',
						name : 'preflang',
						anchor : '90%'

					},
					{
	                    xtype:'filefield',
						fieldLabel: ' Image',
						style : 'margin-left:60px',
						width: 210,
	                    name: 'pic',
	                     emptyText: 'select image.....'
						},

					]
				} ]
			},

			{
				xtype : 'fieldset',
				title : 'Contact Info',
				style : 'margin-top:5px',
				width : '100%',
				border : false,
				collapsible : true,

				items : [ {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ {
						xtype : 'numberfield',
						anchor : '90%',
						fieldLabel : 'Telephone number',
						maxLength : 16,
						
						enforceMaxLength : 16,
						hideTrigger : true,
						name : 'telenum',
						allowBlank : false

					}, {
						xtype : 'numberfield',
						anchor : '90%',
						fieldLabel : 'Mobile number',
						maxLength : 16,
						style : 'margin-left:60px',
						enforceMaxLength : 16,
						hideTrigger : true,
						name : 'mobnum',

					},
					{
						xtype : 'textfield',
						fieldLabel : 'Fax number',
						maxLength : 15,
						enforceMaxLength : 15,
						style : 'margin-left:60px',
						emptyText:'enter fax number',
						name : 'faxnum'

					},
					{
						xtype : 'textfield',
						fieldLabel : 'Email address',
						anchor : '90%',
						allowBlank : false,
						style : 'margin-left:60px',
						maxLength : 50,
						enforceMaxLength : 50,
						vtype : 'email',
						name : 'mailid',
						emptyText : 'xxx@xxx.com'
					},
					
					
					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [  
					{
						xtype : 'textfield',
						fieldLabel : 'Alternate email address',
						maxLength : 50,
						enforceMaxLength : 50,						
						name : 'altemailid',
						vtype : 'email',
						emptyText : 'xxx@xxx.com'
					
					},
					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Linkedin url',
						style : 'margin-left:60px',
						name : 'linkin'

					}, {
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Facebook id',
						style : 'margin-left:60px',
						name : 'facebookid'
					},
					
					]
				},{
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [  
					
						{
							xtype: 'checkboxfield',
				            name: 'checkbox1',
				            fieldLabel: 'Do not call',
						}, {
							xtype : 'checkbox',
							fieldLabel : 'Do not mail',
							style : 'margin-left:60px',
							name : 'dontemail'
						
						}, {
							xtype : 'checkbox',
							fieldLabel : 'Do not sms',
							style : 'margin-left:60px',
							name : 'dontsms'
						
						},

					]
				} ]
			}, {
				xtype : 'fieldset',
				title : 'Other Info',
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
						fieldLabel : 'Department',
						name : 'dept'

					},

					{
						xtype : 'textfield',
						anchor : '90%',
						fieldLabel : 'Title',
						style : 'margin-left:60px',
						name : 'title'

					}, {
						xtype : 'textfield',
						anchor : '90%',
						style : 'margin-left:60px',
						fieldLabel : 'Supervisor',
						name : 'supervisor'
					},
					{
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'Start date',
						style : 'margin-left:60px',
						emptyText:'only in case of employee',
						name : 'stdate'

					},

					]
				}, {
					xtype : 'fieldcontainer',
					layout : 'hbox',
					items : [ 
					{
						xtype : 'datefield',
						anchor : '90%',
						fieldLabel : 'End date',
						emptyText:'only in case of employee',
						name : 'endate'

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
								'Person Contact has been created sucessfully');
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
