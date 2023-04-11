
         $(document).ready(function () {
             var theme = getDemoTheme();

             // prepare the data
             var data = preparegriddata(5);

             var source =
            {
     				datatype: "json",
    				url : basePath+"crm/opportunity/contactOpportunityReport.json?contactId="+contactId,
                    datafields:
                    [
                        { name: 'opportunityId', type: 'string' },
                        { name : 'opportunityNumber', type: 'string'},
                        { name: 'accountName',map : 'account>accountName', type: 'string' },
                        { name: 'accountNumber',map : 'account>accountNumber', type: 'string' },
                        { name: 'opportunityDate', type: 'date' },
//    					{ name: 'opportunitySalesRep', type: 'string' },
    					{ name: 'opportunitySalesRep', map: 'contactByOpportunitySalesRep>contactName', type: 'string' },
    					{ name: 'estimatedValue', type: 'string' },
    					{ name: 'opportunityPriority',map : 'listValuesByOpportunityPriorityId>listValueDescription', type: 'string' }
                    ],
                    updaterow: function (rowid, rowdata, commit) {
                        // synchronize with the server - send update command   
                        commit(true);
                    }
                };
             
             $('#save').on('click', function () {
                 $('#opporform').jqxValidator('validate');
             });

             var dataAdapter = new $.jqx.dataAdapter(source);
             var columnCheckBox = null;
             var updatingCheckState = false;
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }


             // initialize jqxGrid. Disable the built-in selection.
            $("#commopportunitygrid").jqxGrid(
            {
            	width:'99.8%',
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
                  {text: 'opportunity Id',hidden :true, datafield: 'opportunityId',width: '15%'},
                  { text: 'Opportunity Number', editable: false, datafield: 'opportunityNumber', width: '20%', rendered: tooltiprenderer },
                  { text: 'Account Name', editable: false, datafield: 'accountName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Account Number', editable: false, datafield: 'accountNumber', width: '20%', rendered: tooltiprenderer },
                  { text: 'Date', editable: false, columntype: 'datetimeinput',cellsformat: 'd',datafield: 'opportunityDate',width: '20%', rendered: tooltiprenderer},
				  { text: 'Sales Rep', editable: false, datafield: 'opportunitySalesRep', width: '20%', rendered: tooltiprenderer },
				  { text: 'Estimated Value', editable: false, datafield: 'estimatedValue',width: '20%', rendered: tooltiprenderer},
				  { text: 'Priority', editable: false, datafield: 'opportunityPriority', width: '20%', rendered: tooltiprenderer}
				  
               ],
               renderstatusbar: function (statusbar) {
                   // appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
//                   var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
                   /*var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
                   var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                   
//                   container.append(addButton);
                   /*container.append(deleteButton);*/
                   container.append(editButton);
         
                   statusbar.append(container);
//                   addButton.jqxButton({ theme: theme, width: 60, height: 20 });
                   /*deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });*/
                   editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
               /*    // add new row.
                   addButton.click(function (event) {
                   	var offset = $("#commopportunitygrid").offset();
                       $("#jqxwindow1").jqxWindow('open');
                       $("#jqxwindow1").jqxWindow('move', offset.left + 30, offset.top + 30);
                       $('#opporForm')[0].reset();
                	   var newwindow;
                	   newwindow=window.open(basePath+"crm/opportunity/createditOpportunity.htm?opportunityvalue=" + dataRecord.opportunityId,'_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	    if (window.focus) {newwindow.focus()}
                   });
                   */
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
                     /*  var offset = $("#commopportunitygrid").offset();
                       $("#jqxwindow1").jqxWindow('open');
                       $("#jqxwindow1").jqxWindow('move', offset.left + 30, offset.top + 30);*/
                	   var rowindex = $("#commopportunitygrid").jqxGrid('getselectedrowindex');
                	   var dataRecord = $("#commopportunitygrid").jqxGrid('getrowdata', rowindex);
                	   if(dataRecord!=null){
                		   var newwindow;
                	   newwindow=window.open(basePath+"crm/opportunity/createditOpportunity.htm?opportunityId=" + dataRecord.opportunityId,'_parent','height=400,width=1000');   // it takes lotsof more arguments you can use as per your needs  
                	    if (window.focus) {newwindow.focus()}
                	   }else{
                		 alert("Please select Record for Edit");
                 	   }
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#commopportunitygrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#commopportunitygrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#commopportunitygrid").jqxGrid('getrowboundindex', i);
                    var value = $("#commopportunitygrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#commopportunitygrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#commopportunitygrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                $("#commopportunitygrid").jqxGrid('endupdate');
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
            $("#commopportunitygrid").on('sort', function (event) {
                updatePageState();
            });

             // update the selection after page change.
            $("#commopportunitygrid").on('pagechanged', function (event) {
                 updatePageState();
             });

             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#commopportunitygrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#commopportunitygrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#commopportunitygrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

                 // update the state of the column's checkbox. When all checkboxes on the displayed page are checked, we need to check column's checkbox. We uncheck it,
                 // when there are no checked checkboxes on the page and set it to intederminate state when there is at least one checkbox checked on the page.  
                 if (columnCheckBox) {
                     var datainfo = $("#commopportunitygrid").jqxGrid('getdatainformation');
                     var pagesize = datainfo.paginginformation.pagesize;
                     var pagenum = datainfo.paginginformation.pagenum;
                     var selectedRows = $("#commopportunitygrid").jqxGrid('getselectedrowindexes');
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
             
             var contextMenu = $("#Menu1").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#commopportunitygrid").on('contextmenu', function () {
                 return false;
             });
 			
 			// handle context menu clicks.
             $("#Menu1").on('itemclick', function (event) {
//            	 var offset = $("#commopportunitygrid").offset();
//                 $("#jqxwindow1").jqxWindow('open');
//                 $("#jqxwindow1").jqxWindow('move', offset.left + 30, offset.top + 30);
//                 
            	 var args = event.args;
                 var rowindex = $("#commopportunitygrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Opportunity") {
                	 editrow = rowindex;
                	  var offset = $("#commopportunitygrid").offset();
                      
                      var rowid = $("#commopportunitygrid").jqxGrid('getrowid', rowindex);
                      var dataRecord = $("#commopportunitygrid").jqxGrid('getrowdata', editrow);
                      window.open(basePath+"crm/opportunity/createditOpportunity.htm?opportunityId=" + dataRecord.opportunityId, name="_blank"/*,'screen.height,screen.width'*/);
                 }
                 
             
                 
             });
 			
 			$("#commopportunitygrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#commopportunitygrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
                     return false;
                 }
             });
 			

         // create jqxWindow.
            $("#jqxwindow1").jqxWindow({ resizable: false, theme: 'shinyblack', autoOpen: false, width: 1100, maxWidth:1200, height: 530 });
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
            
         // initialize validator.
            $('#opporform').jqxValidator({
             rules: [
                    { input: '#first1', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
                    { input: '#realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
                    { input: '#realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
                    { input: '#passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
                    { input: '#passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus', rule: function (input, commit) {
                        // call commit with false, when you are doing server validation and you want to display a validation error on this field. 
                        if (input.val() === $('#passwordInput').val()) {
                            return true;
                        }
                        return false;
                    }
                    },
                    { input: '#emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '#emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
                    { input: '#ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
                    { input: '#phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
                    { input: '#zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
                    { input: '#acceptInput', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:0,0'}], theme: theme
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