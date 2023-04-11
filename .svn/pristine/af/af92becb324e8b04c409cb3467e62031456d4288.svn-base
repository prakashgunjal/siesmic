var productDDLSource;
var productDDLAdapter;
    
$(document).ready(function () {
            var theme = getDemoTheme();
            var catType = "Hardware";
            productDDLSource =
            {
                datatype: "json",
                datafields: [
                     { name: 'productName', type: 'string' },
                     { name: 'productId'}
                ],
                id: 'productId',
                url: basePath + "salesOrder/" + soId + "/professionalInfo/" + catType + "/products.json"
            };
            productDDLAdapter = new $.jqx.dataAdapter(productDDLSource, { autoBind: true, async: false});
            
            $("#prodDropDownList").jqxDropDownList({ 
            	placeHolder: "Select Product",
            	displayMember: 'productName', 
            	valueMember: 'productId', 
            	source: productDDLAdapter, 
            	width: '200', height: '25', theme: theme 
            });

            var source =
            {
            	datatype: "json",
            	url : basePath + "salesOrder/emptyArray",
                datafields:
                [
	              	{ name: 'salesOrderProductDetailId'},
	             	{ name: 'productId', map : 'product>productId'},
                 	{ name: 'productCategory', map : 'profServProduct>productCategory>productCategory', type: 'string' },
         			{ name: 'productCategoryId', map : 'profServProduct>productCategory>productCategoryId', text: 'productCategory', id: 'productCategoryId' },
         			{ name: 'productSubType', map : 'profServProduct>productSubType>productSubType', type: 'string' },
         	        { name: 'productSubTypeId', map : 'profServProduct>productSubType>productSubTypeId',text: 'productSubType', id: 'productSubTypeId'},
           	       { name: 'productName', map: 'profServProduct>productName', type: 'string' },
          	       { name: 'profServProductId', map: 'profServProduct>productId'},
         	       { name: 'salesOrderProductQty', type: 'number' },
         	       { name: 'salesOrderProductRate', map: 'profUnitCost', type: 'number' },
         	       { name: 'profServTotal'},
                   { name: 'internalEngg', type: 'bool' },
                ],
                id:'profServProductId',
                updaterow: function (rowid, rowdata, commit) {
                    commit(true);
                },
                deleterow: function (rowid, commit) {
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);
            
            var tooltiprenderer = function (element) {
                $(element).jqxTooltip({position: 'mouse', content: $(element).text() });
            }

            // initialize jqxGrid
            $("#profServGrid").jqxGrid(
            {
            	width: '99.8%',
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
                        
                  { text: 'profServProductId', hidden:true, editable: false, datafield: 'profServProductId',  columntype:"textbox",width: 500, rendered: tooltiprenderer },
                  { text: 'Professional Service', editable: false, datafield: 'productName',  columntype:"textbox",width: 500, rendered: tooltiprenderer },
                  { text: 'Quantity', editable: false, datafield: 'salesOrderProductQty', columntype:"textbox", width: 120, rendered: tooltiprenderer },
				  { text: 'Unit Cost', editable: false, datafield: 'salesOrderProductRate', columntype:"textbox", width: 150, rendered: tooltiprenderer },
				  { text: 'Total', filtertype: 'none', editable: false, datafield: 'profServTotal', columntype:"textbox", width: 200, rendered: tooltiprenderer },
				  { text: 'For Internal Engineering', filtertype: 'none', editable: true, datafield: 'internalEngg', columntype:"checkbox", rendered: tooltiprenderer}
				  
                ],
				renderstatusbar: function (statusbar) {
                    // appends buttons to the status bar.
                    var container = $("<div style='overflow: hidden; position: relative; margin: 5px;'></div>");
                 /*   var addButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/add.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Add</span></div>");*/
                    var editButton = $("<div style='float: left; margin-left: 5px;'><img style='position: relative; margin-top: 2px;' src='../../image/miniedit.png'/><span style='margin-left: 4px; position: relative; top: 2px;'>Edit</span></div>");
                  /*  container.append(addButton);*/
                    container.append(editButton);
                    
                    statusbar.append(container);
                  /*  addButton.jqxButton({ theme: theme, width: 60, height: 20 });*/
                    editButton.jqxButton({ theme: theme, width: 65, height: 20 });
                    
                    // add new row.
                   /* addButton.click(function (event) {
                    	 var offset = $("#profServGrid").offset();
                         $("#profServWindow").jqxWindow('open');
                         $("#profServWindow").jqxWindow('move', offset.left + 30, offset.top + 30);
                    });
*/
                    editButton.click(function (event) {
            			openDialogForEdit();
                    });
                },
				
            });

            $("#prodDropDownList").on('change', function (event){     
        	    var args = event.args;
        	    if (args) {
        		    // index represents the item's index.                      
        		    var index = args.index;
        		    var item = args.item;
        			source.url = basePath + "salesOrder/" + soId + "/product/" + item.value + "/profServiceResponses";
        			dataAdapter.dataBind();
        		} 
        	});
            
            // create context menu
            var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

            $("#profServGrid").on('contextmenu', function () {
                return false;
            });

            $("#profServGrid").on('rowclick', function (event) {
                if (event.args.rightclick) {
                    $("#profServGrid").jqxGrid('selectrow', event.args.rowindex);
                    var scrollTop = $(window).scrollTop();
                    var scrollLeft = $(window).scrollLeft();
                    contextMenu.jqxMenu('open', parseInt(event.args.originalEvent.clientX) + 5 + scrollLeft, parseInt(event.args.originalEvent.clientY) + 5 + scrollTop);

                    return false;
                }
            });

            // initialize the popup window and buttons.
            $("#profServWindow").jqxWindow({ width: 600,  resizable: false, draggable:false,theme: 'shinyblack', isModal: true, autoOpen: false, cancelButton: $("#cancelBtn"), modalOpacity: 0.7 });
            $("#proServFormPanel").jqxPanel({ width: 590, height: 100, sizeMode:'wrap'});
            $("#productQtyDlg").jqxNumberInput({ width: '200px', height: '25px', inputMode: 'simple', theme: theme, spinButtons: false });
            $("#unitCostDlg").jqxNumberInput({ width: '200px', height: '25px', inputMode: 'simple', theme: theme, spinButtons: false });
            $("#internalEnggDlg").jqxCheckBox({ width: 120, height: 25 });
            $("#cancelBtn").jqxButton({ theme: theme, width:100 });
            $("#saveBtn").jqxButton({ theme: theme, width:100 });

//		    $('#profServForm').jqxValidator({hintType : 'label',
//				rules : [{input : '#productQtyDlg', message : 'Product quantity is empty.', action : 'keyup',
//					rule : 'required'}]});

		    // update the edited row when the user clicks the 'Save' button.
            $("#saveBtn").click(function () {

//            	if(!$('#profServForm').jqxValidator('validate')){
//        			return;
//        		};

    			var rowindex = $('#profServGrid').jqxGrid('getselectedrowindex');
    			var selRow = $('#profServGrid').jqxGrid('getrowdata', rowindex);

        		var profServProduct = new Object();
        		profServProduct.salesOrderProductDetailId = selRow.salesOrderProductDetailId;
        		profServProduct.productId = selRow.productId;
        		profServProduct.profServProductId = selRow.profServProductId;
        		profServProduct.salesOrderProductQty = $('#productQtyDlg').val();		
        		profServProduct.salesOrderProductRate = $('#unitCostDlg').val();		
        		profServProduct.internalEngg = $('#internalEnggDlg').val();		

        		$.ajax({
      			  url: basePath + 'salesOrder/' + soId + '/profServices/save',
      			  type: 'POST',
      			  data: JSON.stringify(profServProduct),
      			  contentType: 'application/json; charset=utf-8',
      			  dataType: 'json',
      			  async:false
      		  	}).done(function( data ) {
            		$('#profServWindow').jqxWindow('close');
            		$('#profServGrid').jqxGrid('updatebounddata');
      		  	}).fail(function(){
      		  		alert("Professional services record failed to save.")
      		  	});
            });
         // create context menu
            var contextMenu = $("#Menu").jqxMenu({ width: 200, height: 30, autoOpenPopup: false, mode: 'popup', theme: theme });

            $("#profServGrid").on('contextmenu', function () {
                return false;
            });

            // handle context menu clicks.
            $("#Menu").on('itemclick', function (event) {
                if ($.trim($(args).text()) == "Edit Prof Service Row") {
                	openDialogForEdit();
                }
            });

            function openDialogForEdit(){
            	$('#productQtyDlg').jqxNumberInput('clear');
            	$('#unitCostDlg').jqxNumberInput('clear');
            	var rowIndex = $("#profServGrid").jqxGrid('selectedrowindex');
                if(rowIndex < 0){
                	return;
                }
                
                var row = $("#profServGrid").jqxGrid('getrowdata', rowIndex);

                var offset = $("#profServGrid").offset();
                $("#profServWindow").jqxWindow('open');
                $("#profServWindow").jqxWindow('move', offset.left + 30, offset.top + 30);

               	$("#productQtyDlg").val(row.salesOrderProductQty);
        		$("#unitCostDlg").val(row.salesOrderProductRate);
        		$("#internalEnggDlg").val(row.internalEngg);	
        		
        	}
        	
});