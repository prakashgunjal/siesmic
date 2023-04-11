Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.productsubcateg', {
    extend: 'Ext.data.Model',
    fields: [
         'prodcategnme', 'prodcatenme', 'prodsubcatenme', 'prodtypenme', 'prodsubtype','prodnum','desc', 'prodwholesalrate','prodretailrate','produom'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formprodsubcateg',
        frame: true,
        title:'Product Sub-Category Form',
		id:'prodsubcategfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.productsubcateg',
            record : 'productsubcateg',
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
				xtype:'combobox',
                fieldLabel: ' Category name',
				 anchor:'90%',
                name: 'prodsubcatenme',
                maxLength : 20,
                enforceMaxLength: 20,  
                allowBlank: false,
				emptyText: 'Select a  Category...'
				}, {
					xtype:'combobox',
                    fieldLabel: ' Sub-category Name',
					 anchor:'90%',
                    name: 'prodsubcatenme',
                    maxLength : 20,
	                enforceMaxLength: 20,  
                    allowBlank: false,
					emptyText: 'Select a  Sub-Category...'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 maxLength : 250,
		                enforceMaxLength: 250,  
					 height:95,
                    fieldLabel: 'Description',
                    name: 'desc',
                    
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: []},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: []},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Product Sub-Category has been created sucessfully');
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
