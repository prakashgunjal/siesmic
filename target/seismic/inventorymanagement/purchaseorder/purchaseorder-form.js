Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.purorder', {
    extend: 'Ext.data.Model',
    fields: [
         'purordnme','purordaccnme','purordnum', 'purorddate', 'purordcontrnme', 'porordstatus', 'porordprior','purordsalrep','purordbroker', 'purordvalidfrm','purordexpon','purordcanon','purordcloson','purordsupp','purordexpdeldate','purordshippmeth','purordshippins','purordordcarr','purordtracknum','purordpayterm','purordordcurre','purordfreter'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formpurorder',
        frame: true,
        title:'Purchase Order Form',
		id:'purorderfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.purorder',
            record : 'purorder',
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
			items: [{
				xtype:'textfield',
                fieldLabel: 'Order name',
                emptyText: ' Order name',
                maxLength : 20,
                enforceMaxLength: 20,
                vtype:'alpha',
                allowBlank:false,
				 anchor:'90%',
                name: 'purordnme'
				}, {
						xtype:'textfield',
                    fieldLabel: 'Order number',
                    emptyText: ' Order number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'purordnum'
					},{
						xtype:'datefield',
                    fieldLabel: 'Date',
                    emptyText: 'Date',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'purorddate'
					},{
						xtype:'combobox',
		                fieldLabel: 'Account number',
		                emptyText: ' Account number',
		                maxLength : 20,
	                    enforceMaxLength: 20,
	                    allowBlank:false,
						 anchor:'90%',
		                name: 'purordaccnme'
						},{
						xtype:'combobox',
                    fieldLabel: 'Contract number',
                    emptyText: 'Contract number',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'purordcontrnme'
					},{
						xtype:'combobox',
                    fieldLabel: 'Status',
                    emptyText: 'Status',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'porordstatus'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'combobox',
                fieldLabel: 'Priority',
                emptyText: 'Priority',
                maxLength : 20,
                enforceMaxLength: 20,
                allowBlank:false,
				 anchor:'90%',
                name: 'porordprior'
				},{
						xtype:'combobox',
                    fieldLabel: 'Sales rep',
                    emptyText: 'Sales rep',
                    maxLength : 50,
                    enforceMaxLength: 50,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'purordsalrep'
					},{
						xtype:'textfield',
                    fieldLabel: 'Broker',
                    emptyText: 'Broker',
                    maxLength : 50,
                    enforceMaxLength: 50,
					 anchor:'90%',
                    name: 'purordbroker'
					},{
						xtype:'datefield',
                    fieldLabel: 'Valid from',
                    emptyText: 'Valid from',
					 anchor:'90%',
                    name: 'purordvalidfrm'
					},{
						xtype:'datefield',
                    fieldLabel: 'Expires on',
                    emptyText: 'Expires on',
					 anchor:'90%',
                    name: 'purordexpon'
					},{
						xtype:'datefield',
                    fieldLabel: 'Cancelled on',
                    emptyText: 'Cancel on',
					 anchor:'90%',
                    name: 'purordcanon'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'datefield',
                    fieldLabel: 'Closed on',
                    emptyText: 'Closed on',
					 anchor:'90%',
                    name: 'purordcloson'
					},{
						xtype:'textfield',
                    fieldLabel: 'Supplier name',
                    emptyText: 'Supplier name',
                    maxLength : 50,
                    enforceMaxLength: 50,
					 anchor:'90%',
                    name: 'purordsupp'
					},{
						xtype:'datefield',
                    fieldLabel: 'Expected delay date',
                    emptyText: 'Expected delay date',
					 anchor:'90%',
                    name: 'purordexpdeldate'
					},{
						xtype:'textfield',
                    fieldLabel: 'Shipping method',
                    emptyText: 'Shipping method',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'purordshippmeth'
					},{
						xtype:'textfield',
                    fieldLabel: 'Shipping instructions',
                    emptyText: 'Shipping instructions',
                    maxLength : 100,
                    enforceMaxLength: 100,
					 anchor:'90%',
                    name: 'purordshippins'
					},{
						xtype:'textfield',
	                    fieldLabel: 'Carrier',
	                    emptyText: 'Carrier',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
						 anchor:'90%',
	                    name: 'purordordcarr'
						},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
						xtype:'textfield',
                    fieldLabel: 'Tracking number',
                    emptyText: 'Tracking number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'purordtracknum'
					},{
						xtype:'textfield',
                    fieldLabel: 'Payment terms',
                    emptyText: 'Payment terms',
					 anchor:'90%',
                    name: 'purordpayterm'
					},{
						xtype:'textfield',
                    fieldLabel: 'Currency',
                    emptyText: 'Currency',
					 anchor:'90%',
                    name: 'purordordcurre'
					},{
						xtype:'textfield',
                    fieldLabel: 'Freight terms',
                    emptyText: 'Freight terms',
					 anchor:'90%',
                    name: 'purordfreter'
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Purchase Order has been created sucessfully');
            }
        },/*{  text: 'Update',
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
