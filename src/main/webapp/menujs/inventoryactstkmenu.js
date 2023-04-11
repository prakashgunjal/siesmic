$(document).ready(function (activeTab) {
			activeTab = 2;
            var theme = getDemoTheme();

            $('#inventactstkmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#inventactstkmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });