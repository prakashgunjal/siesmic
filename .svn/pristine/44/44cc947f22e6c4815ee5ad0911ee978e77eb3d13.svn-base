Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.product', {
    extend: 'Ext.data.Model',
    fields: [
         'prodnme', 'prodcatenme', 'prodsubcatenme', 'prodtypenme', 'prodsubtype','prodnum','desc', 'prodwholesalrate','prodretailrate','produom'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formprod',
        frame: true,
        title:'Product Form',
		id:'prodfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.product',
            record : 'product',
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
                    fieldLabel: 'Name',
                    emptyText: 'Product name',
					allowBlank:false,
					 vtype:'alphanum',
					 anchor:'90%',
                    name: 'prodnme'
					}, {
	                    xtype: 'textfield',
						 anchor:'90%',
	                    fieldLabel: 'Number',
	                    maxLength : 20,
		                enforceMaxLength: 20,  
						allowBlank:false,
					    vtype:'alphanum',
	                    name: 'prodnum',
	                    allowBlank: false
	                   
					},{
					xtype:'combobox',
                    fieldLabel: ' Category name',
					 anchor:'90%',
                    name: 'prodcatenme',
                    maxLength : 20,
	                enforceMaxLength: 20,  
                    allowBlank:false,
					emptyText: 'Select a  Category...'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
					xtype:'combobox',
                    fieldLabel: 'Sub-category name',
					 anchor:'90%',
                    name: 'prodsubcatenme',
                    maxLength : 20,
	                enforceMaxLength: 20,  
					emptyText: 'Select a  Sub-Category...'
					},{
						xtype:'combobox',
						fieldLabel: ' Type',
						 anchor:'90%',
						name: 'prodtypenme',
						maxLength : 20,
		                enforceMaxLength: 20,  
						emptyText: 'Select a  Type...'
					}, {
                    xtype:'combobox',
					fieldLabel: ' Sub-type',
					maxLength : 20,
	                enforceMaxLength: 20,  
                    name: 'prodsubtype',
					 anchor:'90%',
					 emptyText: 'Select a Sub-type...'
                    
					},
					
					
					]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
	                xtype: 'numberfield',
					 anchor:'90%',
	               fieldLabel: 'Wholesale rate',
	               maxLength : 20,
	                enforceMaxLength: 20,  
	               name: 'prodwholesalrate',
	               allowBlank: false
	              
					},
					{
	                    xtype: 'numberfield',
						 anchor:'90%',
	                    fieldLabel: 'Retail rate',
	                    maxLength : 20,
		                enforceMaxLength: 20,  
	                    name: 'prodretailrate',
	                    allowBlank: false
	                    
						},{
	                    xtype: 'combobox',
						 anchor:'90%',
	                    fieldLabel: 'UOM',
	                    maxLength : 20,
		                enforceMaxLength: 20,  
	                    name: 'produom',
	                    allowBlank: false
	                   
						},]}, {
					xtype: 'container',
						flex: 1,
						layout: 'anchor',
						items: [{
		                    xtype: 'textarea',
		                    maxLength : 250,
			                enforceMaxLength: 250,  
							 anchor:'90%',
							 height:95,
		                    fieldLabel: 'Description',
		                    name: 'desc',
		                    
							},
						        
						        ]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Product has been created sucessfully');
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
