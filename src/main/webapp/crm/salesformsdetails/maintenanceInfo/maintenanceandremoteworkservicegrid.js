
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(2);

             var source =
            {
                localdata: data,
                datatype: "array",
                datafields:
                [
                    { name: 'accountname', type: 'string' },
                    { name: 'salesorderid', type: 'string' },
                    { name: 'salesordername', type: 'string' },
                    { name: 'salesorderdate', type: 'date' },
					{ name: 'companyname', type: 'string' },
					{ name: 'salesorderamount', type: 'string' },
					{ name: 'salesrep', type: 'string' },
                    { name: 'available', type: 'bool' }
                    
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
            $("#maintainremotegrid").jqxGrid(
            {
            	width: 1065,
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
                  
                  { text: 'Date', editable: false, datafield: 'accountname', width: 200, rendered: tooltiprenderer },
                  { text: 'Description', editable: false, datafield: 'salesorderid', width: 300, rendered: tooltiprenderer },
                  { text: 'Quantity', editable: false, datafield: 'salesordername', width: 200, rendered: tooltiprenderer },
                  { text: 'Unit cost', editable: false, datafield: 'salesorderdate',width: 200, rendered: tooltiprenderer},
				  { text: 'Total', editable: false, datafield: 'companyname', width: 200, rendered: tooltiprenderer }
				  
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
                   /*	var offset = $("#commonactivitygrid").offset();
                       $("#jqxwindow6").jqxWindow('open');
                       $("#jqxwindow6").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   var offset = $("#maintainremotegrid").offset();
                       $("#maintenanceremotepopup").jqxWindow('open');
                       $("#maintenanceremotepopup").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
                   
                   editButton.click(function (event) {
                      /* var offset = $("#commonactivitygrid").offset();
                       $("#jqxwindow6").jqxWindow('open');
                       $("#jqxwindow6").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   var offset = $("#maintainremotegrid").offset();
                       $("#maintenanceremotepopup").jqxWindow('open');
                       $("#maintenanceremotepopup").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#maintainremotegrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#maintainremotegrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#maintainremotegrid").jqxGrid('getrowboundindex', i);
                    var value = $("#maintainremotegrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#maintainremotegrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#maintainremotegrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#maintainremotegrid").jqxGrid('endupdate');
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
            $("#maintainremotegrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#maintainremotegrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#maintainremotegrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#maintainremotegrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#maintainremotegrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#maintainremotegrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#maintainremotegrid").jqxGrid('getselectedrowindexes');
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
             
             $("#maintainProductList").jqxDropDownList({ autoDropDownHeight: true, selectedIndex: 0, width: 200, height: 23, theme: theme });
             
             var contextMenu = $("#remotemenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#maintainremotegrid").on('contextmenu', function () {
                 return false;
             });

             // handle context menu clicks.
             $("#remotemenu").on('itemclick', function (event) {
            	 var offset = $("#maintainremotegrid").offset();
                 $("#maintenanceremotepopup").jqxWindow('open');
                 $("#maintenanceremotepopup").jqxWindow('move', offset.left + 30, offset.top + 30);
                 /*else {
                     var rowid = $("#maintainremotegrid").jqxGrid('getrowid', rowindex);
                     $("#maintainremotegrid").jqxGrid('deleterow', rowid);
                 }*/
             });

             $("#maintainremotegrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#maintainremotegrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });

          // create jqxWindow.
             $("#maintenanceremotepopup").jqxWindow({ resizable: false, draggable:false, theme: 'shinyblack', autoOpen: false, width: 600, height: 180,isModal: true,modalOpacity: 0.7 });
             $("#maintainserviceFormPanel").jqxPanel({ width: 590, height: 100, sizeMode:'wrap'});
             $("#maintainremoteDate").jqxDateTimeInput({width: '200px', height: '25px'});
             $("#maintainremoteDesc").jqxInput({width: '200px', height: '25px'});
             $("#quantity").jqxNumberInput({ width: '200px', height: '25px', inputMode: 'simple', spinButtons: true });
             $("#unitcost").jqxNumberInput({ width: '200px', height: '25px', inputMode: 'simple', spinButtons: true });
             $("#save").jqxButton({ theme: theme, width:100 });
             $("#cancel").jqxButton({ theme: theme, width:100 });
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