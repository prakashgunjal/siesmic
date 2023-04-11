  $(document).ready(function (activeTab) {
			activeTab = 6;
            var theme = getDemoTheme();

            $('#specmenu').jqxTabs({ width: 1080, theme: "shinyblack", selectedItem: activeTab });
			$('#specmenu').jqxTabs('select', activeTab);
	
        });