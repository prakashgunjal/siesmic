$(document).ready(function (activeTab) {
			activeTab = 0;
            var theme = getDemoTheme();

            $('#invenprodmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#invenprodmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });