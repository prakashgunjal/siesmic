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
    

    <script type="text/javascript" src="../../extjs/include-ext.js"></script>
    
    <script type="text/javascript" src="inventorybookingmenu/inventorybookmenu.js"></script>
   
 
	<script type="text/javascript" src="inventorybooking-form.js"></script>
	<script type="text/javascript" src="inventorybookingserial-grid.js"></script>
	
	<!-- <script type="text/javascript" src="../../commongrid/commonproductgrid.js"></script> -->
	<script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonlocationgrid.js"></script>
	



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
           				<%@ include file="../../menu/sidemenuui.jsp" %>
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
			<li><a href="../inventorybooking.jsp">inventory Booking</a></li>
			<li><a href="#">New inventory Booking</a></li>
        </ul>
       <!-- <h1 class="message-header"></h1>-->
	  	
       
			
        
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">            
              <div class="span12" style="margin-top:-18px;">

                  
                                 
          	<div class="dashWidget autoHeight">	
            <div class="row-fluid">
              <div class="span12" style="margin-top:5px; margin-left:0px;">

				<div id="forminvenbooking"></div>


				</div>
            </div>               
             </div>
                            
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:0px;">       
<div id='jqxWidget'>
        <div style='margin-top:0px;' id='inventorybookmenu'>
           <ul>
            	      
                <li>Products</li>
                <li>Documents</li>
                <li>Locations</li>
				
            </ul>
			            <div>								
					 <div id="bookserialgrid"></div>  
            </div>

            <div>
               		<div id='content' style="margin-top:0px;">
								<script type="text/javascript">
									$(document).ready(function () {
										var theme = getDemoTheme();
										// Create a jqxMenu
										$("#docmenu").jqxMenu({ width: '99.8%', height: '30px', theme: theme });
										$("#docmenu").css('visibility', 'visible');    
									});
								</script>
										<div id='jqxWidget' style='margin-top:0px; '>
											<div id='docmenu' style='visibility: hidden;'>
												<ul>
													<li><img src="../../image/upload.png" style="height:20px; width:20px;"/><a href="#" target="">&nbsp;Upload Document</a></li>
												</ul>
											</div>
											<br/>
										</div>
						</div>
                	<div id="commondocgrid" style="margin-top:-15px;"></div>		
            </div>
            <div>
                	<div id="commonlocationgrid"></div>
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