$(document).ready(function() {

    function generateMonthlyRecords(monthNumber){
        return JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        });
    }

    function printMonthlyRecords(month, monthRecords){
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of " + month +" ...");
        $('#monthExpenseTable tbody').text('');
        monthRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
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
})