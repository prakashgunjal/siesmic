<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
	<link rel="icon" type="image/png" href="../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <!-- <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> -->

	<link rel="stylesheet" href="../css/seismic-all.css" type="text/css" media="all"/>
	<%@ include file="../menu/seismic-js.jsp" %>
	<%@ include file="../menu/seismic-jqx.jsp" %>
       	
	<script type="text/javascript" src="salesformsdetails/crmnavmenu.js"></script>
	<script type="text/javascript" src="../gridjs/salesformsgrid.js"></script>
   
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
              
        </div>
         <!-- /sidebarTabs -->
        
        <div class="sidebarFooter">
            
        </div>
    
     <!-- END Layout East -->
            
  <div class="ui-layout-center">
    <div id="view-holder" class="ui-layout-content">
      <div class="scroll-pane">
        <ul class="breadcrumb">
            <li><a href="../home/home.jsp">Home</a></li>
            <li><a href="contacts.jsp">CRM </a>  </li>  
			<li><a href="#">Sales Forms</a></li>
        </ul>
      
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">  
              <div class="span12" style="margin-top:-18px; ">

            
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">            
<div id='jqxWidget'>
        <div style='float: left; margin-left:0px; margin-top:-5px;' id='crmnavmenu'>
            <ul style="margin-left: 30px;">
            	
                <li><a href="contacts.jsp">Contacts</a></li>
                <li><a href="accounts.jsp">Accounts</a></li>
                <li><a href="Lead.jsp" title="Opportunities">Leads</a></li>
                <li><a href="${pageContext.request.contextPath}/crm/opportunity/viewOpportunities.htm">Opportunities</a></li>
                <li><a href="quotes.jsp">Quotes</a></li>
                <li><a href="salesorder.jsp">Sales Orders</a></li>
                <li><a href="#" >Sales Forms</a></li>
				
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
                
            </div>
            <div>
            							
						<div id='Menu'>
									<ul>
										<li>Edit Selected Sales Form</li>

									</ul>
					   </div>
               <div id='content' style="margin-top:0px;">
								<script type="text/javascript">
									$(document).ready(function () {
										var theme = getDemoTheme();
										// Create a jqxMenu
										$("#salesformsmenu").jqxMenu({ width: '99.8%', height: '30px', theme: theme });
										$("#salesformsmenu").css('visibility', 'visible');    
									});
								</script>
										<div id='jqxWidget' style='margin-top:0px; '>
											<div id='salesformsmenu' style='visibility: hidden;'>
												<ul>
													<li><img src="../image/plus.png" style="height:20px; width:20px;"/><a href="salesformsdetails/cover.htm" target="_newcrm" >&nbsp;Sales Forms</a></li>
												</ul>
											</div>
											<br/>
										</div>
						</div>
						
						<div id="salesgrid" style="margin-top:-15px;"></div>
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

</body>
</html>