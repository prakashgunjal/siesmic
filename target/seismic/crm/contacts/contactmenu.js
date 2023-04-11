$(document).ready(function (activeTab) {
			activeTab = 0;
            var theme = getDemoTheme();

            $('#contactmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#contactmenu').jqxTabs('select', activeTab);			
        });