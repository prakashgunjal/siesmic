
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
                    { name: 'productnames', type: 'string' },
                    { name: 'receiptid', type: 'string' },
                    { name: 'productlot', type: 'date' },
                    { name: 'serialnum', type: 'date' },
					{ name: 'prodstatus', type: 'string' },
					{ name: 'moddate', type: 'date' }
					
                    
                    
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
            $("#intprogrid").jqxGrid(
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
                              var pageinfo = $("#intprogrid").jqxGrid('getpaginginformation');
                              var pagenum = pageinfo.pagenum;
                              var pagesize = pageinfo.pagesize;
                              if (checked == null || updatingCheckState) return;
                              $("#intprogrid").jqxGrid('beginupdate');

                              // select all rows when the column's checkbox is checked.
                              if (checked) {
                                  $("#intprogrid").jqxGrid('selectallrows');
                              }
                              // unselect all rows when the column's checkbox is checked.
                              else if (checked == false) {
                                  $("#intprogrid").jqxGrid('clearselection');
                              }

                              // update cells values.
                              var startrow = pagenum * pagesize;
                              for (var i = startrow; i < startrow + pagesize; i++) {
                                  // The bound index represents the row's unique index. 
                                  // Ex: If you have rows A, B and C with bound indexes 0, 1 and 2, afer sorting, the Grid will display C, B, A i.e the C's bound index will be 2, but its visible index will be 0.
                                  // The code below gets the bound index of the displayed row and updates the value of the row's available column.
                                  var boundindex = $("#intprogrid").jqxGrid('getrowboundindex', i);
                                  $("#intprogrid").jqxGrid('setcellvalue', boundindex, 'available', event.args.checked);
                              }

                              $("#intprogrid").jqxGrid('endupdate');
                          });
                          return true;
                      }
                  },
                  { text: 'Product Name', editable: false, datafield: 'productnames', width: 240, rendered: tooltiprenderer },
                  { text: 'Receipt ID', editable: false, datafield: 'receiptid', width: 200, rendered: tooltiprenderer },
                  { text: 'Product Lot', editable: false, datafield: 'productlot', width: 200, rendered: tooltiprenderer },
                  { text: 'Serial Number', editable: false, datafield: 'serialnum',width: 200, rendered: tooltiprenderer},
				  { text: 'Product Status', editable: false, datafield: 'prodstatus', width: 200, rendered: tooltiprenderer },
                  { text: 'Modified Date', editable: false, datafield: 'moddate', width: 200, rendered: tooltiprenderer }	  
               ],
               renderstatusbar: function (statusbar) {
                   // appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");
                   
                   container.append(deleteButton);
                   
                   statusbar.append(container);
                   deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   // add new row.
                   
                   // delete selected row.
                   deleteButton.click(function (event) {
                       var selectedrowindex = $("#intprogrid").jqxGrid('getselectedrowindex');
                       var rowscount = $("#intprogrid").jqxGrid('getdatainformation').rowscount;
                       if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                           var id = $("#intprogrid").jqxGrid('getrowid', selectedrowindex);
                           $("#intprogrid").jqxGrid('deleterow', id);
                       }
                   });
               },
            });
            
            $("#intprogrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#intprogrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#intprogrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#intprogrid").jqxGrid('getrowboundindex', i);
                    var value = $("#intprogrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#intprogrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#intprogrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#intprogrid").jqxGrid('endupdate');
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
            $("#intprogrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#intprogrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#intprogrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#intprogrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#intprogrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#intprogrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#intprogrid").jqxGrid('getselectedrowindexes');
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