
   
    
// UI Datepicker
    
    $(function() {
        $( "#datepicker" ).datepicker();
    });
    

// Bootstrap Accordion and Tooltips
    
      $(document).ready(function () {
        
        
        
        $('#newb').tooltip({
            title : 'New'
        });
        $('#settingsb').tooltip({
            title : 'Settings'
        });
       
        $(".accordion-toggle").collapse();
      });
    
    


// Sidebar and Fullscreen toggle buttons for jQuery UI Layout Plugin
    
    	
    

//FLOT Charts

    //Pie
    $(function () {
        // data
        var data = [
            { label: "Series1", color: "#0075cf", data: 10},
            { label: "Series2", color: "#0090ff", data: 30},
            { label: "Series3", color: "#0066b4", data: 90},
            { label: "Series4", color: "#005595", data: 70},
            { label: "Series5", color: "#2ca4ff", data: 80}
        ];
        // DEFAULT
        $.plot($("#pie"), data, 
        {
           series: {
            pie: { 
                show: true
            }
            },
            legend: {
                show: false
            }

        });
    });
    //Donut
    $(function () {
        // data
        var data = [
            { label: "Series1",  color: "#dd188a", data: 60},
            { label: "Series2",  color: "#bb1475", data: 30},
            { label: "Series3",  color: "#98105f", data: 90},
            { label: "Series4",  color: "#7b0d4d", data: 110}
        ];
        // DEFAULT
        $.plot($("#donut"), data, 
        {
           series: {
            pie: { 
                innerRadius: 0.3,
                show: true
            }
            },
            legend: {
                show: false
            }

        });
    });


    //Bar Line Toggle Chart
    $(function () {
        // we use an inline data source in the example, usually data would
        // be fetched from a server
        var data = [], totalPoints = 300;
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);

            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }

            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]])
            return res;
        }

        // setup control widget
        var updateInterval = 100;
        

        // setup plot
        var options = {
            series: { shadowSize: 0, color: "#0075cf" }, // drawing is faster without shadows
            yaxis: { min: 0, max: 100 },
            xaxis: { show: false }
        };
        var plot = $.plot($("#liveChart"), [ getRandomData() ], options);

        function update() {
            plot.setData([ getRandomData() ]);
            // since the axes don't change, we don't need to call plot.setupGrid()
            plot.draw();
            
            setTimeout(update, updateInterval);
        }

        update();
    });

 //Realtime Chart
    $(function () {
        var d1 = [];
        for (var i = 0; i <= 10; i += 1)
            d1.push([i, parseInt(Math.random() * 30)]);

        var stack = 0, bars = false, lines = true, steps = false;
        
        function plotWithOptions() {
            $.plot($("#stackedChart"), [ { color: "#0075cf", data: d1 } ], {
                series: {
                    stack: stack,
                    lines: { show: lines, fill: true, steps: steps },
                    bars: { show: bars, barWidth: 0.6 }
                }
            });
        }

        plotWithOptions();
             
        $(".graphControls input").click(function (e) {
            e.preventDefault();
            bars = $(this).val().indexOf("Bars") != -1;
            lines = $(this).val().indexOf("Lines") != -1;
            plotWithOptions();
        });
    });

//Blue Sin Cos Line Chart
    $(function () {
        var sin = [], cos = [];
        for (var i = 0; i < 14; i += 0.5) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
        }

        var plot = $.plot($("#lineChart2"),
               [ { color: "#0075cf", data: sin, label: "sin(x)"}, { color: "#1c9cff", data: cos, label: "cos(x)" } ], {
                   series: {
                       lines: { show: true },
                       points: { show: true }
                   },
                   grid: { hoverable: true, clickable: true },
                   yaxis: { min: -1.2, max: 1.2 }
                 });

    });

//Multicolor Line Chart
$(function () {
        var pageviews = [[0, 1040], [1, 1020], [2, 1243], [3, 1277], [4, 1020], [5, 1274], [6, 1421], [7, 1337], [8, 1000], [9, 778], [10, 838], [11, 1045]],
            visitors = [[0, 500], [1, 752], [2, 848], [3, 677], [4, 790], [5, 1052], [6, 868], [7, 567], [8, 600], [9, 638], [10, 488], [11, 408]],
            users = [[0, 120], [1, 172], [2, 228], [3, 250], [4, 215], [5, 482], [6, 378], [7, 437], [8, 260], [9, 338], [10, 412], [11, 680]];

        

        var plot = $.plot($("#lineChart"),
               [ { color: "#1c9cff", data: pageviews, label: "Pageviews"}, { color: "#dd188a", data: users, label: "Users"}, { color: "#ff771c", data: visitors, label: "Visitors" } ], {
                   series: {
                       lines: { show: true },
                       points: { show: true }
                   },
                   grid: { hoverable: true, clickable: true, borderColor: "#ddd", backgroundColor: "#efefef" }
                 });
    });
    

// Sparkline Charts
    
    $(function() {
        
        $('.inlinesparkline').sparkline('html', {lineColor: '#a41267', fillColor: '#dd188a', spotColor: 'false', minSpotColor: 'false', maxSpotColor: 'false', highlightSpotColor: '#0075cf', highlightLineColor: '#0075cf', height: '30px', width: '50px'}); 

        
        var myvalues = [10,8,5,7,4,4,1];
        $('.dynamicsparkline').sparkline(myvalues, {lineColor: '#a41267', fillColor: '#dd188a', spotColor: 'false', minSpotColor: 'false', maxSpotColor: 'false', highlightSpotColor: '#0075cf', highlightLineColor: '#0075cf', height: '30px', width: '50px'});

        
        $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: '#0075cf', height: '25px', barWidth: '5px'} );

        $('.inlinebar').sparkline('html', {type: 'bar', barColor: '#e16919', height: '25px', barWidth: '5px'} );

        $(".piespark").sparkline([1,1,2], {
            type: 'pie',
            width: '30px',
            height: '30px',
            sliceColors: ['#0075cf','#00b8ff','#008fd5']});
        $(".piespark2").sparkline([4,6,2], {
            type: 'pie',
            width: '30px',
            height: '30px',
            sliceColors: ['#ff771c','#e16919','#b65514']});

    });