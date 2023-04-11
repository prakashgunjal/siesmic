$(document).ready(function (activeTab) {
			activeTab = 3;
            var theme = getDemoTheme();

            $('#inventoryissue').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#inventoryissue').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
	
        });