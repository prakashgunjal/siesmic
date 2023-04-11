Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.expensemanag', {
    extend: 'Ext.data.Model',
    fields: [
         'expenproj','expenmanagmilestone', 'expenmanagactnme', 'expenmanagtask', 'expenmanagreqnme', 'expenmanagassito','expenmanagdate','expenmanagcurr', 'expenmanagtype','expenmanagamt','expenseattdoc','projstatus','projactclkout','projtaskesteff','projtaskprectask','projtaskmile'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formexpensemanag',
        frame: true,
        title:'Expense Management Form',
		id:'expensemanagfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.expensemanag',
            record : 'expensemanag',
            successProperty: '@success'
        }),
       

        // configure how to read the XML error, using a config
       // errorReader: {
          //  type: 'xml',
           // model: 'example.fielderror',
           // record : 'field',
          //  successProperty: '@success'
       // },

        items: [{
            xtype: 'container',
			 anchor: '100%',
            layout: 'hbox',
            defaultType: 'textfield',
			collapsible: true,
			frame: true,
			bodyPadding: '7 7 0',
            defaults: {
                width: "auto"
            },
            items: [{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
                xtype: 'textfield',
				 anchor:'90%',
				 fieldLabel: 'Expense project name',
				 vtype:'alphanum',
					maxLength : 50,
                 enforceMaxLength: 50,
               name: 'expenproj',
               allowBlank: false
               
				},{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'MileStone',
                    name: 'expenmanagmilestone',
                    allowBlank: false
                    
					},{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Activity name',
					 vtype:'alphanum',
						maxLength : 50,
	                 enforceMaxLength: 50,
                    name: 'expenmanagactnme',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                xtype: 'textfield',
				 anchor:'90%',
				 vtype:'alphanum',
					maxLength : 50,
              enforceMaxLength: 50,
				 fieldLabel: 'Task',
               name: 'expenmanagtask',
               allowBlank: false
               
				},{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Request name',
					 vtype:'alphanum',
						maxLength : 50,
	                 enforceMaxLength: 50,
                    name: 'expenmanagreqnme',
                    allowBlank: false
                    
					},{
                    xtype: 'combobox',
					 anchor:'90%',
						maxLength : 50,
	                 enforceMaxLength: 50,
					 fieldLabel: 'Assigned to',
                    name: 'expenmanagassito',
                    allowBlank: false
                    
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
	            xtype: 'datefield',
	            name: 'expenmanagdate',
				anchor:'90%',
	            fieldLabel: 'Expense date'
	        },   {
                    xtype: 'combobox',
					 anchor:'90%',
					maxLength : 50,
	                 enforceMaxLength: 50,
					fieldLabel: 'Currency',
                    name: 'expenmanagcurr',
                    allowBlank: false
                    
					},{
                    xtype: 'combobox',
					 anchor:'90%',
					 fieldLabel: 'Expense Type',
					maxLength : 50,
	                 enforceMaxLength: 50,
                    name: 'expenmanagtype',
                    allowBlank: false
                    
					},]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Expense Amount',
					 vtype:'alphanum',
						maxLength : 50,
	                 enforceMaxLength: 50,
	                 /*regex:/^[A-Za-z]{4}\s\d{6}-{1}\d{1}$/,*/
                    name: 'expenmanagamt',
                    allowBlank: false
                    
					},{
            xtype: 'filefield',
            name: 'expenseattdoc',
			 anchor:'90%',
            fieldLabel: 'Attach Document'
        },]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Expense management has been created sucessfully');
            }
        }, /*{
            text: 'Update',
            formBind: true,
            disabled: true,
            handler: function(){
                this.up('form').getForm().submit({
                    url: 'cont-person-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }
        },*/{
            text: 'Cancel',
            formBind: true,
            disabled: true,
            /*handler: function(){
                this.up('form').getForm().submit({
                    url: 'cont-person-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }*/
        }]
    });

});
