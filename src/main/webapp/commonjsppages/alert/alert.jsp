<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

     <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
    
	<script type="text/javascript" src="contactmenujs/contactmenu.js"></script>
	
    <script type="text/javascript" src="../../extjs/include-ext.js"></script>
 
	<script type="text/javascript" src="alert-form.js"></script>	
	

<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>
	
   
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
            
			<li><a href="#">Alert</a></li>
        </ul>
       <!-- <h1 class="message-header"></h1>-->

   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:-18px;">           				
            				
            <div class="dashWidget ">
            <div class="row-fluid ">
              <div class="span12 " style="margin-top:0px; margin-left:0px;" >

					<form>
					<div id="formcontacts"></div>
					</form>

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





</body>
</html>