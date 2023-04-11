Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.location', {
    extend: 'Ext.data.Model',
    fields: [
         'locnme', 'locdesc', 'loctype', 'locaddress','projtaskmile'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formlocation',
        frame: true,
        title:'Location Form',
		id:'locationfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.location',
            record : 'location',
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
					 fieldLabel: 'Location Name',
                    name: 'locnme',
                    allowBlank: false
                    
					},{
					xtype:'combobox',
                    fieldLabel: 'Location Type',
					 anchor:'90%',
                    name: 'loctype',
					emptyText: 'Select a Type...'
					},{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Location Address ',
                    name: 'locaddress',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
                    fieldLabel: 'Location Description',
                    name: 'locdesc',
                    allowBlank: false
                    
					}, ]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ ]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: []},
            ]
        }],

        buttons: [{
            text: 'Save',
           /* handler: function(){
                formPanel.getForm().load({
                    url: 'location-form-data.json',
                    waitMsg: 'Loading...'
                });
            }*/
        }, {
            text: 'Cancel',
            /*disabled: true,
            formBind: true,
            handler: function(){
                this.up('form').getForm().submit({
                    url: 'location-form-errors.xml',
                    submitEmptyText: false,
                    waitMsg: 'Saving Data...'
                });
            }*/
        }]
    });

});
