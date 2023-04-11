<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
		<div id="projectgrid"></div>
		<div id="jqxwindow3" style="margin-top:-200px; margin-left:-50px;">
            <div>
                Create/Edit Project</div>
            <div style="overflow: hidden;">
            	<form id="proForm" action="./">
                	<table cellpadding="5px">
                		<tr>
                			<td>Project number</td>
                			<td><input id="proNumber"></td>
                			<td>Account number</td>
                			<td><input id="proAccount"></td>
                			<td>Contract number</td>
                			<td><input id="proContract"></td>
                		</tr>
                		<tr>
                			<td>Start date</td>
                			<td><div id="proStart"></div></td>
                			<td>End date</td>
                			<td><div id="proEnd"></div></td>
                			<td>Actual start date</td>
                			<td><div id="proActualStart"></div></td>
                		</tr>
                		<tr>
                			<td>Actual end date</td>
                			<td><div id="proActualEnd"></div></td>
                			<td>Assigned to</td>
                			<td><div id="proAssigned"></div></td>
                			<td>Status</td>
                			<td><div id="proStatus"></div></td>
                		</tr>
                		<tr>
                			<td>type</td>
                			<td><div id="proType"></div></td>
                			<td>Budget</td>
                			<td><input id="proBudget"></td>
                			<td>Estimated effort</td>
                			<td><input id="proEstimated"></td>
                		</tr>
                		<tr>
                			<td>Actual cost</td>
                			<td><input id="proActual"></td>
                			<td>Description</td>
                			<td colspan="2"><textarea></textarea></td>
                		</tr>
                	</table>
                <div style="margin-left:350px;">
                    <input type="button" id="proSave" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save"  />
                    <input type="button" id="proCancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel"  />
                </div>
                </form>
            </div>
        </div>
<div id='Menu3'>
			<ul>
				<li>Edit Project Record</li>
			</ul>
	   </div>
</body>
</html>