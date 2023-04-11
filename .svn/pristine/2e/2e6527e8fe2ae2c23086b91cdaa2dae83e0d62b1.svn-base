Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.premisessec', {
    extend: 'Ext.data.Model',
    fields: [
         'premisessecnme', 'premisessecdesc', 'premisesseclocnme', 'premisesecsize', 'premiseseckeynum','premiseswingsize','binnumavail', 'premiseswinglen','premiseswingbread','premiseswingkeynum'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formpremisessec',
        frame: true,
        title:'Premises Section Form',
		id:'premisessecfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.premisessec',
            record : 'premisessec',
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
                    fieldLabel: 'Premises Section Name',
                    emptyText: 'Premises Section Name',
					 anchor:'90%',
                    name: 'premisessecnme'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
                    fieldLabel: 'Premises Section Name Description',
                    name: 'premisessecdesc',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Premises Section Location Name',
                    emptyText: 'Premises Section Location Name',
					 anchor:'90%',
                    name: 'premisesseclocnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Section Size',
                    emptyText: 'Premises Section Size',
					 anchor:'90%',
                    name: 'premisesecsize'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Section Key Number',
                    emptyText: 'Premises Section Key Number',
					 anchor:'90%',
                    name: 'premiseseckeynum'
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
