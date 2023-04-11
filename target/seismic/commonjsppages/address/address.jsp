<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/png" href="../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <script type="text/javascript">
      	var addressId = "${address.addressId}";

      	var url = "${url}";

      	var addressTypeId = "${address.listValuesByAddressTypeId.listValueId}";    	
    	var contactId = "${address.contact.contactId}";    	
    	var contactNumber = "${address.contact.contactNumber}";    	
    	var entityNumber = "<%= request.getParameter("documentId") %>";    
    	var entityName = "Contact";    	    		
		var basePath = "${pageContext.request.contextPath}/";
	    var newRowId = -1;
	    var activeTab = 0; 
	</script>

        <!-- Retina Webfont for Boostrap from Font Awesome - http://fortawesome.github.com/Font-Awesome -->
    <link rel='stylesheet' type='text/css' href='../../css/seismic-all.css' />
  	
     <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<script type="text/javascript" src="../../extjs/include-ext.js"></script>
 	<script type="text/javascript" src="address-form.js"></script>
    	
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
            <li><a href="#">Address</a></li>
        </ul>
       <!-- <h1 class="message-header"></h1>-->
	  	

        
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
             	
          <div class="span12" style="margin-top:-18px;">		
		
            	<div class="dashWidget autoHeight" >			
		            <div class="row-fluid">
		              <div class="span12" style="margin-top:0px; margin-left:0px; ">
		              			<div id="formaddress"></div>		              			
		              			
		              </div>
		          	</div>
		       </div>
             
             			
              </div>
         


                   
           
			  
 <!-- END scroll-pane -->

   
      
      
       
    

</div> <!-- END Layout Center -->

<!--Modal Window Templates-->
</div>
</div>
</div>
</body>
</html>
