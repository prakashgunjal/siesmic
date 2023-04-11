 $(document).ready(function (activeTab) {
			activeTab = 1;
            var theme = getDemoTheme();

            $('#accountmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#accountmenu').jqxTabs('select', activeTab);
			
        });