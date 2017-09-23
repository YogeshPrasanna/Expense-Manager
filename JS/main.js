$(document).ready(function() {

  //Add a row 
  $('#addAnother').on('click', function() {
    var rowNumber = $('tbody').children().length;
    $('#addExpenseInfo').hide();
    var expenseRow = '<tr id="row' + rowNumber + '"> <th scope="row">' + rowNumber + '</th><td><input type="text" class="form-control datepicker" id="date-row' + rowNumber + '" placeholder="Date ..." /></td><td><input type="text" class="form-control" /></td> <td><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item" href="#">Automobile</a><a class="dropdown-item" href="#">Clothing</a><a class="dropdown-item" href="#">Entertainment</a><a class="dropdown-item" href="#">Food</a><a class="dropdown-item" href="#">Healthcare</a><a class="dropdown-item" href="#">Vacation</a></li></div></div></td><td><input type="text" class="form-control" id="more-info-row' + rowNumber + '"  placeholder="description ..." /></td><td><input type="text" class="form-control" id="comments-row' + rowNumber + '" placeholder="comments ..." /></td></tr>'

    $('tbody').append(expenseRow);

    //Show dropdown content in button area
    $(".dropdown-menu li a").click(function() {
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $('.datepicker').datepicker();
  });

  //save
  $('#save').on('click', function() {

    //get all the input values
    var table = $('table');
    var rowIds = [];
    var cells = [];
    var category = [];
    $('tr', table).each(function() {
      rowIds.push($(this).attr('id'));
      $('td input', $(this)).each(function() {
        cells.push($(this).val());
      });
      $('td #dropdownMenuButton', $(this)).each(function() {
        category.push($(this).text());
      });
    });

    //split the input values
    function split(arr, n) {
      var res = [];
      while (arr.length) {
        res.push(arr.splice(0, n));
      }
      return res;
    }

    var indivigualExpenses = split(cells.slice() ,cells.length/(rowIds.length - 2));
    indivigualExpenses.forEach(function(elem , i){
      elem.push(category[i])
    });

    if(localStorage.expenses){
      var temp = JSON.parse(localStorage.getItem("expenses"));
      var finalArrToPush = temp;
      if(indivigualExpenses.length >= 1){
        indivigualExpenses.forEach(function(elem){
          finalArrToPush.push(elem);
        })
        localStorage.setItem("expenses",JSON.stringify(finalArrToPush))
      }
    }else{
      localStorage.setItem("expenses",JSON.stringify(indivigualExpenses))
    }

    console.log("row values  ",JSON.parse(localStorage.getItem("expenses")));
  })
});