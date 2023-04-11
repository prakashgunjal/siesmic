Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.project', {
    extend: 'Ext.data.Model',
    fields: [
'projnme','projaccnme', 'projno', 'projcontrnme', 'desc', 'projsrtdate','projenddate','projactenddate', 'projactsrtdate','projassito','status','projtype','budjet','projesteff','actcost','pricelistqtyto'
		 
        
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

Ext.define('example.fielderror', {
    extend: 'Ext.data.Model',
    fields: ['id', 'msg']
});

Ext.onReady(function(){

    var formPanel = new Ext.form.Panel({
        renderTo: 'formproject',
        frame: true,
        title:'Project Form',
		id:'projectfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
           /* msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.project',
            record : 'project',
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
			items: [{
	                xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Project name',
					 vtype:'alpha',
						maxLength : 50,
	                    enforceMaxLength: 50,
	               name: 'projnme',
	               allowBlank: false
	               
					}, 
					{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Account number',
					 vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
                    name: 'projaccnme',
                    allowBlank: false
                    
					},
					{
                    xtype: 'numberfield',
					 anchor:'90%',
					 fieldLabel: 'Contract number',
					 maxLength : 10,
	                 enforceMaxLength: 10,
					 hideTrigger: true,
                    name: 'projcontrnme',
                    allowBlank: false
					}, {
			            xtype: 'datefield',
			            name: 'projsrtdate',
			            itemId:'projsrtdate',
	                    vtype:'daterange',
	                    endDateField:'projsrtdate',
						anchor:'90%',
			            fieldLabel: 'Start date'
			        },]}, 
					
						{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
            xtype: 'datefield',
            name: 'projenddate',
            itemId:'projenddate',
            vtype:'daterange',
            endDateField:'projsrtdate',
			anchor:'90%',
            fieldLabel: 'End date'
			},{
            xtype: 'datefield',
            name: 'projactsrtdate',
            itemId:'projactsrtdate',
            vtype:'daterange',
            endDateField:'projactsrtdate',
			anchor:'90%',
            fieldLabel: 'Actual start date'
        },
        {
            xtype: 'datefield',
             name: 'projactenddate',
            itemId:'projactenddate',
            vtype:'daterange',
            endDateField:'projactsrtdate',
			anchor:'90%',
            fieldLabel: 'Actual end date'
        },{
            xtype: 'combobox',
			 anchor:'90%',
			fieldLabel: 'Assigned to',
           name: 'projassito',
           allowBlank: false
           
			},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [   {
                    xtype: 'combobox',
					 anchor:'90%',
					fieldLabel: 'Status',
                    name: 'status',
                    allowBlank: false
                    
					},{
					xtype:'combobox',
                    fieldLabel: 'Type',
					 anchor:'90%',
                    name: 'projtype',
					emptyText: 'Select a Project Type...'
					}, {
                    xtype: 'numberfield',
					 anchor:'90%',
					fieldLabel: 'Budget',
					 hideTrigger: true,
                    name: 'budjet',
                    allowBlank: false
                    
					},{
	                    xtype: 'numberfield',
						 anchor:'90%',
						fieldLabel: 'Estimated effort',
						 hideTrigger: true,
	                    name: 'projesteff',
	                    allowBlank: false
	                    
					},]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'numberfield',
					 anchor:'90%',
					 maxLength : 50,
	                 enforceMaxLength: 50,
					fieldLabel: 'Actual cost',
					 hideTrigger: true,
                    name: 'actcost',
                    allowBlank: false
                    
					},{
			            xtype: 'textareafield',
			            name: 'desc',
			            maxLength : 250,
	                    enforceMaxLength: 250,
			            fieldLabel: 'Description',
						height:95,
						 anchor:'90%'
			           
			        },]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Project has been created sucessfully');
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
