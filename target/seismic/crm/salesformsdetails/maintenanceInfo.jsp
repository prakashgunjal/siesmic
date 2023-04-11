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
		var soId = "${salesOrder.salesOrderId}";
		var basePath = "${pageContext.request.contextPath}/";
	    var newRowId = -1;
	    var activeTab = 5;
	</script>

<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css"
	media="all" />

<%@ include file="../../menu/seismic-js-ui.jsp"%>
<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
<script type="text/javascript" src="../../extjs/include-ext.js"></script>
<script type="text/javascript" src="maintenanceInfo/maintainproduct.js"></script>
<script type="text/javascript"
	src="maintenanceInfo/sfmaintenceinfo-form.js"></script>
<script type="text/javascript"
	src="maintenanceInfo/maintenanceInfoGrid.js"></script>
<script type="text/javascript"
	src="maintenanceInfo/maintenanceandremoteworkservicegrid.js"></script>
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
					<!--    <li><a href="../../home/home.jsp">Home</a></li> -->
					<li><a href="../crm.jsp">Sales Forms</a></li>
					<li><a href="#">Maintenance Info </a></li>
					<li>
						<!--   SalesFormName: ${salesOrder.salesOrderNumber}  -->
						AccountName: ${salesOrder.account.accountName}
					</li>
				</ul>

				<button id="fullscreenb">
					<i class="icon-fullscreen"></i>
				</button>

				<div class="dashRow" style="width: 1080px; margin-left: -1px;">
					<div class="row-fluid">

						<div class="span12" style="margin-top: -18px;">
							<div id='jqxWidget'>
								<%@include file="commonSFMenu.jsp"%>
							</div>

							<div class="dashWidget autoHeight">
								<div class="row-fluid">
									<div class="span12" style="margin-top: 0px; margin-left: 0px;">
										<form>
											<div id="formsfmaininfo"></div>
											<div id='jqxWidget'>
												<div style='float: left; margin-left: 0px; margin-top: 0px;'
													id='promenu'>
													<ul style="margin-left: 30px;">
														<li>Products</li>
														<li>Maintenance and Remote work service</li>

													</ul>
													<div>
														<div id="maintInfoGrid"></div>
													</div>
													<div>
														<%@ include
															file="maintenanceInfo/maintenanceinforemoteservice.jsp"%>
													</div>

												</div>

											</div>


										</form>
									</div>
								</div>
							</div>

						</div>

					</div>
					<!-- END scroll-pane -->






				</div>
				<!-- END Layout Center -->

				<div id="jqxwindow">
					<div>Edit Record</div>
					<div style="overflow: hidden;">

						<table cellpadding="5px">
							<tr>
								<td>Product Category</td>
								<td><div id='dropdownlist'></div></td>
								<td>Product Sub-Category</td>
								<td><div id='dropdownlist1'></div></td>
							</tr>
							<tr>
								<td>Product</td>
								<td><div id='dropdownlist2'></div></td>
								<td>Quantity</td>
								<td><input id='inputField' type="text" class="jqx-input"
									style="width: 200px; height: 23px;" /></td>
							</tr>
							<tr>
								<td>Supplier</td>
								<td><input id='inputField' type="text" class="jqx-input"
									style="width: 200px; height: 23px;" /></td>
								<td>Description</td>
								<td><textarea style="height: 25px;"></textarea></td>
							</tr>
							<tr>
								<td>Supplier RRP x1</td>
								<td><input id='inputField' type="text" class="jqx-input"
									style="width: 200px; height: 23px;" /></td>
								<td>Total</td>
								<td><input id='inputField' type="text" class="jqx-input"
									style="width: 200px; height: 23px;" /></td>
							</tr>

						</table>
						<div style="margin-left: 280px;">
							<input type="button"
								style='margin-top: 15px; margin-left: 50px; float: left;'
								value="Save" id="saveButton" /> <input type="button"
								style='margin-left: 5px; margin-top: 15px; float: left;'
								value="Cancel" id="cancleButton" />
						</div>
					</div>
				</div>
				<!-- <div id='Menu'>
			<ul>
				<li>New</li>
				<li>Edit</li>
			</ul>
	   </div>
 -->
</body>
</html>