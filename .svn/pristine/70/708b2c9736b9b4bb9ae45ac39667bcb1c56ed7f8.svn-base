$(document).ready(function () {
            var theme = getDemoTheme();

            var url = "../sampledata/beverages.txt";

            // prepare the data
            var source =
            {
                datatype: "json",
                datafields: [
                    { name: 'name' },
                    { name: 'type' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat' },
                    { name: 'protein' },
                ],
                id: 'id',
                url: url
            };
            var dataAdapter = new $.jqx.dataAdapter(source);

            $("#jqxgrid").jqxGrid(
            {
                width: '80%',
                source: dataAdapter,
                theme: theme,
                columns: [
                  { text: 'Name', datafield: 'name', width: '30%' },
                  { text: 'Beverage Type', datafield: 'type', width: '25%' },
                  { text: 'Calories', datafield: 'calories', width: '15%' },
                  { text: 'Total Fat', datafield: 'totalfat', width: '15%' },
                  { text: 'Protein', datafield: 'protein',  width: '15%' }
              ]
            });
        });