Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.servreq', {
    extend: 'Ext.data.Model',
    fields: [
         'servreqnme','servreqaccnme', 'servreqcontrnme', 'servreqprodnme', 'servreqprodarea', 'servreqprodsubarea','servreqstatus','servreqprior', 'servreqdesc','servreqdate','servreqassito','servreqassidate','servreqresol','servreqresoldate','pricelistqtyfrm','pricelistqtyto'
		 
        
    ]
});
Ext.apply(Ext.form.field.VTypes, {
    daterange: function(val, field) {
        var date = field.parseDate(val);

        if (!date) {
            return false;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = field.up('form').down('#' + field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = field.up('form').down('#' + field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    },

    daterangeText: 'Start date must be less than end date',
}); 
Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formservreq',
        frame: true,
        title:'Service Request Form',
		id:'servreqfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
            msgTarget: 'side'
        },
			reader : new Ext.data.reader.Json({
            model: 'example.servreq',
            record : 'servreq',
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
					 vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
					 fieldLabel: 'Number',
	               name: 'servreqnme',
	               allowBlank: false
	               
					},
					{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Account number',
					 vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
                    name: 'servreqaccnme',
                    allowBlank: false
                    
					},,{
                    xtype: 'numberfield',
					 anchor:'90%',
					 hideTrigger: true,
					 fieldLabel: 'Contract number',
                    name: 'servreqcontrnme',
                    allowBlank: false
                    
					},{
                    xtype: 'textfield',
					 anchor:'90%',
					 vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
					 fieldLabel: 'Product number',
                    name: 'servreqprodnme',
                    allowBlank: false
                    
					},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                xtype: 'combobox',
				 anchor:'90%',
				 	maxLength : 50,
                    enforceMaxLength: 50,
				fieldLabel: 'Product area',
               name: 'servreqprodarea',
               allowBlank: false
               
				},{
                    xtype: 'combobox',
					 anchor:'90%',
					fieldLabel: 'Product Sub-area',
					maxLength : 50,
                    enforceMaxLength: 50,
                    name: 'servreqprodsubarea',
                    allowBlank: false
                    
					},{
	                    xtype: 'combobox',
						 anchor:'90%',
						fieldLabel: 'Status',
						maxLength : 50,
	                    enforceMaxLength: 50,
	                    name: 'servreqstatus',
	                    allowBlank: false
	                    
					},{
					xtype:'combobox',
                    fieldLabel: 'Priority',
                    maxLength : 50,
                    enforceMaxLength: 50,
					 anchor:'90%',
                    name: 'servreqprior',
					emptyText: 'Select List'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [  {
	            xtype: 'datefield',
	            name: 'servreqdate',
				anchor:'90%',
	            fieldLabel: 'Request date'
	        },{
                xtype: 'combobox',
				 anchor:'90%',
				fieldLabel: 'Assigned to ',
               name: 'servreqassito',
               allowBlank: false
               
				},
				{
       xtype: 'datefield',
       name: 'servreqassidate',
		anchor:'90%',
       fieldLabel: 'Assigned date'
   },{
       xtype: 'textfield',
		 anchor:'90%',
		 maxLength : 50,
         enforceMaxLength: 50,
		fieldLabel: 'Resolution',
      name: 'servreqresol',
      allowBlank: false
      
		},   ]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
            xtype: 'datefield',
            name: 'servreqresoldate',
			anchor:'90%',
            fieldLabel: 'Resolution date'
        },{
            xtype: 'textareafield',
            name: 'servreqdesc',
            fieldLabel: 'Description',
			height:95,
			maxLength : 250,
            enforceMaxLength: 250,
			 anchor:'90%',
            value: 'Textarea value'
        },]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Service Request has been created sucessfully');
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
