 $(document).ready(function (activeTab) {
			activeTab = 4;
            var theme = getDemoTheme();

            $('#projectmgmtmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#projectmgmtmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

            
			
        });