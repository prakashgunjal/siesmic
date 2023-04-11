$(document).ready(function () {
            // Create jqxTooltip
            var theme = getDemoTheme();

            $("#dropDownButton").jqxDropDownButton({ width: 130, height: 30, theme: "ui-orange" });
            $('#jqxTree').on('select', function (event) {
                var args = event.args;
                var item = $('#jqxTree').jqxTree('getItem', args.element);

                var dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
                $("#dropDownButton").jqxDropDownButton('setContent', dropDownContent);
            });
            $("#jqxTree").jqxTree({ width: 135, theme: "ui-orange"});

        });