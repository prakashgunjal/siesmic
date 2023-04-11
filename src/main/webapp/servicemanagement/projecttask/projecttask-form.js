Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.projecttask', {
    extend: 'Ext.data.Model',
    fields: [
'projtakmile','projtaskproj','taskactenddt','taskactstartdt','projtaskeffspent','projtasknme', 'desc', 'projtaskmileprior', 'projtasksrtdate', 'projtaskenddate','projmileactsrtdate','projassito', 'projactsrtdate','projtaskassito','projtasksuceedtask','projstatus','projactclkout','projtaskesteff','projtaskprectask','projtaskmile'
		 
        
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
        renderTo: 'formprojecttask',
        frame: true,
        title:'Project Task Form',
		id:'projecttaskfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto',
           /* msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.projecttask',
            record : 'projecttask',
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
					 fieldLabel: 'Project task name',
					 vtype:'alpha',
						maxLength : 50,
	                    enforceMaxLength: 50,
                    name: 'projtasknme',
                    allowBlank: false
                    
					}, {
	                    xtype: 'textfield',
						 anchor:'90%',
						 vtype:'alphanum',
							maxLength : 50,
		                    enforceMaxLength: 50,
						 fieldLabel: 'Project number',
	                    name: 'projtaskproj',
	                    allowBlank: false
	                    
						},{
		                    xtype: 'textfield',
							 anchor:'90%',
							 vtype:'alphanum',
								maxLength : 50,
			                    enforceMaxLength: 50,
							 fieldLabel: 'Milestone number',
		                    name: 'projtakmile',
		                    allowBlank: false
		                    
							},{
								xtype:'combobox',
			                    fieldLabel: 'Priority ',
								 anchor:'90%',
			                    name: 'projtaskmileprior',
								emptyText: 'Select a Task Priority...'
								},]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [
			        {
                    xtype: 'combobox',
					 anchor:'90%',
					 fieldLabel: 'Assigned to',
                    name: 'projtaskassito',
                    allowBlank: false
                    
					},
					{
	                    xtype: 'textfield',
						 anchor:'90%',
						fieldLabel: 'Estimated effort',
						vtype:'alpha',
						maxLength : 50,
	                    enforceMaxLength: 50,
	                    name: 'projtaskesteff',
	                    allowBlank: false
	                    
					},
					{
	                    xtype: 'textfield',
						 anchor:'90%',
						fieldLabel: 'Effort spent',
						vtype:'alpha',
						maxLength : 50,
	                    enforceMaxLength: 50,
	                    name: 'projtaskeffspent',
	                    allowBlank: false
	                    
					},
					{
            xtype: 'datefield',
            name: 'projtasksrtdate',
            itemId:'projtasksrtdate',
            vtype:'daterange',
            endDateField:'projtaskenddate',
			anchor:'90%',
            fieldLabel: ' Task start date'
        }, ]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
		            xtype: 'datefield',
		            name: 'projtaskenddate',
		            itemId:'projtaskenddate',
                    vtype:'daterange',
                    endDateField:'projtasksrtdate',
					anchor:'90%',
		            fieldLabel: ' Task end date'
		        }, 
		        {
		            xtype: 'datefield',
		            name: 'taskactstartdt',
		            itemId:'taskactstartdt',
                    vtype:'daterange',
                    endDateField:'taskactenddt',
					anchor:'90%',
		            fieldLabel: 'Actual start date'
		        },
		        {
		            xtype: 'datefield',
		            name: 'taskactenddt',
		            itemId:'taskactenddt',
                    vtype:'daterange',
                    endDateField:'taskactstartdt',
					anchor:'90%',
		            fieldLabel: 'Actual end date'
		        },
	        	{
	                    xtype: 'textfield',
						 anchor:'90%',
						fieldLabel: 'preceding task',
	                    name: 'projtaskprectask',
	                    allowBlank: false
	                    
						},]},{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
	                xtype: 'textfield',
					 anchor:'90%',
					fieldLabel: 'Succeeding task',
	               name: 'projtasksuceedtask',
	               allowBlank: false
	               
					},
					{
	                    xtype: 'textarea',
						 anchor:'90%',
						 height:95,
	                    fieldLabel: 'Description',
	                    name: 'desc',
	                    allowBlank: false
	                    
						},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Task has been created sucessfully');
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
