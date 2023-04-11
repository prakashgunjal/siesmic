  $(document).ready(function () {
//			activeTab = 3;
            var theme = getDemoTheme();

            $('#sotabsmenu').jqxTabs({ width: 1080, theme: "shinyblack", selectedItem: activeTab });
			$('#sotabsmenu').jqxTabs('select', activeTab);
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });	
        });