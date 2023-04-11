Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.productbundle', {
    extend: 'Ext.data.Model',
    fields: [
         'prodcategnme', 'prodcatenme', 'prodsubcatenme', 'prodtypenme', 'prodsubtype','prodnum','desc', 'prodwholesalrate','prodretailrate','produom'
		 
        
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
        renderTo: 'formprodbundle',
        frame: true,
        title:'Product Bundle Form',
		id:'prodbundlefrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.productbundle',
            record : 'productbundle',
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
					xtype:'combobox',
	                fieldLabel: 'Product Name',
					 anchor:'90%',
					 maxLength : 20,
		                enforceMaxLength: 20,  
					 allowBlank: false,
	                name: 'prodbundlenme',
					emptyText: 'Name'
					}, 
					{
					xtype:'combobox',
                    fieldLabel: ' Bundle name',
                    maxLength : 20,
	                enforceMaxLength: 20,  
					 anchor:'90%',
                    name: 'prodbundlenme',
                    allowBlank: false,
					emptyText: 'Select a  Bundle...'
					},{
                    xtype: 'textarea',
					 anchor:'90%',
					 height:95,
					 maxLength : 250,
		                enforceMaxLength: 250,  
                    fieldLabel: 'Description',
                    name: 'desc'
                    
					},]}, {
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
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Product Bundle has been created sucessfully');
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
