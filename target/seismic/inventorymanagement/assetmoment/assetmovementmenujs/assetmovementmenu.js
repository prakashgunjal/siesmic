 $(document).ready(function () {
            var theme = getDemoTheme();

            $('#assetmenu').jqxTabs({ width: '100%', theme: "shinyblack" });
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
});
    