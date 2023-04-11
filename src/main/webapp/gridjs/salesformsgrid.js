
         $(document).ready(function () {
             var theme = getDemoTheme();

                    var source =
            {
        		datatype: "json",
    			url : "../salesOrder/salesOrderReport.json?soType=salesForm",
                datafields:
                [	{name:'salesOrderId'},
                    { name: 'accountname',map : 'account>accountName', type: 'string' },
                    { name: 'accountNumber',map : 'account>accountNumber', type: 'string' },
                    { name: 'salesOrderNumber', type: 'string' },
                    { name: 'salesOrderDate', type: 'date' },
					{ name: 'salesorderamount', type: 'string' },
					{ name: 'contactBySalesOrderSalesRep.contactName',map : 'contactBySalesOrderSalesRep>contactName', type: 'string' }
                ],id:'salesOrderId',
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                },beforeprocessing: function (data) {
                	source.totalrecords = data.totalElements;
                },filter: function()
                {
                	// update the grid and send a request to the server.
                	$("#saleordergrid").jqxGrid('updatebounddata', 'filter');
                },
                sort: function()
                {
                	// update the grid and send a request to the server.
                	$("#saleordergrid").jqxGrid('updatebounddata', 'sort');
                }, 
            };
                           
         $("#saleordergrid").on("pagechanged", function (event) {
        	 var args = event.args;
        	 var pagenum = args.pagenum;
        	 var pagesize = args.pagesize;
        	 $.jqx.cookie.cookie("jqxGrid_jqxWidget", pagenum);
        	});
         
         var rendergridrows = function () {
        	 return dataAdapter.records;
        	}

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;
             
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }

             // initialize jqxGrid. Disable the built-in selection.
            $("#salesgrid").jqxGrid(
            {
            	 source: dataAdapter,
                 theme: theme,
                 showfilterrow: true,
                 filterable: true,
                 pageable: true,
                 sortable: true,
                 columnsresize: true,
                 /* autoheight: true,*/
                 height : '493px',
                 pagesizeoptions:['20', '30', '50'],
                 pagesize: 30,
                 altrows: true,
                 showstatusbar: true,
 				width:'99.8%',
 				virtualmode: true,
                rendergridrows: rendergridrows,
                columns: [
                 
                  { text: 'Account Name', editable: false, datafield: 'accountname', width: 150, rendered: tooltiprenderer },
                  { text: 'Account Number', editable: false, datafield: 'accountNumber', width: 150, rendered: tooltiprenderer },
                  { text: 'Sales Order Name', editable: false, datafield: 'salesOrderNumber', width: 200, rendered: tooltiprenderer },
                  { text: 'Sales Order Date', editable: false, filtertype: 'date',columntype: 'datetimeinput',cellsformat: 'd', datafield: 'salesOrderDate', rendered: tooltiprenderer},
				  { text: 'Sales Order Amount', editable: false, datafield: 'salesorderamount', width: 200, rendered: tooltiprenderer },
                  { text: 'Sales Rep', editable: false, datafield: 'contactBySalesOrderSalesRep.contactName', width: 200, rendered: tooltiprenderer }
				  
               ],
               renderstatusbar: function (statusbar) {
            	// appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   /*var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");*/
                   /*var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
                   var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                   
                   /*container.append(addButton);*/
                   /*container.append(deleteButton);*/
                   container.append(editButton);
         
                   statusbar.append(container);
                   /*addButton.jqxButton({ theme: theme, width: 60, height: 20 });*/
                   /*deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });*/
                   editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   // add new row.
                   /*addButton.click(function (event) {
                   	var offset = $("#contactsgrid").offset();
                       $("#jqxwindow5").jqxWindow('open');
                       $("#jqxwindow5").jqxWindow('move', offset.left + 30, offset.top + 30);
                   });*/
                   
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
                     
                	   var offset = $("#salesgrid").offset();
                       var rowindex = $("#salesgrid").jqxGrid('getselectedrowindex');
                 	  
                	   var dataRecord = $("#salesgrid").jqxGrid('getrowdata', rowindex);
                	   
                      
                	   if(dataRecord!=null){
                	   var opportunityId= dataRecord.opportunityId ;
                	   window.open("salesformsdetails/cover.htm?salesOrderId=" + dataRecord.salesOrderId, "_newcrm");            	    
                	   }else{
                		 alert("Please select Record for Edit");
                 	   }
                	   
                   });
               },
            });
            
            $("#salesgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth;
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#salesgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#salesgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#salesgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#salesgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#salesgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#salesgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#salesgrid").jqxGrid('endupdate');
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
            $("#salesgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#salesgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#salesgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#salesgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#salesgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#salesgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#salesgrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });
             $("#salesgrid").on('contextmenu', function () {
                 return false;
             });
             function changeContent(url, window) {
                 window.jqxWindow('setContent', 'Loading...');
                 $.ajax({
                     dataType: 'jsonp',
                     url: url,
                     success: function (data) {
                         window.jqxWindow('setContent', data[0].text);
                     },
                     error: function () {
                         window.jqxWindow('setContent', 'Error');
                     }
                 });
             }
             
             $("#Menu").on('itemclick', function (event) {
                 var args = event.args;
                 var rowindex = $("#salesgrid").jqxGrid('getselectedrowindex');
               
                 if ($.trim($(args).text()) == "Edit Selected Sales Form") {
                     editrow = rowindex;
                     var offset = $("#salesgrid").offset();
 
                  
                     var rowid = $("#salesgrid").jqxGrid('getrowid', rowindex);
                 
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#salesgrid").jqxGrid('getrowdata', editrow);
                     
                    /* $("#firstName").val(dataRecord.firstname);
                     $("#lastName").val(dataRecord.lastname);
                     $("#product").val(dataRecord.productname);
                     $("#quantity").jqxNumberInput({ decimal: dataRecord.quantity });
                     $("#price").jqxNumberInput({ decimal: dataRecord.price });*/
                    //  $("#popupWindow").jqxWindow({ location: 'http://localhost:8080/seismic/lead/Lead/EditLead/1', url: 'http://localhost:8080/seismic/lead/Lead/EditLead/1', position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });

                     // show the popup window.
                    //
                     window.open("salesformsdetails/cover.htm?salesOrderId=" + dataRecord.salesOrderId, "_newcrm"/*,'screen.height,screen.width'*/);
                     // editLeadUrl = "http://localhost:8080/seismic/lead/Lead/EditLead/" + dataRecord.id;
                     // $("#popupWindow").jqxWindow('open');
                 
                     // changeContent('http://localhost:8080/seismic/lead/Lead/EditLead/'+ dataRecord.leadId, $('#popupWindow'));

                 }
                 else {
                     var rowid = $("#salesgrid").jqxGrid('getrowid', rowindex);
                     $("#salesgrid").jqxGrid('deleterow', rowid);
                 }
             });
 			
 			$("#salesgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#salesgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
             
         });
