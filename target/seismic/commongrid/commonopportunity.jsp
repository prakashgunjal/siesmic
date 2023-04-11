<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script>
$(function() {
    $( "#dueDate" ).datepicker({
        showButtonPanel: true
    });
});
</script>
</head>
<body>
<div id="commopportunitygrid" style="margin-top:0px;"></div>
<!-- <div id="jqxwindow1" style="margin-top:-350px; margin-left:-50px;">
            <div>
                Create/Edit Opportunity</div>
            <div style="overflow: hidden;">
            	<form id="opporForm" action="./">
                	<table cellpadding="5px">
                		<tr>
                			<td>Name</td>
                			<td><input id="first1"></td>
                			<td>Opportunity number</td>
                			<td><input id="first2"></td>
                			<td>Account number</td>
                			<td><input id="first3"></td>
                		</tr>
                		<tr>
                			<td>Lead name</td>
                			<td><input id="first4"></td>
                			<td>Contract role</td>
                			<td><div id="combo1"></div></td>
                			<td>Preferred language</td>
                			<td><div id="combo2"></div></td>
                		</tr>
                		<tr>
                			<td>State</td>
                			<td><div id="combo3"></div></td>
                			<td>Priority</td>
                			<td><div id="combo4"></div></td>
                			<td>Origin</td>
                			<td><div id="combo5"></div></td>
                		</tr>
                		<tr>
                			<td>Sales rep</td>
                			<td><input id="first5"></td>
                			<td>Broker</td>
                			<td><input id="first6"></td>
                			<td>Valid from</td>
                			<td><div id='jqx1'></div></td>
                		</tr>
                		<tr>
                			<td>Expires on</td>
                			<td><div id='jqx2'></div></td>
                			<td>Cancelled on</td>
                			<td><div id='jqx3'></div></td>
                			<td>Cancelled on</td>
                			<td><div id='jqx4'></div></td>
                		</tr>
                		<tr>
                			<td>Supplier</td>
                			<td><input id="first7"></td>
                			<td>Source</td>
                			<td><input id="first8"></td>
                			<td>Rating</td>
                			<td><input id="combo6"></td>
                		</tr>
                		<tr>
                			<td>Close probability</td>
                			<td><input id="first9"></td>
                			<td>Estimated value</td>
                			<td><input id="first10"></td>
                			<td>Estimated close date</td>
                			<td><div id="jqx6"></div></td>
                		</tr>
                		<tr>
                			<td>Next steps</td>
                			<td><input id="first11"></td>
                			<td>Shipping method</td>
                			<td><input id="first12"></td>
                			<td>Shipping Instructions</td>
                			<td><input id="first13"></td>
                		</tr>
                		<tr>
                			<td>Carrier</td>
                			<td><input id="first14"></td>
                			<td>Tracking number</td>
                			<td><input id="first15"></td>
                			<td>Pricing rule</td>
                			<td><input id="first16"></td>
                		</tr>
                		<tr>
                			<td>Calculation rule</td>
                			<td><input id="first17"></td>
                			<td>Pricing status</td>
                			<td><input id="first18"></td>
                			<td>Pricing date</td>
                			<td><div id="jqx7"></div></td>
                		</tr>
                		<tr>
                			<td>Sales commission</td>
                			<td><input id="first19"></td>
                			<td >Description</td>
                			<td colspan="2"><textarea style="width: 200px;"></textarea></td>
                			
                		</tr>
                	</table>
                <div style="margin-left:350px;">
                    <input id="save" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" />
                    <input id="cancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" />
                </div>
                </form>
            </div>
        </div> -->
<div id='Menu1'>
			<ul>
				<li>Edit Selected Opportunity </li>
			</ul>
	   </div>		
		
		
</body>
</html>