Ext.require([
    'Ext.form.*',
    'Ext.data.*',
	'Ext.layout.container.Column'
]);

Ext.define('example.contractrenew', {
    extend: 'Ext.data.Model',
    fields: [
         'contranum','contranme', 'contrarennme', 'contrarensrtdate', 'contrarenenddate', 'contrasalordnme','contraaccnme','contrasrtdate', 'contracussigndate','contrasubtype','contrasuppacktype','contrareqallo','contrasupreqcarr','contrabillfreq','contracurr','contraamt','contradiscount','contrastatus','contraenddate','contrareqbal','contrasuppchan','contraintsigndate'
		 
        
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
        renderTo: 'formcontractrenew',
        frame: true,
        title:'Contract Renewal Form',
		id:'contractrenewfrmid',
        width: 'auto',
        bodyPadding: 8,
        waitMsgTarget: true,

        fieldDefaults: {
            labelAlign: 'top',
            labelWidth: 'auto'
            /*msgTarget: 'side'*/
        },
			reader : new Ext.data.reader.Json({
            model: 'example.contractrenew',
            record : 'contractrenew',
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
                    fieldLabel: 'Contract number',
                    emptyText: 'Contract number',
					allowBlank:false,
					maxLength : 20,
                    enforceMaxLength: 20,
					vtype:'alphanum',
					anchor:'90%',
                    name: 'contranum'
					}, {
						xtype:'textfield',
                    fieldLabel: ' Old reference',
                    emptyText: ' Old reference',
                    maxLength : 20,
                    enforceMaxLength: 20,
					 vtype:'alphanum',
					 anchor:'90%',
                    name: 'contranum'
					}, ]}, {
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'textfield',
                fieldLabel: 'Renewal name',
                emptyText: ' Renewal name',
                maxLength : 50,
                enforceMaxLength: 50,
				allowBlank:false,
					 vtype:'alpha',
				 anchor:'90%',
                name: 'contrarennme'
				},{
						xtype:'datefield',
                    fieldLabel: 'Renewal start date',
                    allowBlank:false,
                    emptyText: 'Renewal start date',
					 anchor:'90%',
					 itemId:'contrarensrtdate',
	                 vtype:'daterange',
	                 endDateField:'contrarenenddate',
                    name: 'contrarensrtdate'
					},]},
					{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [{
				xtype:'datefield',
                fieldLabel: 'Renewal end date',
                allowBlank:false,
                emptyText: 'Renewal end date',
				anchor:'90%',
				itemId:'contrarenenddate',
			    vtype:'daterange',
			    startDateField:'contrarensrtdate',
                name: 'contrarenenddate'
				},]},
			{
						xtype: 'container',
						flex: 1,
						layout: 'anchor',
			items: [ ]},
            ]
        }],

        buttons: [{
            text: 'Save',
            formBind: true,
            disabled: true,
           handler: function(){
        	   Ext.Msg.alert('Save Data', 'Contract has been renewed sucessfully');
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
