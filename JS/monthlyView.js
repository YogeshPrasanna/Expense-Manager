$(document).ready(function() {


    // for getting records for the month of september
    var januaryRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 0
    });

    var septemberRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 8
    });

    $('#month-jan').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of January ...");
        $('#monthExpenseTable tbody').text('');
        januaryRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-sep').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of September ...");
        $('#monthExpenseTable tbody').text('');
        septemberRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })

    })

})