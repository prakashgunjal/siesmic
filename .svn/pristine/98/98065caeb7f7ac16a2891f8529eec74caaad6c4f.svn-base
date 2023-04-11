
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
                { name: 'prodcat', type: 'string' },
				{ name: 'prodsubcat', type: 'string' },
				{ name: 'prod', type: 'string' },
				{ name: 'qty', type: 'string' },
				{ name: 'uom', type: 'string' },
				{ name: 'serialize', type: 'boolean' },
				{ name: 'unitcost', type: 'int' },
				{ name: 'totalamount', type: 'string' }
                    
                    
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
            $("#commonprodgrid").jqxGrid(
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
            var pageinfo = $("#contactsgrid").jqxGrid('getpaginginformation');
            var pagenum = pageinfo.pagenum;
            var pagesize = pageinfo.pagesize;
            if (checked == null || updatingCheckState) return;
            $("#contactsgrid").jqxGrid('beginupdate');

            // select all rows when the column's checkbox is checked.
            if (checked) {
                $("#contactsgrid").jqxGrid('selectallrows');
            }
            // unselect all rows when the column's checkbox is checked.
            else if (checked == false) {
                $("#contactsgrid").jqxGrid('clearselection');
            }

            // update cells values.
            var startrow = pagenum * pagesize;
            for (var i = startrow; i < startrow + pagesize; i++) {
                // The bound index represents the row's unique index. 
                // Ex: If you have rows A, B and C with bound indexes 0, 1 and 2, afer sorting, the Grid will display C, B, A i.e the C's bound index will be 2, but its visible index will be 0.
                // The code below gets the bound index of the displayed row and updates the value of the row's available column.
                var boundindex = $("#contactsgrid").jqxGrid('getrowboundindex', i);
                $("#contactsgrid").jqxGrid('setcellvalue', boundindex, 'available', event.args.checked);
            }

            $("#contactsgrid").jqxGrid('endupdate');
        });
        return true;
    }
},
				  { text: 'Product Category', editable: true, datafield: 'prodcat', width: '200px', rendered: tooltiprenderer },
                  { text: 'Product Sub-category', editable: true, datafield: 'prodsubcat', width: '200px', rendered: tooltiprenderer },
                  { text: 'Product', editable: true, datafield: 'prod', width: '200px', rendered: tooltiprenderer },
                  { text: 'Serialized', editable: true, datafield: 'serialize', width: '100px', rendered: tooltiprenderer },
                  { text: 'QTY', editable: true, datafield: 'qty', width: '100px', rendered: tooltiprenderer },
                  { text: 'UOM', editable: true, datafield: 'uom', width: '50px', rendered: tooltiprenderer },
                  { text: 'Unit Cost', editable: true, datafield: 'unitcost', width: '100px', rendered: tooltiprenderer },
                  { text: 'Total Amount', editable: true, datafield: 'description', width: '200px', rendered: tooltiprenderer }  
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
                       var selectedrowindex = $("#commonprodgrid").jqxGrid('getselectedrowindex');
                       var rowscount = $("#commonprodgrid").jqxGrid('getdatainformation').rowscount;
                       if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                           var id = $("#commonprodgrid").jqxGrid('getrowid', selectedrowindex);
                           $("#commonprodgrid").jqxGrid('deleterow', id);
                       }
                   });
               },
            });
            
            $("#commonprodgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#commonprodgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#commonprodgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#commonprodgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#commonprodgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#commonprodgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#commonprodgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#commonprodgrid").jqxGrid('endupdate');
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
            $("#commonprodgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#commonprodgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#commonprodgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#commonprodgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#commonprodgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#commonprodgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#commonprodgrid").jqxGrid('getselectedrowindexes');
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