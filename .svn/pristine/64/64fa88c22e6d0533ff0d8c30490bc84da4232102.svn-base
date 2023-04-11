<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page import="com.seismic.crm.model.Contact"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../../image/seismictitle.png" />
<title>Seismic-CRM</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<script type="text/javascript">
    	var contactId = "${contact.contactId}";
    	var contactNumber = "${contact.contactNumber}";
     	var accountId = "${contactAccountId.accountId}";        	                  
		var basePath = "${pageContext.request.contextPath}/";
		
		var moduleName = "Contact";
		var moduleId = "${contact.contactNumber}";
		var commAccountId = "<%= request.getParameter("accountId") %>";
		if(commAccountId != 'null'){
			accountId = commAccountId;
		}
		var url = "${url}";
		var url1 = "<%= request.getParameter("url") %>";
		
	    var newRowId = -1;
	    var activeTab = 0; 
	</script>

<link rel="stylesheet" href="../../css/seismic-all-ui.css"type="text/css" media="all" />
<%@ include file="../../menu/seismic-js-ui.jsp"%>
<%@ include file="../../menu/seismic-jqx-ui.jsp"%>

<script type="text/javascript"	src="../../commongrid/commonopportunity-grid.js"></script>
<script type="text/javascript"	src="../../commongrid/commonservicerequestgrid.js"></script>
<script type="text/javascript"	src="../../commongrid/commonprojectgrid.js"></script>
<script type="text/javascript"	src="../../commongrid/commonactivitygrid.js"></script>
<script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
<script type="text/javascript"	src="../../commongrid/commonaddressgrid.js"></script>
<script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
<script type="text/javascript" src="contactmenujs/contactmenu.js"></script>
<script type="text/javascript" src="../../extjs/include-ext.js"></script>
<script type="text/javascript" src="../../menu/commonbuttonmenu.js"></script>
<script type="text/javascript" src="contact-form.js"></script>
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
	</div>
	<script type="text/javascript">			
		  $(document).ready(function () {
	            var theme = getDemoTheme();
	         	// Disabling SubTabs for Add Contact
				if(contactId == null || contactId=="" ){										
					 $('#cont').jqxTabs('disable');	
					 $('#commopportunitygrid').jqxGrid('disabled',true);
					 $('#commopportunitygrid').jqxGrid({showstatusbar:false});		
					 $('#commopportunitygrid').jqxGrid('statusbar').hide();  			
				}  				   					           
	        });
    </script>

	<!-- END Layout North -->

	<div class="ui-layout-south footer"></div>
	<!-- END Layout South -->

	<div class="ui-layout-east"></div>
	<!-- /sidebarTabs -->

	<div class="sidebarFooter"></div>
	</div>
	<!-- END Layout East -->

	<div class="ui-layout-center">
		<div id="view-holder" class="ui-layout-content">
			<!-- <div class="scroll-pane"> -->

			<ul class="breadcrumb">
				<!--    <li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> -->
				<!--  <li><a href="../contacts.jsp">Contact </a>  </li>     -->
				<li>
					<% if(request.getParameter("contactId") != null  ) {		 %> Edit
					Contact <%	}else{ %> Create Contact <% } %>
				</li>
				<li>ContactNumber: ${contact.contactNumber} >> ContactName:
					${contact.contactName}</li>
			</ul>

			<div class="dashRow">
				<div class="row-fluid">
					<div class="span12" style="margin-top: -20px;">

						<div class="dashWidget autoHeight">
							<div class="row-fluid ">
								<div class="span12 " style="margin-top: 0px; margin-left: 0px;">

									<form>
										<div id="formcontacts"></div>
									</form>
									<div id='jqxWidget'>
										<div style='float: left; margin-left: 0px; margin-top: -20px;'
											id='cont'>
											<ul style="margin-left: 30px;">
												<li>Opportunities</li>
												<!-- <li>Service Requests</li>
					            	<li>Projects</li> -->
												<li>Addresses</li>
												<li>Activities</li>
												<li>Alerts</li>
												<li>Document</li>
											</ul>
											<div>
												<%@ include file="../../commongrid/commonopportunity.jsp"%>
											</div>
											<%-- <div>
					            		
					            		<%@ include file="../../commongrid/commonservicerequest.jsp" %>
												
					            </div>
					            <div>
					            		<%@ include file="../../commongrid/commonproject.jsp" %>
					            </div> --%>
											<div>
												<%@ include file="../../commongrid/commonaddress.jsp"%>
											</div>
											<div>
												<%@ include file="../../commongrid/commonactivity.jsp"%>
											</div>
											<div>
												<%@ include file="../../commongrid/commonalert.jsp"%>
											</div>
											<div>
												<%@ include file="../../commongrid/commondocument.jsp"%>
											</div>

										</div>

									</div>

								</div>
							</div>
						</div>






					</div>
				</div>
			</div>


		</div>
	</div>



	<!-- END scroll-pane -->







	</div>
	<!-- END Layout Center -->

	<!--Modal Window Templates-->

</body>
</html>