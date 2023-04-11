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

	 <link rel="stylesheet" href="../../css/seismic-all.css" type="text/css" media="all"/>

	<script type="text/javascript" src="../../js/tabcontent.js"></script>



    <script type="text/javascript" src="../../js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="../../js/jquery.layout.js"></script>
    <script type="text/javascript" src="../../js/bootstrap.js"></script>
    <script type="text/javascript" src="../../js/jquery-ui-1.8.20.custom.min.js"></script>

    <!-- Custom Scrollbars Below-->
    <script type="text/javascript" src="../../js/jquery.mousewheel.js"></script>
    <script type="text/javascript" src="../../js/mwheelIntent.js"></script>
    <script type="text/javascript" src="../../js/jquery.em.js"></script>
    <script type="text/javascript" src="../../js/jScrollPane.js"></script>

    <!--[if lte IE 8]><script language="javascript" type="text/javascript" src="../../js/flot/excanvas.min.js"></script><![endif]-->
  
    
   
   
    <!--  <script type="text/javascript" src="../../js/styleswitcher.js"></script> -->
   
    <script type="text/javascript" src="../../js/colorpicker/js/colorpicker.js"></script>
    <script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
   
    <script type="text/javascript" src="../../js/onmediaquery.min.js"></script>
    

    <!-- Custom app scripts and functions inside application.js and responsive.js file linked below. -->
    
    <script type="text/javascript" src="../../js/application-widgets.js"></script>
    <!--[if !IE]><!-->
    <script type="text/javascript" src="../../js/responsive-other-pages.js"></script>
    <!--<![endif]-->

    <!--[if lte IE 10]><script language="javascript" type="text/javascript" src="js/responsive-other-pages-IE.js"></script><![endif]-->

	
	
	<link rel="stylesheet" href="../../jqwidgets/styles/jqx.base.css" type="text/css" />
	<link rel="stylesheet" href="../../jqwidgets/styles/jqx.shinyblack.css" type="text/css" />

    <script type="text/javascript" src="../../scripts/gettheme.js"></script>
    
    <script type="text/javascript" src="../../jqwidgets/jqx-all.js"></script>
    
    
    
	
	
	<script type="text/javascript" src="../../menujs/inventorymenu.js"></script>
	<script type="text/javascript" src="../../menujs/warehousemenu.js"></script>
	
	
	<script type="text/javascript" src="warehouse-grid.js"></script>
     <script type="text/javascript" src="../../extjs/include-ext.js"></script>
   

    <!-- Example -->
 
	<script type="text/javascript" src="location-form.js"></script>
	
	 <!-- <script type="text/javascript" src="oppor-grid.js"></script> -->


<style type="text/css">
        .editedRow {
          color: #b90f0f;
          font-style: italic;
        }
    </style>

	
	
   
  </head>
  <body>

    <div class="ui-layout-north topbar">
      <img alt="" src="images/logo5.png" height="120px" width="76px"/>
        
     
               
     
      <div class="login">
            <div class="dropdown" id="menu1">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#menu1">
                  <img alt="" src="../img/avatar-profile.png" /> <span>Sales Admin</span>
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="settings.html">Account</a></li>
                  <li><a href="settings.html">Settings</a></li>
                  <li class="divider"></li>
                  <li><a href="login.html">Logout</a></li>
                </ul>
            </div>
        </div>
    </div> <!-- END Layout North -->
    
    <div class="ui-layout-west">
             
        <div class="tab-content ui-layout-content">
            <div class="tab-pane active" id="1">
                <ul>    
						
						<li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub1">Business Intelligence<b class="caret"></b></a>
                        <div id="sub1" class="accordion-body collapse">
                          <div class="accordion-inner">
                             <ul>
                                <li>
                                <a href="../../businessintelligence/allreports/allreports.jsp">Reports</a>   	
                                </li>
								<li>						
								<a href="../../businessintelligence/allkpis/allkpi.jsp">KPIs</a>
								</li>
								
                              </ul>
							  
                          </div>
						  </div>
						  </li>
						
                    <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub2">Contract Management<b class="caret"></b></a>
                        <div id="sub2" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href=""><p> Maintenance Contract</p></a></li>
								<li class=""><a href=""><p> Warranties</p></a></li>
								<li class=""><a href=""><p> Recurring Billing</p></a></li>
								<li class=""><a href=""><p> Co-Termination</p></a></li>
                              </ul>
							  
                          </div>
						  </div>
						  </li>
						  
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub3">CRM<b class="caret"></b></a>
                        <div id="sub3" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href="" ><p> New Lead</p></a></li>
                                <li class=""><a href=""><p> New Opportunities </p></a></li>
                                <li class=""><a href=""><p> New Quote </p></a></li>
                                <li class=""><a href=""><p> New Sales Order </p></a></li>
                              </ul>
							  
                          </div>
						  </div>
						  </li>
						  
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub4">Document Management<b class="caret"></b></a>
                        <div id="sub4" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href=""><p>Form Generation</p></a></li>
                              </ul>
							  
                          </div>
                        </div>
                    </li>
					 <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub5"></i>Inventory Management<b class="caret"></b></a>
                        <div id="sub5" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href="../inventoryproduct/inventoryproduct.jsp">Inventory Product Stock</a></li>
                              </ul>  
                          </div>
						  </div>
						  </li>
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub6">Service Management <b class="caret"></b></a>
                        <div id="sub6" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href=""><p>Projects</p></a></li>
                                <li class=""><a href=""><p>Service Requests</p></a></li>
								<li class=""><a href=""><p>Activity Management</p></a></li> 
								<li class=""><a href=""><p>Invoicing / billing</p></a></li> 
                              </ul>
							  
                          </div>
						  </div>
						  </li>
						   <li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub7">System Admin<b class="caret"></b></a>
                        <div id="sub7" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href=""><p>User Management</p></a></li> 
								<li class=""><a href=""><p>Field Management</p></a></li>  
								<li class=""><a href=""><p>Audit Trail</p></a></li>  
								<li class=""><a href=""><p>Open APIs</p></a></li>   
                              </ul>
						</div>
						</div>
						</li>
						<li class="list-box submenu"  id="submenu">
                          <a data-toggle="collapse" data-parent="#submenu" href="#sub8">Sales Forms<b class="caret"></b></a>
                        <div id="sub8" class="accordion-body collapse">
                          <div class="accordion-inner">
                              <ul>
                                <li class=""><a href=""><p>New Sales Forms</p></a></li> 
								<li class=""><a href=""><p>Edit Sales Forms</p></a></li>  
								<li class=""><a href=""><p>Delete Sales Forms</p></a></li>  
								   
                              </ul>
							    </div>
                            </div>
							</li>
								
         </ul>
                            </div>
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
            <li><a href="#">Home</a></li>
			<li><a href="#">CRM</a></li>
        </ul>
       <!-- <h1 class="message-header"></h1>-->
	  	
       
			
        
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
            
              <div class="span12" style="margin-top:-18px;">
               <div id='inventorymenu'>
            <ul style="margin-left: 30px;">
				<li><a href="../../home/home.jsp" title="Home">Home</a></li>
                <li><a href="../../crm/crm.jsp" title="Customer Relationship management">CRM</a></li>
                
                <li><a href="../../contractmanagement/contract/contract.jsp" title="Contract Management">Contract Management</a></li>
                <li><a href="#" title="Document Management">Sales</a></li>
                <li><a href="../../product/products/product.jsp" title="Products">Products</a></li>
                <li><a href="#" title="Locations">Locations</a></li>
                <li><a href="#" title="Inventory management">Inventory Management</a></li>
                <li><a href="../../servicemanagement/servicerequest/servicerequest.jsp" title="Service Management">Service Management</a></li>
                <li><a href="#" title="System Admin">System Admin</a></li>
               
                
            </ul>
			<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
			</div>
                  
                                 
          	<div class="dashWidget ">	
            <div class="row-fluid">
              <div class="span12" style="margin-top:5px; margin-left:0px;">

				<div id="formlocation"></div>
			 

				</div>
            </div>               
             </div>
                            
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">       
<div id='jqxWidget'>
        <div style='margin-top:5px;' id='warehousemenu'>
            <ul>
               
                <li><a href="../inventoryreceipts/inventoryreceipt.jsp">Inventory Receipts</a></li>
                <li><a href="../inventorybooking/inventorybooking.jsp" title="">Inventory Booking</a></li>
                <li><a href="../inventoryactualstock/inventoryactualstock.jsp">Inventory Actual Stock</a></li>
                <li><a href="../inventoryissue/inventoryissue.jsp">Inventory Issue</a></li>
               	<li><a href="../purchaseorder/purchaseorder.jsp">Purchase Order</a></li>
               	<li><a href="../assetmoment/assetmovement.jsp">Asset Movement</a></li>
				<li><a href="#" title="project">Warehouse & Depot</a></li>
            </ul>
            <div>
				
												
					   
            </div>
            <div>
											
							
            </div>
            <div>
               				
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            <div>
            	<div id='content' style="margin-top:0px;">
								<script type="text/javascript">
									$(document).ready(function () {
										var theme = getDemoTheme();
										// Create a jqxMenu
										$("#warehousedepot").jqxMenu({ width: '99.8%', height: '30px', theme: theme });
										$("#warehousedepot").css('visibility', 'visible');    
									});
								</script>
										<div id='jqxWidget' style='margin-top:0px; '>
											<div id='warehousedepot' style='visibility: hidden;'>
												<ul>
													<li>File
														<ul style='width: 150px;'>
															<li><a href="createwarehouse/createwarehousedepot.jsp" target="_newlead">New Warehouse</a></li>
														</ul>
													</li>
													<li>Edit
														<ul style='width: 100px;'>
															<li><a href="#PCProducts">Edit</a></li>
															<li><a href="#MobileProducts">Delete</a></li>
														</ul>
													</li>
													<li>Actions
														<ul style='width: 150px;'>
															<li><a href="#SupportHome">Alerts</a></li>
															<li><a href="#CustomerService">Activities</a></li>
															<li><a href="#KB">Upload Document</a></li>
															<li><a href="#Books">Download Document</a></li>
															<li><a href="#Training">Calls</a></li>
															<li><a href="#SupportPrograms">Meetings</a></li>
															<li><a href="#Forums">Notes</a></li>
														</ul>
													</li>
													<li>Data
														<ul style='width: 150px;'>
															<li><a href="#Designers">Import Leads</a></li>
															<li><a href="#Developers">Export Leads</a></li>
															<li><a href="#Educators">Filter Leads</a></li>
														</ul>
													</li>
												</ul>
											</div>
											<br/>
										</div>
						</div>
						
						<div id="warehousegrid" style="margin-top:-15px;"></div>
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

<!--Modal Window Templates-->
</div>
</div>
</body>
</html>