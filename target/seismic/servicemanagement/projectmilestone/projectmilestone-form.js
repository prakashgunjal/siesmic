Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.projectmile', {
    extend: 'Ext.data.Model',
    fields: [
         'projmilenme','projmilenme', 'desc', 'projmilestrdate', 'projmileenddate', 'projmileactenddate','projmileactsrtdate','projassito', 'projactsrtdate','projassito','projreqnme','projstatus','projactclkout','projmileesteff','projmilebudget','projmiletype'
		 
        
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
        renderTo: 'formprojectmile',
        frame: true,
        title:'Project Mile Stone Form',
		id:'projectmilefrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
           /* msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.projectmile',
            record : 'projectmile',
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
					 fieldLabel: 'Project name',
					 vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
                    name: 'projmilenme',
                    allowBlank: false
                    
					},
					{
	                    xtype: 'textfield',
						 anchor:'90%',
						 fieldLabel: 'Milestone name',
	                    name: 'projmilenme',
	                    vtype:'alphanum',
						maxLength : 50,
	                    enforceMaxLength: 50,
	                    allowBlank: false
	                    
					},
					{
	                    xtype: 'combobox',
						 anchor:'90%',
						 fieldLabel: 'Assigned to',
	                    name: 'projassito',
	                    allowBlank: false
	                    
						},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                xtype: 'combobox',
				 anchor:'90%',
				fieldLabel: 'Milestone type',
               name: 'projmiletype',
               allowBlank: false
               
				},{
            xtype: 'datefield',
            name: 'projmilestrdate',
			anchor:'90%',
			 itemId:'projmilestrdate',
             vtype:'daterange',
             endDateField:'projmilestrdate',
            fieldLabel: 'start date'
        },{
            xtype: 'datefield',
            name: 'projmileenddate',
            itemId:'projmileenddate',
            vtype:'daterange',
            endDateField:'projmilestrdate',
			anchor:'90%',
            fieldLabel: 'end date'
        }, ]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [  {
            xtype: 'datefield',
            name: 'projmileactsrtdate',
            itemId:'projmileactsrtdate',
            vtype:'daterange',
            endDateField:'projmileactsrtdate',
			anchor:'90%',
            fieldLabel: 'Actual start date'
        },{
            xtype: 'datefield',
            name: 'projactmileenddate',
            itemId:'projactmileenddate',
            vtype:'daterange',
            endDateField:'projmileactsrtdate',
			anchor:'90%',
            fieldLabel: 'Actual end date'
        },{
            xtype: 'textfield',
			 anchor:'90%',
			fieldLabel: 'Budget',
			maxLength : 50,
            enforceMaxLength: 50,
           name: 'projmilebudget',
           allowBlank: false
           
			},]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'textfield',
					 anchor:'90%',
					fieldLabel: 'Estimated effort',
					maxLength : 50,
                    enforceMaxLength: 50,
                    name: 'projmileesteff',
                    allowBlank: false
                    
					},{
	                    xtype: 'textarea',
						 anchor:'90%',
						 height:95,
						 maxLength : 250,
		                    enforceMaxLength: 250,
	                    fieldLabel: 'Description',
	                    name: 'desc',
	                    allowBlank: false
	                    
						}, ]},
            ]
        }],
        

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Milestone has been created sucessfully');
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
