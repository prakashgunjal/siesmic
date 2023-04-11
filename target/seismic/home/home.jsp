<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../image/seismictitle.png" />
<title>Seismic-CRM</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="viewport"content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<!-- Retina Webfont for Boostrap from Font Awesome - http://fortawesome.github.com/Font-Awesome -->
<link rel='stylesheet' type='text/css' href='../css/seismic-all.css' />
<%@ include file="../menu/seismic-js.jsp"%>
<%@ include file="../menu/seismic-jqx.jsp"%>
<script type="text/javascript" src="../menujs/navigationmenu.js"></script>
<style type="text/css">
.editedRow {
	color: #b90f0f;
	font-style: italic;
}
</style>
</head>
<body>
	<div class="ui-layout-north topbar">
		<%@ include file="../menu/commonheader.jsp"%>
	</div>
	<!-- END Layout North -->
	<div class="ui-layout-west">
		<div class="tab-content ui-layout-content">
			<%@include file="../menu/sidemenu.jsp"%>
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
					<!--    <li><a href="#">Home</a></li> -->
				</ul>
				<!-- <h1 class="message-header"></h1>-->
								<div class="dashRow">
					<div class="row-fluid">

						<div class="span12" style="margin-top: -18px;">
							<div style='float: left; margin-left: 0px;' id='homemenu'>
								<ul style="margin-left: 30px;">
									<li><a href="home.jsp" title="Home">Home</a></li>
									<li><a href="../crm/contacts.jsp"
										title="Customer Relationship management">CRM</a></li>
									<li><a href="../contractmanagement/contract.jsp"
										title="Contract Management">Contract Management</a></li>
									<li><a href="#" title="Sales">Sales</a></li>
									<li><a href="../product/product.jsp" title="Products">Products</a></li>
									<li><a href="#" title="Locations">Locations</a></li>
									<li><a href="../inventorymanagement/inventoryreceipt.jsp"
										title="Inventory management">Inventory Management</a></li>
									<li><a href="../servicemanagement/servicerequest.jsp"
										title="Service Management">Service Management</a></li>
									<li><a href="#" title="System Admin">System Admin</a></li>


								</ul>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								<div></div>
							</div>

							<div class="dashWidget autoHeight">
								<div class="row-fluid">
									<div class="span12" style="margin-top: 0px; margin-left: 0px;">

										<iframe name="report1"
											style="height: 600px; width: 100%; border: 0px"
											src="dashboard.jsp"></iframe>

									</div>
								</div>
							</div>


						</div>

						<!-- END scroll-pane -->

					</div>
					<!-- END Layout Center -->

					<!--Modal Window Templates-->
				</div>
			</div>
		</div>
</body>
</html>
