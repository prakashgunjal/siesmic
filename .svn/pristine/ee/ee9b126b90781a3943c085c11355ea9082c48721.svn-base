var productDDLSource;
var productDDLAdapter;
var editFlag = false;

$(document).ready(function () {
    var theme = getDemoTheme();

    var source =
    {
        datatype: "json",
		url : basePath + "salesOrder/" + soId + "/orderFormRecords.json",
        datafields:
        [
			{ name: 'productCategory', map : 'productCategory>productCategory', type: 'string' },
			{ name: 'productCategoryId', map : 'productCategory>productCategoryId', type: 'string' },			
			{ name: 'productSubCategoryName',map : 'productSubCategory>productSubCategoryName', type: 'string' }, 
			{ name: 'productSubCategoryId',map : 'productSubCategory>productSubCategoryId', type: 'string' },
             { name: 'productName', map: 'product>productName', type: 'string' },
             { name: 'productId', map: 'product>productId', type: 'string' },
             { name: 'salesOrderProductDetailId', type: 'number' },
             { name: 'salesOrderDescription', type: 'string' },
             { name: 'additionalInformation', type: 'string' },
             { name: 'installLocation', type: 'string' },
             { name: 'salesOrderProductQty', type: 'number' },
			 { name: 'salesOrderProductRate', type: 'number' },
             { name: 'totalOrder', type: 'number' },
             { name: 'soChargeTypeId', map : 'lvsoChargeType>listValueId'},
             { name: 'soChargeTypeName', map: 'lvsoChargeType>listValueDescription', type: 'string' }           
        ],
        id: 'salesOrderProductDetailId',
        addrow: function (rowid, rowdata, position, commit) {
            position = 0;
            rowdata.salesOrderProductQty = 0;
            rowdata.salesOrderProductRate = 0;
            rowdata.soDescription = null;
            rowdata.additionalInformation = null;
            rowdata.installLocation = null;
            
            commit(true);
        },
        updaterow: function (rowid, rowdata, commit) {
        	
        	for(var i=0;i<source.productCategories.length;i++){
        		if(source.productCategories[i].productCategory == rowdata.productCategory){
           			rowdata.productCategoryId = source.productCategories[i].productCategoryId;
           			break;
           		}
        	}
        	if(typeof rowdata.productCategoryId === "undefined"){
           		rowdata.productCategoryId = -1;
           	}
        	for(var i=0;i<source.productSubCategories.length;i++){
        		if(source.productSubCategories[i].productSubCategoryName == rowdata.productSubCategoryName){
           			rowdata.productSubCategoryId = source.productSubCategories[i].productSubCategoryId;
           			break;
           		}
        	}
        	if(typeof rowdata.productSubCategoryId === "undefined"){
           		rowdata.productSubCategoryId = -1;
           	}
        	
           	for (var i=0;i<source.products.length;i++)
           	{
           		if(source.products[i].productName == rowdata.productName){
           			rowdata.productId = source.products[i].productId;
           			break;
           		}
           	}
           	
           	if(typeof rowdata.productId === "undefined"){
           		rowdata.productId = -1;
           	}
            
           	for (var i=0;i<source.chargeType.length;i++)
           	{
           		if(source.chargeType[i].soChargeTypeName == rowdata.soChargeTypeName){
           			rowdata.soChargeTypeId = source.chargeType[i].soChargeTypeId;
           			break;
           		}
           	}
           	
           	if(typeof rowdata.soChargeTypeId === "undefined"){
           		rowdata.soChargeTypeId = -1;
           	}
            
            if(!(typeof rowdata.salesOrderProductDetailId === "undefined") && (rowdata.salesOrderProductDetailId >= 0)){
            	var jqxhr = $.post(basePath + "salesOrder/productDetails/" + rowdata.salesOrderProductDetailId + "/updateOrderForm", rowdata, function(data) {
					rowdata.totalOrder = data.totalOrder;
				})
				.success(function() { 
					$('#orderFormGrid').jqxGrid('refreshdata');
					commit(true);
				})
				.fail(function() { commit(false); });
            }
            else{
					var jqxhr = $.post(basePath + "salesOrder/" + soId + "/orderForm/createOrder/", rowdata, function(data) {
					rowdata.salesOrderProductDetailId = data.salesOrderProductDetailId;
					commit(true);
				})
				.fail(function() { commit(false); });                
            }
        }
    };
	var dataAdapter = new $.jqx.dataAdapter(source, {
		loadComplete: function (data)
		{
				source.sourceData = data;
				source.salesOrderId = salesOrderId;
		},
		loadError: function (xhr, status, error)
		{
		// data is not loaded.
		}
		});
	var columnCheckBox = null;
	var updatingCheckState = false;

    var dataAdapter = new $.jqx.dataAdapter(source);
    var editrow = -1;

     var productCategoryDDLSource =
    {
        datatype: "json",
        datafields: [
                     { name: 'productCategory', type: 'string' },
                     { name: 'productCategoryId'}
        ],
        url:basePath + 'salesOrder/productCategories.json'
    };
    var productCategoryDDLAdapter = new $.jqx.dataAdapter(productCategoryDDLSource, { autoBind: true, async: false, 
    	loadComplete : function(data) {
    		source.productCategories = data;
        }
	});
    
    var produtSubCategoryUrl = basePath + 'salesOrder/emptyArray.json';
    var productSubCategoryDDLSource =
    {
        datatype: "json",
        datafields: [
                     { name: 'productSubCategoryName', type: 'string' },
                     { name: 'productSubCategoryId' }
        ], 
        
        url: produtSubCategoryUrl
    };
    var productsubCategoryDDLAdapter = new $.jqx.dataAdapter(productSubCategoryDDLSource, { autoBind: false, async: false, 
    	loadComplete : function(data) {
    		source.productSubCategories = data;
        },
 	});
   
    productUrl = basePath + 'salesOrder/emptyArray.json';
    var productDDLSource =
    {
        datatype: "json",
        datafields: [
             { name: 'productName', type: 'string' },
             { name: 'productId' }
        ],
//        id: 'productId',
        url: productUrl
        	
    };
    var productDDLAdapter = new $.jqx.dataAdapter(productDDLSource, { autoBind: false, async: false, 
    	loadComplete : function(data) {
			source.products = data;
        }
	});

  
    var chargeTypeSource =
    {
        datatype: "json",
        datafields: [
             { name: 'listValueDescription', type: 'string' },
             { name: 'listValueId' }
        ],
        /*id: 'listValueId',*/
        url: basePath + "salesOrder/chargeType.json"
    };
    var chargeTypeAdapter = new $.jqx.dataAdapter(chargeTypeSource, { autoBind: true, async: false, 
    	loadComplete : function(data) {
			source.chargeType = data;
        }
	});
    
    var tooltiprenderer = function (element) {
        $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
    }

    // initialize jqxGrid
    $("#orderFormGrid").jqxGrid(
    {
        width: '99.8%',
        source: dataAdapter,       
        theme: theme,
        showfilterrow: true,
        filterable: true,
        pageable: true,
        sortable: true,
        columnsresize: true,
        autoheight: true,
        altrows: true,
        showstatusbar: true,
         columns: [	
					{ text: 'Product Category', editable: false, datafield: 'productCategoryId', displayfield: 'productCategory',  width: 180, rendered: tooltiprenderer
						
					},				
					{ text: 'Product Sub Category', editable: false, datafield: 'productSubCategoryId', displayfield: 'productSubCategoryName',  width: 180 , rendered: tooltiprenderer
					
					},
					
					{ text: 'Product', editable: false, datafield: 'productId', displayfield: 'productName',  width: 180, rendered: tooltiprenderer 
					  },
					
					{ text: 'Description', filtertype: 'none',editable: false, datafield: 'salesOrderDescription',   width: 250, rendered: tooltiprenderer },
					{ text: 'Telephone Number if Existing Line',filtertype: 'none', editable: false,  datafield: 'additionalInformation',  width: 140, rendered: tooltiprenderer},
					{ text: 'Postcode',filtertype: 'none', editable: false,  datafield: 'installLocation',  width: 100, rendered: tooltiprenderer},
					{ text: 'Charge Type',filtertype: 'checkedlist', filteritems: ['One-Off', 'Recurring'],editable: false, datafield: 'soChargeTypeId',displayfield: 'soChargeTypeName',  width: 120, rendered: tooltiprenderer,
					  },
					  { text: 'Quantity', editable: false, datafield: 'salesOrderProductQty',  width: 120, rendered: tooltiprenderer }, 
			  		{ text: 'Unit Cost', editable: false, datafield: 'salesOrderProductRate',  width: 100, rendered: tooltiprenderer },
		  			{ text: 'Total Amount', editable: false, datafield: 'totalOrder', width: 120, rendered: tooltiprenderer}
                ],
		
		renderstatusbar: function (statusbar) {
            var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
            var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
            var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
            
            container.append(addButton);
            container.append(editButton);
            
            statusbar.append(container);
            addButton.jqxButton({ theme: theme, width: 60, height: 20 });
            editButton.jqxButton({ theme: theme, width: 65, height: 20 });
            
            addButton.click(function (event) {
            	editFlag=false;
            	var offset = $("#orderFormGrid").offset();
            	
            	$("#orderFormWindow").jqxWindow('open');           
                $("#orderFormWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

                refreshDialogDDLs(-1,-1,-1);
        		$('#salesOrderProductQty').jqxNumberInput('clear');
        		$('#salesOrderDescription').val("");
        		$('#additionalInformation').val("");
        		$('#installLocation').val("");
        		$("#chargeTypeDDL").jqxDropDownList('clearSelection');
        		$('#salesOrderProductRate').jqxNumberInput('clear');
            });
            editButton.click(function (event) {
    			openDialogForEdit();
            });
        },
		
    });

    var contextMenu = $("#Menu1").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

    $("#orderFormGrid").on('contextmenu', function () {
        return false;
    });

    $("#Menu1").on('itemclick', function (event) {
		if ($.trim($(args).text()) == "Edit Product Detail") {
			openDialogForEdit();
		}
    	
    });

    $("#orderFormGrid").on('rowclick', function (event) {
        if (event.args.rightclick) {
            $("#orderFormGrid").jqxGrid('selectrow', event.args.rowindex);
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

            return false;
        }
    });

    $("#orderFormWindow").jqxWindow({ resizable: false, draggable:false, theme: 'shinyblack', modalOpacity: 0.7, isModal: true, autoOpen: false, width: 800, height: 370});
    $("#orderFormPanel").jqxPanel({ width: 787, height: 280, sizeMode:'wrap'});
    $("#productCategoryDropdownlist").jqxDropDownList({
    	scrollBarSize:20,
    	width : 200,
		theme : theme,
		displayMember : 'productCategory',
		valueMember : 'productCategoryId',
		source : productCategoryDDLAdapter,
		selectedIndex : 'productCategoryId'						
	});
    $("#productSubCategoryDropdownlist").jqxDropDownList({
		width : 200,
		scrollBarSize:20,
		theme : theme,
		displayMember : 'productSubCategoryName',
		valueMember : 'productSubCategoryId',
		source : productsubCategoryDDLAdapter,
		selectedIndex : 'productSubCategoryId'
    });
    $("#productDropdownlist").jqxDropDownList({
    	width : 200,
		scrollBarSize:5,
		theme : theme,
		displayMember : 'productName',
		valueMember : 'productId',
		source : productDDLAdapter,
		selectedIndex : 'productId'
	});
    $("#chargeTypeDDL").jqxDropDownList({
    	width : 200,
    	autoDropDownHeight: true,
		theme : theme,
		displayMember : 'listValueDescription',
		valueMember : 'listValueId',
		source : chargeTypeAdapter,
	});
    
	$("#productCategoryDropdownlist").on('select', function (event) {
		var args = event.args;
		var item = $('#productCategoryDropdownlist').jqxDropDownList('getItem', args.index);
		
		$("#productSubCategoryDropdownlist").jqxDropDownList('clearSelection');
		$("#productDropdownlist").jqxDropDownList('clearSelection');
		var pcId = item.value;
		if(pcId > 0){
			productSubCategoryDDLSource.url = basePath +'salesOrder/productSubCategories.json?id=' + pcId;
			productsubCategoryDDLAdapter.dataBind();
			productDDLSource.url = basePath +'salesOrder/emptyArray.json';
			productDDLAdapter.dataBind();
		}
		
	});
	$("#productSubCategoryDropdownlist").on('select', function (event) {
		var args = event.args;
		var item = $('#productSubCategoryDropdownlist').jqxDropDownList('getItem', args.index);
		
		$("#productDropdownlist").jqxDropDownList('clearSelection');
		var pscId = item.value;
		if(pscId > 0){
			 productDDLSource.url = basePath +'salesOrder/productsByProdSubCat.json?productSubCatId=' + pscId;
	    	 productDDLAdapter.dataBind();
		}
	});
	$("#productDropdownlist").on('select', function (event) {
		var args = event.args;
		var item = $('#productDropdownlist').jqxDropDownList('getItem', args.index);
			var prodId = item.value;	
	});
	 $("#salesOrderProductQty").jqxNumberInput({ width: '200px', height: '25px', theme: theme, spinButtons: false, inputMode: 'simple'});
	 $("#salesOrderProductRate").jqxNumberInput({ width: '200px', height: '25px', theme: theme, spinButtons: false, inputMode: 'simple'});
	 
	 $("#cancelBtn").jqxButton({ width: '100px', theme:theme });
	 $("#saveBtn").jqxButton({ width: '100px', theme:theme });

	 $('#saveBtn').click(function () {
		if(!$('#orderFormForm').jqxValidator('validate')){
			return;
		};
		var orderFormObject = new Object();
			 
		var pcItem = $('#productCategoryDropdownlist').jqxDropDownList('getSelectedItem');	
		orderFormObject.productCategoryId = pcItem.value;
		
	
		var pscItem = $('#productSubCategoryDropdownlist').jqxDropDownList('getSelectedItem');
		orderFormObject.productSubCategoryId = pscItem.value;
		
		var prodItem = $('#productDropdownlist').jqxDropDownList('getSelectedItem');		
		orderFormObject.productId = prodItem.value;		
		 
		orderFormObject.salesOrderProductQty = $('#salesOrderProductQty').val();		
		orderFormObject.salesOrderDescription = $('#salesOrderDescription').val();		
		orderFormObject.additionalInformation = $('#additionalInformation').val();		
		orderFormObject.installLocation = $('#installLocation').val();

		var chargeType = $('#chargeTypeDDL').jqxDropDownList('getSelectedItem');		
		orderFormObject.soChargeTypeId= chargeType.value;
		
		
		orderFormObject.salesOrderProductRate = $('#salesOrderProductRate').val();
		if(editFlag == false){
		$.ajax({
			  url: basePath + 'salesOrder/' + soId + '/orderForm/createOrder',
			  type: 'POST',
			  data: JSON.stringify(orderFormObject),
			  contentType: 'application/json; charset=utf-8',
			  dataType: 'json',
			  async:false
		  }).done(function( data ) {
				$('#sotabsmenu').jqxTabs('enableAt', equipInfoMenuIndex);				
				$('#sotabsmenu').jqxTabs('enableAt', profServiceMenuIndex);				
				$('#sotabsmenu').jqxTabs('enableAt', specMenuIndex);				
				$('#sotabsmenu').jqxTabs('enableAt', chklistMenuIndex);				
		  });
		}else{
			//get the salesorderproductdetail id on click of grid row
			var rowindex = $('#orderFormGrid').jqxGrid('getselectedrowindex');
			var data = $('#orderFormGrid').jqxGrid('getrowdata', rowindex);
			var soProdId = data.salesOrderProductDetailId;
			//get the salesorderproductdetail id on click of grid row till here
 		$.ajax({
			  url: basePath + 'salesOrder/productDetails/' + soProdId + '/updateOrderForm',
			  type: 'POST',
			  data: JSON.stringify(orderFormObject),
			  contentType: 'application/json; charset=utf-8',
			  dataType: 'json',
			  async:false
		  }).done(function( data ) {
		  });
	
		}
		
		$('#orderFormWindow').jqxWindow('close');
		
		$('#orderFormGrid').jqxGrid('updatebounddata');
		
	});
	$('#cancelBtn').click(function () {
		$('#orderFormWindow').jqxWindow('close');
	});

	$('#orderFormForm').jqxValidator( { hintType : 'label', rules: [
		{ input: '#productCategoryDropdownlist', message: 'Product Category is not selected.',
	        action: 'select', rule: function (input) {
	        	return ($("#productCategoryDropdownlist").jqxDropDownList('selectedIndex') >= 0)
	        } 
		},
		{ input: '#productSubCategoryDropdownlist', message: 'Product Sub-Category is not selected.',
	        action: 'select', rule: function (input) {
	        		return ($("#productSubCategoryDropdownlist").jqxDropDownList('selectedIndex') >= 0)
	        	} 
        },
		{ input: '#productDropdownlist', message: 'Product is not selected.',
	        action: 'select', rule: function (input) {
	        	return ($("#productDropdownlist").jqxDropDownList('selectedIndex') >= 0)
	        }
        },
	    { input: '#chargeTypeDDL', message: 'Charge type is not selected.',
	        action: 'select', rule: function (input) {
	        	return ($("#chargeTypeDDL").jqxDropDownList('selectedIndex') >= 0)
            }
        }] } );
	
	function openDialogForEdit(){
    	editFlag=true;
        var rowIndex = $("#orderFormGrid").jqxGrid('selectedrowindex');
        if(rowIndex < 0){
        	return;
        }
        
        var row = $("#orderFormGrid").jqxGrid('getrowdata', rowIndex);

        var offset = $("#orderFormGrid").offset();
        $("#orderFormWindow").jqxWindow('open');
        $("#orderFormWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

		$("#salesOrderDescription").val(row.salesOrderDescription);
		$("#additionalInformation").val(row.additionalInformation);
		$("#salesOrderProductQty").val(row.salesOrderProductQty);
		$("#salesOrderProductRate").val(row.salesOrderProductRate);	
		$("#installLocation").val(row.installLocation);
		
		var prodCatId = $("#orderFormGrid").jqxGrid('getcellvalue', row, "productCategoryId");
		var prodSubCatId = $("#orderFormGrid").jqxGrid('getcellvalue', row, "productSubCategoryId");
		var prodId = $("#orderFormGrid").jqxGrid('getcellvalue', row, "productId");

		refreshDialogDDLs(prodCatId, prodSubCatId, prodId);
		 
		var chargeId = $("#orderFormGrid").jqxGrid('getcellvalue', row, "soChargeTypeId");
		$("#chargeTypeDDL").jqxDropDownList('val', chargeId);
		
	}
	
	function refreshDialogDDLs(prodCatId, prodSubCatId, prodId){
		$("#productCategoryDropdownlist").jqxDropDownList('clearSelection');
		$("#productSubCategoryDropdownlist").jqxDropDownList('clearSelection');
		$("#productDropdownlist").jqxDropDownList('clearSelection');
		if(prodCatId && (prodCatId > 0)){
			productSubCategoryDDLSource.url = basePath + 'salesOrder/productSubCategories.json?id=' + prodCatId;
			productsubCategoryDDLAdapter.dataBind();
			$("#productCategoryDropdownlist").jqxDropDownList('val', prodCatId);
		}
		else {
			productSubCategoryDDLSource.url = basePath + 'salesOrder/emptyArray.json';
			productsubCategoryDDLAdapter.dataBind();
		}
		
		if(prodSubCatId && (prodSubCatId > 0)){
			$("#productSubCategoryDropdownlist").jqxDropDownList('val', prodSubCatId);
			productDDLSource.url = basePath +'salesOrder/productsByProdSubCat.json?productSubCatId=' + prodSubCatId;
			productDDLAdapter.dataBind();
		}
		else {
			productDDLSource.url = basePath +'salesOrder/emptyArray.json';
			productDDLAdapter.dataBind();
		}
		
		if(prodId && (prodId > 0)){
			$("#productDropdownlist").jqxDropDownList('val', prodId);
		}
		
	}
});	
