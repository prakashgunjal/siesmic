Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.invenbooking', {
    extend: 'Ext.data.Model',
    fields: [
         'bookseriend','bookqty','bookvaliddate','bookprodname','accountname','salesrep','booknme', 'locnme', 'sitenme', 'permisnme', 'permiswingnme','permislocnme','uom', 'moddatetime','bookingdate','supplier','bookingtype','bookingserisrt','bookingserisrt','serlot'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'forminvenbooking',
        frame: true,
        title:'Inventory Booking Form',
		id:'invenbookingfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.inventactstock',
            record : 'inventactstock',
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
						xtype:'textfield',
                    fieldLabel: 'Booking number',
                    emptyText: 'Product booking number',
                    vtype:'alphanum',
                    allowBlank:false,
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'booknme'
					},
					{
						xtype:'datefield',
                    fieldLabel: 'Date',
                    emptyText: 'Product dooking date',
                    allowBlank:false,
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'bookingdate'
					},
					{
						xtype:'textfield',
                    fieldLabel: 'Account number',
                    emptyText: 'Account number',
                    allowBlank:false,
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'accountname'
					},
					{
						xtype:'combobox',
                    fieldLabel: 'Sales rep',
                    emptyText: 'Sales rep',
                    vtype:'alpha',
                    maxLength : 50,
                    enforceMaxLength: 50,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'salesrep'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [
					{
						xtype:'datefield',
                    fieldLabel: 'Booking valid date',
                    emptyText: 'Booking valid date',
					 anchor:'90%',
                    name: 'bookvaliddate'
					},
					{
						xtype:'combobox',
                    fieldLabel: 'Location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Location name',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'locnme'
					},{
						xtype:'combobox',
                    fieldLabel: 'Site name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Site name',
                    
					 anchor:'90%',
                    name: 'sitenme'
					},{
						xtype:'combobox',
	                    fieldLabel: 'Premises name',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
	                    emptyText: 'Premises name',
						 anchor:'90%',
	                    name: 'permisnme'
						},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'combobox',
                    fieldLabel: 'Premises wing name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Premises wing name',
					 anchor:'90%',
                    name: 'permiswingnme'
					},
					{
						xtype:'combobox',
                    fieldLabel: 'Premises location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Premises location name',
					 anchor:'90%',
                    name: 'permislocnme'
					},{
						xtype:'combobox',
	                    fieldLabel: 'Booking type',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
	                    emptyText: 'Booking type',
	                    allowBlank:false,
						 anchor:'90%',
	                    name: 'bookingtype'
						},{
							xtype:'textfield',
		                    fieldLabel: 'Serialization lot',
		                    maxLength : 20,
		                    enforceMaxLength: 20,
		                    emptyText: 'Serialization lot',
							 anchor:'90%',
		                    name: 'serlot'
							},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
						xtype:'combobox',
                    fieldLabel: 'Serialization start',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Serialization start',
					 anchor:'90%',
                    name: 'bookingserisrt'
					},{
						xtype:'combobox',
	                    fieldLabel: 'Serialization end',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
	                    emptyText: 'Serialization end',
						 anchor:'90%',
	                    name: 'bookseriend'
						},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Inventory Booking has been created sucessfully');
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
