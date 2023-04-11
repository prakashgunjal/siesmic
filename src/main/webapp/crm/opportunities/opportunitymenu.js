 $(document).ready(function (activeTab) {
			activeTab = 3;
            var theme = getDemoTheme();

            $('#Oppor').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#Oppor').jqxTabs('select', activeTab);	
        });