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
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<script type="text/javascript">  
		var accountId = "${account.accountId}";
		var basePath = "${pageContext.request.contextPath}/";
		var accountPId = "${account.accountPId}";
		var  contactGroupId= "${account.contactGroup.contactGroupId}"
				
	</script>

<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css"
	media="all" />
<%@ include file="../../menu/seismic-js-ui.jsp"%>
<%@ include file="../../menu/seismic-jqx-ui.jsp"%>

<script type="text/javascript"
	src="../../commongrid/commoninvoicegrid.js"></script>
<script type="text/javascript" src="../../commongrid/commonquotegrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonsalesformsgrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonsalesordergrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonpurchaseordergrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commoncontractsgrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonlocationgrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commoncontactsgrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonservicerequestgrid.js"></script>
<script type="text/javascript"
	src="../../commongrid/commonprojectgrid.js"></script>
<script type="text/javascript" src="../../commongrid/Invoicegrid.js"></script>

<script type="text/javascript" src="../../extjs/include-ext.js"></script>

<script type="text/javascript" src="acc-form.js"></script>

<style type="text/css">
.editedRow {
	color: #b90f0f;
	font-style: italic;
}
</style>

<script type="text/javascript">
 $(document).ready(function () {
    var theme = getDemoTheme();	
    $('#accmenu').jqxTabs({ width: '100%', theme: "shinyblack" });
     // Disabling SubTabs for Add Account         
	if(accountId == null || accountId=="" ){										
		 $('#accmenu').jqxTabs('disable');	
		 $('#quotesgrid').jqxGrid('disabled',true);
		 $('#quotesgrid').jqxGrid({showstatusbar:false});		
		 $('#quotesgrid').jqxGrid('statusbar').hide();  			
	}  		
	 
});
                       
</script>


</head>
<body>

	<div class="ui-layout-north topbar">
		<%@ include file="../../menu/commonheaderui.jsp" %>
	</div>
	<!-- END Layout North -->

	<div class="ui-layout-west">

		<div class="tab-content ui-layout-content">
			<%@include file="../../menu/sidemenuui.jsp"%>

		</div>


		<div class="sidebarFooter">
			<button id="newb">New</button>
			<button id="settingsb">Settings</button>
			<div id="dragb"
				class="ui-layout-resizer
           ui-layout-resizer-west
           ui-layout-resizer-open
           ui-layout-resizer-west-open">
			</div>
		</div>

	</div>
	<!-- END Layout West -->

	<div class="ui-layout-south footer"></div>
	<!-- END Layout South -->

	<div class="ui-layout-east"></div>
	<!-- /sidebarTabs -->

	<div class="sidebarFooter"></div>
	</div>
	<!-- END Layout East -->

	<div class="ui-layout-center">
		<div id="view-holder" class="ui-layout-content">
			<div class="scroll-pane">
				<ul class="breadcrumb">
					<!--<li><a href="../../home/home.jsp">Home</a>  </li>    
			 <li><a href="../../crm/contacts.jsp">CRM </a>  </li> -->
				<!-- 	<li><a href="../accounts.jsp">Accounts </a></li> -->
					<li>
						<% if(request.getParameter("accountId") != null  ) {		 %> Edit
						Account <%	}else{ %> Create Account <% } %>
					</li>
					<li>AccountNumber: ${account.accountNumber} &nbsp; , &nbsp;
						AccountName: ${account.accountName}</li>
				</ul>

				<button id="fullscreenb">
					<i class="icon-fullscreen"></i>
				</button>

				<div class="dashRow">
					<div class="row-fluid">
						<div class="span12" style="margin-top: -18px;">


							<div class="dashWidget autoHeight">
								<div class="row-fluid">
									<div class="span12" style="margin-top: 0px; margin-left: 0px;">

										<div id="formaccount"></div>


										<div id='jqxWidget'>
											<div style='float: left; margin-left: 0px; margin-top: 5px;'
												id='accmenu'>
												<ul style="margin-left: 30px;">
													<!-- <li>Invoices</li> -->
													<li>Quotes</li>
													<li>Sales Forms</li>
													<li>Sales Orders</li>
													<!-- <li>Purchase Orders</li>
							                <li>Contracts</li> -->
													<li>Locations</li>
													<li>Contacts</li>
													<!--  <li>Inventory</li>
							                <li>Service Requests</li>
							                <li>Projects</li> -->

												</ul>
												<%-- <div>
							            		<%@ include file="../../commongrid/commoninvoice.jsp" %>
							            </div>	 --%>
												<div>
													<%@ include file="../../commongrid/commonquote.jsp"%>
												</div>
												<div>
													<%@ include file="../../commongrid/commonsalesform.jsp"%>
												</div>
												<div>
													<%@ include file="../../commongrid/commonsalesorder.jsp"%>
												</div>
												<%--  <div>
							               		<%@ include file="../../commongrid/commonpurchaseorder.jsp" %>			
							            </div>
							            <div>
							                	<%@ include file="../../commongrid/commoncontract.jsp" %>	
							            </div> --%>
												<div>
													<%@ include file="../../commongrid/commonlocation.jsp"%>
												</div>
												<div>
													<%@ include file="../../commongrid/commoncontact.jsp"%>
												</div>
												<%--  <div>
							            
							            </div>
							            <div>
							               		<%@ include file="../../commongrid/commonservicerequest.jsp" %>
							            </div>
							            <div>
							               		<%@ include file="../../commongrid/commonproject.jsp" %>
							            </div> --%>


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