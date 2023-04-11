$(document).ready(function (activeTab) {
			activeTab = 0;
            var theme = getDemoTheme();

            $('#invenrecpmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#invenrecpmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });