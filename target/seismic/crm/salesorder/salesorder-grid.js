
         $(document).ready(function () {
             var theme = getDemoTheme();

           
            var source =
            {
                datatype: "json", 
                url : basePath+'salesOrder/'+salesOrderId +'/orderForm.json',		
                datafields:
                [                     
                    { name: 'salesOrderProductDetailId', type: 'long' },  
                    { name: 'productCategoryId',map:'product>productCategory>productCategoryId', type: 'long' }, 
					{ name: 'productCategory',map:'product>productCategory>productCategory', type: 'string' },	
														
				    { name: 'productSubCategoryId',map : 'product>productSubCategory>productSubCategoryId', type: 'string' }, 
					{ name: 'productSubCategoryName',map:'product>productSubCategory>productSubCategoryName', type: 'string' },
					
					{ name: 'productId',map : 'product>productId', type: 'long' },
					{ name: 'productName', map:'product>productName', type: 'string' },		
					
					{ name: 'salesOrderProductQty', type: 'string' },
					{ name: 'salesOrderProductUom', type: 'string' },				
					{ name: 'unitCost', type: 'string' },
					{ name: 'productTotal', type: 'decimal' },
					{ name: 'salesOrderProductDiscount', type: 'string' }	
                                              
                ],
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;

             // initialize jqxGrid. Disable the built-in selection.
            $("#salesordergrid").jqxGrid(
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
                 
                  { text: 'Product Category', editable: false, datafield:'productCategoryId', displayfield: 'productCategory', width: 170 },
                  { text: 'Product Sub Category', editable: false, datafield:'productSubCategoryId', displayfield: 'productSubCategoryName', width: 180 },
                  { text: 'Product', editable: false, datafield:'productId', displayfield: 'productName' },                 
				  { text: 'Qty', editable: false, datafield: 'salesOrderProductQty' , width: 80 },
                  { text: 'UOM', editable: false, datafield: 'salesOrderProductUom' , width: 100},
                  { text: 'Unit Cost', editable: false, datafield: 'unitCost' , width: 100  },
                  { text: 'Discount', editable: true, datafield: 'salesOrderProductDiscount', width: '100px' },
                  { text: 'Total Amount', editable: false, datafield: 'productTotal' }
				 				  
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
                	  /* var newwindow;
                	   newwindow=window.open('../../GenericJspPages/activities/activities.jsp','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}*/
                	   var offset = $("#salesordergrid").offset();
                       $("#salesorderProductWindow").jqxWindow('open');
                       $("#salesorderProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
                   
                   // delete selected row.
                   /*deleteButton.click(function (event) {
                       var selectedrowindex = $("#leadgrid").jqxGrid('getselectedrowindex');
                       var rowscount = $("#leadgrid").jqxGrid('getdatainformation').rowscount;
                       if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                           var id = $("#leadgrid").jqxGrid('getrowid', selectedrowindex);
                           $("#leadgrid").jqxGrid('deleterow', id);
                       }
                   });*/
                   editButton.click(function (event) {
                	   /*var newwindow;
                	   newwindow=window.open('../../GenericJspPages/activities/activities.jsp','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}*/
                	   var offset = $("#salesordergrid").offset();
                       $("#salesorderProductWindow").jqxWindow('open');
                       $("#salesorderProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#salesordergrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#salesordergrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#salesordergrid").jqxGrid('getrowboundindex', i);
                    var value = $("#salesordergrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#salesordergrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#salesordergrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#salesordergrid").jqxGrid('endupdate');
                if (checkedItemsCount == pagesize) {
                    columnCheckBox.jqxCheckBox({ checked: true });
                }
                else if (checkedItemsCount == 0) {
                    columnCheckBox.jqxCheckBox({ checked: false });
                }
                else {
                    columnCheckBox.jqxCheckBox({ checked: null });
                }
            }

            // update the selection after sort.
            $("#salesordergrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#salesordergrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#salesordergrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#salesordergrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#salesordergrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#salesordergrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#salesordergrid").jqxGrid('getselectedrowindexes');
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
             var contextMenu = $("#salesorderProdMenu").jqxMenu({ width: 250, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#salesordergrid").on('contextmenu', function () {
                 return false;
             });

             // handle context menu clicks.
             $("#salesorderProdMenu").on('itemclick', function (event) {
            	 var offset = $("#salesordergrid").offset();
                 $("#salesorderProductWindow").jqxWindow('open');
                 $("#salesorderProductWindow").jqxWindow('move', offset.left + 30, offset.top + 30);                
             });

             $("#salesordergrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#salesordergrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });

          // create jqxWindow.
             $("#salesorderProductWindow").jqxWindow({ resizable: true, isModal:true, draggable:false,modalOpacity:0.7, theme: theme, autoOpen: false, width: 800, maxWidth: 1200, height:250, maxHeight:800 });
             $("#salesorderFormPanel").jqxPanel({ width: 780, height: 250, sizeMode:'fixed'});
             $("#SOProdSave").jqxButton({ theme: theme, width: '100' });
             $("#SOProdCancel").jqxButton({ theme: theme, width: '100' });   
             $("#productCategoryDropdownlist").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme, placeHolder: "Select: Select Some Thing",
                 source: [
                    'product1 ', 'product2', 'product3', 'product4', 'product5'
                 ]
             });
             $("#productSubCategoryDropdownlist").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
                 source: [
                     'product1 ', 'product2', 'product3', 'product4', 'product5'
                 ]
             });
             $("#productDropdownlist").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
                 source: [
                     'product1 ', 'product2', 'product3', 'product4', 'product5'
                 ]
             })
             $("#dropdownlist13").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
                 source: [
                     'Yes', 'No'
                 ]
             });
             $("#dropdownlist14").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme,
                 source: [
                     'mtrs', 'cms','inch','px','ltr','pcs'
                 ]
             });
           
             $("#SOUnitOfMeasure").jqxInput({ width: '60px', height: '25px'});
             $("#SOQuantity").jqxNumberInput({ width: '130px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false });
             $("#SOUnitCost").jqxNumberInput({ width: '200px', height: '25px', digits:8, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false, symbol: '£' });
             $("#SODiscount").jqxNumberInput({ width: '200px', height: '25px', digits:2, decimalDigits: 2, inputMode: 'simple',min: 0, spinButtons: false,decimalSeparator: "", decimalDigits: 0,symbol: '%',symbolPosition: 'right' });
             $("#SOTotalAmount").jqxNumberInput({ width: '200px', height: '25px', disabled: true, digits:8, decimalDigits: 2, inputMode: 'simple',symbol: '£' });
             
             
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