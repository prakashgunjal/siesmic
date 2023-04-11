//Ext.require([
//    'Ext.form.*',
//    'Ext.data.*',
//	'Ext.grid.*',
//	'Ext.layout.container.Column'
//]);
//
//Ext.define('example.login', {
//    extend: 'Ext.data.Model',
//    fields: [
//         'usrnme', 'pass','Agreechk'
//        
//    ]
//});
//
//   
//Ext.define('example.fielderror', {
//    extend: 'Ext.data.Model',
//    fields: ['id', 'msg']
//});
//
//Ext.onReady(function(){
//
//    var formPanel = new Ext.form.Panel({
//        renderTo: 'loginform',
//        frame: true,
//       
//        title:'User login',
//		id:'loginfrmid',
//        width: 350,
//        bodyPadding: 8,
//        waitMsgTarget: true,
//
//        fieldDefaults: {
//            labelAlign: 'top',
//            labelWidth: 'auto',
//            msgTarget: 'side'
//        },
//			reader : new Ext.data.reader.Json({
//            model: 'example.login',
//            record : 'login',
//            successProperty: '@success'
//        }),
//       
//
//        // configure how to read the XML error, using a config
//       // errorReader: {
//          //  type: 'xml',
//           // model: 'example.fielderror',
//           // record : 'field',
//          //  successProperty: '@success'
//       // },
//
//        items: [{
//            xtype: 'container',
//			 anchor: '100%',
//            layout: 'vbox',
//            defaultType: 'textfield',
//			collapsible: true,
//			frame: true,
//			title: 'Contact Form',
//			bodyPadding: '7 7 0',
//            defaults: {
//                width: 350,
//            },
//            items: [{
//						xtype: 'container',
//						flex: 1,
//						layout: 'anchor',
//			items: [{
//						xtype:'textfield',
//                    fieldLabel: ' User name',
//                    emptyText: ' User name',
//                   
//					allowBlank:false,
//					
//					 anchor:'90%',
//                    name: 'usrnme'
//					},{
//						xtype:'textfield',
//						fieldLabel: ' Password',
//						 anchor:'90%',
//						 inputType: 'password',
//						name: 'pass',
//						allowBlank:false,
//						
//						emptyText: ' Password'
//					},{
//                   
//                   
//                    	 xtype: 'checkboxfield',
//                    	   name: 'Agreechk',                                
//                    	   boxLabel: 'Remember Me',
//                    	   inputValue: 'true',
//                    	   uncheckedValue: 'false'
//					},]}, {
//						xtype: 'container',
//						flex: 1,
//						layout: 'anchor',
//			items: [ ]},
//					{
//						xtype: 'container',
//						flex: 1,
//						layout: 'anchor',
//			items: []}, {
//					xtype: 'container',
//						flex: 1,
//						layout: 'anchor',
//			items: []},
//            ]
//        }],
//
//        buttons: [{
//            text: 'Login',
//           /* handler: function(){
//                formPanel.getForm().load({
//                    url: 'cont-org-form-data.json',
//                    waitMsg: 'Loading...'
//                });
//            }*/
//        },]
//    });
//
//});
