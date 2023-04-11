Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.invenissue', {
    extend: 'Ext.data.Model',
    fields: [
         'issuenme', 'issuelocnme', 'issuesitenme', 'issuepermisnme', 'issuepermiswingnme','issuepermislocnme','issueuom', 'moddatetime','issuedate','supplier','issuetype','bookingserisrt','bookingserisrt','serlot','issuereorderqty'
		 
        
    ]
});
    
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'forminvenissue',
        frame: true,
        title:'Inventory Issue Form',
		id:'invenissuefrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.invenissue',
            record : 'invenissue',
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
                    fieldLabel: 'Issue number',
                    emptyText: 'Issue number',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    vtype:'alphanum',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'issuenme'
					},{
						xtype:'datefield',
	                    fieldLabel: 'Date',
	                    emptyText: 'Date',
	                    allowBlank:false,
						 anchor:'90%',
	                    name: 'issuedate'
						},{
						xtype:'combobox',
                    fieldLabel: 'Location name',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Location name',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'issuelocnme'
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'combobox',
                fieldLabel: 'Site name',
                maxLength : 20,
                enforceMaxLength: 20,
                emptyText: 'Site name',
				 anchor:'90%',
                name: 'issuesitenme'
				},{
				xtype:'combobox',
                fieldLabel: 'Permises Name',
                maxLength : 20,
                enforceMaxLength: 20,
                emptyText: 'Permises Name',
				 anchor:'90%',
                name: 'issuepermisnme'
				},{
						xtype:'combobox',
                    fieldLabel: 'Premises wing name',
                    emptyText: 'Premises wing name',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 anchor:'90%',
                    name: 'issuepermiswingnme'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'combobox',
                fieldLabel: 'Premises location',
                emptyText: 'Premises location',
                maxLength : 20,
                enforceMaxLength: 20,
				 anchor:'90%',
                name: 'issuepermislocnme'
				},{
						xtype:'textfield',
                    fieldLabel: 'Supplier',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Supplier',
					 anchor:'90%',
                    name: 'supplier'
					},{
					xtype:'combobox',
                    fieldLabel: 'Issue type',
                    maxLength : 20,
                    enforceMaxLength: 20,
					emptyText: 'Issue type',
					 allowBlank:false,
                    name: 'issuetype',
					anchor:'90%',
					emptyText: 'Select a Type...'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
				xtype:'textfield',
                fieldLabel: 'Serialization lot',
                maxLength : 20,
                enforceMaxLength: 20,
                emptyText: 'Serialization lot',
				 anchor:'90%',
                name: 'serlot'
				},{
						xtype:'textfield',
                    fieldLabel: 'Serialization start',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'erialization start',
					 anchor:'90%',
                    name: 'issueserisrt'
					},{
						xtype:'textfield',
                    fieldLabel: 'Serialization end',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    emptyText: 'Serialization end',
					 anchor:'90%',
                    name: 'issueseriend'
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Inventory Issue has been created sucessfully');
            }
        },/*{
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
