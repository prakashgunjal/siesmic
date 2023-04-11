 $(document).ready(function (activeTab) {
			activeTab = 2;
            var theme = getDemoTheme();

            $('#Leadmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#Leadmenu').jqxTabs('select', activeTab);

			
        });