
         $(document).ready(function () {
         var theme = getDemoTheme();                 
         var source =
            {
           	    datatype: "json",
      			url : "../accountController/accountData.json",
                datafields:
                [   {name:'accountId'}, 
                    { name: 'accountName', type: 'string' },               
                    { name: 'accountNumber', type: 'string' },  
                    { name: 'contactByPrimaryContactName.contactName',map : 'primaryContactName', type: 'string' },   
					/*{ name: 'createdAt', type: 'date' }, */
					{ name: 'primaryTelephoneNumber', type: 'string' },
					{ name: 'contact.contactName',map : 'contact>contactName', type: 'string' } 
                                   
                ],id:'accountId',
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                },beforeprocessing: function (data) {
                	source.totalrecords = data.totalElements;
                },filter: function()
                {
                	// update the grid and send a request to the server.
                	$("#accountsgrid").jqxGrid('updatebounddata', 'filter');
                },
                sort: function()
                {
                	// update the grid and send a request to the server.
                	$("#accountsgrid").jqxGrid('updatebounddata', 'sort');
                }, 
            };
                           
         $("#accountsgrid").on("pagechanged", function (event) {
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
            $("#accountsgrid").jqxGrid(
            {
            	width: '99.8%',
                source: dataAdapter,
                theme: theme,
                showfilterrow: true,
                filterable: true,
                pageable: true,
                pagesizeoptions:['15', '30', '50'],
                pagesize: 15,
                sortable: true,
                columnsresize: true,
                /* autoheight: true,*/
                height : '493px',
                altrows: true,
                showstatusbar: true,
                virtualmode: true,
                rendergridrows: rendergridrows,
                columns: [
                  
                  { text: 'Account Name', editable: false, datafield: 'accountName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Account Number', editable: false, datafield: 'accountNumber', width: '23%', rendered: tooltiprenderer },
                 /* { text: 'Created Date', editable: false,columntype: 'datetimeinput',cellsformat: 'd', datafield: 'createdAt',width: '12%', rendered: tooltiprenderer},*/
                  { text: 'Primary Contact', editable: false, datafield: 'contactByPrimaryContactName.contactName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Sales Rep', editable: false, datafield: 'contact.contactName',width: '22%', rendered: tooltiprenderer},
                  { text: 'Telephone Number', editable: false, datafield: 'primaryTelephoneNumber', width: '16%', rendered: tooltiprenderer }
				 
				  
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
                     var rowindex = $("#accountsgrid").jqxGrid('getselectedrowindex');
              	     var dataRecord = $("#accountsgrid").jqxGrid('getrowdata', rowindex); 
              	     if(dataRecord!=null){
              	     var accountId= dataRecord.accountId ;                             	        
              	     window.open("account/accounts.htm?accountId=" + dataRecord.accountId  , "_newcrm" );            	    
              	     }else{
              	    	alert("Please select Record for Edit");
              	     }
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#accountsgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#accountsgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#accountsgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#accountsgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#accountsgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#accountsgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#accountsgrid").jqxGrid('endupdate'); 
                if (checkedItemsCount == pagesize) {
                   // columnCheckBox.jqxCheckBox({ checked: true });
                }
                else if (checkedItemsCount == 0) {
                    //columnCheckBox.jqxCheckBox({ checked: false });
                }
                else {
                   // columnCheckBox.jqxCheckBox({ checked: null });
                }
            }

            // update the selection after sort.
            $("#accountsgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#accountsgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#accountsgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#accountsgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#accountsgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#accountsgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#accountsgrid").jqxGrid('getselectedrowindexes');
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

             $("#accountsgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu").on('itemclick', function (event) { 
            	 var args = event.args;
                 var rowindex = $("#accountsgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Account") {
                     editrow = rowindex; 
                     var offset = $("#accountsgrid").offset();                     
                     var rowid = $("#accountsgrid").jqxGrid('getrowid', rowindex);                                         
                     var dataRecord = $("#accountsgrid").jqxGrid('getrowdata', editrow); 
                                                                                                                    
                     window.open("account/accounts.htm?accountId=" + dataRecord.accountId,"_newcrm");
                 }  
             });
 			
 			$("#accountsgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#accountsgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();                                                            
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
             
         });

       