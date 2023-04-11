<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
		/* var soId = "${salesOrder.salesOrderId}";
		var soDate = "${salesOrder.salesOrderDate}"; 
		var soAccountName = "${salesOrder.account.accountName}"; 
		var soAccountNumber = "${salesOrder.account.accountNumber}"; 

		var soRep = "${salesOrder.salesOrderSalesRep}";       
		
		var basePath = "${pageContext.request.contextPath}/";
	    var newRowId = -1;
	    var activeTab = 7; */
		var soId = "${salesOrder.salesOrderId}";
		var soSubmitStatus = ${salesOrder.submittedStatus};
		var basePath = "${pageContext.request.contextPath}/";
	    var activeTab = 7; 
	</script>
    <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>
    <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
    <script type="text/javascript" src="../../extjs/include-ext.js"></script>
    <script type="text/javascript" src="../../extjs/options-toolbar.js"></script>
    <link rel="stylesheet" type="text/css" href="../../extjs/crm.css" />
	<script type="text/javascript" src="checklist/checkList-form.js"></script>
	<script type="text/javascript" src="checklist/checklistgrid.js"></script>
	<!-- <script type="text/javascript" src="checklist/checklist-file-upload-grid.js"></script> -->
	<script src="../../js/jquery.form.js"></script>

	<script type="text/javascript">
	       // alert("####### soId="+soId ); 
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
           <li><a href="../../home/home.jsp">Home</a></li>
			<li><a href="../crm.jsp">Sales Forms</a></li>
			<li><a href="#">Specifications <!--  >> Sales Order:2947, Account Name:Johnson, Status:Active --> </a></li>
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
              		
              		<div id="checkListFormPanel"></div>  
              		<div id="checklistgrid"></div>
              		              		
              		</form>
              </div>
               <input id="totalGridSubmitBtn" type="button"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Submit"/>
              </div>
              </div>
 
    
</div>
				
				
    </div> <!-- END scroll-pane -->

</div> <!-- END Layout Center -->

</div>
</div>
</div>

<div id="checklistWindow" style="margin-top:-100px;">
           <div>Checklist document</div>
           	
	           <div style="overflow: hidden;">
	           <form name="multiform" id="multiform" action="#" method="POST" enctype="multipart/form-data">
	           <div id='checklistPanel' style="margin:5px 0px 0px 3px;">
               		<div>
               			<input type="file" name="file" id="checklistFileUpload" style="width:400px;" placeholder="Browse document to upload"/>
               		</div>
	           </div>
	           <div style="margin-left:-50px;">
	         			<!-- <input type="submit" value="Submit"> -->
	               <input id="saveBtn" type="submit"  style='margin-top: 15px; margin-left: 50px; float: left;' value="Save"/>
	               <input id="cancelBtn" type="button"  style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel"/>
	           </div>
      			</form>
           </div>
           
</div>

<div id='checkMenu'>
<ul>
	<li>Upload Document</li>
	<li>Download Document</li>	
</ul>

</div><div id='checkMenuNoDownload'>
<ul>
	<li>Upload Document</li>
</ul>
</div>


</body>
</html>