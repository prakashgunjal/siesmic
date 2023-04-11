
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(5);

             var source =
            {
                localdata: data,
                datatype: "array",
                datafields:
                [
                 { name: 'contractname', type: 'string' },
                 { name: 'contractdate', type: 'date' },
                 { name: 'contracttype', type: 'string' },
                 { name: 'accountname', type: 'string' },
                 { name: 'Amount', type: 'string' },
				 { name: 'discount', type: 'string' }
  
                ],
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
            $("#commoncontractgrid").jqxGrid(
            {
            	width: 1078,
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

                  { text: 'Contract Name', editable: false, datafield: 'contractname', width: 240, rendered: tooltiprenderer },
                  { text: 'Contract date', editable: false, datafield: 'contractdate', width: 200, rendered: tooltiprenderer },
                  { text: 'Contract Type', editable: false, datafield: 'contracttype', width: 200, rendered: tooltiprenderer },
                  { text: 'Account Name', editable: false, datafield: 'accountname',width: 200, rendered: tooltiprenderer},
				  { text: 'Amount', editable: false, datafield: 'Amount', width: 200, rendered: tooltiprenderer },
				  { text: 'Discount', editable: false, datafield: 'discount', width: 200, rendered: tooltiprenderer }
                  	  
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
                   	var offset = $("#commoncontractgrid").offset();
                       $("#ContractPopup").jqxWindow('open');
                       $("#ContractPopup").jqxWindow('move', offset.left + 30, offset.top + 30);
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
                       var offset = $("#commoncontractgrid").offset();
                       $("#ContractPopup").jqxWindow('open');
                       $("#ContractPopup").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
               },
            });
            
            $("#commoncontractgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth;
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#commoncontractgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#commoncontractgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#commoncontractgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#commoncontractgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#commoncontractgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#commoncontractgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#commoncontractgrid").jqxGrid('endupdate');
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
            $("#commoncontractgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#commoncontractgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#commoncontractgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#commoncontractgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#commoncontractgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#commoncontractgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#commoncontractgrid").jqxGrid('getselectedrowindexes');
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
             
             
             var contextMenu = $("#ContractMenu").jqxMenu({ width: 200, height: 58, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#commoncontractgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#ContractMenu").on('itemclick', function (event) {
                 var args = event.args;
                 var rowindex = $("#commoncontractgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Row") {
                     editrow = rowindex;
                     var offset = $("#commoncontractgrid").offset();
                     $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });

                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#commoncontractgrid").jqxGrid('getrowdata', editrow);
                     $("#firstName").val(dataRecord.firstname);
                     $("#lastName").val(dataRecord.lastname);
                     $("#product").val(dataRecord.productname);
                     $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
                     $("#price").jqxNumberInput({ decimal: dataRecord.price });

                     // show the popup window.
                     $("#popupWindow").jqxWindow('show');
                 }
                 else {
                     var rowid = $("#commoncontractgrid").jqxGrid('getrowid', rowindex);
                     $("#commoncontractgrid").jqxGrid('deleterow', rowid);
                 }
             });
 			
 			$("#commoncontractgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#commoncontractgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 		// create jqxWindow.
            $("#ContractPopup").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen:false, width: 400, maxWidth: 1200, height: 350,showCollapseButton: true  });
             
             
             
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