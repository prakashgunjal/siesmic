<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

 <script type="text/javascript">
	var addressId = "${address.addressId}";
	var contactId = "${contact.contactId}";
	var contactNumber = "${contact.contactNumber}";
	
	var basePath = "${pageContext.request.contextPath}/";
     var newRowId = -1;
    var activeTab = 0; 
	</script>
</head>
<body>
		<div id="commonaaddressgrid" style="margin-top:0px;"></div>
		<!-- <div id="jqxwindow4" style="margin-top:-300px; margin-left:300px;">
            <div>
                Create/Edit Address</div>
            <div style="overflow: hidden;">
            	<form id="addressForm" action="./">
                	<table cellpadding="5px">
                	<tr>
                			<td>Type</td>
                			<td><div id='addType'></div></td>
                		</tr>
                		<tr>
                			<td>Contact person</td>
                			<td><input id='addPerson'></td>
                		</tr>
                		<tr>
                			<td>Address line 1</td>
                			<td><input id='addLine1'></td>
                		</tr>
                		<tr>
                			<td>Address line 2</td>
                			<td><input id='addLine2'></td>
                			
                		</tr>
                		<tr>
                			<td>Address line 3</td>
                			<td><input id='addLine3'></td>
                			
                		</tr>
                		<tr>
                			<td>Address line 4</td>
                			<td><input id='addLine4'></td>
                			
                		</tr>
                		<tr>
                			<td>Postcode</td>
                			<td><input id='addPostcode'></td>
                		</tr>
                		<tr>
                			<td>Phone</td>
                			<td><input id='addPhone'></td>
                		</tr>
                		<tr>
                			<td>Mobile</td>
                			<td><input id='addMobile'></td>
                		</tr>
                		<tr>
                			<td>Email address</td>
                			<td><input id='addEmail'></td>
                		</tr>
                	</table>
                <div style="margin-left:40px;">
                    <input type="button" id="addSave" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save"  />
                    <input type="button" id="addCancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel"  />
                </div>
                </form>
            </div>
        </div> -->
<div id='Menu4'>
			<ul>
				<li>Edit Selected Address</li>
			</ul>
	   </div>
</body>
</html>