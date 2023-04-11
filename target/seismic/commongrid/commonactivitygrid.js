
         $(document).ready(function () {
             var theme = getDemoTheme();

             var source =
            {
				datatype: "json",
				url :  basePath + 'generalActivity/generalActivityData.json?moduleId=' + moduleId,
                datafields:
                [	{ name: 'generalActivityId'},
                 	{ name: 'listValueDescription', map : 'listValuesByGeneralActivityEntityType>listValueDescription', type: 'string' },
                 	{ name: 'listValueDescription', map : 'listValuesByGeneralActivityType>listValueDescription', type: 'string' },
                 	{name: 'entityNumber'},
                 	{name : 'generalActivityAssignedTo',map : 'contact>contactName'},
                 	{name : 'generalActivityEntityName'},
                 	{ name: 'generalActivitySubject', type: 'string' },
                 	
                    { name: 'generalActivityStartDate', type: 'date' },
                    { name: 'generalActivityStartTime', type: 'string' },
                    { name: 'generalActivityEndTime', type: 'string' },
                    { name: 'generalActivityEndDate', type: 'date' },
					{ name: 'generalActivityDescription', type: 'string' }					                   
                ],id: 'generalActivityId',
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
            $("#commonactivitygrid").jqxGrid(
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

                  { text: 'Activity type', editable: false, datafield: 'listValueDescription', width: 210, rendered: tooltiprenderer },
                  { text: 'Assigned to', editable: false, datafield: 'generalActivityAssignedTo', width: 200, rendered: tooltiprenderer },
                  { text: 'Subject', filterable: false, editable: false, datafield: 'generalActivitySubject',width: 240,  rendered: tooltiprenderer },
                  { text: 'Start date', editable: false, datafield: 'generalActivityStartDate',columntype: 'datetimeinput', width: 100,rendered: tooltiprenderer},
                  { text: 'Start time', editable: false, datafield: 'generalActivityStartTime', width: 100, rendered: tooltiprenderer },
                  { text: 'End time', editable: false, datafield: 'generalActivityEndTime', width: 100, rendered: tooltiprenderer },
                  { text: 'End date', editable: false, datafield: 'generalActivityEndDate',columntype: 'datetimeinput', width: 100, rendered: tooltiprenderer },
                  { text: 'Notes', filterable: false, editable: false, datafield: 'generalActivityDescription', width: 300, rendered: tooltiprenderer }
                  	  
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
                	  // var url= basePath+ 'crm/Lead/createditlead.htm?leadId='+ leadId;	
                	  // alert("addButton:: leadId="+leadId );
                	   newwindow=window.open(basePath+'commonjsppages/activities/activities.htm?documentId='+moduleId+'&moduleName='+moduleName +"&url="+location.href , name='_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	   if (window.focus) {newwindow.focus()}
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
                	   var newwindow;
                	   var rowindex = $("#commonactivitygrid").jqxGrid('getselectedrowindex');
                	   editrow = rowindex;
                	   var offset = $("#commonactivitygrid").offset();
                       var dataRecord = $('#commonactivitygrid').jqxGrid('getrowdata', rowindex);
             		   var activityId = dataRecord.generalActivityId;             			 
             		   // var url= basePath+ 'crm/Lead/createditlead.htm?leadId='+ leadId;	             		              		  
                	   newwindow=window.open("../../commonjsppages/activities/activities.htm?generalActivityId=" + activityId+"&url="+location.href , name="_parent");  
                	   if (window.focus) {newwindow.focus()}
                   });
               },
            });
            
            $("#commonactivitygrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#commonactivitygrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#commonactivitygrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#commonactivitygrid").jqxGrid('getrowboundindex', i);
                    var value = $("#commonactivitygrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#commonactivitygrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#commonactivitygrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#commonactivitygrid").jqxGrid('endupdate');
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
            $("#commonactivitygrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#commonactivitygrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#commonactivitygrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#commonactivitygrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#commonactivitygrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#commonactivitygrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#commonactivitygrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#Menu5").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#commonactivitygrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu5").on('itemclick', function (event) {
            	 var newwindow;
            	 var args = event.args;
                 var rowindex = $("#commonactivitygrid").jqxGrid('getselectedrowindex');
                
                  if ($.trim($(args).text()) == "Edit Selected Activity") {
                 	 editrow = rowindex;
                 	 var offset = $("#commonactivitygrid").offset();
                     var dataRecord = $('#commonactivitygrid').jqxGrid('getrowdata', rowindex);
           			 var activityId = dataRecord.generalActivityId;
           			// var url= basePath+ 'crm/Lead/createditlead.htm?leadId='+ leadId;	 
                     window.open("../../commonjsppages/activities/activities.htm?generalActivityId=" + activityId+"&url="+location.href , name="_parent");
                      
                  }
                  
                  
             });
 			
 			$("#commonactivitygrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#commonactivitygrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
 			

         // create jqxWindow.
            $("#jqxwindow5").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 400, maxWidth:1200, height: 360 });
            $("#activityDate").jqxDateTimeInput({width: '200px', height: '25px', theme: theme});
            $("#activityType").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#activityMin").jqxComboBox({width: '200', height: '25px', theme: theme });
            $("#activityName").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#activityDesc").jqxInput({ theme: theme, width: '200', height: '20px' });
            $("#actSave").jqxButton({ theme: theme, width: '100' });
            $("#actCancel").jqxButton({ theme: theme, width: '100' });
            
            $('#actSave').on('click', function () {
                $('#activityForm').jqxValidator('validate');
            });
            
            
         // initialize validator.
            $('#activityForm').jqxValidator({
             rules: [
                    { input: '#activityName', message: 'Activity name is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#activityType', message: 'Field is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#activityDesc', message: 'Field is required', action: 'keyup, blur', rule: 'required' }], theme: theme
            });
            
             
         });