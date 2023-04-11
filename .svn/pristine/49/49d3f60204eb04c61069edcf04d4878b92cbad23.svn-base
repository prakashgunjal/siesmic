
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
                    { name: 'serviceaccname', type: 'string' },
                    { name: 'serviceprodname', type: 'date' },
                    { name: 'servicereqdate', type: 'string' },
					{ name: 'priority', type: 'string' },
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
            $("#servicereqgrid").jqxGrid(
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

                  { text: 'Service Request Number', editable: false, datafield: 'serviceaccname', width: '20%', rendered: tooltiprenderer },
                  { text: 'Date', editable: false, datafield: 'servicereqdate', width: '20%', rendered: tooltiprenderer},
				  { text: 'Description', editable: false, datafield: 'priority',width: '20%',rendered: tooltiprenderer },
                  { text: 'Product', editable: false, datafield: 'assignedto', width: '20%', rendered: tooltiprenderer},
                  { text: 'Status', editable: false, datafield: 'status', width: '20%', rendered: tooltiprenderer}
				  
				  
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
                   	var offset = $("#commopportunitygrid").offset();
                       $("#jqxwindow2").jqxWindow('open');
                       $("#jqxwindow2").jqxWindow('move', offset.left + 30, offset.top + 30);
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
                       var offset = $("#commopportunitygrid").offset();
                       $("#jqxwindow2").jqxWindow('open');
                       $("#jqxwindow2").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });
               },
            });
            
            $("#servicereqgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#servicereqgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#servicereqgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#servicereqgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#servicereqgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#servicereqgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#servicereqgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#servicereqgrid").jqxGrid('endupdate');
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
            $("#servicereqgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#servicereqgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#servicereqgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#servicereqgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#servicereqgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#servicereqgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#servicereqgrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#Menu2").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#servicereqgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu2").on('itemclick', function (event) {
            	 var offset = $("#commopportunitygrid").offset();
                 $("#jqxwindow2").jqxWindow('open');
                 $("#jqxwindow2").jqxWindow('move', offset.left + 30, offset.top + 30);
             });
 			
 			$("#servicereqgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#servicereqgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 			
         // create jqxWindow.
            $("#jqxwindow2").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 1050, maxWidth:1200, height: 330 });
            $("#jqx1").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx2").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx3").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx4").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx5").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx6").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#jqx7").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#combo1").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo2").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo3").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo4").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo5").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo6").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#combo7").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#first1").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first2").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first3").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first4").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first5").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first6").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first7").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first8").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first9").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first10").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first11").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first12").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first13").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first14").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first15").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first16").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first17").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first18").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#first19").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#save").jqxButton({ theme: theme, width: '100' });
            $("#cancel").jqxButton({ theme: theme, width: '100' });
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