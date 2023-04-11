var productCategoryDropDownListSource =
    {
        datatype: "json",
        datafields: [
                     { name: 'productCategory', type: 'string' },
                     { name: 'productCategoryId'}
        ],
        id: 'productCategoryId',
        url: basePath + "salesOrder/" + soId + "/orderFormProductCategories"
        //localdata: createArray(),
        //datatype: "array"
    };
    var productCategoryDropDownListAdapter = new $.jqx.dataAdapter(productCategoryDropDownListSource, { autoBind: true, async: false, 
    	loadComplete : function(data) {
//    		source.productCategories = data;
        }
	});
    
$(document).ready(function () {
    var theme = getDemoTheme();

    var source =
    {
        datatype: "json",
		url : basePath +"salesOrder/" + soId + "/maintenanceRecords.json",
        datafields:
        [
             { name: 'productName', map: 'product>productName', type: 'string' },
             { name: 'productId', map: 'product>productId', type: 'string' },
             { name: 'salesOrderProductDetailId', type: 'number' },
             { name: 'remarks', type: 'string' },
             { name: 'salesOrderProductQty', type: 'number' },
			 { name: 'salesOrderProductRate', type: 'number' },
			 { name: 'supplierProductName', map: 'supplierProduct>supplierProductName', type: 'string' },
			 { name: 'productCategory', map : 'product>productCategory>productCategory', type: 'string' },
				{ name: 'productCategoryId', map : 'product>productCategory>productCategoryId', text: 'productCategory', id: 'productCategoryId', source: productCategoryDropDownListAdapter.records },			
				{ name: 'productSubCategoryName', map : 'product>productSubCategory>productSubCategoryName', type: 'string' }, 
				{ name: 'productSubCategoryId', map : 'product>productSubCategory>productSubCategoryId'/*, type: 'string'*/ },
	            { name: 'productName', map: 'product>productName', type: 'string' },
	            { name: 'productId', map : 'product>productId', text: 'productName'/*, id: 'productId', source: productDropDownListAdapter.records*/ },
	            { name: 'productName', map: 'product>productName', type: 'string' },
			 
             { name: 'totalOrder', type: 'number' },
             { name: 'listValueDescription', map: 'listValues>listValueDescription', type: 'string' },
             { name: 'listValueId', map: 'listValues>listValueId', type: 'string' },
			{ name: 'installzipcode', type: 'string' }
        ],
        id: 'salesOrderProductDetailId',
        addrow: function (rowid, rowdata, position, commit) {
            // synchronize with the server - send insert command
            // call commit with parameter true if the synchronization with the server is successful 
            //and with parameter false if the synchronization failed.
            // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
            position = 0;
            rowdata.salesOrderProductQty = 0;
            rowdata.salesOrderProductRate = 0;
            rowdata.remarks = null;
            commit(true);
        },
        updaterow: function (rowid, rowdata, commit) {
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
            
           	for (var i=0;i<source.execModes.length;i++)
           	{
           		if(source.execModes[i].listValueDescription == rowdata.listValueDescription){
           			rowdata.listValueId = source.execModes[i].listValueId;
           			break;
           		}
           	}
           	
           	if(typeof rowdata.listValueId === "undefined"){
           		rowdata.listValueId = -1;
           	}
            
            if(!(typeof rowdata.salesOrderProductDetailId === "undefined") && (rowdata.salesOrderProductDetailId >= 0)){
				var jqxhr = $.post("salesOrder/productDetails/" + rowdata.salesOrderProductDetailId + "/update", rowdata, function(data) {
					rowdata.totalOrder = data.totalOrder;
				})
				.success(function() { 
					$('#maintInfoGrid').jqxGrid('refreshdata');
					commit(true);
				})
				.fail(function() { commit(false); });
            }
            else{
				var jqxhr = $.post("salesOrder/" + soId + "/maintenance/create/", rowdata, function(data) {
					rowdata.salesOrderProductDetailId = data.salesOrderProductDetailId;
					commit(true);
				})
				.fail(function() { commit(false); });                
            }
        },
        deleterow: function (rowid, commit) {
            if(rowid > 0 ){
				var jqxhr = $.post("salesOrder/soProductDetails/delete/" + rowid, function() {
					commit(true);
				})
				.success(function() { commit(true); })
				.fail(function() { commit(false); });                
            }
            else{
            	commit(true);
            }
            commit(true);
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

//    var dropDownListSource =
//    {
//        datatype: "json",
//        datafields: [
//             { name: 'productName', type: 'string' },
//             { name: 'productId', type: 'string' }
//        ],
//        /*id: 'productId',*/
//        url: "salesOrder/products.json"
//    };
//    var dropdownListAdapter = new $.jqx.dataAdapter(dropDownListSource, { autoBind: true, async: false, 
//    	loadComplete : function(data) {
//			source.products = data;
//        }
//	});
//
//    var dropDownListSource1 =
//    {
//        datatype: "json",
//        datafields: [
//             { name: 'listValueDescription', type: 'string' },
//             { name: 'listValueId', type: 'string' }
//        ],
//        /*id: 'listValueId',*/
//        url: "salesOrder/execModes.json"
//    };
//    var dropdownListAdapter1 = new $.jqx.dataAdapter(dropDownListSource1, { autoBind: true, async: false, 
//    	loadComplete : function(data) {
//			source.execModes = data;
//        }
//	});

    // initialize jqxGrid
    $("#maintInfoGrid").jqxGrid(
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
        columns: [
                  { text: 'Quantity', editable: true, datafield: 'salesOrderProductQty', columntype:"textbox", width: 80 },
				    { text: 'Supplier', editable: true,  columntype:"textbox",datafield: 'supplierProductName', width:120},
				    { text: 'Product Category', editable: true, datafield: 'productCategory',  columntype:"dropdownlist",width: 200 },
					 { text: 'Product Sub-Category', editable: true, datafield: 'productSubCategoryName',  columntype:"dropdownlist",width: 200 },
				    { text: 'Description', editable: true, datafield: 'remarks',  columntype:"textbox",width: 200 },
                 { text: 'x1', editable: true, datafield: 'salesOrderProductRate', columntype:"textbox", width: 80 },
				   { text: 'Total', editable: true, datafield: 'totalOrder', columntype:"textbox",}
                ],
		
		
    });
    
  /*  var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 58, autoOpenPopup: false, mode: 'popup', theme: theme });

    $("#maintInfoGrid").on('contextmenu', function () {
        return false;
    });*/

    // handle context menu clicks.
    $("#Menu").on('itemclick', function (event) {
        var args = event.args;
        var rowindex = $("#maintInfoGrid").jqxGrid('getselectedrowindex');
        if ($.trim($(args).text()) == "Edit Selected Row") {
            editrow = rowindex;
            var offset = $("#maintInfoGrid").offset();
            $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });

            // get the clicked row's data and initialize the input fields.
            var dataRecord = $("#maintInfoGrid").jqxGrid('getrowdata', editrow);
            $("#firstName").val(dataRecord.firstname);
            $("#lastName").val(dataRecord.lastname);
            $("#product").val(dataRecord.productname);
            $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
            $("#price").jqxNumberInput({ decimal: dataRecord.price });

            // show the popup window.
            $("#popupWindow").jqxWindow('show');
        }
        else {
            var rowid = $("#maintInfoGrid").jqxGrid('getrowid', rowindex);
            $("#maintInfoGrid").jqxGrid('deleterow', rowid);
        }
    });

    $("#maintInfoGrid").on('rowclick', function (event) {
        if (event.args.rightclick) {
            $("#maintInfoGrid").jqxGrid('selectrow', event.args.rowindex);
            var scrollTop = $(window).scrollTop();
            var scrollLeft = $(window).scrollLeft();
            contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

            return false;
        }
    });

 // create jqxWindow.
    $("#jqxwindow").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 800, height: 250 });
    $("#dropdownlist").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
        source: [
             'Please Choose.... ' ,'product1 ', 'product2', 'product3', 'product4', 'product5'
        ]
    });
    $("#dropdownlist1").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
        source: [
            'product1 ', 'product2', 'product3', 'product4', 'product5'
        ]
    });
    $("#dropdownlist2").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
        source: [
            'product1 ', 'product2', 'product3', 'product4', 'product5'
        ]
    });
    $("#dropdownlist3").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
        source: [
            'Yes', 'No'
        ]
    });
    
});	
