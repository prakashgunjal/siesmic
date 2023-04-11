Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.inventactstock', {
    extend: 'Ext.data.Model',
    fields: [
         'prodstknme','actstockdate', 'actstoprodnum', 'actstoproduom', 'actstoprodlocnme', 'actstoprodsitenme','actstoprodpremnme','actstoprodprewingnme', 'actstoprodpreloc','actstoprodprice','actstoprodqty','actstoprodprodtype','actstoprodserisrt','actstoprodseriend'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'forminventactstock',
        frame: true,
        title:'Inventory Actual Stock Form',
		id:'inventactstockfrmid',
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
	                fieldLabel: 'Stock number',
	                emptyText: 'Stock number',
	                maxLength : 20,
                    enforceMaxLength: 20,
	                vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
	                name: 'prodstknme'
					},
					{
						xtype:'datefield',
                    fieldLabel: 'Stock date',
                    emptyText: 'Stock date',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'actstockdate'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Product number',
                    vtype:'alphanum',
					 anchor:'90%',
                    name: 'actstoprodnum'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'combobox',
                fieldLabel: 'Product type',
                maxLength : 20,
                enforceMaxLength: 20,
				emptyText: 'Product type',
                name: 'actstoprodprodtype',
				anchor:'90%',
				emptyText: 'Select a Class...'
				},{
				xtype:'combobox',
                fieldLabel: 'Location name',
                maxLength : 20,
                enforceMaxLength: 20,
                emptyText: 'Location name',
                allowBlank:false,
				 anchor:'90%',
                name: 'actstoprodlocnme'
				},{
						xtype:'combobox',
                    fieldLabel: 'Site name',
                    emptyText: 'Site name',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'actstoprodsitenme'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'combobox',
                fieldLabel: 'Premises name',
                emptyText: 'Premises name',
                maxLength : 20,
                enforceMaxLength: 20,
				 anchor:'90%',
                name: 'actstoprodpremnme'
				},{
					xtype:'combobox',
                fieldLabel: 'Premises wing name',
                emptyText: 'Premises wing name',
                maxLength : 20,
                enforceMaxLength: 20,
				 anchor:'90%',
                name: 'actstoprodprewingnme'
				},{
						xtype:'combobox',
                    fieldLabel: 'Premises location',
                    emptyText: 'Premises location',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'actstoprodpreloc'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
						xtype:'textfield',
                    fieldLabel: 'Serialization start',
                    emptyText: 'Serialization start',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'actstoprodserisrt'
					},{
						xtype:'textfield',
                    fieldLabel: 'Serialization end',
                    emptyText: 'Serialization end',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'actstoprodseriend'
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Actual stock has been created sucessfully');
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
