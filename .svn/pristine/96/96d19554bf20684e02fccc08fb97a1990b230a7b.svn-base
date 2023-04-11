<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  	<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

	<%@ include file="../../menu/seismic-js-ui.jsp" %>
			<%@ include file="../../menu/seismic-jqx-ui.jsp" %>
	<script type="text/javascript">
		
		var opportunityId = "${opportunity.opportunityId}";
		var opportunityNumber = "${opportunity.opportunityNumber}";
		var accountId = "${opportunity.account.accountId}";
		var basePath = "${pageContext.request.contextPath}/";
		var moduleId = "${opportunity.opportunityNumber}";
		var moduleName = "Opportunity";
		
	</script>
<script type="text/javascript">
		var basePath = "${pageContext.request.contextPath}/";
	</script>
			
	<script type="text/javascript" src="../opportunities/oppormenujs/opportunitymenu.js"></script>
	<script type="text/javascript" src="../../extjs/include-ext.js"></script>
 	<script type="text/javascript" src="../opportunities/oppor-form.js"></script>
	<script type="text/javascript" src="../opportunities/opportunityProduct-grid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonactivitygrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commoncontactsgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonquotegrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonsalesformsgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonsalesordergrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
   

<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>
  </head>
  <body >

    <div class="ui-layout-north topbar">
			<%@ include file="../../menu/commonheaderui.jsp" %>
    </div> <!-- END Layout North -->
    
    <div class="ui-layout-west">
             
    <div class="tab-content ui-layout-content">
	  <%@include file="../../menu/sidemenuui.jsp"%>
	  <script type="text/javascript">			
		  $(document).ready(function () {
	            var theme = getDemoTheme();   	          	            
	         	// Disabling SubTabs for Add Opportunity
				if(opportunityId == null || opportunityId==""  || opportunityId==0 ){										
					 $('#oppormenus').jqxTabs('disable');	
					 $('#oppor').jqxGrid('disabled',true);
					 $('#oppor').jqxGrid({showstatusbar:false});		
					 $('#oppor').jqxGrid('statusbar').hide();  			
				}  				   					           
	        });
       </script>   
    	
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
          <!--<li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> opportunity.jsp -->   
			<!--  <li><a href="viewOpportunities.htm">Opportunities </a>  </li> -->    
			 <li>		 
			<% if(request.getParameter("opportunityId") != null  ) {		 %>	
			       Edit Opportunity  
			 <%	}else{ %>		  
			       Create Opportunity  						  
			 <% } %>                        	   
			  </li>  			  		    
			 <li> 			   		     
			    OpportunityNumber: ${opportunity.opportunityNumber}
			    &nbsp; , &nbsp;  
			    AccountName:   ${opportunity.account.accountName}
			 </li>    				
        </ul>

  <!--  <center>
		<h2><a href="/seismic/commonjsppages/documentController/downloadDocument.htm?documentId=52cf977d87f81bcb5e5f8e62&documentEntityId=ASPL1Gk7Gq4Cd0Hp7Bw1Rq7Lm">Click here to download file</a></h2>
	</center> -->
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:-18px;">
              
    		<div class="dashWidget ">
            <div class="row-fluid">
              <div class="span12" style="margin-top:2px; margin-left:0px; ">

        
					<form id="save" >
					<div id="formoppor"></div>
					
					
					</form>
			 

				</div>
            </div> 
            </div>
              
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">
<div id='jqxWidget'>
        <div style='margin-top:5px;' id='oppormenus'>
            <ul>
            	<li>Products</li>
            	<li>Activities</li>
                <li>Alerts</li>
                <li>Contacts</li>
                <li>Quotes </li>
                <li>Sales Forms</li>
                <li>Sales Orders</li>
                <li>Document</li>	
			
				
            </ul>
            <div>
					<div id="oppor"></div>				
					   
            </div>
            <div>
					<%@ include file="../../commongrid/commonactivity.jsp" %>					
							<!-- <a href="/common/activity/viewActivity.htm"></a> -->
            </div>
            <div>
               		<%@ include file="../../commongrid/commonalert.jsp" %>		
            </div>
            <div>
               		<%@ include file="../../commongrid/commoncontact.jsp" %>		
            </div>
            <div>
            		  <%@ include file="../../commongrid/commonquote.jsp" %> 
            </div>
            <div>
            		<%@ include file="../../commongrid/commonsalesform.jsp" %>
            </div>
            <div>
					<%@ include file="../../commongrid/commonsalesorder.jsp" %>											
            </div>
            <div>
            		<%@ include file="../../commongrid/commondocument.jsp" %>
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
</div> 





<!--Modal Window Templates-->
</div>
</div>
</div>


<div id="opporProductWindow" style="margin-top:-350px; margin-left:100px;">
            <div>
                Opportunity product</div>
                
            <div style="overflow: hidden;">
            		<form id="opporProductForm" action="./">
            		<div id='opporFormPanel' style="margin:5px 0px 0px 3px;">
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
                			<td>Serialized</td>
                			<td><div id='opporSerialized'></div></td>
                		</tr>
                		<tr>
                			<td>Quantity</td>
                			<td><div id=opporQuantity></div><div id='opporUnitOfMeasure' style="margin-left:140px; margin-top:-27px;"></div></td>
                			<td>Unit cost</td>
                			<td><div id=opporUnitCost></div></td>
                		</tr>
                		<tr>
                			<td>Discount</td>
                			<td><div id='opporDiscount'></div></td>
                			<td>Total</td>
                			<td><div id=opporTotalAmount></div></td>
                		</tr>
                	</table>
                	
                
            </div>
            	<div style="margin-left:280px;">
                    <input type="button"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" id="opporProdSave" />
                    <input type="button"  style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" id="opporProdCancel" />
                </div>
                </form>
            </div>
            
        </div>
<div id='opporProdMenu'>
			<ul>
				<li>Edit Selected Product</li>
			</ul>
	   </div>


</body>
</html>