Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.premisesloc', {
    extend: 'Ext.data.Model',
    fields: [
         'premiselocnme', 'premiseslocdesc', 'locpremiseswingtype', 'wingpremisesnme', 'premiseswingarea','premiseswingsize','binnumavail', 'premiseswinglen','premiseswingbread','premiseswingkeynum'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formpremisesloc',
        frame: true,
        title:'Premises Location Form',
		id:'premiseslocfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.premisesloc',
            record : 'premisesloc',
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
                    fieldLabel: 'Premises Location Name',
                    emptyText: 'Premises Location Name',
					 anchor:'90%',
                    name: 'premiseslocnme'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
                    fieldLabel: 'Premises Location Description',
                    name: 'premiseslocdesc',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
					xtype:'combobox',
                    fieldLabel: 'Premises Wing Type',
					 anchor:'90%',
                    name: 'locpremiseswingtype',
					emptyText: 'Select a Type...'
					},{
						xtype:'textfield',
                    fieldLabel: 'Wing Premises Name',
                    emptyText: 'Wing Premises Name',
					 anchor:'90%',
                    name: 'wingpremisesnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Area',
                    emptyText: 'Premises Wing Area',
					 anchor:'90%',
                    name: 'premiseswingarea'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Size',
                    emptyText: 'Premises Wing Size',
					 anchor:'90%',
                    name: 'premiseswingsize'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Area',
                    emptyText: 'Premises Wing Area',
					 anchor:'90%',
                    name: 'premiseswingarea'
					},{
						xtype:'textfield',
                    fieldLabel: 'Bin Number Available',
                    emptyText: 'Bin Number Available',
					 anchor:'90%',
                    name: 'binnumavail'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Length',
                    emptyText: 'Premises Wing Length',
					 anchor:'90%',
                    name: 'premiseswinglen'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Breadth',
                    emptyText: 'Premises Wing Breadth',
					 anchor:'90%',
                    name: 'premiseswingbread'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Wing Key Number',
                    emptyText: 'Premises Wing Key Number',
					 anchor:'90%',
                    name: 'premiseswingkeynum'
					},]},
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
