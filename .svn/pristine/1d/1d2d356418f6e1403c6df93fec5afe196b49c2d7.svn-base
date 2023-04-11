Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.pricelist', {
    extend: 'Ext.data.Model',
    fields: [
         'desc','uom','qtyto','pricelistnme','prodnme', 'terrnme', 'currnme', 'wholesal', 'retailprice','validfrm','validto', 'prodwholesalrate','prodretailrate','produom'
		 
        
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
        renderTo: 'formpricelist',
        frame: true,
        title:'Price List Form',
		id:'pricelistfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.pricelist',
            record : 'pricelist',
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
					 fieldLabel: 'Price list name',
					 allowBlank:false,
					 vtype:'alphanum',
	               name: 'pricelistnme',
	               allowBlank: false
	               
					},
					{
		                xtype: 'textfield',
						 anchor:'90%',
						 fieldLabel: 'Product name',
						 allowBlank:false,
						 maxLength : 25,
			                enforceMaxLength: 25,
					 vtype:'alphanum',
		               name: 'prodnme',
		               allowBlank: false
		               
					},
					{
	                    xtype: 'textfield',
						 anchor:'90%',
						fieldLabel: 'Territory name',
						maxLength : 20,
		                enforceMaxLength: 20,
						allowBlank:false,
					 vtype:'alphanum',
	                    name: 'terrnme',
	                    allowBlank: false
	                    
					},
					]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
                    xtype: 'combobox',
					 anchor:'90%',
					 fieldLabel: 'Currency ',
					 maxLength : 5,
		                enforceMaxLength: 5,
                    name: 'currnme',
                    allowBlank: false
                    
					},
					{
	                    xtype: 'combobox',
						 anchor:'90%',
						fieldLabel: 'Quantity to',
						maxLength : 20,
		                enforceMaxLength: 20,
	                    name: 'qtyto',
	                    allowBlank: false
					},   
					{
                    xtype: 'textfield',
					 anchor:'90%',
					fieldLabel: 'Wholesale price',
					maxLength : 20,
	                enforceMaxLength: 20,
                    name: 'wholesal',
                    allowBlank: false
                    
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
                xtype: 'textfield',
				 anchor:'90%',
				fieldLabel: 'Retail sales price',
				maxLength : 20,
                enforceMaxLength: 20,
               name: 'retailprice',
               allowBlank: false
               
				},{
            xtype: 'datefield',
            name: 'validfrm',
            itemId:'validfrm',
            vtype:'daterange',
            endDateField:'validto',
			anchor:'90%',
            fieldLabel: 'Valid from'
        }, {
            xtype: 'datefield',
            name: 'validto', 
            itemId:'validto',
	        vtype:'daterange',
	        startDateField:'validfrm',
			anchor:'90%',
            fieldLabel: 'Valid to'
        },  ]},
        
        			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ {
	                xtype: 'combobox',
					 anchor:'90%',
					 maxLength : 20,
		                enforceMaxLength: 20,                                        
					vtype:'alpha',
					fieldLabel: 'UOM',
	               name: 'uom',
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
               
				},]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
            handler: function(){
            	Ext.Msg.alert('Save Data', 'Price List has been created sucessfully');
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
