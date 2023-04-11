<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div class="tab-pane active" id="1">
                <ul>    
						
						<li class="list-box submenu"  id="submenu">
                          <a href="../../home/home.jsp">Home<!-- <b class="caret"></b> --></a>
						  </li>
												  
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub1"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Lead</a>
                          <div id="sub1" class="accordion-body collapse">
                          <div class="accordion-inner">
                          			<ul >
											<li><a href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fLead+Detailed+Report&rs:Command=Render"
													target="report1">Lead queries</a></li>
												<li><a href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fLead+Ageing+Report&rs:Command=Render"
													target="report1">Lead ageing report</a></li>
												<li><a href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fLead+Pending+Activity&rs:Command=Render"
													target="report1">Lead pending activities</a></li>
									</ul>
                          </div>
                          </div>
						  </li>
						  
						 <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub2"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Opportunities</a>
                          <div id="sub2" class="accordion-body collapse">
                          <div class="accordion-inner">
                          		<ul>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+Pipeline&rs:Command=Render"
													target="report1">Opportunity pipeline</a></li>
												
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+By+month&rs:Command=Render"
													target="report1">Opportunity by month</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+by+Product&rs:Command=Render"
													target="report1">Opportunity by product</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+By+Sales+Rep+And+Status&rs:Command=Render"
													target="report1">By Sales Rep with Status</a></li>
												<li><a href="#" target="_pageunderdevelopment">Opportunity by Sales team</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+By+CloseProbability&rs:Command=Render"
													target="report1">By Close Probability</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fClosed+Opportunity&rs:Command=Render"
													target="report1">Closed Opportunity</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+Loss+Rate&rs:Command=Render"
													target="report1">Win loss reason</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunity+Won+Rate&rs:Command=Render"
													target="report1">Win rate</a></li>
												<li><a href="#" target="_pageunderdevelopment">Closing This Quater</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fOpportunities+Closing+history&rs:Command=Render"
													target="report1">Closing history</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fPending+Activity+By+Open+Opportunity&rs:Command=Render"
													target="report1">Pending Activities by open</a></li>
											</ul>
                          </div>
                          </div>
						  </li>

					 	  <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub5"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Contract</a>
                       	  <div id="sub5" class="accordion-body collapse">
                          <div class="accordion-inner">
                          		<ul >
												<li><a href="" >Contract report</a></li>
												<li><a href="" >Contract by renewal date</a></li>
												<li><a href="" >Contract queries</a></li>
								</ul>
                          </div>
                          </div>
						  </li>
						  
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub6"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Quotes</a>
                       	  <div id="sub6" class="accordion-body collapse">
                          <div class="accordion-inner">
                          		<ul>
												<li><a href="#" >Print quotes</a></li>
												<li><a href="#" >Reworked quotes</a></li>
												<li><a href="#" >Quotes detailed report</a></li>
												<li><a href="#" >Quotes ageing report</a></li>
								</ul>
                          </div>
                          </div>
						  </li>
						  <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub7"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Sales Order</a>
                          <div id="sub7" class="accordion-body collapse">
                          <div class="accordion-inner">
                          		<ul>
												<li><a href="#" >Sales order</a></li>
												<li><a href="#" >Sales order list</a></li>
								</ul>
                          </div>
                          </div>
						  </li>
						  <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub8"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Purchase Order</a>
                       	  <div id="sub8" class="accordion-body collapse">
                          <div class="accordion-inner">
                          		<ul>
												<li><a href="#" >Purchase orders</a></li>
												<li><a href="#" >PO by contacts</a></li>
												<li><a href="#" >PO by supplier spend</a></li>
												<li><a href="#" >PO by product</a></li>
												<li><a href="#" >Actual PO to original PO variance</a></li>
												<li><a href="#" >PO Average cost per product</a></li>
												<li><a href="#" >PO by Status</a></li>
												<li><a href="#" >PO opened in a month with $ Amount</a></li>
								</ul>
                          </div>
                          </div>
						  </li>
						<li class="list-box submenu"  id="submenu">
                        <a data-toggle="collapse" data-parent="#submenu" href="#sub9"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Accounts</a>
                        <div id="sub9" class="accordion-body collapse">
                        <div class="accordion-inner">
                        					<ul>
												<li><a href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fAccount+Report&rs:Command=Render"
													target="report1">Accounts List</a></li>
											</ul>
                        </div>
                        </div>
						</li>
						<li class="list-box submenu"  id="submenu">
                        <a data-toggle="collapse" data-parent="#submenu" href="#sub10"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Contacts</a>
                        <div id="sub10" class="accordion-body collapse">
                        <div class="accordion-inner">
                        					<ul>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fContact+By+Industry&rs:Command=Render"
													target="report1">Contacts by Organization</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fContact+Without+Organization&rs:Command=Render"
													target="report1">Contacts WithOut Organization</a></li>
												<li><a href="#" target="report1">Contacts by
														Opportunities</a></li>
												<li><a href="#" target="_newlead">Contacts List</a></li>
												<li><a
													href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fContact+Mailing&rs:Command=Render"
													target="report1">Mailing Lists</a></li>
											</ul>	
                        </div>
                        </div>
						</li>
						<li class="list-box submenu"  id="submenu">
                        <a data-toggle="collapse" data-parent="#submenu" href="#sub11"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Activity/Task/Cases</a>
                        <div id="sub11" class="accordion-body collapse">
                        <div class="accordion-inner">
                        					<ul>
												<li><a href="#" target="_newlead">First contact
														Resolution Report By Agent</a></li>
												<li><a href="#" target="_newlead">Tickets by Agent</a></li>
												<li><a href="#" target="_newlead">Ticket by Actions</a></li>
												<li><a href="#" target="_newlead">Frequent flier
														reports Customers with x tickets</a></li>
												<li><a href="#" target="_newlead">Ticket Report by
														Agent</a></li>
												<li><a href="#" target="_newlead">Time log tickets
														based on activity</a></li>
												<li><a href="#" target="_newlead">Open Tickets</a></li>
											</ul>
                        </div>
                        </div>
						</li>
						<li class="list-box submenu"  id="submenu">
                         <a data-toggle="collapse" data-parent="#submenu" href="#sub12"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Products</a>
                        <div id="sub12" class="accordion-body collapse">
                        <div class="accordion-inner">
                        				<ul>
												<li><a href="#" target="_newlead">Product Detail</a></li>
												<li><a href="#" target="_newlead">Products by
														Detail</a></li>
												<li><a href="#" target="_newlead">Product Stock
														reports</a></li>
												<li><a href="#" target="_newlead">Product Inflow
														and outflow</a></li>
											</ul>
                        </div>
                        </div>
						</li>
						<li class="list-box submenu"  id="submenu">
                        <a data-toggle="collapse" data-parent="#submenu" href="#sub13"><img src="../../image/folder1.png" style="height:25px; width:25px;"/>Asset Movement</a>
                        <div id="sub13" class="accordion-body collapse">
                        <div class="accordion-inner">
                        			<ul>
												<li><a href="#" target="_newlead">Register by No Of Days</a></li>
												<li><a href="#" target="_newlead">Un-Allocated Assets</a></li>
												<li><a href="#" target="_newlead">Asset Report by Account</a></li>
											</ul>
                        </div>
                        </div>
						</li>

								
         </ul>
                            </div>
</body>
</html>