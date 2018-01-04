$(document).ready(function() {
    var selectedMonth;
    var currentMonth = new Date().getMonth();

    function generateMonthlyRecords(monthNumber) {
        return JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        });
    }

    function printMonthlyRecords(month, monthRecords) {
        selectedMonth = month;
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of " + month + " ...");
        $('#monthExpenseTable tbody').text('');
        $('#exportToCsv').css('display', 'block')
        $('#exportToPdf').css('display', 'block')
        monthRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td data-th="Date">' + elem[0] + '</td><td data-th="Amount">' + elem[1] + '</td><td data-th="Category">' + elem[4] + '</td><td data-th="More info">' + elem[2] + '</td><td data-th="comments">' + elem[3] + '</td></tr>');
        })
    }

    function moneySpentOnACategoryPerMonth(monthNumber, category) {
        var store =  JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        }).filter(function(el) {
            return el[4] === category
        }).map(function(money) {
            return Number(money[1])
        })

        return store.length >= 1 ?  store.reduce(function(prev, cur){return prev + cur}) :  store
    }

    console.log(moneySpentOnACategoryPerMonth(1,"Entertainment "))

    // for getting records for that particular month
    // 0 - january to 11 - december

    var januaryRecords = generateMonthlyRecords(0);
    var februaryRecords = generateMonthlyRecords(1);
    var marchRecords = generateMonthlyRecords(2);
    var aprilRecords = generateMonthlyRecords(3);
    var mayRecords = generateMonthlyRecords(4);
    var juneRecords = generateMonthlyRecords(5);
    var julyRecords = generateMonthlyRecords(6);
    var augustRecords = generateMonthlyRecords(7);
    var septemberRecords = generateMonthlyRecords(8);
    var octoberRecords = generateMonthlyRecords(9);
    var novemberRecords = generateMonthlyRecords(10);
    var decemberRecords = generateMonthlyRecords(11);

    // var donutChartData = [moneySpentOnACategoryPerMonth(currentMonth,"Automobile "),moneySpentOnACategoryPerMonth(currentMonth,"Clothing "),moneySpentOnACategoryPerMonth(currentMonth,"Entertainment "),moneySpentOnACategoryPerMonth(currentMonth,"Food "),moneySpentOnACategoryPerMonth(currentMonth,"Healthcare "),moneySpentOnACategoryPerMonth(currentMonth,"Vacation ") ];
    
    var config = {
        type: "doughnut",
        data: {
            "labels": ["Automobile", "Clothing", "Entertainment", "Food", "Healthcare", "Vacation"],
            "datasets": [{
                "label": "My First Dataset",
                "data": "",
                "backgroundColor": ["#F17D80", "#737495", "#68A8AD", "#C4D4AF", "#6C8672", "#775BA3"]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: ''
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }; 

    function paintMonthlyChart(month){
        // destroy old chart first inorder to stop fickerinf of chart with previous data
        window.myDoughnut !== undefined ?  window.myDoughnut.destroy() : window.myDoughnut;
        
        var ctx = document.getElementById("this-month-expenses-on-category").getContext("2d");
        donutChartData = [moneySpentOnACategoryPerMonth(month,"Automobile "),moneySpentOnACategoryPerMonth(month,"Clothing "),moneySpentOnACategoryPerMonth(month,"Entertainment "),moneySpentOnACategoryPerMonth(month,"Food "),moneySpentOnACategoryPerMonth(month,"Healthcare "),moneySpentOnACategoryPerMonth(month,"Vacation ") ]
        config.data.datasets[0].data = donutChartData
        window.myDoughnut = new Chart(ctx, config);
    }
    

    $('#month-jan').on('click', function() {
        printMonthlyRecords('January', januaryRecords)
        paintMonthlyChart(0)

    })

    $('#month-feb').on('click', function() {
        printMonthlyRecords('February', februaryRecords)
        paintMonthlyChart(1)
    })

    $('#month-mar').on('click', function() {
        printMonthlyRecords('March', marchRecords)
        paintMonthlyChart(2)

    })

    $('#month-apr').on('click', function() {
        printMonthlyRecords('April', aprilRecords)
        paintMonthlyChart(3)

    })

    $('#month-may').on('click', function() {
        printMonthlyRecords('May', mayRecords)
        paintMonthlyChart(4)

    })

    $('#month-jun').on('click', function() {
        printMonthlyRecords('June', juneRecords)
        paintMonthlyChart(5)

    })

    $('#month-jul').on('click', function() {
        printMonthlyRecords('July', julyRecords)
        paintMonthlyChart(6)

    })

    $('#month-aug').on('click', function() {
        printMonthlyRecords('August', augustRecords)
        paintMonthlyChart(7)

    })

    $('#month-sep').on('click', function() {
        printMonthlyRecords('September', septemberRecords)
        paintMonthlyChart(8)

    })

    $('#month-oct').on('click', function() {
        printMonthlyRecords('October', octoberRecords)
        paintMonthlyChart(9)

    })

    $('#month-nov').on('click', function() {
        printMonthlyRecords('November', novemberRecords)
        paintMonthlyChart(10)

    })

    $('#month-dec').on('click', function() {
        printMonthlyRecords('December', decemberRecords)
        paintMonthlyChart(11)

    })

    /* Export to csv */
    function exportTableToCSV($table, filename) {

        var $rows = $table.find('tr:has(td)'),

            // Temporary delimiter characters unlikely to be typed by keyboard
            // This is to avoid accidentally splitting the actual contents
            tmpColDelim = String.fromCharCode(11), // vertical tab character
            tmpRowDelim = String.fromCharCode(0), // null character

            // actual delimiter characters for CSV format
            colDelim = '","',
            rowDelim = '"\r\n"',

            // Grab text from table into CSV formatted string
            csv = '"' + $rows.map(function(i, row) {
                var $row = $(row),
                    $cols = $row.find('td');

                return $cols.map(function(j, col) {
                    var $col = $(col),
                        text = $col.text();

                    return text.replace(/"/g, '""'); // escape double quotes

                }).get().join(tmpColDelim);

            }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"';

        var download = function(content, fileName, mimeType) {
            var a = document.createElement('a');
            mimeType = mimeType || 'application/octet-stream';

            if (navigator.msSaveBlob) { // IE10
                navigator.msSaveBlob(new Blob([content], {
                    type: mimeType
                }), fileName);
            } else if (URL && 'download' in a) { //html5 A[download]
                a.href = URL.createObjectURL(new Blob([content], {
                    type: mimeType
                }));
                a.setAttribute('download', fileName);
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
            }
        }
        download(csv, "'" + selectedMonth + '.csv', 'text/csv;encoding:utf-8');
    }

    // This must be a hyperlink
    $("#exportToCsv").on('click', function(event) {

        // CSV
        var args = [$('#monthExpenseTable'), 'export.csv'];

        exportTableToCSV.apply(this, args);

        // If CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
    /* Export to csv */

    /* Export to PDF */
    $('#exportToPdf').on('click', function() {
        window.print();
    })
    /* Export to PDF */

    

    // window.onload = function() {
    //     var ctx = document.getElementById("this-month-expenses-on-category").getContext("2d");
    //     //var allCatMonthly = document.getElementById("all-category-monthly-line-chart").getContext("2d");
    //     window.myDoughnut = new Chart(ctx, config);
    //     //window.myLine = new Chart(allCatMonthly, allCatMonthlyconfig);
    // };


})


if(localStorage.visited){
    localStorage.setItem("visited", false);
}else{
    introJs()
        .setOption("doneLabel", "Next page")
        .start()
        .oncomplete(function() {
         window.location.href = "/pages/filter.html";
    });
}