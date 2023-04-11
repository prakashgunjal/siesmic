Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.site', {
    extend: 'Ext.data.Model',
    fields: [
         'sitenme', 'sitedesc', 'sitetype', 'sitelocnme', 'prodsubtype','prodnum','desc', 'prodwholesalrate','prodretailrate','produom'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formsite',
        frame: true,
        title:'Site Form',
		id:'prodcategfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.site',
            record : 'site',
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
                    fieldLabel: 'Site Name',
                    emptyText: 'Site Name',
					 anchor:'90%',
                    name: 'sitenme'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
                    fieldLabel: 'Site Description',
                    name: 'sitedesc',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
					xtype:'combobox',
                    fieldLabel: 'Site Type',
					 anchor:'90%',
                    name: 'sitetype',
					emptyText: 'Select a Type...'
					},{
						xtype:'textfield',
                    fieldLabel: 'Site Location Name',
                    emptyText: 'Site Location Name',
					 anchor:'90%',
                    name: 'sitelocnme'
					},]},
					{
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
