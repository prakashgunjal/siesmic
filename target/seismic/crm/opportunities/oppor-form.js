Ext.require([ 'Ext.form.*', 'Ext.data.*', 'Ext.grid.*',
		'Ext.layout.container.Column', 'Ext.util.Format.*',
		'Ext.form.field.VTypes.*' ]);
Ext.define('crm.opportunity', {
	extend : 'Ext.data.Model',
	fields : [ 'opportunityId', 'opportunityNumber', 'opportunityDate', {
		name : 'oppoAccountId',
		mapping : 'account.accountId'
	}, {
		name : 'accountName',
		mapping : 'account.accountName'
	}, {
		name : 'contactId',
		mapping : 'contactByContactId.contactId'
	}, {
		name : 'leadname',
		mapping : 'lead.leadId'
	}, 'opportunitySourceId', 'opportunityStatusId', 'opportunityPriorityId',
			'opportunityRatingId',
			// 'contractRole',
			{
				name : 'opportunitySalesRep',
				mapping : 'contactByOpportunitySalesRep.contactId'
			}, {
				name : 'opportunitySource',
				mapping : 'listValuesByOpportunitySourceId.listValue'
			}, {
				name : 'opportunityRating',
				mapping : 'listValuesByOpportunityRatingId.listValue'
			}, {
				name : 'opportunityPriority',
				mapping : 'listValuesByOpportunityPriorityId.listValue'
			}, 'estimatedValue', 'closeProbability', 'estimatedCloseDate', {
				name : 'pricingStatus',
				mapping : 'listValuesByOpportunityStatusId.listValue'
			}, {
				name : 'shippingMethod',
				mapping : 'listValuesByShippingMethod.listValue'
			}, 'shippingInstructions', 'carrier', 'remarks' ]
});

Ext.define('example.fielderror', {
	extend : 'Ext.data.Model',
	fields : [ 'id', 'msg' ]
});

// =====================================================//
// Store for AccountNumber
// =====================================================//
Ext.define('accountNumberList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountId',
		type : 'int'
	}, {
		name : 'accountNumber',
		type : 'string'
	}, {
		name : 'accountName'
	} ]
});
var storeAccountNumber = Ext.create('Ext.data.Store', {
	autoLoad : false,
	model : 'accountNumberList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getAccountNumber.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});

storeAccountNumber.load();
// =======================================================//

// =====================================================//
// Store for Account Contact
// =====================================================//

Ext.define('accountContactList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	}, {
		name : '1',
		type : 'string'
	} ]
});

var storeAccountContact = Ext.create('Ext.data.Store', {
	model : 'accountContactList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getAccountContact.json',
		reader : {
			root : '',
			type : 'json'
		}
	},
// autoLoad: false
});
// =====================================================//
// Store for Account Contact
// =====================================================//

Ext.define('leadNameList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	}, {
		name : '1',
		type : 'string'
	} ]
});

var storeLeadName = Ext.create('Ext.data.Store', {
	model : 'leadNameList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getLeadName.json',
		reader : {
			root : '',
			type : 'json'
		}
	},
// autoLoad: false
});
// =======================================================//
// Store for Source
// =====================================================//
Ext.define('sourceList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var sourceListStore = Ext.create('Ext.data.Store', {
	model : 'sourceList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getSource.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
sourceListStore.load();
// =====================================================//
// Store for Rating
// =====================================================//
Ext.define('ratingList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var ratingListStore = Ext.create('Ext.data.Store', {
	model : 'ratingList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getRating.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
ratingListStore.load();
// =====================================================//
// Store for Status
// =====================================================//
Ext.define('statusList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var statusListStore = Ext.create('Ext.data.Store', {
	model : 'statusList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getStaus.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
statusListStore.load();
// =====================================================//
// Store for Priority
// =====================================================//
Ext.define('priorityList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var priorityListStore = Ext.create('Ext.data.Store', {
	model : 'priorityList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getPriority.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
priorityListStore.load();

// =====================================================//
// Store for Priority
// =====================================================//
Ext.define('shippingMethodList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'listValueId',
		type : 'int'
	}, {
		name : 'listValue',
		type : 'int'
	}, {
		name : 'listValueDescription',
		type : 'string'
	} ]
});
var shippingMethodListStore = Ext.create('Ext.data.Store', {
	model : 'shippingMethodList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getShippingMethod.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
shippingMethodListStore.load();
// =====================================================//
// Store for Priority
// =====================================================//
Ext.define('salesRepList', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : '0',
		type : 'int'
	}, {
		name : '1',
		type : 'String'
	} ]
});
var salesRepListStore = Ext.create('Ext.data.Store', {
	model : 'salesRepList',
	proxy : {
		type : 'ajax',
		url : basePath+'crm/opportunity/getSalesRep.json',
		reader : {
			root : '',
			type : 'json'
		}
	}
});
// salesRepListStore.load();
// =====================================================//
Ext
		.onReady(function() {

			var formPanel = new Ext.form.Panel(
					{
						renderTo : 'formoppor',
						frame : true,
						title : 'Opportunity Form',
						width : '99.8%',
						id : 'opportunity',
						/*
						 * autoScroll: true, height:350,
						 */
						bodyPadding : 8,
						waitMsgTarget : true,

						fieldDefaults : {
							labelAlign : 'top',
							labelWidth : 'auto'
						},
						reader : new Ext.data.reader.Json({
							model : 'crm.opportunity'
						}),

						items : [ {
							xtype : 'container',
							autoWidth : true,
							layout : 'vbox',
							title : 'Lead crm',
							defaultType : 'textfield',
							title : 'Lead Form',
							/* bodyPadding: '7 7 0', */

							items : [
									{
										xtype : 'fieldset',
										title : 'Opportunity info',
										style : 'margin-top:10px;',
										bodyPadding : '7 7 7 7',

										width : '100%',
										collapsible : true,

										items : [
												{
													xtype : 'fieldcontainer',

													layout : 'hbox',
													items : [
															{

																xtype : 'textfield',
																hidden : true,
																name : 'opportunityId',
																id : 'opportunityId'
															},
															{
																xtype : 'textfield',
																fieldLabel : 'Opportunity number',
																anchor : '90%',
																readOnly : true,
																id : 'opportunityNumber',
																name : 'opportunityNumber'
															},
															{
																xtype : 'datefield',
																anchor : '90%',
																fieldLabel : 'Date',
																maxValue : new Date(),
																maskRe : /[0-9\/]/,
																name : 'opportunityDate',
																id : 'opportunityDate',
																style : 'margin-left:60px',
																allowBlank : false
															},
															{
																xtype : 'combobox',
																fieldLabel : 'Account Name',
																style : 'margin-left:60px',
																name : 'oppoAccountId',
																id : 'oppoAccountId',
																emptyText : 'Select Account name',
																store : storeAccountNumber,
																displayField : 'accountName',
																valueField : 'accountId',
																anchor : '90%',
																allowBlank : false,
																listeners : {
																	change : function(
																			combo,
																			newValue,
																			oldValue) {
																		var value_index = storeAccountNumber
																				.find(
																						'accountId',
																						newValue);
																		var record = storeAccountNumber
																				.getAt(value_index);
																		Ext
																				.getCmp(
																						'accountNumber')
																				.setValue(
																						record
																								.get("accountNumber"));
																		var stateCombo = Ext
																				.getCmp('contactId');
																	},
																	select : {
																		fn : function(
																				combo,
																				value) {
																			var stateCombo = Ext
																					.getCmp('contactId');
																			stateCombo
																					.clearValue();
																			var leadnameCombo = Ext
																					.getCmp('leadname');
																			leadnameCombo
																					.clearValue();
																			storeAccountContact
																					.load({
																						params : {
																							oppoAccountId : combo
																									.getValue()
																						}
																					});
																			storeLeadName
																					.load({
																						params : {
																							oppoAccountId : combo
																									.getValue()
																						}
																					});
																			var salesRepCombo = Ext
																					.getCmp('opportunitySalesRep');
																			salesRepCombo
																					.clearValue();
																			salesRepListStore
																					.load({
																						params : {
																							oppoAccountId : combo
																									.getValue()
																						}
																					});
																		}
																	}
																}

															},
															{
																xtype : 'textfield',
																fieldLabel : 'Account number',
																readOnly : true,
																style : 'margin-left:60px',
																anchor : '90%',
																emptyText : 'Select Account name',
																id : 'accountNumber',
																name : 'accountNumber'
															},

													]
												},
												{
													xtype : 'fieldcontainer',
													layout : 'hbox',
													items : [
															{
																xtype : 'combobox',
																fieldLabel : 'Account contact',
																anchor : '90%',
																name : 'contactId',
																id : 'contactId',
																store : storeAccountContact,
																displayField : '1',
																valueField : '0'
															},

															{
																xtype : 'combobox',
																fieldLabel : 'Lead name',
																name : 'leadname',
																id : 'leadname',
																style : 'margin-left:60px',
																maxLength : 50,
																enforceMaxLength : 50,
																anchor : '90%',
																store : storeLeadName,
																displayField : '1',
																valueField : '0'

															},

													/*
													 * { xtype : 'textfield',
													 * fieldLabel : ' Contract
													 * role', style :
													 * 'margin-left:60px',
													 * anchor : '90%', maxLength :
													 * 20, enforceMaxLength :
													 * 20, name :
													 * 'contractRole', id :
													 * 'contractRole' },
													 */
													/*
													 * { xtype : 'combobox',
													 * fieldLabel : 'Preferred
													 * language', anchor :
													 * '90%', name :
													 * 'acccategory', style :
													 * 'margin-left:60px',
													 * maxLength : 50,
													 * enforceMaxLength : 50,
													 * emptyText : 'Select a
													 * language...' },
													 */

													]
												} ]
									},

									{
										xtype : 'fieldset',
										title : 'Other info',
										style : 'margin-top:5px',
										width : '100%',
										border : false,
										collapsible : true,

										items : [
												{
													xtype : 'fieldcontainer',
													layout : 'hbox',
													items : [
															{
																xtype : 'combobox',
																fieldLabel : 'Sales rep',
																anchor : '90%',
																allowBlank : false,
																maxLength : 50,
																enforceMaxLength : 50,
//																vtype : 'alpha',
																name : 'opportunitySalesRep',
																id : 'opportunitySalesRep',
																store : salesRepListStore,
																displayField : '1',
																valueField : '0'
															},
															{
																xtype : 'combobox',
																fieldLabel : 'Source',
																style : 'margin-left:60px',
																name : 'opportunitySource',
																id : 'opportunitySource',
																store : sourceListStore,
																displayField : 'listValueDescription',
																valueField : 'listValue',
																listeners : {
																	change : function(
																			combo,
																			newValue,
																			oldValue) {
																		var value_index = sourceListStore
																				.find(
																						'listValue',
																						newValue);
																		var record = sourceListStore
																				.getAt(value_index);
																		Ext
																				.getCmp(
																						'opportunitySourceId')
																				.setValue(
																						record
																								.get("listValueId"));
																	}
																}

															},
															{
																xtype : 'textfield',
																hidden : true,
																name : 'opportunitySourceId',
																id : 'opportunitySourceId'
															},
															{
																xtype : 'combobox',
																fieldLabel : 'Rating',
																style : 'margin-left:60px',
																name : 'opportunityRating',
																id : 'opportunityRating',
																store : ratingListStore,
																displayField : 'listValueDescription',
																valueField : 'listValue',
																listeners : {
																	change : function(
																			combo,
																			newValue,
																			oldValue) {
																		var value_index = ratingListStore
																				.find(
																						'listValue',
																						newValue);
																		var record = ratingListStore
																				.getAt(value_index);
																		Ext
																				.getCmp(
																						'opportunityRatingId')
																				.setValue(
																						record
																								.get("listValueId"));
																	}
																}
															},
															{
																xtype : 'textfield',
																hidden : true,
																name : 'opportunityRatingId',
																id : 'opportunityRatingId'
															},

															{
																xtype : 'combobox',
																anchor : '90%',
																fieldLabel : 'Priority',
																style : 'margin-left:60px',
																allowBlank : false,
																name : 'opportunityPriority',
																id : 'opportunityPriority',
																store : priorityListStore,
																displayField : 'listValueDescription',
																valueField : 'listValue',
																listeners : {
																	change : function(
																			combo,
																			newValue,
																			oldValue) {
																		var value_index = priorityListStore
																				.find(
																						'listValue',
																						newValue);
																		var record = priorityListStore
																				.getAt(value_index);
																		Ext
																				.getCmp(
																						'opportunityPriorityId')
																				.setValue(
																						record
																								.get("listValueId"));
																	}
																}
															},
															{
																xtype : 'textfield',
																hidden : true,
																name : 'opportunityPriorityId',
																id : 'opportunityPriorityId'
															},

													]
												},
												{
													xtype : 'fieldcontainer',
													layout : 'hbox',
													items : [
															{
																xtype : 'numberfield',
																anchor : '90%',
																fieldLabel : 'Close probability',
																maxLength : 3,
																enforceMaxLength : 3,
																minValue : 0,
																maxValue : 100,
																hideTrigger : true,
																name : 'closeProbability',
																id : 'closeProbability'
															},
															{
																xtype : 'numberfield',
																anchor : '90%',
																fieldLabel : 'Estimated value',
																style : 'margin-left:60px',
																// keyNavEnabled:
																// false,
																// mouseWheelEnabled:
																// false,
																maxLength : 10,
																maxLength : 10,
																enforceMaxLength : 10,
																minValue : 0,
																hideTrigger : true,
																name : 'estimatedValue',
																id : 'estimatedValue'
															},

															{
																xtype : 'datefield',
																anchor : '90%',
																fieldLabel : 'Estimated close date',
																style : 'margin-left:60px',
																name : 'estimatedCloseDate',
																id : 'estimatedCloseDate'
															},
															{
																xtype : 'combobox',
																fieldLabel : 'Status',
																anchor : '90%',
																style : 'margin-left:60px',
																allowBlank : false,
																// vtype :
																// 'alpha',
																name : 'pricingStatus',
																id : 'pricingStatus',
																store : statusListStore,
																displayField : 'listValueDescription',
																valueField : 'listValue',
																listeners : {
																	change : function(
																			combo,
																			newValue,
																			oldValue) {
																		var value_index = statusListStore
																				.find(
																						'listValue',
																						newValue);
																		var record = statusListStore
																				.getAt(value_index);
																		Ext
																				.getCmp(
																						'opportunityStatusId')
																				.setValue(
																						record
																								.get("listValueId"));
																	}
																}
															},
															{
																xtype : 'textfield',
																hidden : true,
																name : 'opportunityStatusId',
																id : 'opportunityStatusId'
															},

													]
												} /*
													 * { xtype :
													 * 'fieldcontainer', layout :
													 * 'hbox', items : [ { xtype :
													 * 'numberfield', anchor :
													 * '90%', fieldLabel :
													 * 'Sales commission',
													 * maxLength : 15,
													 * enforceMaxLength : 15,
													 * hideTrigger: true, name :
													 * 'compaddr2' }, ] }
													 */]
									},
									{
										xtype : 'fieldset',
										title : 'Shipping info',
										style : 'margin-top:10px',
										width : '100%',
										border : false,
										collapsible : true,

										items : [ {
											xtype : 'fieldcontainer',
											layout : 'hbox',
											items : [
													{
														xtype : 'combobox',
														anchor : '90%',
														fieldLabel : 'Shipping method',
														allowBlank : false,
														// maxLength : 50,
														// enforceMaxLength :
														// 50,
														name : 'shippingMethod',
														id : 'shippingMethod',
														store : shippingMethodListStore,
														displayField : 'listValueDescription',
														valueField : 'listValue',
														listeners : {
															change : function(
																	combo,
																	newValue,
																	oldValue) {
																var value_index = priorityListStore
																		.find(
																				'listValue',
																				newValue);
																var record = priorityListStore
																		.getAt(value_index);
																Ext
																		.getCmp(
																				'opportunityShippingMethod')
																		.setValue(
																				record
																						.get("listValueId"));
															}
														}
													},
													{
														xtype : 'textfield',
														hidden : true,
														name : 'opportunityShippingMethod',
														id : 'opportunityShippingMethod'
													},
													{
														xtype : 'textfield',
														hidden : true,
														name : 'shippingMethodId',
														id : 'shippingMethodId'
													},
													{
														xtype : 'textfield',
														fieldLabel : 'Shipping instructions',
														maxLength : 25,
														enforceMaxLength : 25,
														style : 'margin-left:60px',
														name : 'shippingInstructions',
														id : 'shippingInstructions',
														anchor : '90%'

													},

													{
														xtype : 'textfield',
														fieldLabel : ' Carrier',
														maxLength : 10,
														enforceMaxLength : 10,
														style : 'margin-left:60px',
														anchor : '90%',
														name : 'carrier',
														id : 'carrier'
													}, /*
														 * { xtype : 'combobox',
														 * fieldLabel :
														 * 'Discount', vtype :
														 * 'alpha', maxLength :
														 * 50, enforceMaxLength :
														 * 50, style :
														 * 'margin-left:60px',
														 * name : 'discount',
														 * anchor : '90%',
														 * emptyText : 'Select a
														 * Discount...'
														 *  },
														 */

											]
										} ]
									}, {
										xtype : 'container',
										title : 'Description',
										style : 'margin-top:10px',
										width : '100%',
										border : false,
										collapsible : true,

										items : [ {
											xtype : 'container',
											layout : 'anchor',
											items : [ {
												xtype : 'textarea',
												anchor : '98%',
												fieldLabel : 'Notes',
												style : 'margin-left:7px',
												name : 'remarks',
												id : 'remarks'
											/* allowBlank : false */
											},

											]
										}, ]
									},

							]
						} ],

						buttons : [
								{
									text : 'Save',
									handler : function() {
										var form = formPanel.getForm();
										if (form.isValid()) {
//											var str = "";
//											if (opportunityvalue != "0") {
//												str = "?opportunityvalue="
//														+ opportunityvalue;
//											}
											form
													.submit({
														url : basePath+'crm/opportunity/saveOpportunityDetails?opportunityId='
																+ opportunityId
																+ "&moduleName="
																+ moduleName,
														method : 'POST',
														scope : this,
														waitMsg : 'Loading...',
														success : function(f, a) {
															Ext.MessageBox
																	.show({
																		title : 'Save Data',
																		msg : a.result.message,
																		buttons : Ext.MessageBox.OK,
																		fn : function(
																				f1,
																				a1) {
																			location.href = basePath
																					+ 'crm/opportunity/createditOpportunity.htm?opportunityId='
																					+ a.result.obj.opportunityId
																					+ "&moduleName="
																					+ moduleName;
																		}
																	});
															// Ext.Msg.alert('Save
															// Data',
															// a.result.message,6000
															// );
															// location.href =
															// basePath
															// +'crm/opportunity/createditOpportunity.htm?opportunityId='
															// +
															// a.result.obj.opportunityId+"&moduleName="+moduleName;

														},
														failure : function(f, a) {
														}

													});

										}

									}
								}, /*
									 * { text : 'Update', formBind : true,
									 * disabled : true,
									 * 
									 * handler: function(){
									 * formPanel.getForm().load({ url:
									 * 'acc-form-data.json', waitMsg:
									 * 'Loading...' }); }
									 *  },
									 */{
									text : 'Cancel',

									handler : function() {
										window.close();
									}

								} ]
					});
			if (accountId != null && opportunityId != "" && accountId != "") {
				storeAccountContact.load({
					params : {
						oppoAccountId : accountId
					}
				});
				storeLeadName.load({
					params : {
						oppoAccountId : accountId
					}
				});
				salesRepListStore.load({
					params : {
						oppoAccountId : accountId
					}
				});
			}
			if (opportunityNumber != null && opportunityNumber != "") {
				formPanel
						.getForm()
						.load(
								{
									id : 'opportunityId',
									// waitMsg : 'Loading...',
									url : basePath
											+ 'crm/opportunity/'
											+ opportunityId
											+ '/editOpportunityForm.json?opportunityNumber='
											+ opportunityNumber,
									method : 'GET',
										waitMsg : 'Loading...'
								});
			}
		});
