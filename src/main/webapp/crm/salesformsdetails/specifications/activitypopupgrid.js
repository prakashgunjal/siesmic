$(document).ready(function () {
            // prepare the data
            var data = generatedata(200);
            var source =
            {
                localdata: data,
                datatype: "array",
                updaterow: function (rowid, rowdata, commit) {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failder.
                    commit(true);
                },
                datafields:
                [
                    { name: 'activities', type: 'string' },
                    { name: 'startdate', type: 'date' },
                    { name: 'enddate', type: 'date' },
                    { name: 'available', type: 'bool' },
                    { name: 'assigned', type: 'string' }
                ]
            };
            var dataAdapter = new $.jqx.dataAdapter(source);
            // initialize jqxGrid
            $("#activitypopupgrid").jqxGrid(
            {
                width: '100%',
                source: dataAdapter,
                editable: true,
                /*theme: 'ui-sunny',*/
                selectionmode: 'singlerow',
                editmode: 'selectedrow',
                columns: [
                  { text: '', datafield: 'available', columntype: 'checkbox', width: '5%' },
                  { text: 'Activities', columntype: 'textbox', datafield: 'activities', width: '35%' },
                  { text: 'Start date', datafield: 'startdate', columntype: 'datetimeinput', width: '20%' },
                  { text: 'End date', columntype: 'datetimeinput', datafield: 'enddate', width: '20%' },
                  { text: 'Assigned to', columntype: 'dropdownlist', datafield: 'assigned', width: '20%' },
                 
                ]
            });
            // events
            var rowValues = "";
            $("#activitypopupgrid").on('cellbeginedit', function (event) {
                var args = event.args;
                if (args.datafield === "firstname") {
                    rowValues = "";
                }
                rowValues += args.value.toString() + "    ";
                if (args.datafield === "price") {
                    $("#cellbegineditevent").text("Begin Row Edit: " + (1 + args.rowindex) + ", Data: " + rowValues);
                }
            });
            $("#activitypopupgrid").on('cellendedit', function (event) {
                var args = event.args;
                if (args.datafield === "firstname") {
                    rowValues = "";
                }
                rowValues += args.value.toString() + "    ";
                if (args.datafield === "price") {
                    $("#cellbegineditevent").text("End Row Edit: " + (1 + args.rowindex) + ", Data: " + rowValues);
                }
            });
        });