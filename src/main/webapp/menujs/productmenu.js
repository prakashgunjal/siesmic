 $(document).ready(function (activeTab) {
			activeTab = 4;
            var theme = getDemoTheme();

            $('#prodmenu').jqxTabs({ width: '100%', theme: "shinyblack", selectedItem: activeTab });
			$('#prodmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

			
        });