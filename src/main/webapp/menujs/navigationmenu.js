  $(document).ready(function (activeTab) {
			activeTab = 0;
            var theme = getDemoTheme();

            $('#homemenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#homemenu').jqxTabs('select', activeTab);
              
			
        });
    