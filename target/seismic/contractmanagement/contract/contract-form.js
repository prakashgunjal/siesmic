Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.contract', {
    extend: 'Ext.data.Model',
    fields: [
         'contrastrtdate','contranme', 'contradate', 'contratype', 'contranum', 'contrasalordnme','contraaccnme','contrasrtdate', 'contracussigndate','contrasubtype','contrasuppacktype','contrareqallo','contrasupreqcarr','contrabillfreq','contracurr','contraamt','contradiscount','contrastatus','contraenddate','contrareqbal','contrasuppchan','contraintsigndate'
		 
        
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
        renderTo: 'formcontract',
        frame: true,
        title:'Contract Form',
		id:'contractfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.contract',
            record : 'contract',
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
			items: [ 
					{
						xtype:'textfield',
	                    fieldLabel: 'Contract number',
	                    emptyText: ' Number',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
						allowBlank:false,
						vtype:'alphanum',
						anchor:'90%',
	                    name: 'contranum'
					},{
						xtype:'datefield',
	                    fieldLabel: 'date',
	                    emptyText: 'Contract date',
	                    allowBlank:false,
						 anchor:'90%',
	                    name: 'contradate'
						},
					{
						xtype:'textfield',
						fieldLabel: 'Account number',
						emptyText: 'Account number',
						maxLength : 20,
	                    enforceMaxLength: 20,
						allowBlank:false,
						anchor:'90%',
						name: 'contraaccnme'
					},{
						xtype:'textfield',
	                    fieldLabel: 'Sales order number',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
	                    emptyText: 'Sales order number',
	                    allowBlank:false,
						anchor:'90%',
	                    name: 'contrasalordnme'
					},
					{
						xtype:'datefield',
                    fieldLabel: 'Start date',
                    emptyText: 'Start date',
                    allowBlank:false,
					 anchor:'90%',
					 itemId:'contrastrtdate',
	                 vtype:'daterange',
	                 endDateField:'contraenddate',
                    name: 'contrastrtdate'
					},
					
					
					 ]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'datefield',
                fieldLabel: 'End date',
                emptyText: 'End date',
                allowBlank:false,
                itemId:'contraenddate',
		        vtype:'daterange',
		        startDateField:'contrastrtdate',
				 anchor:'90%',
                name: 'contraenddate'
				},
					{
						xtype:'datefield',
	                    fieldLabel: 'Customer signed date',
	                    emptyText: 'Customer signed date',
						 anchor:'90%',
	                    name: 'contracussigndate'
					},
					{
						xtype:'datefield',
                    fieldLabel: 'Internal signed date',
                    emptyText: 'Internal signed date',
					 anchor:'90%',
                    name: 'contraintsigndate'
					},
					{
						xtype:'combobox',
	                    fieldLabel: 'Type',
						emptyText: 'Contract type',
						maxLength : 20,
	                    enforceMaxLength: 20,
						allowBlank:false,
	                    name: 'contratype',
						anchor:'90%',
						emptyText: 'Select a Class...'
					},
					{
						xtype:'combobox',
	                    fieldLabel: 'Sub-type',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
						name: 'contrasubtype',
						allowBlank:false,
						anchor:'90%',
						emptyText: 'Select a Class...'
					},
					]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
						xtype:'combobox',
		                fieldLabel: 'Support package type',				
		                typeAhead: true,
		                maxLength : 50,
	                    enforceMaxLength: 50,
		                name: 'contrasuppacktype',
		                allowBlank:false,
						anchor:'90%',
						emptyText: 'Select a Type...'
					},
			        {
					xtype:'numberfield',
                    fieldLabel: 'Support request allowed',
                    maxLength : 4,
                    enforceMaxLength: 4,
					name: 'contrareqallo',
					anchor:'90%',
					emptyText: 'Support request allowed'
					},{
						xtype:'numberfield',
                    fieldLabel: 'Support request balance',
                    maxLength : 10,
                    enforceMaxLength: 10,
					hideTrigger: true,
                    emptyText: 'Support request balance',
					 anchor:'90%',
                    name: 'contrareqbal'
					},{
						xtype:'textfield',
	                    fieldLabel: 'Support channel',
	                    maxLength : 20,
	                    enforceMaxLength: 20,
	                    emptyText: 'Support channel',
						 anchor:'90%',
	                    name: 'contrasuppchan'
					},{
						xtype:'combobox',
	                    fieldLabel: 'Support request carry over',
	                    maxLength : 10,
	                    enforceMaxLength: 10,
	                    emptyText: 'Support request carry over',
						 anchor:'90%',
	                    name: 'contrasupreqcarr'
					},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
				xtype:'combobox',
                fieldLabel: 'Billing frequency',
                maxLength : 20,
                enforceMaxLength: 20,
                emptyText: 'Billing frequency',
				 anchor:'90%',
                name: 'contrabillfreq'
				},{
					xtype:'textfield',
                    fieldLabel: 'Currency',
					emptyText: 'Contract currency',
                    name: 'contracurr',
					anchor:'90%',
					},{
						xtype:'textfield',
                    fieldLabel: 'Amount',
                    maxLength : 10,
                    enforceMaxLength: 10,
                    emptyText: 'Contract amount',
                    allowBlank:false,
					 anchor:'90%',
                    name: 'contraamt'
					},
					{
						xtype:'combobox',
                    fieldLabel: 'Status',
                    emptyText: 'Contract status',
                    maxLength : 20,
                    enforceMaxLength: 20,
                    allowBlank:false,
					 anchor:'90%',
                    name: 'contrastatus',
                    emptyText: 'Select a Class...'
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Contract has been created sucessfully');
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
