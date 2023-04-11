<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
    <title>Seismic-CRM</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <link rel="stylesheet" href="../../css/seismic-allui.css" type="text/css" media="all"/>

   <%@ include file="../../menu/seismic-js-ui.jsp"%>
	<%@ include file="../../menu/seismic-jqx-ui.jsp"%>
    <script type="text/javascript" src="../../jqwidgets/jqxtree.js"></script>
    <script type="text/javascript" src="../../jqwidgets/jqxexpander.js"></script>
    <script type="text/javascript" src="../../jqwidgets/jqxsplitter.js"></script>
    
    <script type="text/javascript">
        $(document).ready(function () {
            var theme = getDemoTheme();
            // Create jqxTree
            $('#jqxTree').jqxTree({ theme: theme, height: '100%', width: '100%' });
            $("#splitter").jqxSplitter({ theme: theme, width: '100%', height: 600, panels: [{size: 300 }] });
            $('#jqxTree').on('select', function (event) {
                $("#ContentPanel").html("<div style='margin: 10px;'>" + event.args.element.id + "</div>");
            });
        });
    </script>	

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
        <!-- <ul class="breadcrumb">
            <li><a href="../../home/home.jsp">Home</a></li>
			<li><a href="../contacts.jsp">Contacts</a></li>
			<li><a href="#">Create Contact</a></li>
        </ul> -->
       <!-- <h1 class="message-header"></h1>-->

   
        <button id="fullscreenb"><i class="icon-fullscreen"></i></button>
        
        <div class="dashRow">
            <div class="row-fluid">
              <div class="span12" style="margin-top:0px;">           				
            				
            <div class="dashWidget autoHeight">
            <div class="row-fluid ">
              <div class="span12 " style="margin-top:0px; margin-left:0px;" >
					
					<div id="splitter">
        <div>
            <div style="border: none;" id='jqxTree'>
                <ul>
				<li id="Lead" item-expanded='true'>
                       <a href="../../home/home.jsp">Home</a>
                    </li>
                    <li id="contact" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Contacts reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContact+With+Organization&rs:Command=Render"
																	target="reports">Filter by organisation</a></span> </li>   
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContact+Without+Organization&rs:Command=Render"
																	target="reports">Filter without organisation</a></span> </li>
							<!-- <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by opportunities</span> </li> -->
							<!-- <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Contacts list</span> </li> -->
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContact+By+Industry&rs:Command=Render"
																	target="reports">Filter by industry</a></span> </li>
                        </ul>
                    </li>
                    <li id="account" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Accounts reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fAccount+Report&rs%3aCommand=Render" 
															target="reports">Accounts ageing charts</a></span> </li>                            
                        </ul>
                    </li>
                    <li id="Lead" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Lead reports</span>
                        <ul>
                            <!-- <li id="Leadqueries" item-expanded='true'>
                                <img style='float: left; margin-right: 10px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fLead+Detailed+Report&rs:Command=Render"
																target="reports">Detailed Report</a></span> </li> -->
                            <li id="leadageing">
                                <img style='float: left; margin-right: 10px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fLead+Ageing+Report&rs:Command=Render"
																target="reports">Lead ageing charts</a></span> </li>
							<!-- <li id="leadpending">
                                <img style='float: left; margin-right: 10px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://54.201.35.141/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fLead+Pending+Activity&rs:Command=Render"
																target="reports">Pending activities</a></span></li> -->
                            
                        </ul>
                    </li>
                    <li id="opportunity" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Opportunity reports</span>
                        <ul>
                        	<!-- <li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+By+Sales+Rep+And+Status&rs:Command=Render"
																target="reports">Opportunity reports</a></span> </li> -->
                            <!-- <li id="opporpipeline" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+Pipeline+%281%29&rs:Command=Render"
																target="reports">Pipeline charts</a></span> </li> -->
                            <li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+By+month&rs:Command=Render"
																target="reports">Charts by month</a></span> </li>
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+by+Product&rs:Command=Render"
																target="reports">Group by product</a></span> </li>
							
							<!-- <li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+By+CloseProbability&rs:Command=Render"
																target="reports">Close probability</a></span> </li> -->
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fClosed+Opportunity&rs:Command=Render"
																target="reports">Closed opportunity</a></span> </li>
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+Won+Rate&rs:Command=Render"
																target="reports">Win analysis charts</a></span> </li>
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+Loss+Rate&rs:Command=Render"
																target="reports">Loss analysis charts</a></span> </li>
							
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunity+closing+this+quarter&rs:Command=Render"
																target="reports">Closing this quarter</a></span> </li>
							<li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fOpportunities+Closing+history&rs:Command=Render"
																target="reports">Closing history</a></span> </li>
							<!-- <li id="opporbymonth">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fPending+Activity+By+Open+Opportunity&rs:Command=Render"
																target="reports">Pending activities by open</a></span> </li> -->
                            
                        </ul>
                    </li>
                    <li id="quotes" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Quotes reports</span>
                        <ul>
                        	<li id="quotedetail">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fQuoteDetailedReport&rs:Command=Render" 
																target="reports" >Detailed report</a></span> </li>
							<!-- <li id="quoteageing">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fQuoteAgeing&rs:Command=Render" 
																target="reports" >Ageing charts report</a></span> </li> -->
                            <!-- <li id="printquotes" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Print quotes</span> </li> -->
                            <!-- <li id="reworkquote">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Reworked quotes</span> </li> -->
							
							
                            
                        </ul>
                    </li>
                    <li id="salesorder" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Sales order reports</span>
                        <ul>
                            <!-- <li id="so" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesOrder&rs:Command=Render" target="reports" >Sales order</a></span> </li> -->
                            <li id="solist">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesOrderList&rs:Command=Render" target="reports" >Order list</a></span></li>
                            <li id="solistfilter">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                     item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesOrderReportwithfilters&rs:Command=Render" target="reports" >Order list filters</a></span> </li>
                            <li id="solist">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesPipelineChart&rs:Command=Render" target="reports">Pipeline charts</a></span></li>
                            <!-- <li id="solist">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesPipeline+with+filters&rs:Command=Render" target="reports" >Pipeline filters</a></span></li> -->
							<li id="productwiseSO">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fProductWiseSalesOrderList&rs:Command=Render" 
															target="reports" >Product wise order list</a></span> </li>
                            
                        </ul>
                    </li>
                    <li id="actvtytas" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Sales forms reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesformAgeingReport&rs:Command=Render" 
														target="reports">Ageing charts report</a></span> </li>   
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fSalesformReportwithfilters&rs:Command=Render" 
														target="reports">Filter by status</a></span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fRevenuePotentialReport&rs:Command=Render" 
														target="reports">Revenue potential report</a></span> </li>
							
							
                        </ul>
                    </li>
                    
					
					<!-- <li id="contract" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Contract reports</span>
                        <ul>
                        	<li id="contractqueries">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContract+Detailed+Report&rs:Command=Render" 
																target="reports" >Detailed reports</a></span> </li>
                            <li id="contractreport" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContract+Report&rs:Command=Render" 
																target="reports" >Contract charts report</a></span> </li>
                            <li id="renewal">
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fContract+By+Renewal&rs:Command=Render" 
																target="reports">Contract by renewal date</a></span> </li>
							
                            
                        </ul>
                    </li> -->
					
					
					
					<!-- <li id="purchaseorder" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Purchase order reports</span>
                        <ul>
                            <li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by Purchase order</span> </li> 
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by product</span> </li>
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by Sales rep</span> </li> 
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by status</span> </li>
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">PO opened in a month with $ amount</span> </li>
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Filter by supplier spend</span> </li> 
							 
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Actual PO to original PO variance</span> </li> 
							<li id="po" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">PO average cost per product</span> </li> 
							 
							 
                        </ul>
                    </li> -->
					
                   <!--  <li id="asset" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Asset movement reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fAsset+Movement+Between+Period&rs:Command=Render" 
														target="reports">Register by no of days</a></span> </li>   
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fUn+Allocated+Assets&rs:Command=Render" 
														target="reports">Un-allocated assets</a></span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true"><a href="http://10.5.200.100/ReportServer/Pages/ReportViewer.aspx?%2fSEISMIC_CRM%2fAsset+Movement&rs:Command=Render" 
														target="reports">Asset report by account</a></span> </li>
                        </ul>
                    </li> -->
					<!-- <li id="products" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Products reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Product detail</span> </li>   
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Products by detail</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Product stock reports</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Product inflow and outflow</span> </li>
                        </ul>
                    </li> -->
					
                    
					<!-- <li id="actvtytas" item-expanded='false'>
                        <img style='float: left; margin-right: 5px;' src='../../images/folder.png' /><span
                            item-title="true">Activities/tasks/cases Reports</span>
                        <ul>
                            <li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">First contact resolution report by agent</span> </li>   
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Tickets by agent</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Ticket by actions</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Frequent flier reports customers with x tickets</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Ticket report by agent</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Time log tickets based on activity</span> </li>
							<li id="accountlist" item-expanded='true'>
                                <img style='float: left; margin-right: 5px;' src='../../images/report1.png' /><span
                                    item-title="true">Open tickets</span> </li>
                        </ul>
                    </li> -->
                    
                </ul>
            </div>
        </div>
        <!-- <div id="ContentPanel">
        </div> -->
		<iframe src="" name="reports" width="100%" style="border:0px;"></iframe>
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

   
      
      
       
    

</div> <!-- END Layout Center -->





</body>
</html>