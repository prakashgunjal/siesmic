
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(5);

             var source =
            {
                datatype: "json",
   			 	url : "/seismic/commonjsppages/documentController/viewDocument.json?documentId="+moduleId+"&moduleName="+moduleName,
                datafields:
                [
					{ name: 'id', type: 'string' },
                    { name: 'docName', type: 'string' },
                    { name: 'entityName', type: 'string' },
					{ name: 'createdDate', type: 'date' }
                    ,{name: 'link', type:'string'}
                    ,{name: 'owner', type:'string'}

					                   
                ],
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                }
            };
             
             var linkrenderer = function (row, column, value) {
            	 
            	 var id = $("#commondocgrid").jqxGrid('getcellvalue', row, "link");
//                 if (value.indexOf('#') != -1) {
//                     value = value.substring(0, value.indexOf('#'));
//                     value = value.href
//                 }
                // var html = $.jqx.dataFormat.formatlink(url1, format);
                 return '<a href="' + id + '" target="_blank"><div style ="color:green; font-weight: bold">Download</div></a>';
                 
             }

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;
             
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }

             // initialize jqxGrid. Disable the built-in selection.
            $("#commondocgrid").jqxGrid(
            {
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
                width:1342,
                columns: [
                   { text: '', datafield: 'link',hidden: true },
                  { text: 'Date', editable: false,columntype: 'datetimeinput',cellsformat: 'd', datafield: 'createdDate', width: 150, rendered: tooltiprenderer },
                  { text: 'Document Title', editable: false, datafield: 'docName', width: 300, rendered: tooltiprenderer },
                  { text: 'File Name', editable: false, datafield: 'entityName', width: 300,  rendered: tooltiprenderer},
                  { text: 'Owner', editable: false, datafield: 'owner', width: 200,  rendered: tooltiprenderer},
                  {text: 'Attachments', datafield: 'download',cellsrenderer: linkrenderer}
                  	  
               ],
               renderstatusbar: function (statusbar) {
                   // appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
                   /*var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
//                   var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                   
                   container.append(addButton);
                   /*container.append(deleteButton);*/
//                   container.append(editButton);
         
                   statusbar.append(container);
                   addButton.jqxButton({ theme: theme, width: 60, height: 20 });
                   /*deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });*/
//                   editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   // add new row.
                   addButton.click(function (event) {
                	   var newwindow;                	 
                	   newwindow=window.open('../../commonjsppages/document/document.jsp?documentId='+moduleId+"&moduleName="+moduleName+"&url="+location.href ,'_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}
                   });
                   
                   /*editButton.click(function (event) {
                	   var newwindow;
                	   newwindow=window.open('../../commonjsppages/document/document.jsp','_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}
                   });*/
               },
            });
            
            $("#commondocgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#commondocgrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#commondocgrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#commondocgrid").jqxGrid('getrowboundindex', i);
                    var value = $("#commondocgrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#commondocgrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#commondocgrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#commondocgrid").jqxGrid('endupdate');
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
            $("#commondocgrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#commondocgrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#commondocgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#commondocgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#commondocgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#commondocgrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#commondocgrid").jqxGrid('getselectedrowindexes');
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
             
             
             var contextMenu = $("#Menu7").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#commondocgrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
           /*  $("#Menu7").on('itemclick', function (event) {
                 var args = event.args;
                 var rowindex = $("#commondocgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Document Record") {
                	 editrow = rowindex;
                	  var offset = $("#commondocgrid").offset();
                      
                      var rowid = $("#commondocgrid").jqxGrid('getrowid', rowindex);
                      var dataRecord = $("#commondocgrid").jqxGrid('getrowdata', editrow);
                      
                      window.open("seismic/commonjsppages/document/viewDocument.htm?documentId="+opportunityvalue+"&moduleName="+moduleName, name="_blank",'screen.height,screen.width');
                 }
                 
             });*/
 			
 			$("#commondocgrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#commondocgrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                     
                     return false;
                 }
             });
 			

         // create jqxWindow.
            $("#jqxwindow7").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 400, maxWidth:1200, height: 280 });

            $("#docdate").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#docTitle").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#docowner").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#docSave").jqxButton({ theme: theme, width: '100' });
            $("#doccancel").jqxButton({ theme: theme, width: '100' }); 
            
            
            $('#docSave').on('click', function () {
                $('#docForm').jqxValidator('validate');
            });
            
            $('#doccancel').click(function () {
         		$('#doccancel').jqxWindow('close');
         	});
         // initialize validator.
            $('#docForm').jqxValidator({
             rules: [
                    { input: '#docTitle', message: 'Document title is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#attachments', message: 'Field is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#docowner', message: 'Field is required', action: 'keyup, blur', rule: 'required' }], theme: theme
            });
            
             
         });