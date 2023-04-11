 $(document).ready(function (activeTab) {
			activeTab = 3;
            var theme = getDemoTheme();

            $('#projecttaskmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#projecttaskmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
    
			
        });