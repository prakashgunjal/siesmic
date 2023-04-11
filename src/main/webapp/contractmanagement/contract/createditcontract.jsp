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

	 <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
	<script type="text/javascript" src="contract-grids.js"></script>
    <script type="text/javascript" src="../../extjs/include-ext.js"></script>
 
	<script type="text/javascript" src="contract-form.js"></script>
	
	<script type="text/javascript" src="contractmenujs/contractsmenu.js"></script>
	
	<script type="text/javascript" src="../../commongrid/commonaccountsgrid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonsalesordergrid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonpurchaseordergrid.js"></script>
	<script type="text/javascript" src="../../commongrid/commonactivitygrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commonalertgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commontaskgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commoncallgrid.js"></script>
    <script type="text/javascript" src="../../commongrid/commondocgrid.js"></script>

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
           <!--  <li><a href="../../home/home.jsp">Home</a></li> -->
			<!-- <li><a href="../contract.jsp">Contract</a></li>
 -->			<li><a href="#">New Contract</a></li>
        </ul>
       <!-- <h1 class="message-header"></h1>-->
	  	
       
			
        
   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
            
              <div class="span12" style="margin-top:-18px;">

                  
                                 
          	<div class="dashWidget autoHeight">	
            <div class="row-fluid">
              <div class="span12" style="margin-top:5px; margin-left:0px;">
				<form>
				<div id="formcontract"></div>
			 	
				</form>
				</div>
            </div>               
             </div>
                            
<div class="row-fluid">
<div class="span12" style="margin-left:0px; margin-top:5px;">       
	<div id='jqxWidget'>
        <div style='margin-top:5px;' id='contractmenus'>
            <ul>
            	<li>Products</li>
            	<li>Accounts</li>
                <li>Sales Orders</li>
                <li>Purchase Orders</li>
                <li>Activities</li>
                <li>Alerts</li>	
				<li>Documents</li>

            </ul>
            <div>
					<div id="contragrid"></div>					
					   
            </div>
            <div>
					<div id="commonaccountsgrid" style="margin-top:0px;"></div>			
							
            </div>
            <div>
               		<div id="saleordergrid" style="margin-top:0px;"></div>
            </div>
            <div>
               		<div id="commonpurchaseordergrid" style="margin-top:0px;"></div>
            </div>
            <div>
                	<div id="commonactivitygrid" style="margin-top:0px;"></div>
            </div>
            <div>
                	<div id="commonalertgrid" style="margin-top:0px;"></div>
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