//var equipmentInfoRow = -1;
//var categoryList;
//var productList;
var efProductDropdownList = new Array();
var efProductCatEditor;
var efProductDDLCtrl;
var productList = new Array();
var productDDLAdapter;
var productDDLSource;
var productUrl;
var toggleFlag = 0;
var updateFlag = false;
var emptyProductListFlag = true;
var efSource;
//var efSupplierProduct;
var eiCurEditedCol;
var editCellEvent;
var editFlag=false;
$(document).ready(function () {
    var theme = getDemoTheme();

    function updateEquipInfoRec(){
    	
    } 
    
    var productCategoryDropDownListSource =
    {
        datatype: "json",
        datafields: [
                     { name: 'productCategory', type: 'string' },
                     { name: 'productCategoryId'}
        ],
        id: 'productCategoryId',
        url: basePath + "salesOrder/" + soId + "/orderFormProductCategories.json"
    };
    var productCatDDLAdapter = new $.jqx.dataAdapter(productCategoryDropDownListSource, { autoBind: true, async: false, 
    	loadComplete : function(data) {
//    		source.productCategories = data;
        }
	});
    

    var produtSubCategoryUrl = basePath + 'salesOrder/emptyArray.json';
    var productSubCatDDLSource =
    {
        datatype: "json",
        datafields: [
             { name: 'productSubCategoryName', type: 'string' },
             { name: 'productSubCategoryId'}
        ],
    	id: 'productSubCategoryId',
        url: basePath + 'salesOrder/emptyArray.json'
    };

    var productSubCatDDLAdapter = new $.jqx.dataAdapter(productSubCatDDLSource, { autoBind: false, async: false, 
    	loadComplete : function(records) {
        }
	});
   
    var productDDLSource =
    {
        datatype: "json",
        datafields: [
             { name: 'productName', type: 'string' },
             { name: 'productId'}
        ],
    	id: 'productId',
    	url: basePath + 'salesOrder/emptyArray.json'
    };

    var productDDLAdapter = new $.jqx.dataAdapter(productDDLSource, { autoBind: false, async: false, 
    	loadComplete : function(records) {
        }
	});
   
    var supplierProductDDLSource =
    {
        datatype: "json",
        datafields: [
             { name: 'supplierName',  map : 'contact>contactName', type: 'string' },
             { name: 'supplierProductName', type: 'string' },
             { name: 'supplierProductNumber', type: 'string' },
             { name: 'supplierProductRetailPrice', type: 'number' },
             { name: 'supplierProductId'}
        ],
    	id: 'supplierProductId',
        url: basePath + 'salesOrder/emptyArray.json'
    };
    var supplierProductDDLAdapter = new $.jqx.dataAdapter(supplierProductDDLSource, { autoBind: false, async: false, 
    	loadComplete : function(records) {
    		supplierProductDDLSource.custRecords = records;
        }
	});
   
    var chargeTypeDDLSource =
    {
        datatype: "json",
        datafields: [
             { name: 'listValueDescription', type: 'string' },
             { name: 'listValueId'}
        ],
        url: basePath + "salesOrder/chargeType.json"
    };

    var chargeTypeDDLAdapter = new $.jqx.dataAdapter(chargeTypeDDLSource, { autoBind: true, async: false});
    
    efSource =
    {
        datatype: "json",
		url : basePath + "salesOrder/" + soId + "/equipmentInfoRecords",
        datafields:
        [
//			{ name: 'updateFlag', map : 'product>productCategory>productCategory', type: 'bool' },
            { name: 'salesOrderProductDetailId'},
            { name: 'tickForMaintenance', type: 'bool' },
			{ name: 'productCategory', map : 'product>productCategory>productCategory', type: 'string' },
			{ name: 'productCategoryId', map : 'product>productCategory>productCategoryId', text: 'productCategory', id: 'productCategoryId', source: productCatDDLAdapter.records },			
			{ name: 'productSubCategoryName', map : 'product>productSubCategory>productSubCategoryName', type: 'string' }, 
			{ name: 'productSubCategoryId', map : 'product>productSubCategory>productSubCategoryId'/*, type: 'string'*/ },
            { name: 'productName', map: 'product>productName', type: 'string' },
            { name: 'productId', map : 'product>productId', text: 'productName'/*, id: 'productId', source: productDDLAdapter.records*/ },
            { name: 'productName', map: 'product>productName', type: 'string' },
            { name: 'supplierProductName', map: 'supplierProduct>supplierProductName', type: 'string' },
            { name: 'supplierProductId', map: 'supplierProduct>supplierProductId'/*, text: 'supplierProductName', id: 'productId', source: productDDLAdapter.records*/ },
            { name: 'supplierName', map: 'supplierProduct>contact>contactName', type: 'string' },
            { name: 'installLocation', type: 'string' },
            { name: 'supplierProductNumber', map: 'supplierProduct>supplierProductNumber', type: 'string' },
            { name: 'supplierProductDescription', map: 'supplierProduct>supplierProductDescription', type: 'string' },
            { name: 'supplierProductRetailPrice', map: 'supplierProduct>supplierProductRetailPrice', type: 'string' },
            { name: 'remarks', type: 'string' },
            { name: 'soChargeTypeId', map : 'lvsoChargeType>listValueId'},
            { name: 'soChargeTypeName', map: 'lvsoChargeType>listValueDescription', type: 'string' },
             { name: 'salesOrderProductQty', type: 'number' },
			 { name: 'salesOrderProductRate', type: 'number' },
             { name: 'total', type: 'number' },
             { name: 'salesOrderProductDiscount', type: 'number' },
             { name: 'discountAmount', type: 'number' },
             { name: 'trade', type: 'number' },
        ],
        id: 'salesOrderProductDetailId'
    };
    
	var efDataAdapter = new $.jqx.dataAdapter(efSource, { autoBind: true, async: false,
		loadComplete: function (data)
		{
			efSource.custRecords = data;
//				source.salesOrderId = soId;
		},
		loadError: function (xhr, status, error)
		{
		// data is not loaded.
		}
		});

    // initialize jqxGrid
    $("#equipInfoGrid").jqxGrid(
    {
        width: '99.8%',
        columnsresize:true,
        source: efDataAdapter,
		selectionmode : 'singlerow',
          theme: theme,
		 sortable:true,
        autoheight: false,
		pageable:true,
		autoheight:true,
        statusbarheight: 35,
        altrows: true,
        showaggregates: false,
		showstatusbar: true,
		columns: [
		  { text: 'salesOrderProductDetailId', editable: false, datafield: 'salesOrderProductDetailId', hidden:true, columntype:"textbox", width: '15%'},
		  { text: 'Tick for Maintenance', editable: false, datafield: 'tickForMaintenance', columntype:"checkbox", menu: false,  width: '7%' },
          { text: 'Quantity', editable: false, datafield: 'salesOrderProductQty', columntype:"textbox",  width: '10%'},
		  { text: 'Product Category', editable: false, datafield: 'productCategoryId', displayfield: 'productCategory', columntype:"dropdownlist",  width: '15%'},
		  { text: 'Product Subcategory', editable: false, datafield: 'productSubCategoryId', displayfield: 'productSubCategoryName', columntype:"dropdownlist",  width: '15%'},
		  { text: 'Product', editable: false, datafield: 'productId', displayfield: 'productName', columntype:"dropdownlist",  width: '15%'},
		  { text: 'Charge Type', editable: false, datafield: 'soChargeTypeId', displayfield: 'soChargeTypeName', columntype:"dropdownlist",  width: '15%'},
		  { text: 'Installation Postcode', editable: false, datafield: 'installLocation', columntype:"textbox",  width: '15%'},
		  { text: 'SupplierName', editable: false, datafield: 'supplierName', hidden:true, columntype:"textbox", width: '15%'}, 
		  { text: 'SupplierProduct', editable: false, datafield: 'supplierProductName', hidden:true, columntype:"textbox",  width: '15%'}, 
		  { text: 'Part Number', editable: false, datafield: 'supplierProductNumber',  hidden:true, columntype:"textbox",  width: '15%' },
		  { text: 'Supplier - Product(Part Number)', editable: false,  datafield: 'supplierProductId', displayfield: 'supplierName', 
			  columntype:"dropdownlist",  width: '15%',
			  cellsrenderer:function (row, column, value) {
		    	  var supplierName = $('#equipInfoGrid').jqxGrid('getcellvalue', row, "supplierName");
		    	  var supplierProductName = $('#equipInfoGrid').jqxGrid('getcellvalue', row, "supplierProductName");
		    	  var supplierProductNumber = $('#equipInfoGrid').jqxGrid('getcellvalue', row, "supplierProductNumber");
		    	  
		    	  if(supplierName===undefined){
		    		  return "";
		    	  }
		    	  var supProdNum = supplierName + " - " + supplierProductName + "(" + supplierProductNumber + ")"
		    	  
				  if (supProdNum == "-()")  supProdNum ="";
		    	  
		    	  return supProdNum;
			  }
		  },
		  { text: 'Description', editable: false, datafield: 'supplierProductDescription', columntype:"textbox",  width: '20%' },
		  { text: 'Supplier Retail Price', editable: false, datafield: 'supplierProductRetailPrice', columntype:"textbox",  width: '15%'}, 
		  { text: 'Total', editable: false, datafield: 'total', columntype:"textbox",  width: '15%'},
		  { text: 'Discount %', editable: false, datafield: 'salesOrderProductDiscount', /*columngroup: 'Discount', */columntype:"textbox", width: '15%'},
		  { text: 'Discount Amount', editable: false, datafield: 'discountAmount', /*columngroup: 'Discount', */columntype:"textbox", width: '15%'},
		  { text: 'Trade', editable: false, datafield: 'trade', columntype:"textbox", width: '15%'},
		  
		  ],
		
		renderstatusbar: function (statusbar) {
            // appends buttons to the status bar.
            var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
            var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
           /* var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='jqgrid/images/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
            var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
            container.append(addButton);
           /* container.append(deleteButton);*/
					container.append(editButton);
            
            statusbar.append(container);
            addButton.jqxButton({ theme: theme, width: 60, height: 20});
           /* deleteButton.jqxButton({ theme: theme, width: 65, height: 20});*/
					editButton.jqxButton({ theme: theme, width: 65, height: 20 });
            
            // add new row.
            addButton.click(function (event) {
            	editFlag=false;
                        var offset = $("#equipInfoGrid").offset();

                        $("#equipInfoWindow").jqxWindow('open');
                        $("#equipInfoWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
                        refreshDialogDDLs(-1,-1,-1,-1);
                		$('#salesOrderProductQty').jqxNumberInput('clear');
                		$("#chargeTypeDDL").jqxDropDownList('clearSelection');        	
                		$('#installLocation').val("");        		
                		$('#salesOrderProductDiscount').jqxNumberInput('clear');	
            			$("#tickForMaintenance").jqxCheckBox('val', false);
                    });
		editButton.click(function (event) {
            			openDialogForEdit();
                    });
                },
				
            });

            // create context menu
            var contextMenu = $("#EquipMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

            $("#equipInfoGrid").on('contextmenu', function () {
                return false;
            });

            // handle context menu clicks.
            $("#EquipMenu").on('itemclick', function (event) {
/*            	editFlag=true;
            	var offset = $("#equipInfoGrid").offset();
                $("#equipInfoWindow").jqxWindow('open');
                $("#equipInfoWindow").jqxWindow('move', offset.left + 30, offset.top + 30);*/
    			openDialogForEdit();
            });

            $("#equipInfoGrid").on('rowclick', function (event) {
                if (event.args.rightclick) {
                    $("#equipInfoGrid").jqxGrid('selectrow', event.args.rowindex);
                    var scrollTop = $(window).scrollTop();
                    var scrollLeft = $(window).scrollLeft();
                    contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                    return false;
                }
            });

            // create jqxWindow.
            $("#equipInfoWindow").jqxWindow({ resizable: false, isModal:true, modalOpacity:0.7, theme: 'shinyblack', autoOpen: false, width: 800, height: 370 });
            $("#equipFormPanel").jqxPanel({ width: 787, height: 280, sizeMode:'fixed'});
            $("#productCatDDL").jqxDropDownList({
            	scrollBarSize:20,
            	width : 200,
        		theme : theme,
        		displayMember : 'productCategory',
        		valueMember : 'productCategoryId',
        		source : productCatDDLAdapter
        	});
           
            $("#productSubCatDDL").jqxDropDownList({
        		width : 200,
        		scrollBarSize:20,
        		theme : theme,
        		displayMember : 'productSubCategoryName',
        		valueMember : 'productSubCategoryId',
        		source : productSubCatDDLAdapter
            });
            $("#productDDL").jqxDropDownList({
            	width : 200,
        		scrollBarSize:5,
        		theme : theme,
        		displayMember : 'productName',
        		valueMember : 'productId',
        		source : productDDLAdapter
//        		selectedIndex : 'productId'
        	});
            $("#supplierProductDDL").jqxDropDownList({
            	width : 200,
            	autoDropDownHeight: true,
        		theme : theme,
        		displayMember : 'supplierProductName',
        		valueMember : 'supplierProductId',
        		source : supplierProductDDLAdapter,
                /*renderer: function (index, label, value) {
                	if(index && (index >= 0)){
                    	return supplierProductDDLSource.custRecords[index].contact.contactName 
                		+ " - " + supplierProductDDLSource.custRecords[index].supplierProductName
                		+ "(" + supplierProductDDLSource.custRecords[index].supplierProductNumber + ")";
                	}else{
                		return "";
                	}
                }*/					  
        	});
            $("#chargeTypeDDL").jqxDropDownList({
            	width : 200,
            	autoDropDownHeight: true,
        		theme : theme,
        		displayMember : 'listValueDescription',
        		valueMember : 'listValueId',
        		source : chargeTypeDDLAdapter
        	});
            
            $("#installLocation").jqxInput({ width: '200px', height: '25px', theme: theme});
            $("#salesOrderProductQty").jqxNumberInput({ width: '200px', height: '25px', theme: theme, spinButtons: false, inputMode: 'simple'});
            $("#salesOrderProductDiscount").jqxNumberInput({ width: '200px', height: '25px', theme: theme, spinButtons: false, inputMode: 'simple'});
            $("#tickForMaintenance").jqxCheckBox({ width: 120, height: 25/*, vertical-align:middle*/ });
            $("#cancelBtn").jqxButton({ theme: theme, width:100 });
            $("#saveBtn").jqxButton({ theme: theme, width:100 });
            
            $("#productCatDDL").on('select', function (event) {
            	var pcId = $('#productCatDDL').jqxDropDownList('getSelectedItem').value;
            	
        		$("#productSubCatDDL").jqxDropDownList('clearSelection');
        		$("#productDDL").jqxDropDownList('clearSelection');
        		$("#supplierProductDDL").jqxDropDownList('clearSelection');
            	if(pcId > 0){
            		productSubCatDDLSource.url = basePath + 'salesOrder/' + soId + '/productCategory/' + pcId + '/orderFormProductSubcategories.json';            	
            		productSubCatDDLAdapter.dataBind();
        			productDDLSource.url = basePath +'salesOrder/emptyArray.json';
        			productDDLAdapter.dataBind();
        			supplierProductDDLSource.url = basePath +'salesOrder/emptyArray.json';
        			supplierProductDDLAdapter.dataBind();
            	}
            });
            
            $("#productSubCatDDL").on('select', function (event) {
            	var pcId = $('#productCatDDL').jqxDropDownList('getSelectedItem').value;
            	var pscId = $('#productSubCatDDL').jqxDropDownList('getSelectedItem').value;
        		$("#productDDL").jqxDropDownList('clearSelection');
        		$("#supplierProductDDL").jqxDropDownList('clearSelection');
            	if(pscId > 0){
            		$("#productDDL").jqxDropDownList('clearSelection');
            		productDDLSource.url = basePath + 'salesOrder/' + soId + '/productCategory/' + pcId + '/productSubCategory/' + pscId + '/orderFormProducts.json';
            		productDDLAdapter.dataBind();
        			supplierProductDDLSource.url = basePath +'salesOrder/emptyArray.json';
        			supplierProductDDLAdapter.dataBind();
            	}
            });
            
            $("#productDDL").on('select', function (event) {
        		$("#supplierProductDDL").jqxDropDownList('clearSelection');
        		var prodId = $('#productDDL').jqxDropDownList('getSelectedItem').value;
    			 if(prodId > 0){
			    	 supplierProductDDLSource.url = basePath + "salesOrder/product/" + prodId + "/supplierProducts.json";
			    	 supplierProductDDLAdapter.dataBind();
		    	 }
        			
        	});
            
            $('#saveBtn').click(function () {
        		if(!$('#equipInfoForm').jqxValidator('validate')){
        			return;
        		};
        		
        		var equipFormObj = new Object();
        		
        		var pcItem = $('#productCatDDL').jqxDropDownList('getSelectedItem');	
        		equipFormObj.productCategoryId = pcItem.value;
        		        	
        		var pscItem = $('#productSubCatDDL').jqxDropDownList('getSelectedItem');
        		equipFormObj.productSubCategoryId = pscItem.value;
        		
        		var prodItem = $('#productDDL').jqxDropDownList('getSelectedItem');		
        		equipFormObj.productId = prodItem.value;		
        		 
        		equipFormObj.salesOrderProductQty = $('#salesOrderProductQty').val();		
        		  				
        		var chargeType = $('#chargeTypeDDL').jqxDropDownList('getSelectedItem');		
        		equipFormObj.soChargeTypeId= chargeType.value;
        		
        		var supplierItem = $('#supplierProductDDL').jqxDropDownList('getSelectedItem');
        		if(supplierItem)
        			equipFormObj.supplierProductId = supplierItem.value;
        		else
        			equipFormObj.supplierProductId = -1;
        		
        		equipFormObj.installLocation = $('#installLocation').val();
        		equipFormObj.salesOrderProductDiscount = $('#salesOrderProductDiscount').val();
        		equipFormObj.tickForMaintenance = $('#tickForMaintenance').val();
        		
        		if(equipFormObj.tickForMaintenance && (equipFormObj.tickForMaintenance == true)){
					$('#sotabsmenu').jqxTabs('enableAt', maintenanceMenuIndex);				
        		}
        		
        		if(editFlag == false){
        		$.ajax({
        			  url: basePath + 'salesOrder/' + soId + '/equipmentInfo/create',
        			  type: 'POST',
        			  data: JSON.stringify(equipFormObj),
        			  contentType: 'application/json; charset=utf-8',
        			  dataType: 'json',
        			  async:false
        		  }).done(function( data ) {
        		  });
        		}else{
        			var rowindex = $('#equipInfoGrid').jqxGrid('getselectedrowindex');
        			var data = $('#equipInfoGrid').jqxGrid('getrowdata', rowindex);
        			var soProdId = data.salesOrderProductDetailId;
         		$.ajax({
        			  url: basePath + 'salesOrder/equipmentInfo/' + soProdId + '/update',
        			  type: 'POST',
        			  data: JSON.stringify(equipFormObj),
        			  contentType: 'application/json; charset=utf-8',
        			  dataType: 'json',
        			  async:false
        		  }).done(function( data ) {
        		  });
        	
        		}
        		//alert("Data saved");
        		
        		$('#equipInfoWindow').jqxWindow('close');
        		
        		$('#equipInfoGrid').jqxGrid('updatebounddata');
        		
        	});
        	$('#cancelBtn').click(function () {
        		$('#equipInfoWindow').jqxWindow('close');
        	});

		    $('#equipInfoForm').jqxValidator({hintType : 'label',
			rules : [{input : '#productCatDDL',
				message : 'Product Category is not selected.',
				action : 'select',
				rule : function(input) {

					return ($("#productCatDDL").jqxDropDownList('selectedIndex') >= 0)
				}},
				{input : '#productSubCatDDL',
					message : 'Product Sub-Category is not selected.',
					action : 'select',
					rule : function(input) {

						return ($("#productSubCatDDL").jqxDropDownList('selectedIndex') >= 0)
					}},
				{input : '#productDDL',message : 'Product is not selected.',action : 'select',rule : function(input) {

					return ($("#productDDL").jqxDropDownList('selectedIndex') >= 0)
				}},
				{input : '#chargeTypeDDL',
					message : 'Charge type is not selected.',
					action : 'select',
					rule : function(input) {

						return ($("#chargeTypeDDL").jqxDropDownList('selectedIndex') >= 0)
					}}]});
        	                                                        	
			

		function openDialogForEdit() {
			editFlag = true;
			var rowIndex = $("#equipInfoGrid").jqxGrid('selectedrowindex');
			if (rowIndex < 0){
				return;
			}

            var offset = $("#equipInfoGrid").offset();
            $("#equipInfoWindow").jqxWindow('open');
            $("#equipInfoWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

            var row = $("#equipInfoGrid").jqxGrid('getrowdata', rowIndex);

    		$("#installLocation").jqxInput('val', $("#equipInfoGrid").jqxGrid('getcellvalue', row, "installLocation"));
    		$("#salesOrderProductQty").jqxNumberInput('val', $("#equipInfoGrid").jqxGrid('getcellvalue', row, "salesOrderProductQty"));
    		$("#salesOrderProductDiscount").jqxNumberInput('val', $("#equipInfoGrid").jqxGrid('getcellvalue', row, "salesOrderProductDiscount"));
    			
			var prodCatId = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "productCategoryId");
			var prodSubCatId = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "productSubCategoryId");
			var prodId = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "productId");
			var supplierProdId = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "supplierProductId");

			refreshDialogDDLs(prodCatId, prodSubCatId, prodId, supplierProdId);

			var chargeId = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "soChargeTypeId");
			$("#chargeTypeDDL").jqxDropDownList('val', chargeId);
			
			var tickForMaintenance = $("#equipInfoGrid").jqxGrid('getcellvalue', row, "tickForMaintenance");
			$("#tickForMaintenance").jqxCheckBox('val', tickForMaintenance);
			
		}

		function refreshDialogDDLs(prodCatId, prodSubCatId, prodId, supplierProdId) {

			$("#productCatDDL").jqxDropDownList('clearSelection');
			$("#productSubCatDDL").jqxDropDownList('clearSelection');
			$("#productDDL").jqxDropDownList('clearSelection');
			$("#supplierProductDDL").jqxDropDownList('clearSelection');

			if (prodCatId && (prodCatId > 0)){
				$("#productCatDDL").jqxDropDownList('val', prodCatId);
				productSubCatDDLSource.url = basePath + 'salesOrder/productSubCategories.json?id=' + prodCatId;
				productSubCatDDLAdapter.dataBind();
			}else{
				productSubCatDDLSource.url = basePath + 'salesOrder/emptyArray.json';
				productSubCatDDLAdapter.dataBind();
			}

			if (prodSubCatId && (prodSubCatId > 0)){
				$("#productSubCatDDL").jqxDropDownList('val', prodSubCatId);
				productDDLSource.url = basePath + 'salesOrder/productsByProdSubCat.json?productSubCatId='
					+ prodSubCatId;
				productDDLAdapter.dataBind();
			}else{
				productDDLSource.url = basePath + 'salesOrder/emptyArray.json';
				productDDLAdapter.dataBind();
			}

			if (prodId && (prodId > 0)){
				$("#productDDL").jqxDropDownList('val', prodId);
		    	 supplierProductDDLSource.url = basePath + "salesOrder/product/" + prodId + "/supplierProducts.json";
		    	 supplierProductDDLAdapter.dataBind();
			}else{
	    		supplierProductDDLSource.url = basePath + 'salesOrder/emptyArray.json';
	    		supplierProductDDLAdapter.dataBind();
			}
			
			if (supplierProdId && (supplierProdId > 0)){
				$("#supplierProductDDL").jqxDropDownList('val', supplierProdId);
			}			

		}

});
