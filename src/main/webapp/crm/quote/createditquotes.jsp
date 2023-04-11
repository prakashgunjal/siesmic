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
		var quoteId = "${quote.quoteId}";
		//var nameOfQuote = "${quote.nameOfQuote}";
		
		var opportunityId="${quote.opportunity.opportunityId}";  
		var opportunityNumber="${quote.opportunity.opportunityNumber}";  
				
		var basePath = "${pageContext.request.contextPath}/"; 
		var quoteAccountId="${quote.account.accountId}";   

		var accountId="${quote.account.accountId}";  
		var accountName="${quote.account.accountName}";  
		var accountNumber="${quote.account.accountNumber}";  
		var commAccountId = "<%= request.getParameter("accountId") %>";
		if(commAccountId != 'null'){
			accountId = commAccountId;
		}
		
		var url = "${url}";
		var url2 = "<%= request.getParameter("url") %>";
					
		var quoteFlag="${quoteFlag}";  
		var moduleName = "Quote";
		var moduleId = "${quote.quoteNumber}";
		var newRowId = -1;
		var activeTab = 0; 
		 
	</script>
	<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

   <%@ include file="../../menu/seismic-js-ui.jsp"%>
<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
	
	<script type="text/javascript" src="quotemenujs/quotesmenu.js"></script>
	
     <script type="text/javascript" src="../../extjs/include-ext.js"></script>
     <!-- Example -->
 	<script type="text/javascript" src="quote-form.js"></script>
	<script type="text/javascript" src="quoteProduct-grid.js"></script>
	 <script type="text/javascript" src="../../commongrid/commonactivitygrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commontaskgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commoncallgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonsalesformsgrid.js"></script>
  


<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>
    <script type="text/javascript">
    
$(document).ready(function () {
    var theme = getDemoTheme();
    $('#quotesmenu').jqxTabs({ width: '100%', theme: "shinyblack" });
    // Disabling SubTabs for Add Quote         
	if(quoteId == null || quoteId=="" ){										
		 $('#quotesmenu').jqxTabs('disable');	
		 $('#quotegrid').jqxGrid('disabled',true);
		 $('#quotegrid').jqxGrid({showstatusbar:false});		
		 $('#quotegrid').jqxGrid('statusbar').hide();    			
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
     <!--    <li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> -->    
			<!--  <li><a href="../quotes.jsp">Quotes </a>  </li>     -->
			 <li>		 
			<% if(request.getParameter("quoteId") != null  ) {		 %>	
			       Edit Quotes  
			 <%	}else{ %>		  
			       Create Quotes  						  
			 <% } %>                        	   
			  </li>  			  		    
			 <li> 
			   		     
			    QuoteNumber: ${quote.quoteNumber}
			    &nbsp; , &nbsp;  
			    AccountName:   ${quote.account.accountName}
			 </li>    			
			
        </ul>
 
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:-18px;">         
         
			<div class="dashWidget ">
            <div class="row-fluid">
              <div class="span12" style="margin-top:0px; margin-left:0px;">

          
					<form id="save">
					<div id="formquote"></div>
					
					</form>
					
				</div>
            </div>
            </div>
 
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">
 <div id='jqxWidget'>
        <div style='float: left; margin-left:0px; margin-top:-5px;' id='quotesmenu'>
             <ul>
            	<li>Products</li>
            	<li>Activities</li>
                <li>Alerts</li>
              <!--   <li>Tasks</li> -->
                <!-- <li>Calls</li> -->
                <li>Sales Forms</li>
                <li>Document</li>	
				
				
            </ul>
            <div>
					<div id="quotegrid"></div>				
					   
            </div>
            <div>
					<%@ include file="../../commongrid/commonactivity.jsp" %>					
							
            </div>
            <div>
               		<%@ include file="../../commongrid/commonalert.jsp" %>		
            </div>
           <!--  <div>
                	<div id="commontaskgrid" style="margin-top:0px;"></div>	
            </div> -->
           <!--  <div>
					<div id="commoncallgrid" style="margin-top:0px;"></div>	
            </div> -->
            <div>
            		<%@ include file="../../commongrid/commonsalesform.jsp" %>
            </div>
            <div>
               		<%@ include file="../../commongrid/commondocument.jsp" %>
            </div>
            
			       
        </div>
        
    </div>
 </div>
 </div>               
              
                            
       
            </div>

                    



                         
                  </div>
              </div>
         


                   
           
			  
 <!-- END scroll-pane -->

   
      
      
       
    

</div> <!-- END Layout Center -->

<!--Modal Window Templates-->

        <div id="quoteProductWindow" style="margin-top:-350px; margin-left:100px;">
            <div>
                Quote product</div>
                
            <div style="overflow: hidden;">
            <form id="" action="./">
            	<div id='quoteFormPanel' style="margin:5px 0px 0px 3px;">
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
							<td>Quantity</td>
                			<td><div id='quoteQuantity'></div><div id='quoteUnitOfMeasure' style="margin-left:140px; margin-top:-27px;"></div></td>
                		</tr>
                		<tr>               			
                			<td>Unit cost</td>
                			<td><div id='quoteUnitCost'></div></td>
                			<td>Discount</td>
                			<td><div id='quoteDiscount'></div></td>
                		</tr>
                		<tr>               			
                			<td>Total</td>
                			<td><div id=quoteTotalAmount></div></td>
                		</tr>
                	</table>
                	
                
            </div>
            	<div style="margin-left:280px;">
                    <input type="button"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" id="quoteProdSave" />
                    <input type="button"  style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" id="quoteProdCancel" />
                </div>
            	</form>
            </div>
        </div>
        
        
<div id='quoteProdMenu'>
			<ul>
				<li>Edit Selected Product</li>
			</ul>
	   </div>

</body>
</html>