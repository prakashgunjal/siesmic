Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.assetmove', {
    extend: 'Ext.data.Model',
    fields: [
         'asmovaccnme', 'asmovindate', 'asmovoutdate', 'asmoveprodnme', 'asmovprodtype','asmovprodstat','asmovsalordnmenme', 'asmovuom','asmovlocnme','asmovsitenme','asmovprewinnme','asmovlocnme','asmovsecnme','asmovprodpri','asmovprodqty','asmovserisrt','asmovseriend','receserisrt','receseriend'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formassetmove',
        frame: true,
        title:'Asset Movement Form',
		id:'assetmovefrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.assetmove',
            record : 'assetmove',
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
                    fieldLabel: 'Account number',
                    emptyText: ' Account number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'asmovaccnme'
					},{
						xtype:'datefield',
                    fieldLabel: 'In date',
                    allowblank:false,
                    emptyText: 'In date',
					 anchor:'90%',
                    name: 'asmovindate'
					},{
						xtype:'datefield',
                    fieldLabel: 'Out date',
                    allowblank:false,
                    emptyText: 'Out date',
					 anchor:'90%',
                    name: 'asmovoutdate'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Product name',
                    vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'asmoveprodnme'
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
                    name: 'asmovprodtype',
					anchor:'90%',
					emptyText: 'Select a type...'
					},{
						xtype:'textfield',
                    fieldLabel: 'Product status',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Product status',
					 anchor:'90%',
                    name: 'asmovprodstat'
					},{
						xtype:'textfield',
                    fieldLabel: 'Sales order number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Sales order number',
                    vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'asmovsalordnmenme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Location name',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'asmovlocnme'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'textfield',
                    fieldLabel: 'Site name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Site name',
					 anchor:'90%',
                    name: 'asmovsitenme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises wing name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Premises wing name',
					 anchor:'90%',
                    name: 'asmovprewinnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises section name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Premises section name',
					 anchor:'90%',
                    name: 'asmovsecnme'
					},{
						xtype:'textfield',
                    fieldLabel: 'Premises location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Premises location name',
					 anchor:'90%',
                    name: 'asmovlocnme'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
						xtype:'textfield',
                    fieldLabel: ' Serialization start',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: ' Serialization start',
					 anchor:'90%',
                    name: 'asmovserisrt'
					},{
						xtype:'textfield',
                    fieldLabel: ' Serialization end',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: ' Serialization end',
					 anchor:'90%',
                    name: 'asmovseriend'
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Asset Movement has been created sucessfully');
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
