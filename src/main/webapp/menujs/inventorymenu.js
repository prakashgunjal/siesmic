 $(document).ready(function (activeTab) {
			activeTab = 6;
            var theme = getDemoTheme();

            $('#inventorymenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#inventorymenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });