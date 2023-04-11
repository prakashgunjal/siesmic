 $(document).ready(function (activeTab) {
			activeTab = 1;
            var theme = getDemoTheme();

            $('#projectmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#projectmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
    
			
        });