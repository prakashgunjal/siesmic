
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
                  { text: 'Project Name', editable: false, datafield: 'projectname', width: 150, rendered: tooltiprenderer },
                  { text: 'Project Number', editable: false, datafield: 'projectnumber', width: 150, rendered: tooltiprenderer },
                  { text: 'Start Date', editable: false, datafield: 'startdate', width: 150, rendered: tooltiprenderer },
                  { text: 'End Date', editable: false, datafield: 'enddate',width: 150, rendered: tooltiprenderer},
				  { text: 'Budget', editable: false, datafield: 'budget', width: 200, rendered: tooltiprenderer },
                  { text: 'Assigned To', editable: false, datafield: 'assignedto', width: 200, rendered: tooltiprenderer},
				  { text: 'Status', editable: false, datafield: 'status', width: 100, rendered: tooltiprenderer}
				  
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
                   	var offset = $("#projectgrid").offset();
                       $("#jqxwindow3").jqxWindow('open');
                       $("#jqxwindow3").jqxWindow('move', offset.left + 30, offset.top + 30);
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
                       var offset = $("#projectgrid").offset();
                       $("#jqxwindow3").jqxWindow('open');
                       $("#jqxwindow3").jqxWindow('move', offset.left + 30, offset.top + 30);
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
             
             var contextMenu = $("#Menu3").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#projectgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu3").on('itemclick', function (event) {
            	 var offset = $("#projectgrid").offset();
                 $("#jqxwindow3").jqxWindow('open');
                 $("#jqxwindow3").jqxWindow('move', offset.left + 30, offset.top + 30);
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
 			

         // create jqxWindow.
            $("#jqxwindow3").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 1100, maxWidth:1200, height: 310 });
            $("#proStart").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#proEnd").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#proActualStart").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#proActualEnd").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#proAssigned").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#proStatus").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#proType").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#proNumber").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proAccount").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proContract").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proBudget").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proEstimated").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proActual").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#proSave").jqxButton({ theme: theme, width: '100' });
            $("#proCancel").jqxButton({ theme: theme, width: '100' });
             
            $('#proSave').on('click', function () {
                $('#proForm').jqxValidator('validate');
            });
            
            
         // initialize validator.
            $('#proForm').jqxValidator({
             rules: [
                    { input: '#proNumber', message: 'Field is required', action: 'keyup, blur', rule: 'required' },
                    { input: '#proStart', message: 'Field is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#proEnd', message: 'Field is required', action: 'keyup, blur', rule: 'required' },
                    { input: '#proAssigned', message: 'Field is required', action: 'keyup, blur', rule: 'required' },
                    { input: '#proType', message: 'Field is required', action: 'keyup, blur', rule: 'required' },
                    { input: '#proBudget', message: 'Field is required', action: 'keyup, blur', rule: 'required' },
                    { input: '#proActual', message: 'Field is required', action: 'keyup, blur', rule: 'required' }], theme: theme, position: 'topcenter', onError: function () { alert('You havent filled the form correctly!'); }
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