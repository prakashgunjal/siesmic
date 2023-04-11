
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(200);

             var source =
            {
                localdata: data,
                datatype: "array",
                datafields:
                [
                    { name: 'projectname', type: 'string' },
                    { name: 'projectnumber', type: 'string' },
                    { name: 'startdate', type: 'date' },
                    { name: 'enddate', type: 'date' },
					{ name: 'budget', type: 'string' },
					{ name: 'assignedto', type: 'string' },
					{ name: 'status', type: 'string' }
                    
                    
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
            $("#projectgrid").jqxGrid(
            {
                source: dataAdapter,
                editable: true,
                theme: theme,
                enablehover: false,
                selectionmode: 'rowselection',
                pageable: true,
                sortable: true,
                autoheight: true,
                columnsresize: true,
                statusbarheight: 35,
                showstatusbar: true,
				width:'99.8%',
                columns: [
                  {
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
                              var pageinfo = $("#projectgrid").jqxGrid('getpaginginformation');
                              var pagenum = pageinfo.pagenum;
                              var pagesize = pageinfo.pagesize;
                              if (checked == null || updatingCheckState) return;
                              $("#projectgrid").jqxGrid('beginupdate');

                              // select all rows when the column's checkbox is checked.
                              if (checked) {
                                  $("#projectgrid").jqxGrid('selectallrows');
                              }
                              // unselect all rows when the column's checkbox is checked.
                              else if (checked == false) {
                                  $("#projectgrid").jqxGrid('clearselection');
                              }

                              // update cells values.
                              var startrow = pagenum * pagesize;
                              for (var i = startrow; i < startrow + pagesize; i++) {
                                  // The bound index represents the row's unique index. 
                                  // Ex: If you have rows A, B and C with bound indexes 0, 1 and 2, afer sorting, the Grid will display C, B, A i.e the C's bound index will be 2, but its visible index will be 0.
                                  // The code below gets the bound index of the displayed row and updates the value of the row's available column.
                                  var boundindex = $("#projectgrid").jqxGrid('getrowboundindex', i);
                                  $("#projectgrid").jqxGrid('setcellvalue', boundindex, 'available', event.args.checked);
                              }

                              $("#projectgrid").jqxGrid('endupdate');
                          });
                          return true;
                      }
                  },
                  { text: 'Project Name', editable: false, datafield: 'projectname', width: 150, rendered: tooltiprenderer },
                  { text: 'Project Number', editable: false, datafield: 'projectnumber', width: 150, rendered: tooltiprenderer },
                  { text: 'Start Date', editable: false, datafield: 'startdate', width: 200, rendered: tooltiprenderer },
                  { text: 'End Date', editable: false, datafield: 'enddate', rendered: tooltiprenderer},
				  { text: 'Budget', editable: false, datafield: 'budget', width: 200, rendered: tooltiprenderer },
                  { text: 'Assigned To', editable: false, datafield: 'assignedto', width: 200, rendered: tooltiprenderer},
				  { text: 'Status', editable: false, datafield: 'status', width: 200, rendered: tooltiprenderer}
				  
               ],
               renderstatusbar: function (statusbar) {
                   // appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");
                   
                   container.append(deleteButton);
                   
                   statusbar.append(container);
                   deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   // add new row.
                   
                   // delete selected row.
                   deleteButton.click(function (event) {
                       var selectedrowindex = $("#projectgrid").jqxGrid('getselectedrowindex');
                       var rowscount = $("#projectgrid").jqxGrid('getdatainformation').rowscount;
                       if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                           var id = $("#projectgrid").jqxGrid('getrowid', selectedrowindex);
                           $("#projectgrid").jqxGrid('deleterow', id);
                       }
                   });
               },
            });
            
            $("#projectgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#projectgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#projectgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#projectgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#projectgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#projectgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#projectgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#projectgrid").jqxGrid('endupdate');
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
            $("#projectgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#projectgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#projectgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#projectgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#projectgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#projectgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#projectgrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 58, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#projectgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu").on('itemclick', function (event) {
                 var args = event.args;
                 var rowindex = $("#projectgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Row") {
                     editrow = rowindex;
                     var offset = $("#projectgrid").offset();
                     $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });

                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#projectgrid").jqxGrid('getrowdata', editrow);
                     $("#firstName").val(dataRecord.firstname);
                     $("#lastName").val(dataRecord.lastname);
                     $("#product").val(dataRecord.productname);
                     $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
                     $("#price").jqxNumberInput({ decimal: dataRecord.price });

                     // show the popup window.
                     $("#popupWindow").jqxWindow('show');
                 }
                 else {
                     var rowid = $("#projectgrid").jqxGrid('getrowid', rowindex);
                     $("#projectgrid").jqxGrid('deleterow', rowid);
                 }
             });
 			
 			$("#projectgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#projectgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
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