$(document).ready(function() {


    // for getting records for that particular month
    var januaryRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 0
    });

    var februaryRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 1
    });

    var marchRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 2
    });

    var aprilRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 3
    });

    var mayRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 4
    });

    var juneRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 5
    });

    var julyRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 6
    });

    var augustRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 7
    });

    var septemberRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 8
    });

    var octoberRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 9
    });

    var novemberRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 10
    });

    var decemberRecords = JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
        return (new Date(elem[0]).getMonth()) === 11
    });

    $('#month-jan').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of January ...");
        $('#monthExpenseTable tbody').text('');
        januaryRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-feb').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of february ...");
        $('#monthExpenseTable tbody').text('');
        februaryRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-mar').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of march ...");
        $('#monthExpenseTable tbody').text('');
        if(marchRecords.length >= 1){
        	marchRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        	})
        }
        
    })

    $('#month-apr').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of april ...");
        $('#monthExpenseTable tbody').text('');
        aprilRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-may').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of may ...");
        $('#monthExpenseTable tbody').text('');
        mayRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-jun').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of june ...");
        $('#monthExpenseTable tbody').text('');
        juneRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-jul').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of july ...");
        $('#monthExpenseTable tbody').text('');
        julyRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })
    })

    $('#month-aug').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of august ...");
        $('#monthExpenseTable tbody').text('');
        augustRecords.forEach(function(elem, i) {
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

    $('#month-oct').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of october ...");
        $('#monthExpenseTable tbody').text('');
        octoberRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })

    })

    $('#month-nov').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of november ...");
        $('#monthExpenseTable tbody').text('');
        novemberRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })

    })

    $('#month-dec').on('click', function() {
        $('#monthName').addClass('alert').addClass('alert-success').text("Here are your expenses for the month of december ...");
        $('#monthExpenseTable tbody').text('');
        decemberRecords.forEach(function(elem, i) {
            $("#monthExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        })

    })

})