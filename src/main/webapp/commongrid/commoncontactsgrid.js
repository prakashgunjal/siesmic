
         $(document).ready(function () {
             var theme = getDemoTheme();
             var source =
            {
     				datatype: "json",
    				url : basePath+"contact/commonContactReport.json?accountId="+accountId,
                    datafields:
                    [
                     	{name:'contactId'},
                        { name: 'contactNumber', type: 'string' },
                        { name: 'contactName', type: 'string' },
                        { name: 'listValueDescription', map : 'listValues>listValueDescription', type: 'string' },
                        { name: 'title', type: 'string' },
                        { name: 'department', type: 'date' },
                        { name: 'contactdate', type: 'date' },
    					{ name: 'emailId', type: 'string' },
    					{ name: 'telephone', type: 'string' }/*,					
    					{ name: 'website', type: 'string' }*/
                        
                    ],
                    id: 'contactId',
                    updaterow: function (rowid, rowdata, commit) {
                        // synchronize with the server - send update command   
                        commit(true);
                    }/*, 
                    deleterow : function(rowid, commit) {
    					if (rowid > 0) {
    						$.ajax({
    							url : 'contact/deleteContactDetails/'
    									+ rowid,
    							type : 'DELETE',
    							dataType : 'json',
    							async : false
    						})
    						commit(true);
    					}    	
                    }*/
                };

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }
             // initialize jqxGrid. Disable the built-in selection.
            $("#contactsgrid").jqxGrid(
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
                  
                          { text: 'Contact Name', editable: false, datafield: 'contactName', width: '15%', rendered: tooltiprenderer },
        				  { text: 'Contact Number', editable: false, datafield: 'contactNumber', width: '23%', rendered: tooltiprenderer },				
        				 // { text: 'Date',columntype: 'datetimeinput',cellsformat: 'd', editable: false, datafield: 'contactdate',width: '12%', rendered: tooltiprenderer},
                          { text: 'Contact Type', editable: false, datafield: 'listValueDescription', width: '16%', rendered: tooltiprenderer },
        				  { text: 'Title', editable: false, datafield: 'title', width: '14%', rendered: tooltiprenderer },
        				  { text: 'Telephone Number', editable: false, datafield: 'telephone',width: '16%', rendered: tooltiprenderer},
        				  { text: 'Email Address', editable: false, datafield: 'emailId',width: '20%', rendered: tooltiprenderer}				  
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
                	   var newwindow;                     	   
                	   newwindow=window.open(basePath +"crm/contacts/createditcontacts.jsp?accountId="+accountId+ "&url="+location.href ,"_parent","height=400,width=1000");  
                	        
                	   if (window.focus) {newwindow.focus()}
                	   
                	   //var addId = dataRecord.addressId;  
                      // window.open("../../commonjsppages/address/address.htm?addressId=" + addId, name="_blank");
                       
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
                	   var rowindex = $("#contactsgrid").jqxGrid('getselectedrowindex');
                	   var dataRecord = $("#contactsgrid").jqxGrid('getrowdata', rowindex); 
                	   
                	   if(dataRecord!=null){
                	     var contactId= dataRecord.contactId ;                         
                	     var newwindow;     
                	     newwindow=window.open(basePath +"crm/contacts/contact.htm?contactId="+contactId+"&url="+location.href ,  "_parent","height=400,width=1000");                	                   	                     
                	     if (window.focus) {newwindow.focus()}
                	   }else{
                		 alert("Please select Record for Edit");
                 	   }
                	   
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#contactsgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#contactsgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#contactsgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#contactsgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#contactsgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#contactsgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#contactsgrid").jqxGrid('endupdate');
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
            $("#contactsgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#contactsgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#contactsgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#contactsgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#contactsgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#contactsgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#contactsgrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#ContactsMenu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#contactsgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#ContactsMenu").on('itemclick', function (event) {            	
               var rowindex = $("#contactsgrid").jqxGrid('getselectedrowindex');
          	   var dataRecord = $("#contactsgrid").jqxGrid('getrowdata', rowindex); 
          	   var contactId= dataRecord.contactId ;                         
          	   var newwindow;              
          	   newwindow=window.open(basePath +"crm/contacts/contact.htm?contactId="+contactId+"&url="+location.href ,  "_parent","height=400,width=1000");       
            	
          	   if (window.focus) {newwindow.focus()}
             });
 			
 			$("#contactsgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#contactsgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 		// create jqxWindow.
            $("#ContactsPopup").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen:false, width: 400, maxWidth: 1200, height: 350,showCollapseButton: true  });
             
         });

