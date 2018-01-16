$(document).ready(function() {

    $(".dropdown-menu li a").click(function () {
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));

        var selectedMonth;
        var currentMonth = new Date().getMonth();
        var selectedYear = Number($('#dropdownMenu1').val()) || 2017;

        function generateMonthlyRecords(monthNumber, year) {
            return JSON.parse(localStorage.getItem("expenses")).filter(function (elem) {
                return (new Date(elem[0]).getMonth()) === monthNumber && (new Date(elem[0]).getFullYear()) === year
            });
        }

        function printMonthlyRecords(month, monthRecords) {
            selectedMonth = month;
            $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of " + month + " ...");
            $('#monthExpenseTable tbody').text('');
            $('#exportToCsv').css('display', 'block')
            $('#exportToPdf').css('display', 'block')
            monthRecords.forEach(function (elem, i) {
                $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td data-th="Date">' + elem[0] + '</td><td data-th="Amount">' + elem[1] + '</td><td data-th="Category">' + elem[4] + '</td><td data-th="More info">' + elem[2] + '</td><td data-th="comments">' + elem[3] + '</td></tr>');
            })
        }

        function moneySpentOnACategoryPerMonth(monthNumber,year, category) {
            var store = JSON.parse(localStorage.getItem("expenses")).filter(function (elem) {
                return (new Date(elem[0]).getMonth()) === monthNumber && (new Date(elem[0]).getFullYear()) === year
            }).filter(function (el) {
                return el[4] === category
            }).map(function (money) {
                return Number(money[1])
            })

            return store.length >= 1 ? store.reduce(function (prev, cur) { return prev + cur }) : store
        }

        console.log(moneySpentOnACategoryPerMonth(1, "Entertainment "))

        // for getting records for that particular month
        // 0 - january to 11 - december

        var januaryRecords = generateMonthlyRecords(0, selectedYear);
        var februaryRecords = generateMonthlyRecords(1, selectedYear);
        var marchRecords = generateMonthlyRecords(2, selectedYear);
        var aprilRecords = generateMonthlyRecords(3, selectedYear);
        var mayRecords = generateMonthlyRecords(4, selectedYear);
        var juneRecords = generateMonthlyRecords(5, selectedYear);
        var julyRecords = generateMonthlyRecords(6, selectedYear);
        var augustRecords = generateMonthlyRecords(7, selectedYear);
        var septemberRecords = generateMonthlyRecords(8, selectedYear);
        var octoberRecords = generateMonthlyRecords(9, selectedYear);
        var novemberRecords = generateMonthlyRecords(10, selectedYear);
        var decemberRecords = generateMonthlyRecords(11, selectedYear);

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

        function paintMonthlyChart(month,year) {
            // destroy old chart first inorder to stop fickerinf of chart with previous data
            window.myDoughnut !== undefined ? window.myDoughnut.destroy() : window.myDoughnut;

            var ctx = document.getElementById("this-month-expenses-on-category").getContext("2d");
            donutChartData = [moneySpentOnACategoryPerMonth(month, year, "Automobile "), moneySpentOnACategoryPerMonth(month, year, "Clothing "), moneySpentOnACategoryPerMonth(month, year, "Entertainment "), moneySpentOnACategoryPerMonth(month, year, "Food "), moneySpentOnACategoryPerMonth(month, year, "Healthcare "), moneySpentOnACategoryPerMonth(month, year, "Vacation ")]
            config.data.datasets[0].data = donutChartData
            window.myDoughnut = new Chart(ctx, config);
        }


        $('#month-jan').on('click', function () {
            printMonthlyRecords('January', januaryRecords)
            paintMonthlyChart(0, selectedYear)

        })

        $('#month-feb').on('click', function () {
            printMonthlyRecords('February', februaryRecords)
            paintMonthlyChart(1, selectedYear)
        })

        $('#month-mar').on('click', function () {
            printMonthlyRecords('March', marchRecords)
            paintMonthlyChart(2, selectedYear)

        })

        $('#month-apr').on('click', function () {
            printMonthlyRecords('April', aprilRecords)
            paintMonthlyChart(3, selectedYear)

        })

        $('#month-may').on('click', function () {
            printMonthlyRecords('May', mayRecords)
            paintMonthlyChart(4, selectedYear)

        })

        $('#month-jun').on('click', function () {
            printMonthlyRecords('June', juneRecords)
            paintMonthlyChart(5, selectedYear)

        })

        $('#month-jul').on('click', function () {
            printMonthlyRecords('July', julyRecords)
            paintMonthlyChart(6, selectedYear)

        })

        $('#month-aug').on('click', function () {
            printMonthlyRecords('August', augustRecords)
            paintMonthlyChart(7, selectedYear)

        })

        $('#month-sep').on('click', function () {
            printMonthlyRecords('September', septemberRecords)
            paintMonthlyChart(8, selectedYear)

        })

        $('#month-oct').on('click', function () {
            printMonthlyRecords('October', octoberRecords)
            paintMonthlyChart(9, selectedYear)

        })

        $('#month-nov').on('click', function () {
            printMonthlyRecords('November', novemberRecords)
            paintMonthlyChart(10, selectedYear)

        })

        $('#month-dec').on('click', function () {
            printMonthlyRecords('December', decemberRecords)
            paintMonthlyChart(11, selectedYear)

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
                csv = '"' + $rows.map(function (i, row) {
                    var $row = $(row),
                        $cols = $row.find('td');

                    return $cols.map(function (j, col) {
                        var $col = $(col),
                            text = $col.text();

                        return text.replace(/"/g, '""'); // escape double quotes

                    }).get().join(tmpColDelim);

                }).get().join(tmpRowDelim)
                    .split(tmpRowDelim).join(rowDelim)
                    .split(tmpColDelim).join(colDelim) + '"';

            var download = function (content, fileName, mimeType) {
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
        $("#exportToCsv").on('click', function (event) {

            // CSV
            var args = [$('#monthExpenseTable'), 'export.csv'];

            exportTableToCSV.apply(this, args);

            // If CSV, don't do event.preventDefault() or return false
            // We actually need this to be a typical hyperlink
        });
        /* Export to csv */

        /* Export to PDF */
        $('#exportToPdf').on('click', function () {
            window.print();
        })
    /* Export to PDF */



    // window.onload = function() {
    //     var ctx = document.getElementById("this-month-expenses-on-category").getContext("2d");
    //     //var allCatMonthly = document.getElementById("all-category-monthly-line-chart").getContext("2d");
    //     window.myDoughnut = new Chart(ctx, config);
    //     //window.myLine = new Chart(allCatMonthly, allCatMonthlyconfig);
    // };
    });
    
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

