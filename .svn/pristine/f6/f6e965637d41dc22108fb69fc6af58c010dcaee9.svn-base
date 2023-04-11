
         $(document).ready(function () {
             var theme = getDemoTheme();         
             var source =
            {               
                     datatype: "json",
           			url : basePath+"quote/"+accountId+"/getQuoteListPerAccount.json",
                     datafields:
                     [   
                         { name: 'quoteId', type: 'string' },
                         { name: 'quoteNumber', type: 'string' },
                         { name: 'quoteDate', type: 'date' },
                         { name: 'salesformnumber', type: 'string' },
                         { name: 'createdAt', type: 'date' },
                         { name: 'salesordername', type: 'string' },
                         { name: 'estimatedValue', type: 'string' },
     					{ name: 'quoteSalesRep', type: 'string' } ,
     					{ name: 'contactName', map : 'contact>contactName', type: 'string' } 
                         
                     ],id:'quoteId',
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
            $("#quotesgrid").jqxGrid(
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
                                   
                  /*{ text: 'Quote Number', editable: false, datafield: 'quoteNumber', width: '20%', rendered: tooltiprenderer },
                  { text: 'Quote Date', editable: false, datafield: 'quoteDate', columntype: 'datetimeinput',cellsformat: 'd',width: '20%', rendered: tooltiprenderer },
                  { text: 'Contact Name', editable: false, datafield: 'contactName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Estimated Value', editable: false, datafield: 'estimatedValue', width: '20%',rendered: tooltiprenderer},
				  { text: 'Sales Rep', editable: false, datafield: 'quoteSalesRep', width: '20%', rendered: tooltiprenderer }
*/
                  { text: 'Quote Number', editable: false, datafield: 'quoteNumber', width: '20%', rendered: tooltiprenderer },
                  { text: 'Quote Date', editable: false, columntype: 'datetimeinput',cellsformat: 'd',datafield: 'quoteDate', width: '20%', rendered: tooltiprenderer },
//                  { text: 'Sales Form Number', editable: false, datafield: 'salesformnumber', width: '20%', rendered: tooltiprenderer },
                  { text: 'Contact Name', editable: false, datafield: 'contactName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Estimated Value', editable: false, datafield: 'estimatedValue',cellsformat: 'c2', width: '20%',rendered: tooltiprenderer},
				  { text: 'Sales Rep', editable: false, datafield: 'quoteSalesRep', width: '20%', rendered: tooltiprenderer }
				  
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
                	var quoteId=null;                 	              	                	  
                	window.open(basePath+"crm/quote/createditquotes.jsp?accountId="+accountId +"&url="+location.href , name="_parent" );
                             	
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
                	     var rowindex = $("#quotesgrid").jqxGrid('getselectedrowindex');
                	     var dataRecord = $("#quotesgrid").jqxGrid('getrowdata', rowindex); 
                	     
                	     if(dataRecord!=null){
                	       var quoteId= dataRecord.quoteId ;             	       
                	       window.open(basePath+"crm/quote/createditquotes.htm?quoteId="+quoteId +"&url="+location.href , name="_parent" );
                	     }else{
                	    	alert("Please select Record for Edit");
                	     }                	                     
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#quotesgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#quotesgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#quotesgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#quotesgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#quotesgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#quotesgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#quotesgrid").jqxGrid('endupdate');
                if (checkedItemsCount == pagesize) {
                //    columnCheckBox.jqxCheckBox({ checked: true });
                }
                else if (checkedItemsCount == 0) {
                 //   columnCheckBox.jqxCheckBox({ checked: false });
                }
                else {
                  //  columnCheckBox.jqxCheckBox({ checked: null });
                }
            }

            // update the selection after sort.
            $("#quotesgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#quotesgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#quotesgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#quotesgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#quotesgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#quotesgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#quotesgrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#QuoteMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#quotesgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#QuoteMenu").on('itemclick', function (event) {             
            	 var rowindex = $("#quotesgrid").jqxGrid('getselectedrowindex');
          	     var dataRecord = $("#quotesgrid").jqxGrid('getrowdata', rowindex); 
          	     
          	     if(dataRecord!=null){
          	       var quoteId= dataRecord.quoteId ;             	       
          	       window.open(basePath+"crm/quote/createditquotes.htm?quoteId="+quoteId+"&url="+location.href  , name="_parent" );
          	     }else{
          	    	alert("Please select Record for Edit");
          	     }
          	     
            	 /*
                 var args = event.args;
                 var rowindex = $("#quotesgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Row") {
                     editrow = rowindex;
                     var offset = $("#quotesgrid").offset();
                     $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });

                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#quotesgrid").jqxGrid('getrowdata', editrow);
                     $("#firstName").val(dataRecord.firstname);
                     $("#lastName").val(dataRecord.lastname);
                     $("#product").val(dataRecord.productname);
                     $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
                     $("#price").jqxNumberInput({ decimal: dataRecord.price });

                     // show the popup window.
                     $("#popupWindow").jqxWindow('show');
                 }
                 else {
                     var rowid = $("#quotesgrid").jqxGrid('getrowid', rowindex);
                     $("#quotesgrid").jqxGrid('deleterow', rowid);
                 }
            */ });
 			
 			$("#quotesgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#quotesgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 		// create jqxWindow.
            $("#QuotePopup").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen:false, width: 1150, maxWidth: 1200, height: 500,showCollapseButton: true  });
             
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