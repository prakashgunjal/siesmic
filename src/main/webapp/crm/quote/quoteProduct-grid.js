 var productDDLSource;
 var productDDLAdapter;
 var editFlag = false;

         $(document).ready(function () {
            var theme = getDemoTheme();       
            var source =
            {
            	datatype: "json",
           		url : basePath+'quote/'+quoteId +'/quoteProductList.json',		 
                datafields:
                [                                    
                    { name: 'quoteProdDetailId', type: 'long' },  
                    { name: 'productCategoryId',map:'product>productCategory>productCategoryId', type: 'long' }, //long
					{ name: 'productCategory',map:'product>productCategory>productCategory', type: 'string' },	
										
				
				    { name: 'productSubCategoryId',map : 'product>productSubCategory>productSubCategoryId', type: 'string' }, // 
					{ name: 'productSubCategoryName',map:'product>productSubCategory>productSubCategoryName', type: 'string' },
					
					{ name: 'productId',map : 'product>productId', type: 'long' },
					{ name: 'productName',map:'product>productName', type: 'string' },		
					
					{ name: 'quoteProductQty', type: 'string' },
					{ name: 'quoteProductUnitOfMesure', type: 'string' },				
					{ name: 'unitCost', type: 'string' },
					{ name: 'quoteProductTotal', type: 'decimal' },
					{ name: 'quoteProductDiscount', type: 'string' }				
                     
                ],id:'quoteProdDetailId',
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }
             // initialize jqxGrid. Disable the built-in selection.
            $("#quotegrid").jqxGrid(
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
                  /*{
                      text: '', menu: false, sortable: false,
                      datafield: 'available', columntype: 'checkbox', width: 40,
                      renderer: function () {
                          return '<div style="margin-left: 10px; margin-top: 5px;"></div>';
                      },
                      rendered: function (element) {
                          $(element).jqxCheckBox({ theme: theme, width: 16, height: 16, animationShowDelay: 0, animationHideDelay: 0 });
                          columnCheckBox = $(element);
                          $(element).on('change', function (event) {
                              var checked = event.args.checked;
                              var pageinfo = $("#quotegrid").jqxGrid('getpaginginformation');
                              var pagenum = pageinfo.pagenum;
                              var pagesize = pageinfo.pagesize;
                              if (checked == null || updatingCheckState) return;
                              $("#quotegrid").jqxGrid('beginupdate');

                              // select all rows when the column's checkbox is checked.
                              if (checked) {
                                  $("#quotegrid").jqxGrid('selectallrows');
                              }
                              // unselect all rows when the column's checkbox is checked.
                              else if (checked == false) {
                                  $("#quotegrid").jqxGrid('clearselection');
                              }

                              // update cells values.
                              var startrow = pagenum * pagesize;
                              for (var i = startrow; i < startrow + pagesize; i++) {
                                  // The bound index represents the row's unique index. 
                                  // Ex: If you have rows A, B and C with bound indexes 0, 1 and 2, afer sorting, the Grid will display C, B, A i.e the C's bound index will be 2, but its visible index will be 0.
                                  // The code below gets the bound index of the displayed row and updates the value of the row's available column.
                                  var boundindex = $("#quotegrid").jqxGrid('getrowboundindex', i);
                                  $("#quotegrid").jqxGrid('setcellvalue', boundindex, 'available', event.args.checked);
                              }

                              $("#quotegrid").jqxGrid('endupdate');
                          });
                          return true;
                      }
                  },*/
                  
              //  { text: 'Product DetailId', editable: true, datafield:'quoteProdDetailId', width: '250px', rendered: tooltiprenderer },   
                                         
                  { text: 'Product Category', editable: true, datafield:'productCategoryId',displayfield: 'productCategory', width: '250px', rendered: tooltiprenderer },                                          
                  { text: 'Product Sub-category', editable: true, datafield:'productSubCategoryId',displayfield: 'productSubCategoryName',  width: '250px', rendered: tooltiprenderer },                                          
                  { text: 'Product', editable: true, datafield:'productId',displayfield: 'productName',  width: '200px', rendered: tooltiprenderer }, 
                  
                  { text: 'QTY', editable: true, datafield: 'quoteProductQty', width: '100px', rendered: tooltiprenderer },
                  { text: 'UOM', editable: true, datafield: 'quoteProductUnitOfMesure', width: '50px', rendered: tooltiprenderer },
                  { text: 'Unit Cost', editable: true, datafield: 'unitCost', width: '100px', rendered: tooltiprenderer },
                  { text: 'Total Amount', editable: true, datafield: 'quoteProductTotal', width: '200px', rendered: tooltiprenderer }
				 
				  
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
                	
                	editFlag=false;                	
                    var offset = $("#quotegrid").offset();
                    $("#quoteProductWindow").jqxWindow('open');
                    $("#quoteProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

                    refreshDialogDDLs(-1,-1,-1);
               		$('#quoteQuantity').jqxNumberInput('clear');
               		$('#quoteUnitCost').jqxNumberInput('clear');
               		$('#quoteTotalAmount').jqxNumberInput('clear');
               		$('#quoteDiscount').jqxNumberInput('clear');
                   });
                   
                   
                   editButton.click(function (event) {                	  
                	   var rowindex = $("#quotegrid").jqxGrid('getselectedrowindex');
                	   var dataRecord = $("#quotegrid").jqxGrid('getrowdata', rowindex);                 	  
                	   if(dataRecord!=null){
                		   openDialogForEdit();
                  	   }else{
                  		 alert("Please select Record for Edit");
                   	   }
                	  
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#quotegrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#quotegrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#quotegrid").jqxGrid('getrowboundindex', i);
                    var value = $("#quotegrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#quotegrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#quotegrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#quotegrid").jqxGrid('endupdate');
                if (checkedItemsCount == pagesize) {
                //    columnCheckBox.jqxCheckBox({ checked: true });
                }
                else if (checkedItemsCount == 0) {
                  //  columnCheckBox.jqxCheckBox({ checked: false });
                }
                else {
                 //   columnCheckBox.jqxCheckBox({ checked: null });
                }
            }

            // update the selection after sort.
            $("#quotegrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#quotegrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#quotegrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#quotegrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#quotegrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#quotegrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#quotegrid").jqxGrid('getselectedrowindexes');
                     var state = false;
                     var count = 0;
                     $.each(selectedRows, function () {
                         if (pagenum * pagesize <= this && this < pagenum * pagesize + pagesize) {
                             count++;
                         }
                     });

                     if (count != 0) state = null;
                     if (count == pagesize) state = true;
                     if (count == 0) state = false;
                     
                     updatingCheckState = true;
                     $(columnCheckBox).jqxCheckBox({ checked: state });

                     updatingCheckState = false;
                 }
             });
             
          // create context menu
             var contextMenu = $("#quoteProdMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#quotegrid").on('contextmenu', function () {
                 return false;
             });

             // handle context menu clicks.
             $("#quoteProdMenu").on('itemclick', function (event) {         
            	 
            	   openDialogForEdit();            	             
             });

             $("#quotegrid").on('rowclick', function (event) {            	
                 if (event.args.rightclick) {
                     $("#quotegrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
             
             function openDialogForEdit(){
             	editFlag=true;
                 var rowIndex = $("#quotegrid").jqxGrid('selectedrowindex');
                 if(rowIndex < 0){
                 	return;
                 }                 
                var row = $("#quotegrid").jqxGrid('getrowdata', rowIndex);
                                                                                           
                var offset = $("#quotegrid").offset();
                $("#quoteProductWindow").jqxWindow('open');
                $("#quoteProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
         		$("#quoteQuantity").val(row.quoteProductQty);
         		$("#quoteUnitCost").val(row.unitCost);
         		$("#quoteTotalAmount").val(row.quoteProductTotal);
         		$("#quoteDiscount").val(row.quoteProductDiscount );	
         		
         		var prodCatId = $("#quotegrid").jqxGrid('getcellvalue', row, "productCategoryId");
         		var prodSubCatId = $("#quotegrid").jqxGrid('getcellvalue', row, "productSubCategoryId");
         		var prodId = $("#quotegrid").jqxGrid('getcellvalue', row, "productId");
         	           	    
         		refreshDialogDDLs(prodCatId, prodSubCatId, prodId); 	
         	}

          // create jqxWindow.
             $("#quoteProductWindow").jqxWindow({ resizable: false, draggable:false, isModal:true, modalOpacity:0.7, theme: 'shinyblack', autoOpen: false, width: 800, maxWidth: 1200, height:350, maxHeight:800 });
             $("#quoteFormPanel").jqxPanel({ width: 780, height: 250, sizeMode:'fixed'});
             $("#quoteProdSave").jqxButton({ theme: theme, width: '100' });
             $("#quoteProdCancel").jqxButton({ theme: theme, width: '100' });   
            
//           Product Form pre-Load Dropdown lists for Product Category, Product SubCategory, Product and  Unit Of Measure
	          	
//           Product Cancel Button On Click Event
               $('#quoteProdCancel').click(function () {
         		$('#quoteProductWindow').jqxWindow('close');
         	   });
            // Product Save Event
               $('#quoteProdSave').click(function () {
              	 
              	 if(!$('#quoteFormPanel').jqxValidator('validate')){
            			return;
            	 }; 
             
               var productForm = new Object();
      			 
           		var pcItem = $('#productCategoryDropdownlist').jqxDropDownList('getSelectedItem');	
           		productForm.productCategoryId = pcItem.value;
           	
           		var pscItem = $('#productSubCategoryDropdownlist').jqxDropDownList('getSelectedItem');
           		productForm.productSubCategoryId = pscItem.value;
           		
           		var prodItem = $('#productDropdownlist').jqxDropDownList('getSelectedItem');		
           		productForm.productId = prodItem.value;		        		
           		
           		productForm.unitOfMeasure = $('#quoteUnitOfMeasure').val();		
           		productForm.quoteQuantity = $('#quoteQuantity').val();
           		productForm.quoteUnitCost = $('#quoteUnitCost').val();
           		productForm.quoteTotalCost = $('#quoteTotalAmount').val();  
           		productForm.quoteDiscount = $('#quoteDiscount').val();           		
           		productForm.editFlag = editFlag ;
  	            	            
           		if(editFlag == false){
        	    $.ajax({          		
          			  url:  basePath + "quote/" +quoteId + "/createQuoteProductDetails",  	 			
          			  type: 'POST',
          			  data: JSON.stringify(productForm),
          			  contentType: 'application/json; charset=utf-8',
          			  dataType: 'json',
          			  async:false
          		  }).done(function( data ) {
          	          $('#quoteProductWindow').jqxWindow('close');
          			  dataAdapter.dataBind(); 
          		  });
           		}else{          			
          			var rowindex = $('#quotegrid').jqxGrid('getselectedrowindex');
          			var data = $('#quotegrid').jqxGrid('getrowdata', rowindex);
          			var soProdId = data.quoteProdDetailId;  
          			productForm.productDetailId = soProdId;           			          			
           		     $.ajax({               		   
           		      url:  basePath + "quote/" +quoteId + "/createQuoteProductDetails",  	 
          			  type: 'POST',
          			  data: JSON.stringify(productForm),
          			  contentType: 'application/json; charset=utf-8',
          			  dataType: 'json',
          			  async:false
          		     }).done(function( data ) {
          			  $('#quoteProductWindow').jqxWindow('close');
          			  dataAdapter.dataBind();
          		    });          	          		
           		}         		           		
               });
               
//             Product SAVE Validation
  			   $('#quoteFormPanel').jqxValidator( { hintType : 'label', rules: [
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
        
         // $("#opporSerialized").jqxCheckBox({width: 16, height: 16, });
          $("#quoteUnitOfMeasure").jqxInput({ width: '60px', height: '25px'});
          $("#quoteQuantity").jqxNumberInput({ width: '130px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false });
          $("#quoteUnitCost").jqxNumberInput({ width: '200px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false, symbol: '�' });
          $("#quoteDiscount").jqxNumberInput({ width: '200px', height: '25px', digits:2, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false,decimalSeparator: "", decimalDigits: 0,symbol: '%',symbolPosition: 'right' });
          $("#quoteTotalAmount").jqxNumberInput({ width: '200px', height: '25px', disabled: true, digits:8, decimalDigits: 2, inputMode: 'simple',symbol: '�' });
                   
          $( "#quoteQuantity" ).keyup(function(event) {
         	 var quoteQuantity;
         	 var quoteUnitCost;
         	 var quoteDiscount;
         	  quoteQuantity=$('#quoteQuantity').val();
         	  quoteUnitCost=$('#quoteUnitCost').val();
         	  quoteDiscount=$('#quoteDiscount').val();
         	 if(quoteUnitCost!=0 && quoteDiscount!=0){
         		 
         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 var withDiscountTotalAmt= totalAmt*(100-quoteDiscount)/100;
         		 
         		 $("#quoteTotalAmount").val(withDiscountTotalAmt);
         	 }else if(quoteUnitCost!=0 && quoteUnitCost==0){

         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 
         		 $("#quoteTotalAmount").val(totalAmt);
         	 
         	 }
         	 });
          
          $( "#quoteUnitCost" ).keyup(function(event) {
         	 var quoteQuantity;
         	 var quoteUnitCost;
         	 var quoteDiscount;
         	   quoteQuantity=$('#quoteQuantity').val();
         	   quoteUnitCost=$('#quoteUnitCost').val();
         	   quoteDiscount=$('#quoteDiscount').val();
         	 if(quoteQuantity!=0 && quoteDiscount!=0){
         		 
         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 var withDiscountTotalAmt= totalAmt*(100-quoteDiscount)/100;
         		 
         		 $("#quoteTotalAmount").val(withDiscountTotalAmt);
         	 }else if(quoteQuantity!=0 && quoteDiscount==0){

         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 
         		 $("#quoteTotalAmount").val(totalAmt);
         	 
         	 }
        	 });
          
          $( "#quoteDiscount" ).keyup(function(event) {
         	 var quoteQuantity;
         	 var quoteUnitCost;
         	 var quoteDiscount;
         	   quoteQuantity=$('#quoteQuantity').val();
         	   quoteUnitCost=$('#quoteUnitCost').val();
         	   quoteDiscount=$('#quoteDiscount').val();
         	 if(quoteQuantity!=0 && quoteUnitCost!=0){
         		 
         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 var withDiscountTotalAmt= totalAmt*(100-quoteDiscount)/100;
         		 
         		 $("#quoteTotalAmount").val(withDiscountTotalAmt);
         	 }else if(quoteQuantity!=0 && quoteUnitCost==0){

         		 var totalAmt = quoteQuantity*quoteUnitCost;
         		 
         		 $("#quoteTotalAmount").val(totalAmt);
         	 
         	 }
        	 });
          
//Product dependency dropdown select events
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
       			$("#quoteUnitCost").val(retailRate);
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
      
        function preparegriddata(rowscount) {
            // prepare the data
            var data = new Array();
            var firstNames =
            [
                "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
            ];

             var lastNames =
            [
                "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
            ];

            var productNames =
            [
                "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Caramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist"
            ];
          
            for (var i = 0; i < rowscount; i++) {
                var row = {};
                var productindex = Math.floor(Math.random() * productNames.length);
                var quantity = 1 + Math.round(Math.random() * 10);

                row["available"] = false;
                row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
                row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
                row["productname"] = productNames[productindex];
                row["quantity"] = quantity;
                data[i] = row;
            }

            return data;
        }