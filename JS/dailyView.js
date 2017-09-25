$(document).ready(function() {
    $('.datepicker').datepicker();

    $('#search-day-expense').on('click', function() {
        var selectedDate = $('#dailyView-date').val();
        var expenses = JSON.parse(localStorage.getItem('expenses'));
        var dayRecords = expenses.filter(function(elem) {
            return elem[0] === selectedDate
        })

    		$("#dayExpenseTable tbody").text('')

    		if(dayRecords.length >= 1){
    			dayRecords.forEach(function(elem, i) {
            $("#dayExpenseTable").append('<tr><th scope="row">' + i + '</th><td>' + elem[0] + '</td><td>' + elem[1] + '</td><td>' + elem[2] + '</td><td>' + elem[3] + '</td><td>' + elem[4] + '</td></tr>');
        	})
    		}else{
    			$("#dayExpenseTable tbody").append('<div class="alert alert-warning"> sorry no records found</div>');
    		}
        
    })
})