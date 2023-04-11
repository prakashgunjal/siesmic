    var productDDLSource = Array();
    var productDDLAdapter = Array();
    var source = Array();
    var dataAdapter = Array();
    var tasksDDLSrc = Array();
    var tasksDDLAdapter = Array();
    var activeSpecTab = 0;
    var specData = new Array();
    var tabInitFunc = new Array();
    var editrow = -1;
    var skipUpdateRow = false;
    var strTasks = "";
    var editQuesRespId = -1;
$(document).ready(function () {
    var theme = getDemoTheme();

    var specTypes = new Array("System","Maintenance",/*"Services", */"Line Services",
    		"SIP Services", "Hosted Services", "xDSL Services", "Circuit Services", "Co-Location Services");

    var actSource =
    {
        datatype: "json",
		url : basePath + "salesOrder/emptyArray",
        datafields:
        [
	      	{ name: 'taskId', type: 'number'},
	     	{ name: 'taskName', map: 'taskName'},
	      	{ name: 'taskResponseId', type: 'number'},
         	{ name: 'activityId', type: 'number'},
         	{ name: 'activityName', type: 'string'},
         	{ name: 'activityResponseId', type: 'number'},
            { name: 'activityStartDate', type: 'date' },
            { name: 'activityEndDate', type: 'date' },
            { name: 'selectedFlag', type: 'bool' },
            { name: 'assignedTo', type: 'string' }
        ],
        updaterow: function (rowid, rowdata, commit) {
    		if(!rowdata.assignedTo){
    			rowdata.assignedTo = "";
    		}
    		
          $.ajax({
              url: basePath + "salesOrder/" + soId + "/specifications/sfSpecActivity/save", 
              type: 'POST',
              data: JSON.stringify(rowdata),
  			  contentType: 'application/json; charset=utf-8',
              dataType: 'json',
              async:false
          })
          
          .done(function( data ) {
				if(rowdata.activityResponseId < 0){
					rowdata.activityResponseId = data.activityResponseId;
				}
	            commit(true);
          }).fail(function(){
		  		alert("Error occured while saving data.");
		  	});
        }
    };
    var actDataAdapter = new $.jqx.dataAdapter(actSource);
    // initialize jqxGrid
    $("#activitypopupgrid").jqxGrid(
    {
        width: '100%',
        source: actDataAdapter,
        editable: true,
        columnsresize:true,
        /*theme: 'ui-sunny',*/
        selectionmode: 'singlerow',
        editmode: 'selectedrow',
        columns: [
          { text: '', datafield: 'selectedFlag', columntype: 'checkbox', width: '5%' },
          { text: 'Task', editable:false, datafield: 'taskName', columntype: 'textbox', width: '20%' },
          { text: 'Activity', editable:false, datafield: 'activityName', columntype: 'textbox', width: '35%' },
          { text: 'Start date', datafield: 'activityStartDate', columntype: 'datetimeinput', 
        	  cellsformat: 'MM-dd-yyyy', width: '10%' },
          { text: 'End date', datafield: 'activityEndDate', columntype: 'datetimeinput',  
        		  cellsformat: 'MM-dd-yyyy', width: '10%' },
          { text: 'Assigned to', datafield: 'assignedTo', columntype: 'textbox'}
         
        ]
    });
    
    var cellTasksDDLSrc =
    {
        datatype: "json",
        datafields: [
             { name: 'taskName', type: 'string' },
             { name: 'taskId'}
        ],
        id: 'taskId',
        url: basePath + "salesOrder/emptyArray"
    };
    
    var cellTasksDDLAdapter = new $.jqx.dataAdapter(cellTasksDDLSrc, { autoBind: false, async: false, 
		downloadComplete: function(edata, textStatus, jqXHR){
			
		}
    });

    var i = 0;
for(var i=0; i<8; i++){
	specData[i] = new Array();
    tabInitFunc[i] = function(i){
	   	var specGridId = "#specGrid" + i;
	   	
	    productDDLSource[i] =
	    {
	        datatype: "json",
	        datafields: [
	             { name: 'productName', type: 'string' },
	             { name: 'productId'}
	        ],
	        id: 'productId',
	        url: basePath + "salesOrder/" + soId + "/specifications/" + specTypes[i] + "/products.json"
	    };
	    productDDLAdapter[i] = new $.jqx.dataAdapter(productDDLSource[i], { autoBind: true, async: false, 
	    	loadComplete : function(data) {
	        }
		});
	
	    $("#prodDDL" + i).jqxDropDownList({ 
	    	placeHolder: "Select Product",
	    	displayMember: 'productName', 
	    	valueMember: 'productId', 
	    	source: productDDLAdapter[i], width: '200', height: '25', theme: theme 
	    });
	    
	    source[i] =
	    {
	        datatype: "json",
			url : basePath + "salesOrder/emptyArray",
	        datafields:
	        [
	         	{ name: 'salesOrderId'},
	         	 { name: 'questionId'},
//	             { name: 'productId', map: 'product>productId'},
	             { name: 'questionName'},
	             { name: 'questionResponseId'},
	             { name: 'remarks'},
	             { name: 'taskIds'},
	             { name: 'taskNames'},
	             { name: 'activityNames'}
//		         	{ name: 'salesOrderId', map: 'salesOrder>salesOrderId'},
//		         	 { name: 'questionId'},
////		             { name: 'productId', map: 'product>productId'},
//		             { name: 'questionName', map: 'questionName', type: 'string' },
//		             { name: 'questionResponseId', map:'soSpecQuestionResponses>0>questionResponseId'},
//		             { name: 'remarks', map:'soSpecQuestionResponses>0>remarks', type: 'string' },
//		             { name: 'taskIds', map: 'taskIds'},
//		             { name: 'taskNames', map: 'taskNames'},
//		             { name: 'activityNames', map: 'activityNames'}
	        ],
	        id: 'questionId',
	        updaterow: function (rowid, rowdata, commit) {
	        	if(skipUpdateRow == true){
	        		commit(true);
	        		return;
	        	}
	    		if(!rowdata.remarks){
	    			rowdata.remarks = "";
	    		}
	    		var obj = new Object();
	    		obj.productId = $("#prodDDL" + i).val();
	    		obj.questionId = rowdata.questionId;
	    		obj.remarks = rowdata.remarks;
	    		
	          $.ajax({
	              url: basePath + "salesOrder/" + soId + "/soSpecQuestionResponse/save", 
	              type: 'POST',
	              data: obj,
	              dataType: 'json',
	              async:false
	          })
	          .done(function( data ) {
					if(rowdata.questionResponseId < 0){
						rowdata.questionResponseId = data.questionResponseId;
					}
					commit(true);
	          }).fail(function(){
    		  		alert("Error occured while saving data.")
    		  	});
	        },
	    };
		dataAdapter[i] = new $.jqx.dataAdapter(source[i], {autoBind: false, async: false,
	        beforeLoadComplete: function (records) {
	        },	        
	        loadComplete: function (data)
			{
			},
			loadError: function (xhr, status, error)
			{
			}
			});
	
		tasksDDLSrc[i] =
	    {
	        datatype: "json",
	        datafields: [
	             { name: 'taskName', type: 'string' },
	             { name: 'taskId'}
	        ],
	        id: 'taskId',
	        url: basePath + "salesOrder/emptyArray"
	    };
	    tasksDDLAdapter[i] = new $.jqx.dataAdapter(tasksDDLSrc[i], { autoBind: false, async: false, 
	    	loadComplete : function(data) {
	        }
		});
	
	    // initialize jqxGrid
	    $(specGridId).jqxGrid(
	    {
	        width: 1078,
	        source: dataAdapter[i],
	        columnsresize:true,
	        selectionmode : 'singlerow',
	        editmode: 'dblclick',
	        theme: theme,
			editable:true,
	        sortable:true,
			pageable:true,
			autoheight:true,
			autorowheight:true,
	        statusbarheight: 35,
	        altrows: true,
	        showaggregates: false,
			showstatusbar: true,
			pageable:false,
	        columns: [
					  { text: 'taskIds', editable: true, datafield: 'taskIds', hidden:true, columntype:"textbox"},
					  { text: 'soSpecId', editable: true, datafield: 'soSpecId', hidden:true, columntype:"textbox"},
					  { text: 'questionId', editable: true, datafield: 'questionId', hidden:true, columntype:"textbox"},
					  { text: 'productId', editable: true, datafield: 'productId', hidden:true, columntype:"textbox"},
	                  { text: 'Questions', editable: false, datafield: 'questionName', columntype:"textbox", width: 400},
					  { text: 'Remarks', editable: true, datafield: 'remarks', columntype:"textbox", width: 250},
					  { text: 'Tasks', editable: false, datafield: 'taskNames', columntype:"textbox", width: 400, autoheight: true,
						  cellsrenderer: function (row, column, value) {
							  return "<div>" + value + "</div>";
						  },
					  },
					  { text: 'Activites', editable: false, datafield: 'activityNames', columntype:"textbox",  width: 250,
						  cellsrenderer: function (row, column, value) {
							  return "<div>" + value + "</div>";
						  },
					  },
	                ],
			
	    });
	    
	    $(specGridId).on("celldoubleclick", function (event){
		    var column = event.args.column;
		    var row = event.args.rowindex;
		    editrow = row;
	    	editQuesRespId = $(specGridId).jqxGrid('getcellvalue', row, "questionResponseId");
	    	if(!editQuesRespId){
	    		editQuesRespId = -1;
	    	}
		    
		    if(column.datafield == "taskNames"){
		    	$("#tasksPopUpWnd").jqxWindow('open');
		    	var questionId = $(specGridId).jqxGrid('getcellvalue', row, "questionId");
		    	cellTasksDDLSrc.url = basePath + "salesOrder/specifications/" + specTypes[activeSpecTab] + "/question/" + questionId + "/tasks";
		    	cellTasksDDLAdapter.dataBind();
		    	var strTaskIds = $("#specGrid" + activeSpecTab).jqxGrid('getcellvalue', editrow, "taskIds");
		    	var arrTaskIds = JSON.parse(strTaskIds);
		    	var items = $("#tasksListBox").jqxListBox('getItems');
		    	for(x in items){
		    		for(y in arrTaskIds)
		    		if(items[x].value == arrTaskIds[y]){
		    			$("#tasksListBox").jqxListBox('checkItem', items[x] );
		    			break;
		    		}
		    	}
		    }
		    
		    if(column.datafield == "activityNames"){
//		    	var questionId = $("#specGrid" + activeSpecTab).jqxGrid('getcellvalue', row, "questionId")
		    	var strTaskIds = $(specGridId).jqxGrid('getcellvalue', editrow, "taskIds");
		    	if((!strTaskIds) || (strTaskIds.length == 0)){
		    		alert("Tasks are not selected.");
		    		return;
		    	}
		    	$("#activityPopUpWnd").jqxWindow('open');
		    	var productId = $("#prodDDL" + i).val();
		    	var quesRespId = $(specGridId).jqxGrid('getcellvalue', row, "questionResponseId");
		    	actSource.url = basePath + "salesOrder/" + soId + "/specifications/questionResponse/" + quesRespId + "/activities";
		    	actDataAdapter.dataBind();
		    }
		});
	    
	    $("#prodDDL" + i).on('change', function (event){     
		    var args = event.args;
		    if (args) {
			    // index represents the item's index.                      
			    var index = args.index;
			    var item = args.item;
				source[activeSpecTab].url = basePath + "salesOrder/" + soId + "/product/" + item.value + "/specResponses";
				dataAdapter[activeSpecTab].dataBind();
			} 
		});
    
    };
	
}

$('#specTab').jqxTabs({ width: '100%', theme: "shinyblack",
    initTabContent:
        function (tab) {
            // The 'tab' parameter represents the selected tab's index.
    		tabInitFunc[tab](tab);
        } });

$('#specTab').on('tabclick', function (event){ 
    activeSpecTab = event.args.item; 
}); 

$("#tasksListBox").jqxListBox({width: '100%', source: cellTasksDDLAdapter, displayMember: "taskName", 
	valueMember: "taskId", checkboxes: true, height: 250, theme: theme });

// initialize the popup window and buttons.
$("#activityPopUpWnd").jqxWindow({
    width: 1000, maxWidth:1000, height:350, resizable: true, theme:'shinyblack', isModal: true, autoOpen: false, cancelButton: $("#actCancel"), modalOpacity: 0.01           
});
$("#tasksPopUpWnd").jqxWindow({
    width: 500, resizable: false, theme: 'shinyblack', isModal: true, autoOpen: false, cancelButton: $("#Cancel"), modalOpacity: 0.01           
});
$("#tasksPopUpWnd").on('open', function () {
//	var arrTaskIds = strTaskIds
//    $("#firstName").jqxInput('selectAll');
});
$("#activityPopUpWnd").on('open', function () {
//	var arrTaskIds = strTaskIds
//    $("#firstName").jqxInput('selectAll');
});
$("#activityPopUpWnd").on('close', function () {
	dataAdapter[activeSpecTab].dataBind();
});
$("#Cancel").jqxButton({ width: '100px', theme:theme });
$("#TSave").jqxButton({ width: '100px', theme:theme });
$("#actSave").jqxButton({ width: '100px', theme:theme });
$("#actCancel").jqxButton({ width: '100px', theme:theme  });

$("#tasksList").jqxDropDownList({ theme: theme, width: '200px', height: '30px',  dropDownHeight: "35px" });

// update the edited row when the user clicks the 'Save' button.
$("#TSave").click(function () {
	var items = $("#tasksListBox").jqxListBox('getCheckedItems');
	strTasks = "";
	var taskResp = new Object();
//	taskResp.questionResponseId = $("#specGrid" + activeSpecTab).jqxGrid('getcellvalue', editrow, "questionResponseId")
	taskResp.productId = $("#prodDDL" + activeSpecTab).val();
	taskResp.questionId = $("#specGrid" + activeSpecTab).jqxGrid('getcellvalue', editrow, "questionId")
	taskResp.arrTaskIds = new Array();
	for(i in items){
		taskResp.arrTaskIds[i] = items[i].value;
		strTasks = strTasks + '&#8226; ' + items[i].label + "<br><br>";
	}

	  $.ajax({
		  url: basePath + 'salesOrder/' + soId + '/questionResp/' + editQuesRespId + '/tasks/save',
		  type: 'POST',
		  data: JSON.stringify(taskResp),
		  contentType: 'application/json; charset=utf-8',
		  dataType: 'json',
		  async:false
	  })
	  .done(function( data ) {
//			if(taskResp.soSpecId < 0){
//				$("#specGrid" + activeSpecTab).jqxGrid('setcellvalue', editrow, "soSpecId", data.soSpecId);
//			}
//			$("#specGrid" + activeSpecTab).jqxGrid('setcellvalue', editrow, "taskIds", JSON.stringify(taskResp.arrTaskIds));
//			$("#specGrid" + activeSpecTab).jqxGrid('setcellvalue', editrow, "taskNames", strTasks);
			$("#tasksPopUpWnd").jqxWindow('hide');
			dataAdapter[activeSpecTab].dataBind();
	  })
	  .fail(function(){
		  alert("Error occured while saving data.");
	  });
	
});

    
});	
