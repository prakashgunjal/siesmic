Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.projectactmanag', {
    extend: 'Ext.data.Model',
    fields: [
         'actproj','projactnme', 'priority','projactmile', 'projacttask', 'projactdate', 'projassirep','projenddate','projactenddate', 'projactsrtdate','projassito','projreqnme','projstatus','projactclkout','projactclkin','projactnotes','projactwrkitem'
		 
        
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
                renderTo: 'formprojectactmanag',
                frame: true,
                title:'Time Sheet Form',
        		id: 'myForm' ,
                width: '100%',
                bodyPadding: 8,
                waitMsgTarget: true,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 'auto'
                    /*msgTarget: 'side'*/
                },
        			reader : new Ext.data.reader.Json({
                    model: 'example.oppor',
                    record : 'oppor',
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
					 fieldLabel: 'Activity name',
						vtype:'alpha',
						maxLength : 50,
	                    enforceMaxLength: 50,
                    name: 'projactnme',
                    allowBlank: false
                    
					},
					{
	                    xtype: 'textfield',
						 anchor:'90%',
						 fieldLabel: 'Project number',
							vtype:'alphanum',
							maxLength : 50,
		                    enforceMaxLength: 50,
	                    name: 'actproj',
	                    allowBlank: false
	                    
						},
					{
                    xtype: 'textfield',
					 anchor:'90%',
						vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
					 fieldLabel: 'Milestone number',
                    name: 'projactmile',
                    allowBlank: false
                    
					},{
                    xtype: 'textfield',
					 anchor:'90%',
					 fieldLabel: 'Task',
                    name: 'projacttask',
                    allowBlank: false
                    
					}, ]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
            xtype: 'datefield',
            name: 'projactdate',
			anchor:'90%',
            fieldLabel: 'Activity date'
        },{
                    xtype: 'combobox',
					 anchor:'90%',
					 fieldLabel: 'Assigned to',
                    name: 'projassirep',
                    allowBlank: false
                    
					},{
	                    xtype: 'textfield',
						 anchor:'90%',
							vtype:'alpha',
							maxLength : 50,
		                    enforceMaxLength: 50,
						 fieldLabel: 'Request name',
	                    name: 'projreqnme',
	                    allowBlank: false
	                    
						},{
		                    xtype: 'textfield',
							 anchor:'90%',
								vtype:'alpha',
								maxLength : 50,
			                    enforceMaxLength: 50,
							fieldLabel: 'Work item',
		                    name: 'projactwrkitem',
		                    allowBlank: false
		                    
							},
        ]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [  {
	            xtype: 'timefield',
	            name: 'projactclkin',
				anchor:'90%',
	            fieldLabel: 'Clock in',
	            minValue: '1:30 AM',
	            maxValue: '9:15 PM'
	        },  {
            xtype: 'timefield',
            name: 'projactclkout',
			anchor:'90%',
            fieldLabel: 'Clock out',
            minValue: '1:30 AM',
            maxValue: '9:15 PM'
        },{
            xtype: 'combobox',
			 anchor:'90%',
			fieldLabel: 'Status',
           name: 'projstatus',
           allowBlank: false
           
			},{
	            xtype: 'combobox',
				 anchor:'90%',
				fieldLabel: 'Priority',
	           name: 'priority',
	           allowBlank: false
	           
				},]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
						
						maxLength : 250,
	                    enforceMaxLength: 250,
                    fieldLabel: 'Notes',
                    name: 'projactnotes',
                    allowBlank: false
                    
					},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Time sheet has been created sucessfully');
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
