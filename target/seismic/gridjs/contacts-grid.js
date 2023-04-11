
         $(document).ready(function () {
             var theme = getDemoTheme();
             
             var cTypeSource = {
            		 
            		 datatype :"json",
            		 url	:	"../contact/ContactTypes.json",
            		 datafields : 
            			 [
            			  {name : 'listValueId'},
            			  {name : 'listValueDescription', type : 'string'}
            			  ]
             }
             var getLocalization = function () {
                 var localizationobj = {};
                 localizationobj.pagergotopagestring = "Gehe zu:";
                 localizationobj.pagershowrowsstring = "Zeige Zeile:";
                 localizationobj.pagerrangestring = " von ";
                 localizationobj.pagernextbuttonstring = "voriger";
                 localizationobj.pagerpreviousbuttonstring = "n�chster";
                 localizationobj.sortascendingstring = "Sortiere aufsteigend";
                 localizationobj.sortdescendingstring = "Sortiere absteigend";
                 localizationobj.sortremovestring = "Entferne Sortierung";
                 localizationobj.firstDay = 1;
                 localizationobj.percentsymbol = "%";
                 localizationobj.currencysymbol = "�";
                 localizationobj.currencysymbolposition = "after";
                 localizationobj.decimalseparator = ".";
                 localizationobj.thousandsseparator = ",";
                 var days = {
                     // full day names
                     names: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
                     // abbreviated day names
                     namesAbbr: ["Sonn", "Mon", "Dien", "Mitt", "Donn", "Fre", "Sams"],
                     // shortest day names
                     namesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
                 };
                 localizationobj.days = days;
                 var months = {
                     // full month names (13 months for lunar calendards -- 13th month should be "" if not lunar)
                     names: ["Januar", "Februar", "M�rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
                     // abbreviated month names
                     namesAbbr: ["Jan", "Feb", "M�r", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez", ""]
                 };
                 var patterns = {
                     d: "dd.MM.yyyy",
                     D: "dddd, d. MMMM yyyy",
                     t: "HH:mm",
                     T: "HH:mm:ss",
                     f: "dddd, d. MMMM yyyy HH:mm",
                     F: "dddd, d. MMMM yyyy HH:mm:ss",
                     M: "dd MMMM",
                     Y: "MMMM yyyy"
                 }
                 localizationobj.patterns = patterns;
                 localizationobj.months = months;
                 localizationobj.todaystring = "Heute";
                 localizationobj.clearstring = "L�schen";
                 return localizationobj;
             }

             var source =
            {
				datatype: "json",
				url : "../contact/contactReport.json",
                datafields:
                [
                 	{name:'contactId'},
                    { name: 'contactNumber', type: 'string' },
                    { name: 'contactName', type: 'string' },
                    { name: 'listValues.listValueDescription', map : 'listValues>listValueDescription', type: 'string' },
                    { name: 'title', type: 'string' },
                    { name: 'department', type: 'date' },
                    { name: 'contactdate', type: 'date' },
					{ name: 'emailId', type: 'string' },
					{ name: 'telephone', type: 'string' }
                    
                ],
                id: 'contactId',
                
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                }, 
                beforeprocessing: function (data) {
                	source.totalrecords = data.totalElements;
                },filter: function()
         		{
         			// update the grid and send a request to the server.
         			$("#contactsgrid").jqxGrid('updatebounddata', 'filter');
         		},
         		sort: function()
         		{
         			// update the grid and send a request to the server.
         			$("#contactsgrid").jqxGrid('updatebounddata', 'sort');
         		}, 
            };
             
             var rendergridrows = function () {
                 return dataAdapter.records;
             }
          
             $("#contactsgrid").on("pagechanged", function (event) {
                 var args = event.args;
                 var pagenum = args.pagenum;
                 var pagesize = args.pagesize;
                 $.jqx.cookie.cookie("jqxGrid_jqxWidget", pagenum);
             });
             var dataAdapter = new $.jqx.dataAdapter(source);
             var cTypeAdapter = new $.jqx.dataAdapter(cTypeSource);

             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }
             // initialize jqxGrid. Disable the built-in selection.
            $("#contactsgrid").jqxGrid(
            {
                source: dataAdapter,
                theme: theme,
                selectionmode: 'singlerow',
                showfilterrow: true,
                filterable: true,
                pageable: true,
                sortable: true,
                columnsresize: true,
               /* autoheight: true,*/
                height : '493px',
                pagesize: 15,
				pagesizeoptions: ['15', '30', '50'],
                virtualmode: true,
                altrows: true,
                showstatusbar: true,
                localization: getLocalization(),
               
				width:'99.8%',
				rendergridrows: rendergridrows,
                columns: [
                  { text: 'Contact Name', editable: false, datafield: 'contactName', width: '15%', rendered: tooltiprenderer },
				  { text: 'Contact Number', editable: false, datafield: 'contactNumber', width: '23%', rendered: tooltiprenderer },				
				  { text: 'Contact Type', editable: false, datafield: 'listValues.listValueDescription', width: '16%', rendered: tooltiprenderer },
				  {text: 'Title', editable: false, datafield: 'title', width: '14%', rendered: tooltiprenderer},
				  { text: 'Telephone Number', editable: false, datafield: 'telephone',width: '16%', rendered: tooltiprenderer},
				  { text: 'Email Address', editable: false, datafield: 'emailId',width: '20%', rendered: tooltiprenderer}
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
                   
                   editButton.click(function (event) {
                       var offset = $("#contactsgrid").offset();
                       var rowindex = $("#contactsgrid").jqxGrid('getselectedrowindex');
                 	  
                	   var dataRecord = $("#contactsgrid").jqxGrid('getrowdata', rowindex);
                	   
                      
                	   if(dataRecord!=null){
                	   var opportunityId= dataRecord.opportunityId ;
                	   window.open("contacts/contact.htm?contactId=" + dataRecord.contactId, name="_newcrm");            	    
                	   }else{
                		 alert("Please select Record for Edit");
                 	   }
                	});
               },
            });

           
             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#contactsgrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#contactsgrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#contactsgrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

             });
             
             var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#contactsgrid").on('contextmenu', function () {
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
 			
 			// handle context menu clicks.
             $("#Menu").on('itemclick', function (event) {
                 var args = event.args;
                 var rowindex = $("#contactsgrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Contact") {
                     editrow = rowindex;
                     var offset = $("#contactsgrid").offset();
                     
                     var rowid = $("#contactsgrid").jqxGrid('getrowid', rowindex);
                     
                    
//                     $("#popupWindow").jqxWindow({ position: { x: parseInt(offset.left) + 60, y: parseInt(offset.top) + 60} });
                   
                     // get the clicked row's data and initialize the input fields.
                     var dataRecord = $("#contactsgrid").jqxGrid('getrowdata', editrow);
                      window.open("contacts/contact.htm?contactId=" + dataRecord.contactId, "_newcrm");
                     
                 }
                 else {
                     var rowIDs = $("#contactsgrid").jqxGrid('getrowid', rowindex);
                     $("#contactsgrid").jqxGrid('deleterow', rowIDs);
                 }
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
             
         });      