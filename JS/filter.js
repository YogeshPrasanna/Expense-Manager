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

    	console.log(startDate , endDate, moneyFrom , moneyTo)
    })

});