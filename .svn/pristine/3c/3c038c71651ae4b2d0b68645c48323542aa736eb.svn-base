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
    <script type="text/javascript">
        var url = "${url}";
	  
	</script>
	<link rel="stylesheet" href="../css/seismic-all.css" type="text/css" media="all"/>
	<%@ include file="../menu/seismic-js.jsp" %>
	<%@ include file="../menu/seismic-jqx.jsp" %>
  
	<script type="text/javascript" src="salesorder/salesordermenu.js"></script>
	
	<script type="text/javascript" src="../gridjs/salesorder-grid.js"></script>


<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>

  </head>
  <body>

    <div class="ui-layout-north topbar">
			<%@ include file="../menu/commonheader.jsp" %>
    </div> <!-- END Layout North -->
    
    <div class="ui-layout-west">
             
        <div class="tab-content ui-layout-content">
							<%@ include file="../menu/sidemenu.jsp" %>
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
            <li><a href="../home/home.jsp">Home</a></li>
            <li><a href="contacts.jsp">CRM </a>  </li>  
			<li><a href="#">Sales Order</a></li>
			
        </ul>
       <!-- <h1 class="message-header"></h1>-->
  
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:px;">

           
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:-2px;">           
<div id='jqxWidget'>
        <div style='float: left; margin-left:0px; margin-top:-5px;' id='salesordermenu'>
            <ul style="margin-left: 30px;">
            	
                <li><a href="contacts.jsp">Contacts</a></li>
                <li><a href="accounts.jsp">Accounts</a></li>
                <li><a href="Lead.jsp" title="Opportunities">Leads</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/opportunity/viewOpportunities.htm">Opportunities</a></li>
                <li><a href="quotes.jsp">Quotes</a></li>
                <li><a href="#">Sales Orders</a></li>
                <li><a href="crm.jsp">Sales Forms</a></li>
				
            </ul>
            <div>
									
					   
            </div>
            <div>
										
							
            </div>
            <div>
               				
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
            		
						<div id='Menu'>
									<ul>
										<li>Edit Selected Sales Order</li>
										<!-- <li>Delete Selected Row</li> -->
									</ul>
					   </div>
            			
                	<div id='content' style="margin-top:0px;">
								<script type="text/javascript">
									$(document).ready(function () {
										var theme = getDemoTheme();
										// Create a jqxMenu
										$("#leadmenu").jqxMenu({ width: '99.8%', height: '30px', theme: theme });
										$("#leadmenu").css('visibility', 'visible');    
									});
								</script>
										<div id='jqxWidget' style='margin-top:0px; '>
											<div id='leadmenu' style='visibility: hidden;'>
												<ul>
													<li><img src="../image/plus.png" style="height:20px; width:20px;"/><a href="salesorder/createditsalesorder.jsp" target="_newcrm" >&nbsp;Sales Order</a></li>
												</ul>
											</div>
											<br/>
										</div>
						</div>
						
						<div id="saleordergrid" style="margin-top:-15px;"></div>		
            </div>
            <div>
               
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

</body>
</html>