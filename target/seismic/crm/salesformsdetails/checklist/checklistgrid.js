var selProdCatId;
var selDocId;
$(document).ready(function () {
            var theme = "";
            
            var jsonProdCats;
            var jsonDocs;
            var curCell;
            
            // prepare the data
            var responses = new Array();
            function getResponses(){
                $.ajax({
        			  url: basePath + 'salesOrder/' + soId + '/checklistDocResponses.json',
        			  type: 'GET',
        			  contentType: 'application/json; charset=utf-8',
        			  dataType: 'json',
        			  async:false
        		  	}).done(function( data ) {
        		  		jsonDocs = data;
            	  })
            	  .fail(function(){
            		  alert("Error occured while getting data.");
            	  });
            }
            getResponses();
            
            /*var datafields = new Array();*/
            $.ajax({
			  url: basePath + 'salesOrder/' + soId + '/checklistProductCategories.json',
			  type: 'GET',
			  contentType: 'application/json; charset=utf-8',
			  dataType: 'json',
			  async:false
		  	}).done(function( data ) {
		  		jsonProdCats = data;
    	  })
    	  .fail(function(){
    		  alert("Error occured while getting data.");
    	  });


            var cellsrenderer = function (row, column, value) {
//            	var index = $('#checklistgrid').jqxGrid('getcolumnindex', column);
            	var index = Number(column.slice(-1));
            	if(value == 'Noneditable')
            		return "";
            	else if (value == 'Editable')
            		return '<div style="background-color:yellow;text-align: center; margin: 0;padding:0;height:100%">&nbsp</div>';
            	else if (value == 'Uploaded')
            		return "<div style='background-color:green;text-align: center; margin: 0;padding:0;height:100%'>"
            						+ jsonDocs[0][row].uiResps[index].filename + "</div>";
            }
            
            var datafields = new Array();
            var gridCols = new Array();
            datafields.push({name : "documentName", map : "checklistDocumentName" })
           	gridCols.push({text: "", datafield: 'documentName', pinned: "true", width: "25%"})
            for(var i=0; i < jsonProdCats.length; i++){
            	datafields.push({name : "datafield" + i, map : "uiResps>" + i + ">status"});
               	gridCols.push({text: jsonProdCats[i].productCategory, datafield: "datafield" + i, cellsrenderer: cellsrenderer, width: "10%"})
            }
            var source =
            {
                localdata: jsonDocs[0],
                datatype: "array",
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
                datafields: datafields
                /*[
                    { name: 'Paperwork Description', type: 'string' }                   
                ]*/
            };
            
            var dataAdapter = new $.jqx.dataAdapter(source);

            var createGridEditor = function(row, cellValue, editor, cellText, width, height)
            {
                // construct the editor.
                
                    var element = $('<div tabIndex=0 style="position: absolute; top: 50%; left: 50%; margin-top: -7px; margin-left: -10px;"></div>');
                    editor.append(element);
                    element.jqxCheckBox({ animationShowDelay: 0, animationHideDelay: 0, width: 16, height: 16, theme: theme });
               
            }

            var initGridEditor = function (row, cellValue, editor, cellText, width, height) {
                // set the editor's current value. The callback is called each time the editor is displayed.
              
                    var checkBoxHTMLElement = editor.find('div:first');
                    checkBoxHTMLElement.jqxCheckBox({ checked: cellValue.toString() == "true" });
               
            }

            var gridEditorValue = function (row, cellValue, editor) {
                if (row == 2) {
                    var checkBoxHTMLElement = editor.find('div:first');
                    return checkBoxHTMLElement.val();
                }

                return editor.val();
            }
            
            var tooltiprenderer = function (element) {
                $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
            }

            // initialize jqxGrid
            $("#checklistgrid").jqxGrid(
            {
            	width: '99.8%',
                source: dataAdapter,
                theme: theme,
                filterable: true,
                pagesize: 50,
                columnsresize: true,
                autoheight: false,
                altrows: true,              
                selectionmode: 'singlecell',
                columns: gridCols
            });
            
            $('#totalGridSubmitBtn').on('click', function () {
                $.ajax({
                    url: basePath + "salesOrder/" + soId + "/checklistGridSubmit", 
                    type: 'POST',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    async:false
                })
                .done(function( data ) {
        	    	location.reload(true); 
                }).fail(function(){
      		  		alert("Error occured while saving data.");
      		  	});            	
            	//jqxCheckBox('check');
            });
         

            $('#multiform').submit(function() { 
                // inside event callbacks 'this' is the DOM element so we first 
                // wrap it in a jQuery object and then invoke ajaxSubmit 
                $(this).ajaxSubmit({
                url: basePath + "salesOrder/" + soId + "/checklistDocument/save?" +
	        		"productCatId=" + selProdCatId + 
	        		"&checklistDocId=" + selDocId, 
        		type: 'POST',
        	    success: function() {
        	    	$('#checklistWindow').jqxWindow('close');
//                	getResponses();
                	
//                	dataAdapter.dataBind();
//                	$("#checklistgrid").jqxGrid({source:dataAdapter});
        	    	location.reload(true); 
        	    },
                error: function() {
        	    	alert('Error occured while saving data');
        	    }
        	    }); 
         
                // !!! Important !!! 
                // always return false to prevent standard browser submit and page navigation 
                return false; 
            }); 
            
            var contextMenu = $("#checkMenu").jqxMenu({ width: 200, height: 58, autoOpenPopup: false, mode: 'popup', theme: theme });
            var contextMenuNoDownload = $("#checkMenuNoDownload").jqxMenu({ width: 200, height: 32, autoOpenPopup: false, mode: 'popup', theme: theme });

            $("#checklistgrid").on('contextmenu', function () {
                return false;
            });
			
			// handle context menu clicks.
            $("#checkMenu").on('itemclick', function (event) {
                var args = event.args;
                var rowindex = $("#checklistgrid").jqxGrid('getselectedrowindex');
                if($.trim($(args).text()) == "Upload Document"){
                	showUploadPopup(event);
                }
                else if($.trim($(args).text()) == "Download Document"){
                	var row = curCell.row;
                	var index = Number(curCell.column.slice(-1));
                	location.href = basePath + "salesOrder/" + soId + "/viewChecklistFilename?" +
					"filename=" + jsonDocs[0][row].uiResps[index].filename +
					"&fileKey=" + jsonDocs[0][row].uiResps[index].fileKey;
                }
            });
			
			// handle context menu clicks.
            $("#checkMenuNoDownload").on('itemclick', function (event) {
                var args = event.args;
                var rowindex = $("#checklistgrid").jqxGrid('getselectedrowindex');
                if($.trim($(args).text()) == "Upload Document"){
                	showUploadPopup(event);
                }
            });
			
			$("#checklistgrid").on('cellclick', function (event) {
				if(soSubmitStatus) return;
				
                if (event.args.rightclick) {
    			    var column = event.args.column;
    			    var rowindex = event.args.rowindex;
    			    var columnindex = event.args.columnindex;
    			    selProdCatId = jsonProdCats[columnindex - 1].productCategoryId;
    			    selDocId = jsonDocs[0][rowindex].checklistDocumentId;
    			    curCell = $('#checklistgrid').jqxGrid('getcell', rowindex, column.datafield);
    			    var value = $("#checklistgrid").jqxGrid('getcellvalue', rowindex, column.datafield);
    			    if((value == "Editable") || (value == "Uploaded")){
                        var scrollTop = $(window).scrollTop();
                        var scrollLeft = $(window).scrollLeft();
    			    	if(value == "Uploaded"){
                            contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
    			    	}
    			    	else{
                            contextMenuNoDownload.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);
    			    	}
    			    }
    			    

                    return false;
                }
            });
            
			function showUploadPopup(event) {
				if(soSubmitStatus) return;

			    if((curCell.value == "Editable") || (curCell.value == "Uploaded")){
			        /*window.open(basePath + "crm/salesformsdetails/checklistdocument.jsp?soId=" + soId 
			        		+ "&productCatId=" + jsonProdCats[columnindex - 1].productCategoryId + "&checklistDocId=" + jsonDocs[0][rowindex].checklistDocumentId , name="_blank",'screen.height,screen.width');*/
			    	var offset = $("#checklistgrid").offset();
			      $("#checklistWindow").jqxWindow('open');
			      $("#checklistWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
			    }
			}
			
			$("#checklistWindow").jqxWindow({ cancelButton: $("#cancelBtn"), resizable: false,draggable:false,position: 'center', isModal:true, modalOpacity:0.7, theme: 'shinyblack', autoOpen: false, width: 800, maxWidth: 1200, height:200, maxHeight:800 });
            $("#checklistPanel").jqxPanel({ width: 780, height: 100, sizeMode:'fixed'});
            $("#checklistUpload").jqxButton({ theme: theme, width: '100' });
            $("#checklistPanel1").jqxPanel({ width: 700, height: 100, sizeMode:'fixed'});
            $("#checklistPanel2").jqxPanel({ width: 500, height: 80, sizeMode:'fixed'});
            $("#saveBtn").jqxButton({ theme: theme, width: '100' });
            $("#cancelBtn").jqxButton({ theme: theme, width: '100' });
            $("#totalGridSubmitBtn").jqxButton({ theme: 'shinyblack', width: '100', disabled: ((soSubmitStatus) || !(jsonDocs[1]))});
        });

