
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
                    { name: 'prodcat', type: 'string' },
                    { name: 'prodsubcat', type: 'string' },
                    { name: 'prod', type: 'string' },
                    { name: 'qty', type: 'string' },
                    { name: 'uom', type: 'string' },
                    { name: 'serialize', type: 'boolean' },
                    { name: 'unitcost', type: 'int' },
                    { name: 'description', type: 'string' }
                    
                    
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
            $("#serialprodgrid").jqxGrid(
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
				width:'1078px',
                columns: [
                  
						{ text: 'Product Category', editable: true, columntype:"dropdownlist", datafield: 'prodcat', width: '200px', rendered: tooltiprenderer },
						{ text: 'Product Sub-category', editable: true,columntype:"dropdownlist", datafield: 'prodsubcat', width: '200px', rendered: tooltiprenderer },
						{ text: 'Product', editable: true,columntype:"dropdownlist",datafield: 'prod', width: '200px', rendered: tooltiprenderer },
						{ text: 'Serialized', editable: true, datafield: 'serialize', width: '100px', rendered: tooltiprenderer },
						{ text: 'QTY', editable: true, datafield: 'qty', width: '100px', rendered: tooltiprenderer },
						{ text: 'UOM', editable: true, datafield: 'uom', width: '50px', rendered: tooltiprenderer },
						{ text: 'Unit Cost', editable: true, datafield: 'unitcost', width: '100px', rendered: tooltiprenderer },
						{ text: 'Description', editable: true, datafield: 'description', width: '200px', rendered: tooltiprenderer }
 	  
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
                	   var newwindow;
                	   newwindow=window.open('#','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	    if (window.focus) {newwindow.focus()}
                   });
                   
                   editButton.click(function (event) {
                      /* var offset = $("#commonactivitygrid").offset();
                       $("#jqxwindow6").jqxWindow('open');
                       $("#jqxwindow6").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   var newwindow;
                	   newwindow=window.open('#','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	    if (window.focus) {newwindow.focus()}
                   });
               },
            });
            
            $("#serialprodgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#serialprodgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#serialprodgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#serialprodgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#serialprodgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#serialprodgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#serialprodgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#serialprodgrid").jqxGrid('endupdate');
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
            $("#serialprodgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#serialprodgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#serialprodgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#serialprodgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#serialprodgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#serialprodgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#serialprodgrid").jqxGrid('getselectedrowindexes');
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