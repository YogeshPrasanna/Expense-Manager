$(document).ready(function() {

  if(localStorage.visited){
    localStorage.setItem("visited", false);
  }else{
      introJs()
        .setOption("doneLabel", "Next page")
        .start()
        .oncomplete(function() {
          window.location.href = "/pages/monthly-view.html";
        });
  }

  // sample data
  var sampleData = JSON.parse('[["01/01/2017","500","Dress","new year","Clothing "],["09/01/2017","1500","party","mg road","Entertainment "],["09/12/2017","2000","Petrol","shell","Automobile "],["09/16/2017","680","TShirt"," ----- ","Clothing "],["01/01/2017","1500","party","mg road","Entertainment "],["01/19/2017","500","shirt","shirt","Clothing "],["01/19/2017","578","medicines","fever","Healthcare "],["","","","","Category"],["01/20/2017","963","ride","","Vacation "],["02/01/2017","200","Hotel ","kfc","Food "],["02/24/2017","560","movie","captain america","Entertainment "],["02/11/2017","850","Petrol","bike","Automobile "],["02/21/2017","77","juice","","Food "],["09/23/2017","785","movie","premam","Entertainment "],["02/23/2017","5846","shopping","dmart","Entertainment "],["03/01/2017","800","Petrol","shell","Automobile "],["03/23/2017","568","movie","spiderman","Entertainment "],["03/22/2017","5630","trip","coorg","Vacation "],["03/14/2017","2500","dress","gt mall","Clothing "],["03/18/2017","2000","Hotel","party","Food "],["04/20/2017","123","petrol","shell","Automobile "],["04/15/2017","333","jeans pant"," - ","Clothing "],["05/15/2017","2341","wonder la","bidadi","Entertainment "],["08/15/2017","3321","dress","5 shirts","Clothing "],["12/15/2017","223","tablets","  - ","Healthcare "],["02/15/2017","553","hotel","d shanti sagar","Food "],["04/20/2017","666","petrol"," - ","Automobile "],["04/13/2017","8865","mobile","motorola","Entertainment "],["04/19/2017","3654","tour","kerala","Vacation "],["05/24/2017","123","lunch","office","Food "],["05/24/2017","2342","Shirts","3 shirts","Clothing "],["05/17/2017","234","Petrol","shell","Automobile "],["05/19/2017","665","movie","robot","Entertainment "],["05/27/2017","965","1 day trip","srirangapatna","Vacation "],["06/14/2017","132","dinner","chicken","Food "],["06/22/2017","4566","wonder la","theme park","Entertainment "],["06/04/2017","2342","movie","warcraft","Entertainment "],["06/29/2017","222","lunch","meals","Food "],["06/09/2017","442","tablets"," - ","Healthcare "],["06/17/2017","2234","trip","kodachadri","Vacation "],["06/18/2017","1110","jeans","1 jeans","Clothing "],["07/05/2017","4663","trip","tamilnadu","Vacation "],["07/20/2017","856","movie","ko","Entertainment "],["07/19/2017","15000","tablet","asus ","Entertainment "],["07/28/2017","2632","service","bike","Automobile "],["07/31/2017","200","breakfast","chapati","Food "],["08/16/2017","560","Petrol","shell","Automobile "],["08/18/2017","663","t shirt","spunk","Clothing "],["08/24/2017","854","movie","charlie","Entertainment "],["08/30/2017","2000","2 day trip","kerala","Vacation "],["08/31/2017","100","juice"," musambi","Food "],["10/04/2017","445","Petrol","shell","Automobile "],["10/12/2017","756","jeans","pant","Clothing "],["10/12/2017","102","breakfast","dosa","Food "],["10/20/2017","153","lunch","meals and juice","Food "],["10/26/2017","4444"," 3 day trip","maharastra","Vacation "],["11/15/2017","1500","3 shirts","spunk","Clothing "],["11/01/2017","650","Petrol","Shell","Automobile "],["11/10/2017","120","lunch","meals","Food "],["11/18/2017","150","dinner","pizza","Food "],["11/12/2017","852","movie","mugulunage","Entertainment "],["11/26/2017","452","reunion","mc donalds","Food "],["12/15/2017","150","Breakfast","dosa","Food "],["12/15/2017","300","lunch","KFC","Food "],["09/25/2017","600","gift","dress","Entertainment "],["09/22/2017","520","1 day trip","kanakpura","Vacation "],["12/28/2017","800","movie","jolly llb","Entertainment "],["12/15/2017","566","dress","shirt","Clothing "]]')

  //dump sample data

  $('#dump-sample').on('click',function(){
    localStorage.setItem("expenses",JSON.stringify(sampleData))
    location.reload();
  })

  // clear all data
  $('#clear-old-data').on('click',function(){
    localStorage.setItem('expenses',"");
    location.reload();
  })


  //Add a row 
  $('#addAnother').on('click', function() {
    var rowNumber = $('tbody').children().length;
    $('#addExpenseInfo').hide();
    $('#expenseSuccessSavedTableHeader').hide();
    var expenseRow = '<tr id="' + rowNumber + '"> <th scope="row">' + rowNumber + '</th><td><input type="text" class="form-control datepicker" id="date-row' + rowNumber + '" placeholder="Date ..." /></td><td><input type="text" class="form-control" /></td> <td><div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><li><a class="dropdown-item" href="#">Automobile</a><a class="dropdown-item" href="#">Clothing</a><a class="dropdown-item" href="#">Entertainment</a><a class="dropdown-item" href="#">Food</a><a class="dropdown-item" href="#">Healthcare</a><a class="dropdown-item" href="#">Vacation</a></li></div></div></td><td><input type="text" class="form-control" id="more-info-row' + rowNumber + '"  placeholder="description ..." /></td><td><input type="text" class="form-control" id="comments-row' + rowNumber + '" placeholder="comments ..." /></td></tr>'

    $('tbody').append(expenseRow);

    //Show dropdown content in button area
    $(".dropdown-menu li a").click(function() {
      $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
      $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });

    $('.datepicker').datepicker();
  });

  //save
  $("#save").on("click", function() {
    //get all the input values
    var table = $("table");
    var rowIds = [];
    var cells = [];
    var category = [];
    $("tr", table).each(function() {
      rowIds.push($(this).attr("id"));
      $("td input", $(this)).each(function() {
        cells.push($(this).val());
      });
      $("td #dropdownMenuButton", $(this)).each(function() {
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

    var indivigualExpenses = split(cells.slice(), cells.length / (rowIds.length - 2));
    indivigualExpenses.forEach(function(elem, i) {
      elem.push(category[i]);
    });

    if (localStorage.expenses) {
      var temp = JSON.parse(localStorage.getItem("expenses"));
      var finalArrToPush = temp;
      if (indivigualExpenses.length >= 1) {
        indivigualExpenses.forEach(function(elem) {
          finalArrToPush.push(elem);
        });
        localStorage.setItem("expenses", JSON.stringify(finalArrToPush));
      }
    } else {
      localStorage.setItem("expenses", JSON.stringify(indivigualExpenses));
    }

    // remove all old tables
    $("tbody").text("");
    $("tbody").append('<tr id="addExpenseInfo"><td colspan="6"><div class="expenseTableHeader text-center">Add an expense by clicking the add button</div></td></tr>');
    $("tbody").append('<tr id="expenseSuccessSavedTableHeader"><td colspan="6"><div class="expenseSuccessSavedTableHeader text-center">All the expenses were successfully saved</div></td></tr>');

    $("#help-container").popover({
      selector: "[data-toggle='popover']",
      container: "body",
      html: true
    });

    console.log("row values  ", JSON.parse(localStorage.getItem("expenses")));
  })
});