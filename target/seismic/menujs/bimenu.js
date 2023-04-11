 $(document).ready(function (activeTab) {
			activeTab = 2;
            var theme = getDemoTheme();

            $('#bimenu').jqxTabs({ width: 1080, theme: "shinyblack", selectedItem: activeTab });
			$('#bimenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });