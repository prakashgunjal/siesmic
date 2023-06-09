var productDDLSource;
var productDDLAdapter;
var editFlag = false;
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(5);

             var source =
            {
            		 datatype: "json",
        			 url : opportunityId + "/getProductRecords.json",
                datafields:
                [
                 { name: 'opportunityProdDetailId', map : 'opportunityProductDetail>opportunityProdDetailId', type: 'string' },
                    { name: 'productCategoryId', map : 'product>productCategory>productCategoryId', type: 'string' },
                    { name: 'productSubCategoryId',map : 'product>productSubCategory>productSubCategoryId', type: 'string' },
    				{ name: 'productId',map : 'product>productId', type: 'string' },
    				{ name: 'productCategory', map : 'product>productCategory>productCategory', type: 'string' },
    				{ name: 'productSubCategoryName',map : 'product>productSubCategory>productSubCategoryName', type: 'string' }, 
    	            { name: 'productName', map: 'product>productName', type: 'string' },
    				{ name: 'serialized', type: 'boolean' },
    				{ name: 'opportunityProductQty', type: 'string' },
    				{ name: 'unitofMeasure', type: 'string' },
    				{ name: 'opportunityProductRate', type: 'int' },
    				{ name: 'opportunityProductDiscount', type: 'int' },
    				{ name: 'opportunityProductTotal', type: 'string' }
                    
                ],
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
                    
                   	
                   	if(typeof rowdata.soChargeTypeId === "undefined"){
                   		rowdata.soChargeTypeId = -1;
                   	}
                    
                    if(!(typeof rowdata.opportunityProdDetailId === "undefined") && (rowdata.opportunityProdDetailId >= 0)){
                    	var jqxhr = $.post(basePath + "crm/opportunity/" + rowdata.opportunityProdDetailId + "/updateProduct", rowdata, function(data) {
        					rowdata.opportunityProductTotal = data.opportunityProductTotal;
        				})
        				.success(function() { 
        					$('#oppor').jqxGrid('refreshdata');
        					commit(true);
        				})
        				.fail(function() { commit(false); });
                    }
                    else{
        					var jqxhr = $.post(basePath + "crm/opportunity/" +opportunityId + "/createProductDetails/", rowdata, function(data) {
        					rowdata.opportunityProdDetailId = data.opportunityProdDetailId;
        					commit(true);
        				})
        				.fail(function() { commit(false); });                
                    }
                }
            };

             var dataAdapter = new $.jqx.dataAdapter(source);
             var updatingCheckState = false;
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }
             $('#oppor').jqxGrid('hidecolumn', 'opportunityProdDetailId');
            $("#oppor").jqxGrid(
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
                          {text: 'Product Id',hidden :true, datafield: 'opportunityProdDetailId',width: '100px'},
                  { text: 'Product Category', editable: true, datafield: 'productCategoryId',displayfield: 'productCategory', width: '250px', rendered: tooltiprenderer },
                  { text: 'Product Sub-category', editable: true, datafield: 'productSubCategoryId',displayfield: 'productSubCategoryName', width: '250px', rendered: tooltiprenderer },
                  { text: 'Product', editable: true, datafield: 'productId', width: '200px',displayfield: 'productName', rendered: tooltiprenderer },
                  { text: 'Serialized', editable: true, columntype:'checkbox', datafield: 'serialized', width: '100px', rendered: tooltiprenderer },
                  { text: 'QTY', editable: true, datafield: 'opportunityProductQty', width: '100px', rendered: tooltiprenderer },
                  { text: 'UOM', editable: true, datafield: 'unitofMeasure', width: '50px', rendered: tooltiprenderer },
                  { text: 'Unit Cost', editable: true, datafield: 'opportunityProductRate', width: '100px', rendered: tooltiprenderer },
                  { text: 'Discount', editable: true, datafield: 'opportunityProductDiscount', width: '100px', rendered: tooltiprenderer },
                  { text: 'Total Amount', editable: true, datafield: 'opportunityProductTotal', width: '200px', rendered: tooltiprenderer }
				 
				  
               ],
               renderstatusbar: function (statusbar) {
            	// appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
                   /*var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
                   var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                   
                   container.append(addButton);
                   /*container.append(deleteButton);*/
                   container.append(editButton);
         
                   statusbar.append(container);
                   addButton.jqxButton({ theme: theme, width: 60, height: 20 });
                   /*deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });*/
                   editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   // add new row.
                   addButton.click(function (event) {
                	   /*var newwindow;
                	   newwindow=window.open('../../GenericJspPages/activities/activities.jsp','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}*/
                	   

                   	editFlag=false;
                    var offset = $("#oppor").offset();
                    $("#opporProductWindow").jqxWindow('open');
                    $("#opporProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

                       refreshDialogDDLs(-1,-1,-1);
               		$('#opporQuantity').jqxNumberInput('clear');
               		$('#opporUnitCost').jqxNumberInput('clear');
               		$('#opporTotalAmount').jqxNumberInput('clear');
               		$('#opporDiscount').jqxNumberInput('clear');
//               		$("#opporDiscount").jqxDropDownList('clearSelection');
               		
                   
                	 
                   });
                   
                   editButton.click(function (event) {
                	   openDialogForEdit();
                   });
               },
            });
            function openDialogForEdit(){
            	editFlag=true;
                var rowIndex = $("#oppor").jqxGrid('selectedrowindex');
                if(rowIndex < 0){
                	
                	alert("Please select Record for Edit");
                	
                	return;
                }
                
                var row = $("#oppor").jqxGrid('getrowdata', rowIndex);

                var offset = $("#oppor").offset();
                $("#opporProductWindow").jqxWindow('open');
                $("#opporProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
        		$("#opporQuantity").val(row.opportunityProductQty);
        		$("#opporUnitCost").val(row.opportunityProductRate);
        		$("#opporTotalAmount").val(row.opportunityProductTotal);
        		$("#opporDiscount").val(row.opportunityProductDiscount);	
        		$("#opporSerialized").val(row.serialized);
        		var prodCatId = $("#oppor").jqxGrid('getcellvalue', row, "productCategoryId");
        		var prodSubCatId = $("#oppor").jqxGrid('getcellvalue', row, "productSubCategoryId");
        		var prodId = $("#oppor").jqxGrid('getcellvalue', row, "productId");
        		refreshDialogDDLs(prodCatId, prodSubCatId, prodId);
        		 
        		
        	}
            
            var updatePageState = function (pagenum) {
                var datainfo = $("#oppor").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
               
            }

            // update the selection after sort.
            $("#oppor").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#oppor").on('pagechanged', function (event) {
                 updatePageState();
             });

          // create context menu
             var contextMenu = $("#opporProdMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#oppor").on('contextmenu', function () {
                 return false;
             });

             // handle context menu clicks.
             $("#opporProdMenu").on('itemclick', function (event) {

            	 if ($.trim($(args).text()) == "Edit Selected Product") {
         			openDialogForEdit();
         		}             
             });

             $("#oppor").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#oppor").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });

          // create jqxWindow.
             $("#opporProductWindow").jqxWindow({ resizable: false, isModal:true, draggable:false, modalOpacity:0.7, theme: 'shinyblack', autoOpen: false, width: 800, maxWidth: 1200, height:350, maxHeight:800 });
             $("#opporFormPanel").jqxPanel({ width: 780, height: 250, sizeMode:'fixed'});
             $("#opporProdSave").jqxButton({ theme: theme, width: '100' });
             $("#opporProdCancel").jqxButton({ theme: theme, width: '100' });   
// Product Save Event
             $('#opporProdSave').click(function () {
            	 
            	 if(!$('#opporProductForm').jqxValidator('validate')){
          			return;
          		};
            	 
            	 var productForm = new Object();
    			 
         		var pcItem = $('#productCategoryDropdownlist').jqxDropDownList('getSelectedItem');	
         		productForm.productCategoryId = pcItem.value;
         	
         		var pscItem = $('#productSubCategoryDropdownlist').jqxDropDownList('getSelectedItem');
         		productForm.productSubCategoryId = pscItem.value;
         		
         		var prodItem = $('#productDropdownlist').jqxDropDownList('getSelectedItem');		
         		productForm.productId = prodItem.value;		
         		
         		productForm.serialized = $('#opporSerialized').val();
         		productForm.unitOfMeasure = $('#opporUnitOfMeasure').val();		
         		productForm.opporQuantity = $('#opporQuantity').val();
         		productForm.opporUnitCost = $('#opporUnitCost').val();
         		productForm.opporTotalCost = $('#opporTotalAmount').val();
         		productForm.opporDiscount = $('#opporDiscount').val();


         		if(editFlag == false){
        		$.ajax({
        			  url:  basePath + "crm/opportunity/" +opportunityId + "/createProductDetails",
        			  type: 'POST',
        			  data: JSON.stringify(productForm),
        			  contentType: 'application/json; charset=utf-8',
        			  dataType: 'json',
        			  async:false
        		  }).done(function( data ) {
        	         		$('#opporProductWindow').jqxWindow('close');
        			  dataAdapter.dataBind();
        		  });
         		}else{

        			//get the salesorderproductdetail id on click of grid row
        			var rowindex = $('#oppor').jqxGrid('getselectedrowindex');
        			var data = $('#oppor').jqxGrid('getrowdata', rowindex);
        			var soProdId = data.opportunityProdDetailId;
        			//get the opportunityProdDetailId id on click of grid row till here
         		$.ajax({
        			  url: basePath + "crm/opportunity/" + data.opportunityProdDetailId + "/updateProduct",
        			  type: 'POST',
        			  data: JSON.stringify(productForm),
        			  contentType: 'application/json; charset=utf-8',
        			  dataType: 'json',
        			  async:false
        		  }).done(function( data ) {
        			  $('#opporProductWindow').jqxWindow('close');
        			  dataAdapter.dataBind();
        		  });
        	
        		
         		}
         		
         		
             });
//             Product Cancel Button On Click Event
             $('#opporProdCancel').click(function () {
         		$('#opporProductWindow').jqxWindow('close');
         	});
//             Product SAVE Validation
			 $('#opporProductForm').jqxValidator( { hintType : 'label', rules: [
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
						 }
						] 
			 } );
			 
//           Product Form pre-Load Dropdown lists for Product Category, Product SubCategory, Product and  Unit Of Measure
	          	
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
	                     { name: 'productId' },
	                     {name: 'retailRate'}
	                ],
//	                id: 'productId',
	                url: productUrl
	                	
	            };
	            var productDDLAdapter = new $.jqx.dataAdapter(productDDLSource, { autoBind: false, async: false, 
	            	loadComplete : function(data) {
	        			source.products = data;
	                }
	        	});
	             
	            $('#productDropdownlist').bind('select', function (event) {
                    var args = event.args;
                    var item = $('#productDropdownlist').jqxDropDownList('getItem', args.index);
                   
                });
//	Product Form Fields/Lables
			 
             $("#productCategoryDropdownlist").jqxDropDownList({
            	 autoDropDownHeight: true, 
            	 width: 200, 
            	 height: 23, 
            	 theme: theme, 
            	 displayMember : 'productCategory',
         		 valueMember : 'productCategoryId',
         		 source : productCategoryDDLAdapter,
         		 selectedIndex : 'productCategoryId'	
             });
             $("#productSubCategoryDropdownlist").jqxDropDownList({
            	 autoDropDownHeight: true,
            	 width: 200,
            	 height: 23,
            	 theme: theme,
            	 displayMember : 'productSubCategoryName',
         		 valueMember : 'productSubCategoryId',
         		 source : productsubCategoryDDLAdapter,
         		 selectedIndex : 'productSubCategoryId'
             });
             $("#productDropdownlist").jqxDropDownList({ 
            	 autoDropDownHeight: true,
            	 width: 200,
            	 height: 23,
            	 theme: theme,
            	 displayMember : 'productName',
         		valueMember : 'productId',
         		source : productDDLAdapter,
         		selectedIndex : 'productId'
             });
           
             $("#opporSerialized").jqxCheckBox({width: 16, height: 16, });
             $("#opporUnitOfMeasure").jqxInput({ width: '60px', height: '25px'});
             $("#opporQuantity").jqxNumberInput({ width: '130px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false });
             $("#opporUnitCost").jqxNumberInput({ width: '200px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false, symbol: '�' });
             $("#opporDiscount").jqxNumberInput({ width: '200px', height: '25px', digits:2, inputMode: 'simple',min: 0, spinButtons: false,decimalSeparator: "", decimalDigits: 0,symbol: '%',symbolPosition: 'right' });
             $("#opporTotalAmount").jqxNumberInput({ width: '200px', height: '25px', disabled: true, digits:8, decimalDigits: 2, inputMode: 'simple',symbol: '�' });
             $( "#opporQuantity" ).keyup(function(event) {
            	 var  opporQuantity;
            	 var opporUnitCost;
            	 var opporDiscount;
            	   opporQuantity=$('#opporQuantity').val();
            	   opporUnitCost=$('#opporUnitCost').val();
            	   opporDiscount=$('#opporDiscount').val();
            	 if(opporUnitCost!=0 && opporDiscount!=0){
            		 
            		 var totalAmt = opporQuantity*opporUnitCost;
            		 var withDiscountTotalAmt= totalAmt*(100-opporDiscount)/100;
            		 
            		 $("#opporTotalAmount").val(withDiscountTotalAmt);
            	 }else if(opporUnitCost!=0 && opporDiscount==0){

            		 var totalAmt = opporQuantity*opporUnitCost;
            		 
            		 $("#opporTotalAmount").val(totalAmt);
            	 
            	 }
            	 });
             
             $( "#opporUnitCost" ).keyup(function(event) {
            	 var  opporQuantity;
            	 var opporUnitCost;
            	 var opporDiscount;
            	   opporQuantity=$('#opporQuantity').val();
            	   opporUnitCost=$('#opporUnitCost').val();
            	   opporDiscount=$('#opporDiscount').val();
            	 if(opporQuantity!=0 && opporDiscount!=0){
            		 
            		 var totalAmt = opporQuantity*opporUnitCost;
            		 var withDiscountTotalAmt= totalAmt*(100-opporDiscount)/100;
            		 
            		 $("#opporTotalAmount").val(withDiscountTotalAmt);
            	 }else if(opporQuantity!=0 && opporDiscount==0){

            		 var totalAmt = opporQuantity*opporUnitCost;
            		 
            		 $("#opporTotalAmount").val(totalAmt);
            	 
            	 }
           	 });
             
             $( "#opporDiscount" ).keyup(function(event) {
            	 var  opporQuantity;
            	 var opporUnitCost;
            	 var opporDiscount;
            	   opporQuantity=$('#opporQuantity').val();
            	   opporUnitCost=$('#opporUnitCost').val();
            	   opporDiscount=$('#opporDiscount').val();
            	 if(opporQuantity!=0 && opporUnitCost!=0){
            		 
            		 var totalAmt = opporQuantity*opporUnitCost;
            		 var withDiscountTotalAmt= totalAmt*(100-opporDiscount)/100;
            		 
            		 $("#opporTotalAmount").val(withDiscountTotalAmt);
            	 }else if(opporQuantity!=0 && opporUnitCost==0){

            		 var totalAmt = opporQuantity*opporUnitCost;
            		 
            		 $("#opporTotalAmount").val(totalAmt);
            	 
            	 }
           	 });
             
//   Product dependency dropdown select events
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
          			var retailRate = item.originalItem.retailRate;
          			$("#opporUnitCost").val(retailRate);
          	});
          	
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
