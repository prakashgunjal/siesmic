<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
</head>
<body>
	
	
        <div id="commoninvoicegrid"></div>
       
		<div id="InvoicePopup" style="margin-top:-350px; margin-left:100px;">
            <div>
                 Invoice</div>
            <div style="overflow: hidden;">

                	<table cellpadding="5px">
                		<tr>
                			<td>Invoice number</td>
                			<td><input type="text"></td>
                			<td>Date</td>
                			<td><input type="text"></td>
                		</tr>
                		<tr>
                			<td>Contract number</td>
                			<td><input id="docTitle" /></td>
                			<td>Account number</td>
                			<td><input id="docTitle" /></td>                 			
                		</tr>
                		<tr>
                			<td>Sales order number</td>
                			<td><input id="docowner" /></td>
                			<td>Currency</td>
                			<td><input id="docowner" /></td>
                			
                		</tr>
                		<tr>
                			<td>Amount</td>
                			<td><input id="docowner" /></td>
                			<td>VAT</td>
                			<td><input id="docowner" /></td>
                			
                		</tr>
                		<tr>
                			<td>Sales tax</td>
                			<td><input id="docowner" /></td>
                			<td>Total</td>
                			<td><input id="docowner" /></td>
                			
                		</tr>
                	</table>
                
				<div id="InvoiceGrid"></div>
				<div style="margin-left:250px;">
                    <input type="button" id="docSave" style='margin-top: 15px; margin-left: 50px; float: left;' value="Save" />
                    <input type="button" id="doccancel" style='margin-left: 5px; margin-top: 15px; float: left;' value="Cancel" />
                </div>
            </div>
        </div>
<div id='InvoiceMenu'>
			<ul>
				<li>Edit Document Record</li>
			</ul>
	   </div>


</body>
</html>