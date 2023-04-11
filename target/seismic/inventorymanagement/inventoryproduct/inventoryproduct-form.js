Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.invenprod', {
    extend: 'Ext.data.Model',
    fields: [
         'prodnme', 'produom', 'prodsitenme', 'prodprewingnme', 'prodlocnme','prodpermislocnme','prodprice', 'prodvat','prodsaltax','prodservtax','prodcommrate','prodqtyinhand','prodbookqty','prodtype','prodmoddate','prodreorder','prodserreci','prodserisrt','prodseriend'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'forminvenprod',
        frame: true,
        title:'Inventory Product Form',
		id:'invenprodfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.invenprod',
            record : 'invenprod',
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
                    fieldLabel: 'Product Name',
                    emptyText: 'Product Name',
					 anchor:'90%',
                    name: 'prodnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product UOM',
                    emptyText: 'Product UOM',
					 anchor:'90%',
                    name: 'produom'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Location Name',
                    emptyText: 'Product Location Name',
					 anchor:'90%',
                    name: 'prodlocnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Site Name',
                    emptyText: 'Product Site Name',
					 anchor:'90%',
                    name: 'prodsitenme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Premises Wing Name',
                    emptyText: 'Product Premises Wing Name',
					 anchor:'90%',
                    name: 'prodprewingnme'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Product Premises Location Name',
                    emptyText: 'Product Premises Location Name',
					 anchor:'90%',
                    name: 'prodpermislocnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Price',
                    emptyText: 'Product Price',
					 anchor:'90%',
                    name: 'prodprice'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Vat',
                    emptyText: 'Product Vat',
					 anchor:'90%',
                    name: 'prodvat'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Sales Tax',
                    emptyText: 'Product Sales Tax',
					 anchor:'90%',
                    name: 'prodsaltax'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Service Tax',
                    emptyText: 'Product Service Tax',
					 anchor:'90%',
                    name: 'prodservtax'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Product Commision Rate',
                    emptyText: 'Product Commision Rate',
					 anchor:'90%',
                    name: 'prodcommrate'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Qty In Hand',
                    emptyText: 'Product Qty In Hand',
					 anchor:'90%',
                    name: 'prodqtyinhand'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Booked Qty',
                    emptyText: 'Product Booked Qty',
					 anchor:'90%',
                    name: 'prodbookqty'
					},{
					xtype:'combobox',
                    fieldLabel: 'Product Type',
					emptyText: 'Product Type',
                    name: 'prodtype',
					anchor:'90%',
					emptyText: 'Select a Type...'
					},{
						xtype:'datefield',
                    fieldLabel: 'Produt Modified Date',
                    emptyText: 'Produt Modified Date',
					 anchor:'90%',
                    name: 'prodmoddate'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
						xtype:'textfield',
                    fieldLabel: 'Product Re-Order Level',
                    emptyText: 'Product Re-Order Level',
					 anchor:'90%',
                    name: 'prodreorder'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Serialization Recipt',
                    emptyText: 'Product Serialization Recipt',
					 anchor:'90%',
                    name: 'prodserreci'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Serialization Start',
                    emptyText: 'Product Serialization Start',
					 anchor:'90%',
                    name: 'prodserisrt'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product Serialization End',
                    emptyText: 'Product Serialization End',
					 anchor:'90%',
                    name: 'prodseriend'
					},]},
            ]
        }],

       /* buttons: [{
            text: 'Load',
            handler: function(){
                formPanel.getForm().load({
                    url: 'inventoryproduct-form-data.json',
                    waitMsg: 'Loading...'
                });
            }
        }, {
            text: 'Submit',
            disabled: true,
            formBind: true,
            handler: function(){
                this.up('form').getForm().submit({
                    url: 'inventoryproduct-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }
        }]*/
    });

});
