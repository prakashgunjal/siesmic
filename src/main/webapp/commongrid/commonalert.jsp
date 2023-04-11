<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript">
		var basePath2 = "${pageContext.request.contextPath}/";
	</script>
</head>

<body>
		<div id="commonalertgrid" style="margin-top:0px;"></div>
		<div id="jqxwindow6" style="margin-top:-400px; margin-left:150px;">
            <div>
                Alert</div>
                <div id='alertPanel' style="margin:5px 0px 0px 3px;">
            <div style="overflow: hidden;">

                	<table cellpadding="5px">
                		<!-- <tr>
                			<td>Date</td>
                			<td><div id='docdate'></div></td>
                		</tr> -->
                		<tr>
                			<td>From</td>
                			<td><input id="alertfrom"  readonly/></td>                			
                		</tr>
                		<tr>
                			<td>To</td>
                			<td><input id="alertto" readonly/></td>
                			
                		</tr>
                		<tr>
                			<td>Subject</td>
                			<td><input id="alertsubject" readonly/></td>
                			
                		</tr>
                		<!-- <tr>
                			<td>Attachments</td>
                			<td><input type="file" name="attachments" id="attachments"/></td>
                			
                		</tr> -->
                		<tr>
                			<td valign="top">Description</td>
                			<td><textarea id="alertdesc" rows="20" cols="10" style="width:450px; height:100px;" readonly></textarea></td>               			
                		</tr>
                	</table>
                <!-- <div style="margin-left:150px;">
                    <input type="button" id="docSave" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" />
                    <input type="button" id="doccancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" />
                </div> -->

            </div>
        </div>
        
        </div>
<!-- <div id='Menu6'>
			<ul>
				<li>Edit Selected Alert</li>
			</ul>
	   </div> -->
</body>
</html>