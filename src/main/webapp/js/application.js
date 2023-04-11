// elRTE WYSIWYG

$().ready(function() {
    var opts = {
        cssClass : 'el-rte',
        height   : 270,
        toolbar  : 'compact',
        cssfiles : ['css/elrte-inner.css']
    };
    $('#editor').elrte(opts);
});


$(function() {
  setTimeout("$('input#modalTask').focus();$('#view-holder').animate({ scrollTop: 0 }, 'slow');", 10);

});

// Datatable

$(document).ready(function() {
    $('#data-table').dataTable();
});
    

// Sparkline Charts

$(function() {
    // This code runs when everything has been loaded on the page
    // Inline sparklines take their values from the contents of the tag 
    $('.inlinesparkline').sparkline('html', {lineColor: '#a41267', fillColor: '#dd188a', spotColor: 'false', minSpotColor: 'false', maxSpotColor: 'false', highlightSpotColor: '#0075cf', highlightLineColor: '#0075cf', height: '30px', width: '50px'}); 

    // Sparklines can also take their values from the first argument passed to the sparkline() function
    var myvalues = [10,8,5,7,4,4,1];
    $('.dynamicsparkline').sparkline(myvalues, {lineColor: '#a41267', fillColor: '#dd188a', spotColor: 'false', minSpotColor: 'false', maxSpotColor: 'false', highlightSpotColor: '#0075cf', highlightLineColor: '#0075cf', height: '30px', width: '50px'});

    // The second argument gives options such as chart type
    $('.dynamicbar').sparkline(myvalues, {type: 'bar', barColor: '#0075cf', height: '25px', barWidth: '5px'} );

    // Use 'html' instead of an array of values to pass options to a sparkline with data in the tag
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

// UI Datepicker

$(function() {
    $( "#datepicker" ).datepicker();
});


// Calendar


$(document).ready(function() {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: true,
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d-5),
                end: new Date(y, m, d-2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d-3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d+4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d+1, 19, 0),
                end: new Date(y, m, d+1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });
    
});



// Bootstrap Accordian and Tooltips

  $(document).ready(function () {
    
    
    
    $('#newb').tooltip({
        title : 'New'
    });
    $('#settingsb').tooltip({
        title : 'Settings'
    });
    
	$('#textBox').tooltip({
            placement : 'top',
            title : 'Company Name'
        });
    $(".accordion-toggle").collapse();
  });



// Sidebar and Fullscreen toggle buttons for jQuery UI Layout Plugin



// Colorpicker

    $(function() {
        $('#colorpickerHolder').ColorPicker({flat: true});
    });


// Flot Charts

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
            },
            grid: { hoverable: true, clickable: true, borderColor: "#aaa", backgroundColor: "#e4e4e4" }
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
