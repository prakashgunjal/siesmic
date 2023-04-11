 $(document).ready(function (activeTab) {
			activeTab = 5;
            var theme = getDemoTheme();

            $('#expensemenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#expensemenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
    
			
        });