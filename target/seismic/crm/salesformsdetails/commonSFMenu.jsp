<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div style='float: left; margin-left:0px;margin-top:5px; height:auto;' id='sotabsmenu'>
    <ul style="margin-left: 30px;">
		<li>Cover</li>
		<li>Presales Info</li>
		<li>Order Form</li>
		<li>Equipment Info</li>
		<li>Prof Services Info</li>
		<li>Maintenance Info</li>
		<li>Specifications</li>
		<li>Checklist</li>
	</ul>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
              
</div>
<script type="text/javascript">
	var coverMenuIndex = 0;
	var presalesMenuIndex = 1;
	var orderFormMenuIndex = 2;
	var equipInfoMenuIndex = 3;
	var profServiceMenuIndex = 4;
	var maintenanceMenuIndex = 5;
	var specMenuIndex = 6;
	var chklistMenuIndex = 7;

	var soTabUrls = new Array();
	soTabUrls[coverMenuIndex] = "cover.htm";
	soTabUrls[presalesMenuIndex] = "presales.htm";
	soTabUrls[orderFormMenuIndex] = "orderForm.htm";
	soTabUrls[equipInfoMenuIndex] = "equipmentInfo.htm";
	soTabUrls[profServiceMenuIndex] = "profServInfo.htm";
	soTabUrls[maintenanceMenuIndex] = "maintenanceInfo.htm";
	soTabUrls[specMenuIndex] = "specifications.htm";
	soTabUrls[chklistMenuIndex] = "checklistform.htm";
	
	var isNewSalesOrder = ${isNewSalesOrder};
	var hasOrderFormProducts = ${hasOrderFormProducts};
	var hasMaintenanceTicked = ${hasMaintenanceTicked};
//	var hasSpecProducts = false;
//	$(document).ready(function () {
		$('#sotabsmenu').on('tabclick', function (event){ 
	//		location.href = "${pageContext.request.contextPath}/salesOrder/" + soId + "/" + soTabUrls[event.args.item];
			if(soId != "0"){
				location.href = soTabUrls[event.args.item] + "?salesOrderId=" + soId;
			}
			event.preventDefault();
		});
//	}	
		  $(document).ready(function () {
//				activeTab = 3;
	            var theme = getDemoTheme();

	            $('#sotabsmenu').jqxTabs({ width: 1080, theme: "shinyblack", selectedItem: activeTab });
				$('#sotabsmenu').jqxTabs('select', activeTab);
				 if(isNewSalesOrder){
					$('#sotabsmenu').jqxTabs('disableAt', presalesMenuIndex);				
					$('#sotabsmenu').jqxTabs('disableAt', orderFormMenuIndex);				
					$('#sotabsmenu').jqxTabs('disableAt', chklistMenuIndex);				
				}
				if(!hasOrderFormProducts){
					$('#sotabsmenu').jqxTabs('disableAt', equipInfoMenuIndex);				
					$('#sotabsmenu').jqxTabs('disableAt', profServiceMenuIndex);				
					$('#sotabsmenu').jqxTabs('disableAt', specMenuIndex);
					$('#sotabsmenu').jqxTabs('disableAt', chklistMenuIndex);				
				}
				if(!hasMaintenanceTicked){
					$('#sotabsmenu').jqxTabs('disableAt', maintenanceMenuIndex);				
				} 
	           
	        });
</script>

		