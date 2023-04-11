
         $(document).ready(function () {
             var theme = getDemoTheme();


             var source =
            {
				datatype: "json",
				url : basePath+"crm/opportunity/opportunityReport.json",
                datafields:
                [
                 	{ name: 'opportunityId', type: 'int' },
                    { name: 'opportunityNumber', type: 'string' },
                    { name: 'account.accountName',map : 'account>accountName', type: 'string' },
                    { name: 'account.accountNumber',map : 'account>accountNumber', type: 'string' },
                    { name: 'opportunityDate', type: 'date' },
					{ name: 'contactByOpportunitySalesRep.contactName', map: 'contactByOpportunitySalesRep>contactName', type: 'string' },
					{ name: 'estimatedValue', type: 'number' },
					{ name: 'listValuesByOpportunityPriorityId.listValueDescription',map : 'listValuesByOpportunityPriorityId>listValueDescription', type: 'string' }
                ],
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command   
                    commit(true);
                },beforeprocessing: function (data) {
                	source.totalrecords = data.totalElements;
                },filter: function()
                {
                	// update the grid and send a request to the server.
                	$("#opportunitygrid").jqxGrid('updatebounddata', 'filter');
                },
                sort: function()
                {
                	// update the grid and send a request to the server.
                	$("#opportunitygrid").jqxGrid('updatebounddata', 'sort');
                }, 
            };
             var rendergridrows = function () {
            	 return dataAdapter.records;
            	}
            	          
            	$("#opportunitygrid").on("pagechanged", function (event) {
            	 var args = event.args;
            	 var pagenum = args.pagenum;
            	 var pagesize = args.pagesize;
            	 $.jqx.cookie.cookie("jqxGrid_jqxWidget", pagenum);
            	});
             var dataAdapter = new $.jqx.dataAdapter(source);
             var tooltiprenderer = function (element) {
                 $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
             }
             var getLocalization = function () {
                 var localizationobj = {};
               //  localizationobj.pagergotopagestring = "Gehe zu:";
               //  localizationobj.pagershowrowsstring = "Zeige Zeile:";
              //   localizationobj.pagerrangestring = " von ";
              //   localizationobj.pagernextbuttonstring = "voriger";
               //  localizationobj.pagerpreviousbuttonstring = "nächster";
              //   localizationobj.sortascendingstring = "Sortiere aufsteigend";
              //   localizationobj.sortdescendingstring = "Sortiere absteigend";
                // localizationobj.sortremovestring = "Entferne Sortierung";
                 localizationobj.firstDay = 1;
                 localizationobj.percentsymbol = "%";
                 localizationobj.currencysymbol = " £";
                 localizationobj.currencysymbolposition = "before";
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
                     names: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""],
                     // abbreviated month names
                     namesAbbr: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dez", ""]
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
                // localizationobj.patterns = patterns;
                // localizationobj.months = months;
               //  localizationobj.todaystring = "Heute";
               //  localizationobj.clearstring = "Löschen";
                 return localizationobj;
             }
             // initialize jqxGrid. Disable the built-in selection.
            $("#opportunitygrid").jqxGrid(
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
                pagesizeoptions:['15', '30', '50'],
                pagesize: 15,
                altrows: true,
                localization: getLocalization(),
                showstatusbar: true,
                statusbarheight: 40,
                virtualmode: true,
                rendergridrows: rendergridrows,
				width:'99.8%',
                columns: [
                  { text: 'Opportunity Number', editable: false, datafield: 'opportunityNumber', width: '23%', rendered: tooltiprenderer },
                  { text: 'Account Name', editable: false, datafield: 'account.accountName', width: '20%', rendered: tooltiprenderer },
                  { text: 'Account Number', editable: false, datafield: 'account.accountNumber', width: '23%', rendered: tooltiprenderer },
                  { text: 'Date', editable: false,filtertype: 'date',columntype: 'datetimeinput',cellsformat: 'd', datafield: 'opportunityDate',width: '12%', rendered: tooltiprenderer},
				  { text: 'Sales Rep', editable: false, datafield: 'contactByOpportunitySalesRep.contactName', width: '22%', rendered: tooltiprenderer },
				  { text: 'Estimated Value', editable: false,filtertype: 'number', datafield: 'estimatedValue',width: '13%',cellsformat: 'c2', rendered: tooltiprenderer},
				  { text: 'Priority', editable: false, datafield: 'listValuesByOpportunityPriorityId.listValueDescription', width: '15%', rendered: tooltiprenderer}
				  
               ],
               renderstatusbar: function (statusbar) {
            	// appends buttons to the status bar.
                   var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                   //var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");
                   /*var deleteButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/close.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Delete</span></div>");*/
                   var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                   
                   //container.append(addButton);
                   /*container.append(deleteButton);*/
                   container.append(editButton);
         
                   statusbar.append(container);
                   //addButton.jqxButton({ theme: theme, width: 60, height: 20 });
                   /*deleteButton.jqxButton({ theme: theme, width: 65, height: 20 });*/
                   editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                   
                   editButton.click(function () {
                	   var rowindex = $("#opportunitygrid").jqxGrid('getselectedrowindex');
                	  
                	   var dataRecord = $("#opportunitygrid").jqxGrid('getrowdata', rowindex);
                	   if(dataRecord!=null){
                	   var opportunityId= dataRecord.opportunityId ;
                		   window.open(basePath+"crm/opportunity/createditOpportunity.htm?opportunityId=" + opportunityId, "_newcrm" );            	    
                	   }else{
                		 alert("Please select Record for Edit");
                 	   }
                   });
               },
            });

            var updatePageState = function (pagenum) {
                var datainfo = $("#opportunitygrid").jqxGrid('getdatainformation');
                var pagenum = datainfo.paginginformation.pagenum;
                var pagesize = datainfo.paginginformation.pagesize;
                var startrow = pagenum * pagesize;
                // select the rows on the page.
                $("#opportunitygrid").jqxGrid('beginupdate');
                var checkedItemsCount = 0;
                for (var i = startrow; i < startrow + pagesize; i++) {
                    var boundindex = $("#opportunitygrid").jqxGrid('getrowboundindex', i);
                    var value = $("#opportunitygrid").jqxGrid('getcellvalue', boundindex, 'available');
                    if (value) checkedItemsCount++;
                    if (value) {
                        $("#opportunitygrid").jqxGrid('selectrow', boundindex);
                    }
                    else {
                        $("#opportunitygrid").jqxGrid('unselectrow', boundindex);
                    }
                }

                
            }


             // select or unselect rows when a checkbox is checked or unchecked. 
             $("#opportunitygrid").on('cellvaluechanged', function (event) {
                 if (event.args.value) {
                     $("#opportunitygrid").jqxGrid('selectrow', event.args.rowindex);
                 }
                 else {
                     $("#opportunitygrid").jqxGrid('unselectrow', event.args.rowindex);
                 }

              
             });
             
             var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

             $("#opportunitygrid").on('contextmenu', function () {
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
                 var rowindex = $("#opportunitygrid").jqxGrid('getselectedrowindex');
                 if ($.trim($(args).text()) == "Edit Selected Opportunity") {
                	 editrow = rowindex;
                	  var offset = $("#opportunitygrid").offset();
                      
                      var rowid = $("#opportunitygrid").jqxGrid('getrowid', rowindex);
                      var dataRecord = $("#opportunitygrid").jqxGrid('getrowdata', editrow);
                      window.open(basePath+"crm/opportunity/createditOpportunity.htm?opportunityId=" + dataRecord.opportunityId, "_newcrm" );
                 }
                 
             });
 			
 			$("#opportunitygrid").on('rowclick', function (event) {
                 if (event.args.rightclick) {
                     $("#opportunitygrid").jqxGrid('selectrow', event.args.rowindex);
                     var scrollTop = $(window).scrollTop();
                     var scrollLeft = $(window).scrollLeft();
                     contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                     return false;
                 }
             });
         });

