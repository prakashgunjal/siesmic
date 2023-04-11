<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<!-- <meta charset="utf-8"> -->
	<link rel="icon" type="image/png" href="../../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<script type="text/javascript">
		var soId = "${salesOrder.salesOrderId}";
		var basePath = "${pageContext.request.contextPath}/";
	    var newRowId = -1;
	    var activeTab = 3;
	</script>
    <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

	<%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
	<script type="text/javascript" src="equipmentInfo/equipproduct.js"></script>
	<script type="text/javascript" src="../../extjs/include-ext.js"></script>
	<script type="text/javascript" src="equipmentInfo/sfequipinfo-form.js"></script>
	<script type="text/javascript" src="equipmentInfo/equipInfoGrid.js"></script>

  </head>
  <body>

    <div class="ui-layout-north topbar">
			<%@ include file="../../menu/commonheaderui.jsp" %>
    </div> <!-- END Layout North -->
    
    <div class="ui-layout-west">
             
        <div class="tab-content ui-layout-content">
							<%@include file="../../menu/sidemenuui.jsp"%>
							</div>
        
 
  <div class="sidebarFooter">
    <button id="newb">New</button>
    <button id="settingsb">Settings</button>
    <div id="dragb" class="ui-layout-resizer
           ui-layout-resizer-west
           ui-layout-resizer-open
           ui-layout-resizer-west-open">
        </div>
  </div>

    </div> <!-- END Layout West -->
    
    <div class="ui-layout-south footer">
      
    </div> <!-- END Layout South -->
    
    <div class="ui-layout-east">
      
        

        </div> <!-- /sidebarTabs -->
        
        <div class="sidebarFooter">
            
        </div>
    </div> <!-- END Layout East -->
            
  <div class="ui-layout-center">
    <div id="view-holder" class="ui-layout-content">
      <div class="scroll-pane">
        <ul class="breadcrumb">
             <!--    <li><a href="../../home/home.jsp">Home</a></li> -->
			<li><a href="../crm.jsp">Sales Forms</a></li>
			<li><a href="#">Equipment Info </a></li>
			<li> 			   		     
			  <!--   SalesFormName: ${salesOrder.salesOrderNumber}  -->			    
			    AccountName:   ${salesOrder.account.accountName}
			</li>  
        </ul>

        
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow" style="width:1080px; margin-left:-1px;">
             <div class="row-fluid" >
             
<div class="span12" style="margin-top:-18px;">              
	<div id='jqxWidget'>
        <%@include file="commonSFMenu.jsp" %>
    </div>
    			
    		<div class="dashWidget autoHeight" >			
            <div class="row-fluid">
              <div class="span12" style="margin-top:0px; margin-left:0px; ">
              		<form>
              		<div id="formsfequipinfo"></div>
              		<div id='jqxWidget'>
						        <div style='float: left; margin-left:0px; margin-top:0px;' id='eqprodmenu'>
						            <ul style="margin-left: 30px;">
						            	<li>Products</li>                
										
						            </ul>
						            <div>
											<div id="equipInfoGrid"></div>									   
						            </div>
						            
									       
						        </div>
						        
						    </div>  
              		
              		</form>
              </div>
              </div>
              </div>	
    
    </div>
        

    </div> <!-- END scroll-pane -->


   
      
      

</div> <!-- END Layout Center -->

<div id="equipInfoWindow" style="margin-top:-300px;">
            <div>
                Create/Edit Product</div>
            <div style="overflow: hidden;">
                <div id="equipFormPanel">
           		<form id="equipInfoForm" action="./">
                	<table cellpadding="5px">

                		<tr>
                			<td>Product category</td>
                			<td><div id='productCatDDL'></div></td>
                			<td>Product sub-category</td>
                			<td><div id='productSubCatDDL'></div></td>
                		</tr>
                		<tr>
                			<td>Product </td>
                			<td><div id='productDDL'></div></td>
                			<td>Quantity</td>
                			<!-- <td><input id='inputField' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td> -->
                			<td><div id='salesOrderProductQty'></div></td>
                		</tr>
                		<tr>
                			<td>Supplier</td>
                			<td><!-- <input id='supplier' type="text" class="jqx-input" style="width: 200px; height: 23px;" /> -->
                			<div id='supplierProductDDL'></div></td>
                			<td>Charge type</td>
                			<td><div id='chargeTypeDDL'></div></td>
                		</tr>
                		<tr>
                			<td>Installation postcode</td>
                			<td><input id='installLocation' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td>
                			<td>Tick to Maintenance</td>
                			<td><div id='tickForMaintenance'></div> </td>
                			<!-- <td>Part number</td>
                			<td><input id='partNumber' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td>
                		</tr>
                		<tr>
                			<td>Description</td>
                			<td><textarea id='description' style="height:25px;"></textarea></td> 
                			<td>RRP/Recurring Charge x1</td>
                			<td><input id='recurringCharge' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td>
                		</tr>-->
						<tr>
                			<td>Discount</td>
                			<!-- <td><input id='salesOrderProductDiscount' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td> -->
                			<td><div id='salesOrderProductDiscount'></div></td>
                			<!-- <td>Discount total</td>
                			<td><input id='inputField' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td> -->
                	<!-- 	</tr>
						<tr> -->
                			<!-- <td>Trade</td>
                			<td><input id='trade' type="text" class="jqx-input" style="width: 200px; height: 23px;" /></td> -->
                			<!-- <td colspan="2"><input type="checkbox" id="maintain" value="tickForMaintenance"> &nbsp; Tick to Maintenance</td> -->
                		</tr>
                	</table>
                </form>
                </div>
                <div style="margin-left:250px;">
                    <input type="button" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" id="saveBtn" />
                    <input type="button" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" id="cancelBtn" />
                </div>
            </div>
        </div>
<div id='EquipMenu'>
			<ul>
				<li>Edit Equipment Row</li>
			</ul>
	   </div>



</body>
</html>