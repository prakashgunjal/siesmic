<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<div id="commoncontractgrid"> </div>
		 
		 <div id="ContractPopup" style="margin-top:200px; margin-left:350px;">
            <div>
                Create/Edit Documents</div>
            <div style="overflow: hidden;">

                	<table cellpadding="5px">
                		<tr>
                			<td>Date</td>
                			<td><div id='docdate'></div></td>
                		</tr>
                		<tr>
                			<td>Document title</td>
                			<td><input id="docTitle" /></td>                			
                		</tr>
                		<tr>
                			<td>Owner</td>
                			<td><input id="docowner" /></td>
                			
                		</tr>
                		<tr>
                			<td>Attachments</td>
                			<td><input type="file" name="attachments" id="attachments"/></td>
                			
                		</tr>
                	</table>
                <div style="margin-left:30px;">
                    <input type="button" id="docSave" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" />
                    <input type="button" id="doccancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" />
                </div>

            </div>
        </div>
		 
		 <div id='ContractMenu'>
			<ul>
				<li>Edit Document Record</li>
			</ul>
	   </div>
</body>
</html>