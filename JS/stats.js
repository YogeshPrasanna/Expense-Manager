$(document).ready(function() {

    function generateMonthlyTotalExpenses(monthNumber) {
        return JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        }).map(function(elem) {
            return Number(elem[1])
        }).reduce(function(prev, cur) {
            return prev + cur
        })
    }

    var januaryTotalExpense = generateMonthlyTotalExpenses(0);
    var februaryTotalExpense = generateMonthlyTotalExpenses(1);
    var marchTotalExpense = generateMonthlyTotalExpenses(2);
    var aprilTotalExpense = generateMonthlyTotalExpenses(3);
    var mayTotalExpense = generateMonthlyTotalExpenses(4);
    var juneTotalExpense = generateMonthlyTotalExpenses(5);
    var julyTotalExpense = generateMonthlyTotalExpenses(6);
    var augustTotalExpense = generateMonthlyTotalExpenses(7);
    var septemberTotalExpense = generateMonthlyTotalExpenses(8);
    var octoberTotalExpense = generateMonthlyTotalExpenses(9);
    var novemberTotalExpense = generateMonthlyTotalExpenses(10);
    var decemberTotalExpense = generateMonthlyTotalExpenses(11);

    var dataForBarMonthlyVersusExpenses = [januaryTotalExpense, februaryTotalExpense, marchTotalExpense, aprilTotalExpense, mayTotalExpense, juneTotalExpense, julyTotalExpense, augustTotalExpense, septemberTotalExpense, octoberTotalExpense, novemberTotalExpense, decemberTotalExpense]

    var monthlyExpensesBarChart = document.getElementById("monthlyExpensesBarChart");
    var Chart1 = new Chart(monthlyExpensesBarChart, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: ' Rupees spent',
                data: dataForBarMonthlyVersusExpenses,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });



    var monthlyExpensesLineChart = document.getElementById("monthlyExpensesLineChart");
    var Chart2 = new Chart(monthlyExpensesLineChart, {
		    type: 'line',
		    data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: ' Rupees spent',
                data: dataForBarMonthlyVersusExpenses,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                "fill":false,
                "borderColor":"rgb(75, 192, 192)",
                "lineTension":0.1
            }]
        }
    });
})