 $(document).ready(function (activeTab) {
			activeTab = 7;
            var theme = getDemoTheme();

            $('#pricelistmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#pricelistmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });