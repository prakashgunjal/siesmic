<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <!DOCTYPE html> 
<html>
<head>
	<meta charset="utf-8">
	<link rel="icon" type="image/png" href="../../image/seismictitle.png" />
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<script type="text/javascript">
		var soId = "${salesOrder.salesOrderId}";
		var basePath = "${pageContext.request.contextPath}/";
	    var newRowId = -1;
	    var activeTab = 6;
	</script>
    <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>
    <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
	<script type="text/javascript" src="../../extjs/include-ext.js"></script>
	<script type="text/javascript" src="specifications/specification-form.js"></script>
	<script type="text/javascript" src="specifications/specifications-grid.js"></script>
	
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
			<li><a href="#">Specifications </a></li>
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
              		<div id="formspec"></div>
              		</form>
              	
              </div>
              </div>
              </div>
                            						<div style='float: left; margin-top:-18px; height:auto;' id='specTab'>
							<ul style="margin-left: 30px;">
								<li>System Specification</li>
								<li>Maintenance Specification</li>
								<li>Line Calls Specification</li>
								<li>SIP Specification</li>
								<li>Hosted(EHC) Specification</li>
								<li>xDSL Specification</li>
								<li>Circuit Specification</li>
								<li>Co-Location Specification</li>	
							</ul>
							<c:forEach var="i" begin="0" end="7">
								<div>
									<div id="prodDDL${i}" style="margin:4px"></div>
									<div id="specGrid${i}"></div>
								</div>
							</c:forEach>
							</div>
           
</div>
				
				
    </div> <!-- END scroll-pane -->

</div> <!-- END Layout Center -->

</div>
</div>
</div>

<div id="tasksPopUpWnd">
	<div>Tasks</div>
	<div style="overflow: hidden;">
		<div id="tasksListBox"></div>
		<div style="margin-top:5px">
			<input style="margin-left: 130px;" type="button" id="TSave" value="Save" />
			<input id="Cancel" style="margin-left: 5px;" type="button" value="Cancel" />
		</div>
	</div>
</div>

<div id="activityPopUpWnd">
	<div>Activities</div>
	<div style="overflow: hidden;">
		
		<div class="dashWidget " >			
            <div class="row-fluid">
              <div class="span12" style="margin-top:0px; margin-left:0px; ">
              <div id="activitiesListBox"></div>
				<div id="activitiesList"></div>
              		
              			<div id='activitypopupgrid'>
					        <div id="jqxgrid"></div>
					        <div style="font-size: 12px; font-family: Verdana, Geneva, 'DejaVu Sans', sans-serif; margin-top: 30px;">
					            <div id="cellbegineditevent"></div>
					            <div style="margin-top: 10px;" id="cellendeditevent"></div>
					       </div>
					    </div>
              </div>
              </div>
              </div>

	</div>
</div>


</body>
</html>