<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link rel="icon" type="image/png" href="../../image/seismictitle.png" />
<title>Seismic-CRM</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="viewport"content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>
<%@ include file="../../menu/seismic-js-ui.jsp"%>
<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
<script type="text/javascript" src="kpireportmenu.js"></script>

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
	<!-- END Layout North -->

	<div class="ui-layout-west">

		<div class="tab-content ui-layout-content">
			<%@ include file="../../menu/sidemenuui.jsp" %>
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
					<li><a href="../../home/home.jsp">Home</a></li>
					<li><a href="#">BI</a></li>
					<li><a href="#">KPIs</a></li>
				</ul>
				<!-- <h1 class="message-header"></h1>-->
				<button id="fullscreenb">
					<i class="icon-fullscreen"></i>
				</button>

				<div class="dashRow">
					<div class="row-fluid">
						<div class="span12" style="margin-top: 0px;">
							<div id='jqxWidget' style='margin-top: 0px;'>
								<div id='kpimenureport' style='visibility: hidden;'>
									<ul>
										<li>Service KPIs
											<ul style='width: 300px;'>
												<li><a href="" target="_pageunderdevelopment">Trends
														Of Case Created </a></li>
												<li><a href="" target="_pageunderdevelopment">Trends
														Of Case Closed</a></li>
												<li><a href="" target="_pageunderdevelopment">Trends
														Of Cases Resolution Time</a></li>
												<li><a href="" target="_pageunderdevelopment">Cases
														Distribution By Support Channel</a></li>
												<li><a href="" target="_pageunderdevelopment">Case
														Distribution By Type</a></li>
												<li><a href="" target="_pageunderdevelopment">Case
														Distribution By Priority</a></li>

											</ul>
										</li>
										<li>Sales Manager Dashboard
											<ul style='width: 300px;'>
												<li><a href="" target="_pageunderdevelopment">PipeLine
														Growth</a></li>
												<li><a href="" target="_pageunderdevelopment">Open
														Activites by Day</a></li>
												<li><a href="" target="_pageunderdevelopment">Actual
														vs Quota</a></li>
												<li><a href="" target="_pageunderdevelopment">PipeLine
														Next 90 Days</a></li>
												<li><a href="" target="_pageunderdevelopment">Open
														Opportunities</a></li>
												<li><a href="" target="_pageunderdevelopment">Closed
														Opportunities</a></li>
												<li><a href="" target="_pageunderdevelopment">Closed
														Deals Leader Board</a></li>
											</ul>
										</li>
										<li>Company Performance Dashboard
											<ul style='width: 300px;'>
												<li><a href="" target="_newlead">Closed Sales To
														Date</a></li>
												<li><a href="" target="_newlead">Lead by Lead
														Source</a></li>
												<li><a href="" target="_newlead">Open Case by
														Priority</a></li>
												<li><a href="" target="_newlead">Lead by lead
														Status</a></li>
												<li><a href="" target="_newlead">Number of Cases</a></li>
												<li><a href="" target="_newlead">Pipeline By Stage
														and Type</a></li>
												<li><a href="" target="_newlead">Pipeline By Type
														and Close Month</a></li>
											</ul>
										</li>

										<li>Agent Supervisor Owerview
											<ul style='width: 200px;'>
												<li><a href="" target="_newlead">Open Case By
														Priority</a></li>
												<li><a href="" target="_newlead">Open Case By
														Status</a></li>
												<li><a href="" target="_newlead">Open Case By Type</a></li>
												<li><a href="" target="_newlead">Top Agents By Open
														Case</a></li>
											</ul>
										</li>
										<li>Sales Executive Dashboard
											<ul style='width: 300px;'>
												<li><a href="" target="_newlead">Pipeline Growth </a></li>
												<li><a href="" target="_newlead">Closed Bussiness</a></li>
												<li><a href="" target="_newlead">Closed Deals month
														Over Month</a></li>
												<li><a href="" target="_newlead">Pipeline Next 90
														Days</a></li>
												<li><a href="" target="_newlead">Pipeline by
														Product Family</a></li>
											</ul>
										</li>


									</ul>
								</div>
								<br />
							</div>


							<div class="dashWidget ">
								<div class="row-fluid">
									<div class="span12" style="margin-top: 0px; margin-left: 0px;">

									</div>
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