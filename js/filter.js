$(document).ready(function() {

//Show dropdown content in button area
    $(".dropdown-menu li a").click(function() {
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $('.datepicker').datepicker();

    $('#filer-results').on('click',function(){
    	var startDate = $('#dateRangeStart').val();
    	var endDate = $('#dateRangeEnd').val();
    	var moneyFrom = $('#expenseRangeStart').val();
    	var moneyTo = $('#expenseRangeEnd').val();
    	var category = $('#dropdownMenuButton')[0].innerText;
    	var allExpenses = JSON.parse(localStorage.getItem('expenses'));
    	var filteredDates = []

    	// find out all the dates that fall between two dates
	    var start = $("#dateRangeStart").datepicker("getDate");
	    var end = $("#dateRangeEnd").datepicker("getDate");
	    var currentDate = new Date(start);
	    var between = [];

	    while (currentDate <= end) {
	         between.push(moment(new Date(currentDate)).format("MM/DD/YYYY"));
	        //between.push(new Date(currentDate));
	        currentDate.setDate(currentDate.getDate() + 1);
	    }

	    // step1 : filter by dates
	    between.forEach(function(elem){
				return allExpenses.filter(function(el){
					return elem === el[0] ? filteredDates.push(el) : ''
				})
			})

			// step2 : filter by expense amount

			var checkDatesExist = filteredDates.length >= 1 ? filteredDates : allExpenses
			var filteredByExpenses = checkDatesExist.filter(function(elem){
				return Number(elem[1]) > moneyFrom && Number(elem[1]) < moneyTo
			})

			// step3 : filter by category

			var filteredByCategory = (category === 'Category') ? (filteredByExpenses.length >= 1 ? filteredByExpenses : filteredDates ) : filteredByExpenses.filter(function(elem){
				return elem[4] === category
			})

			$("#filteredExpenseTable tbody").text('')

    		if(filteredByCategory.length >= 1){
    			filteredByCategory.forEach(function(elem, i) {
            $("#filteredExpenseTable").append('<tr><th scope="row">' + i + '</th><td data-th="Date">' + elem[0] + '</td><td data-th="Amount">' + elem[1] + '</td><td data-th="Category">' + elem[4] + '</td><td data-th="More info">' + elem[2] + '</td><td data-th="Comments">' + elem[3] + '</td></tr>');
        	})
    		}else{
    			$("#filteredExpenseTable tbody").append('<div class="alert alert-warning"> sorry no records found</div>');
    		}

    	console.log(startDate , endDate, moneyFrom , moneyTo, category , filteredDates , filteredByExpenses, filteredByCategory)
    })

});


if (localStorage.visited) {
  localStorage.setItem("visited", false);
} else {
  localStorage.setItem("visited", true);
  introJs().start();
}