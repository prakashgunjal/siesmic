
        $(document).ready(function () {
            var theme = getDemoTheme();

            $('#mainmodulemenu').jqxTabs({ width: 1080, theme: "shinyblack" });
            $('#leftButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });
            $('#rightButton').jqxRadioButton({ height: 25, width: 100, checked: true, theme: "shinyblack" });
            $('#bothButton').jqxRadioButton({ height: 25, width: 100, theme: "shinyblack" });

        });
