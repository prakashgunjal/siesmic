$(document).ready(function (activeTab) {
			activeTab = 1;
            var theme = getDemoTheme();

            $('#contractrenewmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#contractrenewmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });			
        });