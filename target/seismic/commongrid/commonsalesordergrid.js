
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(5);

             var source =
            {
            		 datatype: "json",   
                 	url : basePath+'salesOrder/' + accountId + '/getSalesOrderList.json', 
                datafields:
                [
                 { name: 'salesOrderId', type: 'long' },
                 { name: 'salesOrderNumber', type: 'string' },
                 { name: 'salesOrderDate', type: 'date' },
					{ name: 'companyname', type: 'string' },
					{ name: 'salesorderamount', type: 'string' },
					{ name: 'salesOrderSalesRep', map : 'contactBySalesOrderSalesRep>contactName', type: 'string' },
                 { name: 'available', type: 'bool' }                    
             ],id:'salesOrderId',
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
            $("#saleordergrid").jqxGrid(
            {
            	width:1065,
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
                   
                  { text: 'Sales Order Number', editable: false, datafield: 'salesOrderNumber',  width: '20%', rendered: tooltiprenderer },
                  { text: 'Date', editable: false,columntype: 'datetimeinput',cellsformat: 'd', datafield: 'salesOrderDate', width: '20%', rendered: tooltiprenderer},
				  { text: 'Sales Rep', editable: false, datafield: 'salesOrderSalesRep', width: '20%', rendered: tooltiprenderer },
                  { text: 'Amount', editable: false, datafield: 'salesorderamount',width: '20%', rendered: tooltiprenderer},
				  { text: 'Status', editable: false, datafield: 'salesrep',width: '20%', rendered: tooltiprenderer}
				  
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
                   /*	var offset = $("#saleordergrid").offset();
                       $("#SOPopup").jqxWindow('open');
                       $("#SOPopup").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   var newwindow;
                	   
                	   newwindow=window.open('../../crm/salesorder/createditsalesorder.jsp?accountId='+accountId+"&url="+location.href,'_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	    if (window.focus) {newwindow.focus()}
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
                      /* var offset = $("#saleordergrid").offset();
                       $("#SOPopup").jqxWindow('open');
                       $("#SOPopup").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   
                	   
              	     var rowindex = $("#saleordergrid").jqxGrid('getselectedrowindex');
              	     var dataRecord = $("#saleordergrid").jqxGrid('getrowdata', rowindex); 
              	     if(dataRecord!=null){
              	       var salesOrderId= dataRecord.salesOrderId ;      	   	             	          
              	       window.open(basePath+"crm/salesorder/createditsalesorder.htm?salesOrderId="+salesOrderId +"&url="+location.href , name="_parent");		  
              	     }else{
              	       alert("Please select Record for Edit");
              	     }                	                     	   
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#saleordergrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#saleordergrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#saleordergrid").jqxGrid('getrowboundindex', i);
                    var value = $("#saleordergrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#saleordergrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#saleordergrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#saleordergrid").jqxGrid('endupdate');
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
            $("#saleordergrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#saleordergrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#saleordergrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#saleordergrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#saleordergrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#saleordergrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#saleordergrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#SOMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#saleordergrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#SOMenu").on('itemclick', function (event) {
            	 var args = event.args;
                 var rowindex = $("#saleordergrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Sales Order") {
                	 editrow = rowindex;
                	  var offset = $("#saleordergrid").offset();
                      
                      var rowid = $("#saleordergrid").jqxGrid('getrowid', rowindex);
                      var dataRecord = $("#saleordergrid").jqxGrid('getrowdata', editrow);
                      var salesOrderId=dataRecord.salesOrderId ; 	                     	                   	                         
	                     window.open(basePath+"crm/salesorder/createditsalesorder.htm?salesOrderId="+salesOrderId +"&url="+location.href , name="_parent");
                      
                 }
            	 
            	 
             });
 			
 			$("#saleordergrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#saleordergrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 		// create jqxWindow.
            $("#SOPopup").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen:false, width: 400, maxWidth: 1200, height: 350,showCollapseButton: true  });
             
             
             
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