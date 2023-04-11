$(document).ready(function (activeTab) {
			activeTab = 5;
            var theme = getDemoTheme();
            $('#salesordermenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#salesordermenu').jqxTabs('select', activeTab);

        });