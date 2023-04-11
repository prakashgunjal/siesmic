<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<script type="text/javascript">
		var salesOrderId = "${salesOrder.salesOrderId}";
		var basePath = "${pageContext.request.contextPath}/";
		var moduleName = "Sales Order";
		var moduleId = "${salesOrder.salesOrderNumber}";
		var accountId = "${salesOrder.account.accountId}";
		var commAccountId = "<%= request.getParameter("accountId") %>";
		if(commAccountId != 'null'){
			accountId = commAccountId;
		}
	    var url = "${url}";
	    var url1 = "<%= request.getParameter("url") %>";
		 
	</script>
	<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>
    <%@ include file="../../menu/seismic-js-ui.jsp"%>
    <%@ include file="../../menu/seismic-jqx-ui.jsp"%>

	<script type="text/javascript" src="salesordermenujs/salesordersmenu.js"></script>
    <script type="text/javascript" src="../../extjs/include-ext.js"></script>
	<script type="text/javascript" src="salesorder-form.js"></script>
	<script type="text/javascript" src="salesorderProduct-grid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonactivitygrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commontaskgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commoncallgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonpurchaseordergrid.js"></script>

<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
</style>
  <script type="text/javascript">
    
	$(document).ready(function () {
	    var theme = getDemoTheme();
	    $('#salesordersmenu').jqxTabs({ width: '100%', theme: "shinyblack" });
	    // Disabling SubTabs for Add SalesOrder         
		if(salesOrderId == null || salesOrderId=="" ){										
			 $('#salesordersmenu').jqxTabs('disable');	
			 $('#salesordergrid').jqxGrid('disabled',true);
			 $('#salesordergrid').jqxGrid({showstatusbar:false});		
			 $('#salesordergrid').jqxGrid('statusbar').hide();    			
		}  	 
	});
	
</script>	
	
	
   
  </head>
  <body>

    <div class="ui-layout-north topbar">
				<%@ include file="../../menu/commonheaderui.jsp" %>
    </div> <!-- END Layout North -->
    
    <div class="ui-layout-west">
             
        <div class="tab-content ui-layout-content">
								<%@ include file="../../menu/sidemenuui.jsp" %>
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
     <!--    <li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> -->    
			<!--  <li><a href="../salesorder.jsp">Sales Order </a>  </li>     -->
			 <li>		 
			<% if(request.getParameter("salesOrderId") != null  ) {		 %>	
			       Edit Sales Order  
			 <%	}else{ %>		  
			       Create Sales Order  						  
			 <% } %>                        	   
			  </li>  			  		    
			 <li> 
			  	     
			    SalesOrderNumber: ${salesOrder.salesOrderNumber}
			    &nbsp; , &nbsp;  
			    AccountName:   ${salesOrder.account.accountName}
			 </li>   			  					
        </ul>
       <!-- <h1 class="message-header"></h1>-->
  
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:-18px;">
              
              
            <div class="dashWidget autoHeight">
            <div class="row-fluid">
              <div class="span12" style="margin-top:0px; margin-left:0px;">
					<form id="save">
					<div id="formsalesorder"></div>

					</form>
				</div>
            </div> 
           </div>
           
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">           
<div id='jqxWidget'>
        <div style='float: left; margin-left:0px; margin-top:-5px;' id='salesordersmenu'>
            <ul>
            	<li>Products</li>
            	<!-- <li>Purchase Order</li> -->
            	<li>Activities</li>
                <li>Alerts</li>
               <!--  <li>Tasks</li> -->
                <!-- <li>Calls</li> -->
                <li>Document</li>	
				
            </ul>
            <div>
					<div id="salesordergrid"></div>				
					   
            </div>
            <!-- <div>
            		<div id="commonpurchaseordergrid"></div>	
            </div> -->
            <div>
					<%@ include file="../../commongrid/commonactivity.jsp" %>				
							
            </div>
            <div>
               		<%@ include file="../../commongrid/commonalert.jsp" %>		
            </div>
           <!--  <div>
                	<div id="commontaskgrid" style="margin-top:0px;"></div>	
            </div> -->
            <!-- <div>
					<div id="commoncallgrid" style="margin-top:0px;"></div>	
            </div> -->
            <div>
            		<%@ include file="../../commongrid/commondocument.jsp" %>
            </div>
            
			       
        </div>
        
    </div>
 </div>
 </div>          
       
            </div>


           <!-- Breadcrumbs -->
         
          <!-- Pagination -->
          
              
           <!-- /row -->

          
          <!-- Labels  -->


                         
                  </div>
              </div>
         


                   
           
			  
 <!-- END scroll-pane -->

   
      
      
       
    

</div> <!-- END Layout Center -->

<!--Modal Window Templates-->

<!-- <div id="salesorderProductWindow" style="margin-top:-200px; margin-left:110px;">
            <div>
                Sales Order Poduct</div>
            <div style="overflow: hidden;">
                	<table cellpadding="5px">
                		<tr>
                			<td>Product Category</td>
                			<td><div id='dropdownlist10'></div></td>
                			<td>Product Sub-Category</td>
                			<td><div id='dropdownlist11'></div></td>
                		</tr>
                		<tr>
                			<td>Product </td>
                			<td><div id='dropdownlist12'></div></td>
                			<td>Serialized</td>
                			<td><div id='dropdownlist13'></div></td>
                		</tr>
                		<tr>
                			<td>Quantity</td>
                			<td><div id='SOQuantity'></div></td>
                			<td>Unit of Measure</td>
                			<td><div id='dropdownlist14'></div></td>
                		</tr>
                		<tr>
                			<td>Unit cost</td>
                			<td><div id='SOUnitCost'></div></td>
                			<td>Total</td>
                			<td><div id='SOTotalAmount'></div></td>
                		</tr>
                	</table>
                <div style="margin-left:280px;">
                    <input type="button"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" id="SOProdSave" />
                    <input type="button"  style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" id="SOProdCancel" />
                </div>
            </div>
        </div> -->
        
        
<div id="salesorderProductWindow" style="margin-top:-350px; margin-left:100px;">
            <div>
                Sales order product</div>
                
            <div style="overflow: hidden;">
            <form id="" action="./">
            	<div id='salesorderFormPanel' style="margin:5px 0px 0px 3px;">
                	<table cellpadding="5px">
                		<tr>
                			<td>Product Category</td>
                			<td><div id='productCategoryDropdownlist'></div></td>
                			<td>Product Sub-Category</td>
                			<td><div id='productSubCategoryDropdownlist'></div></td>
                		</tr>
                		<tr>
                			<td>Product </td>
                			<td><div id='productDropdownlist'></div></td>
                			<!-- <td>Serialized</td>
                			<td><div id='opporSerialized'></div></td> -->
                			<td>Quantity</td>
                			<td><div id=SOQuantity></div><div id='SOUnitOfMeasure' style="margin-left:140px; margin-top:-27px;"></div></td>
                		</tr>
                		<tr>
                			
                			<td>Unit cost</td>
                			<td><div id=SOUnitCost></div></td>
                			<td>Discount</td>
                			<td><div id='SODiscount'></div></td>
                		</tr>
                		<tr>               			
                			<td>Total</td>
                			<td><div id=SOTotalAmount></div></td>
                		</tr>
                	</table>
                	
                
            </div>
            	<div style="margin-left:280px;">
                    <input type="button"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" id="SOProdSave" />
                    <input type="button"  style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" id="SOProdCancel" />
                </div>
            	</form>
            </div>
        </div>
        
        
<div id='salesorderProdMenu'>
			<ul>
				<li>Edit Selected Product</li>
			</ul>
</div>

</body>
</html>