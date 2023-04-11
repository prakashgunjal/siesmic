Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.invenrece', {
    extend: 'Ext.data.Model',
    fields: [
        'prodrecpqty','prodrecplot','recproduct','receipt', 'receuom', 'recelocnme', 'recesitenme', 'recepresnme','receprewingnme','recepermislocnme', 'recreorderqty','recemoddate','recedate','recesupp','recetype','receserlot','prodtype','prodmoddate','prodreorder','prodserreci','receserisrt','receseriend'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'forminvenrece',
        frame: true,
        title:'Inventory Receipt Form',
		id:'invenrecefrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.invenrece',
            record : 'invenrece',
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
                    fieldLabel: 'Receipt number',
                    emptyText: 'Receipt number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    vtype:'alphanum',
                    allowBlank:false,
					anchor:'90%',
                    name: 'receipt'
					},
					{
						xtype:'datefield',
                    fieldLabel: 'Receipt date',
                    emptyText: 'Receipt date',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'recedate'
					},
					{
						xtype:'textfield',
                    fieldLabel: 'Purchase order number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Purchase order number',
                    allowBlank:false,
                    vtype:'alphanum',
					 anchor:'90%',
                    name: 'receuom'
					},
					{
						xtype:'textfield',
                    fieldLabel: 'Supplier',
                    emptyText: 'Supplier',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    vtype:'alpha',
					 anchor:'90%',
                    name: 'supplier'
					},
					
					]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [
					{
						xtype:'combobox',
					fieldLabel: 'Receipt type',
					emptyText: 'Receipt type',
					maxLength : 20,
                    enforceMaxLength: 20,
					allowBlank:false,
					 anchor:'90%',
					name: 'recetype'
					},
			        {
						xtype:'combobox',
                    fieldLabel: 'Location name',
                    emptyText: 'Location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'receprewingnme'
					},
					
					{
						xtype:'combobox',
		                fieldLabel: 'Site name',
		                emptyText: 'Site name',
		                maxLength : 20,
	                    enforceMaxLength: 20,
						 anchor:'90%',
		                name: 'recesitenme'
						},{
							xtype:'combobox',
							fieldLabel: 'Premises name',
							emptyText: 'Premises name',
							maxLength : 20,
		                    enforceMaxLength: 20,
							 anchor:'90%',
							name: 'recepresnme'
							},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [
				
					{
						xtype:'combobox',
					fieldLabel: 'Premises wing name',
					emptyText: 'Premises wing name',
					maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
					name: 'receprewingnme'
					},
			        
			        {
						xtype:'combobox',
                    fieldLabel: 'Premises location name',
                    emptyText: 'Premises location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'recepermislocnme'
					},
					{
						xtype:'textfield',
                    fieldLabel: 'Receipt lot',
                    emptyText: 'Receipt lot',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'prodrecplot'
					},
					{
						xtype:'combobox',
					fieldLabel: 'Serialization start',
					emptyText: 'Serialization start',
					maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
					name: 'receserisrt'
					},
					]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ 
				
						{
							xtype:'combobox',
						fieldLabel: 'Serialization end',
						emptyText: 'Serialization end',
						maxLength : 20,
	                    enforceMaxLength: 20,
						 anchor:'90%',
						name: 'receseriend'
						},
			         
			         ]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Inventory Receipt has been created sucessfully');
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
