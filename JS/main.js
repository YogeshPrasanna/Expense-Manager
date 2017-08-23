$(document).ready(function() {

  $('#addAnother').on('click', function() {

    var rowNumber = $('tbody').children().length;
    $('#addExpenseInfo').hide();

    var expenseRow = '<tr id="row' + rowNumber + '"> <th scope="row">' + rowNumber + '</th><td><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Date ..." /></td><td><input type="text" class="form-control"</td> <td><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item" href="#">Automobile</a><a class="dropdown-item" href="#">Clothing</a><a class="dropdown-item" href="#">Entertainment</a><a class="dropdown-item" href="#">Food</a><a class="dropdown-item" href="#">Healthcare</a><a class="dropdown-item" href="#">Vacation</a></li></div></div></td><td><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="description ..." /></td><td><input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="comments ..." /></td></tr>'

    $('tbody').append(expenseRow);

    //Show dropdown content in button area
    $(".dropdown-menu li a").click(function() {
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });
  })
});