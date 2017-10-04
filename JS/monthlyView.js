$(document).ready(function() {
    var selectedMonth;

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
        monthRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td data-th="Date">' + elem[0] + '</td><td data-th="Amount">' + elem[1] + '</td><td data-th="Category">' + elem[4] + '</td><td data-th="More info">' + elem[2] + '</td><td data-th="comments">' + elem[3] + '</td></tr>');
        })
    }

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

    $('#month-jan').on('click', function() {
        printMonthlyRecords('January', januaryRecords)
    })

    $('#month-feb').on('click', function() {
        printMonthlyRecords('February', februaryRecords)
    })

    $('#month-mar').on('click', function() {
        printMonthlyRecords('March', marchRecords)
    })

    $('#month-apr').on('click', function() {
        printMonthlyRecords('April', aprilRecords)
    })

    $('#month-may').on('click', function() {
        printMonthlyRecords('May', mayRecords)
    })

    $('#month-jun').on('click', function() {
        printMonthlyRecords('June', juneRecords)
    })

    $('#month-jul').on('click', function() {
        printMonthlyRecords('July', julyRecords)
    })

    $('#month-aug').on('click', function() {
        printMonthlyRecords('August', augustRecords)
    })

    $('#month-sep').on('click', function() {
        printMonthlyRecords('September', septemberRecords)
    })

    $('#month-oct').on('click', function() {
        printMonthlyRecords('October', octoberRecords)
    })

    $('#month-nov').on('click', function() {
        printMonthlyRecords('November', novemberRecords)
    })

    $('#month-dec').on('click', function() {
        printMonthlyRecords('December', decemberRecords)
    })


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

        console.log("Runnig")
        // CSV
        var args = [$('#monthExpenseTable'), 'export.csv'];

        exportTableToCSV.apply(this, args);

        // If CSV, don't do event.preventDefault() or return false
        // We actually need this to be a typical hyperlink
    });
})