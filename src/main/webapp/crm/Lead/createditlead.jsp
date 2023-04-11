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
		//var contactId = "${contact.contactId}";
		var basePath = "${pageContext.request.contextPath}/";
		var leadId = "${lead.leadId}";
		var accountId = "${lead.account.accountId}";
		var moduleName = "Lead";
		var moduleId = "${lead.leadNumber}";
		var url = "${url}";
		
		var newRowId = -1;
		var activeTab = 0; 
	</script>
   <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>
    
	<%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
    
	<script type="text/javascript" src="leadmenujs/leadmenu.js"></script>
	<script type="text/javascript" src="../../commongrid/commonactivitygrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commontaskgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commoncallgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
  	 <script type="text/javascript" src="../../extjs/include-ext.js"></script>
 	 <script type="text/javascript" src="lead-form.js"></script>  
	
    <style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>
   <script type="text/javascript">
   
		 $(document).ready(function () {
		    var theme = getDemoTheme();	
		    $('#leadmenus').jqxTabs({ width: '100%', theme: "shinyblack" });
		     // Disabling SubTabs for Add Lead         
			if(leadId == null || leadId=="" ){										
				 $('#leadmenus').jqxTabs('disable');	
				 $('#commonactivitygrid').jqxGrid('disabled',true);
				 $('#commonactivitygrid').jqxGrid({showstatusbar:false});		
				 $('#commonactivitygrid').jqxGrid('statusbar').hide();    			
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
           <!--<li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> -->    
		<!-- 	 <li><a href="../Lead.jsp">Leads </a>  </li>     -->
			 <li>		 
			<% if(request.getParameter("leadId") != null  ) {		 %>	
			       Edit Lead  
			 <%	}else{ %>		  
			       Create Lead  						  
			 <% } %>                        	   
			  </li>  			  		    
			 <li> 			   		     
			    LeadNumber: ${lead.leadNumber}
			    &nbsp; , &nbsp;  
			    LeadName:   ${lead.leadName}
			 </li>    		
        </ul>
      
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
            
              <div class="span12" style="margin-top:-18px;">
                       
          	<div class="dashWidget autoHeight">	
            <div class="row-fluid">
              <div class="span12" style="margin-top:5px; margin-left:0px;">
				<form>
				<div id="formlead"></div>
			 	</form>
				</div>
            </div>               
             </div>
                            
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">       
<div id='jqxWidget'>
        <div style='margin-top:5px;' id='leadmenus'>
            <ul>
            	<li>Activities</li>
                <li>Alerts</li>
                <li>Document</li>	
				         </ul>
            <div>
					<%@ include file="../../commongrid/commonactivity.jsp" %>					
					   
            </div>
            <div>
					<%@ include file="../../commongrid/commonalert.jsp" %>				
							
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
</div>
</div>
</body>
</html>