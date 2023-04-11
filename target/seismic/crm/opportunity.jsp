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

  	<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

	<script type="text/javascript">
		var basePath = "${pageContext.request.contextPath}/";
	</script>
	<%@ include file="../menu/seismic-js-ui.jsp" %>
	<%@ include file="../menu/seismic-jqx-ui.jsp" %>
	
	<script type="text/javascript" src="../opportunities/opportunitymenu.js"></script>

	<script type="text/javascript" src="../../gridjs/opportunity-grid.js"></script>
   


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
            
			 <li><a href="${pageContext.request.contextPath}/home/home.jsp">Home</a>  </li>     
			 <li><a href="../contacts.jsp">CRM </a>  </li>  
			 <li><a href="#">Opportunities </a></li>     
			 
        </ul>
    
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="">
  
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:-13px;">
<div id='jqxWidget'>
        <div style='margin-top:5px;' id='Oppor'>
            <ul>
            	
                <li><a href="${pageContext.request.contextPath}/crm/contacts.jsp">Contacts</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/accounts.jsp">Accounts</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/Lead.jsp" title="Opportunities">Leads</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/opportunity/viewOpportunities.htm">Opportunities</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/quotes.jsp">Quotes</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/salesorder.jsp">Sales Orders</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/crm.jsp" >Sales Forms</a></li>
				
            </ul>
            <div>
									
					   
            </div>
            <div>
										
							
            </div>
            <div>
               				
            </div>
            <div>
            	
						
						<div id='Menu'>
									<ul>
										<li>Edit Selected Opportunity </li>
									</ul>
						</div>
                <div id='content' style="margin-top:0px;">
								<script type="text/javascript">
									$(document).ready(function () {
										var theme = getDemoTheme();
										// Create a jqxMenu
										$("#opportunitymenu").jqxMenu({ width: '99.8%', height: '30px', theme: theme });
										$("#opportunitymenu").css('visibility', 'visible');    
									});
								</script>
								
										<div id='jqxWidget' style='margin-top:0px; '>
											<div id='opportunitymenu' style='visibility: hidden;'>
												<ul>
													<li><img src="../../image/plus.png" style="height:20px; width:20px;"/><a href="createditOpportunity.htm" target="_newcrm" >&nbsp;Opportunity</a></li>
												</ul>
											</div>
											<br/>
										</div>
						</div>
						
						<div id="opportunitygrid" style="margin-top:-15px;"></div>
            </div>
            <div>
                	
            </div>
            <div>
                
            </div>
            <div>
               
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
</body>
</html>