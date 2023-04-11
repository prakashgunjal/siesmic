Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.premises', {
    extend: 'Ext.data.Model',
    fields: [
         'premisesnme', 'premisesdesc', 'premisestype', 'premisesnounits', 'premisesarea','prodnum','desc', 'prodwholesalrate','prodretailrate','produom'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formpremises',
        frame: true,
        title:'Premises Form',
		id:'premisesfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.premises',
            record : 'premises',
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
                    fieldLabel: 'Premises Name',
                    emptyText: 'Premises Name',
					 anchor:'90%',
                    name: 'premisesnme'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
                    fieldLabel: 'Premises Description',
                    name: 'premisesdesc',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
					xtype:'combobox',
                    fieldLabel: 'Premises Type',
					 anchor:'90%',
                    name: 'premisestype',
					emptyText: 'Select a Type...'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises No Of Units',
                    emptyText: 'Premises No Of Units',
					 anchor:'90%',
                    name: 'premisesnounits'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises Area',
                    emptyText: 'Premises Area',
					 anchor:'90%',
                    name: 'premisesarea'
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
