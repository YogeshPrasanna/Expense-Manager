$(document).ready(function() {

    var allExpenses = JSON.parse(localStorage.getItem("expenses"));

    function generateMonthlyRecords(monthNumber) {
        return JSON.parse(localStorage.getItem("expenses")).filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        });
    }

    function generateMonthlyTotalExpenses(monthNumber) {
        return allExpenses.filter(function(elem) {
            return (new Date(elem[0]).getMonth()) === monthNumber
        }).map(function(elem) {
            return Number(elem[1])
        }).reduce(function(prev, cur) {
            return prev + cur
        })
    }

    function generateYearlyExpenseByCategory(category) {
        return allExpenses.filter(function(elem) {
            return elem[4] === category
        }).map(function(expense) {
            return Number(expense[1])
        }).reduce(function(prev, cur) {
            return prev + cur
        })
    }

    function generateMonthlyCategoryExpenses(category) {
        return recordsForAllMonths.map(function(elem) {
            return elem.filter(function(el) {
                return el[4] === category
            })
        }).map(function(categoryRec) {
            if (categoryRec.length > 1) {
                return categoryRec.map(function(prices) {
                    return prices[1]
                }).reduce(function(prev, cur) { return Number(prev) + Number(cur) })
            } else if (categoryRec.length == 0) {
                return "0"
            } else {
                return categoryRec.map(function(prices) {
                    return prices[1]
                })
            }
        }).toString().split(',')
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

    var clothingTotalExpense = generateYearlyExpenseByCategory("Clothing ");
    var automobileTotalExpense = generateYearlyExpenseByCategory("Automobile ");
    var entertainmentTotalExpense = generateYearlyExpenseByCategory("Entertainment ");
    var foodTotalExpense = generateYearlyExpenseByCategory("Food ");
    var healthcareTotalExpense = generateYearlyExpenseByCategory("Healthcare ");
    var vacationTotalExpense = generateYearlyExpenseByCategory("Vacation ");

    var dataForExpensesVersusCategory = [clothingTotalExpense, automobileTotalExpense, entertainmentTotalExpense, foodTotalExpense, healthcareTotalExpense, vacationTotalExpense]

    //console.log(vacationTotalExpense)

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

    var recordsForAllMonths = [januaryRecords, februaryRecords, marchRecords, aprilRecords, mayRecords, juneRecords, julyRecords, augustRecords, septemberRecords, octoberRecords, novemberRecords, decemberRecords]


    var yearlyClothingExpenses = generateMonthlyCategoryExpenses("Clothing ");
    var yearlyAutomobileExpenses = generateMonthlyCategoryExpenses("Automobile ");
    var yearlyEntertainmentExpenses = generateMonthlyCategoryExpenses("Entertainment ");
    var yearlyVacationExpenses = generateMonthlyCategoryExpenses("Vacation ");
    var yearlyFoodExpenses = generateMonthlyCategoryExpenses("Food ");
    var yearlyHealthcareExpenses = generateMonthlyCategoryExpenses("Healthcare ");

    var yearlyCategoryExpenses = [yearlyClothingExpenses, yearlyAutomobileExpenses, yearlyEntertainmentExpenses, yearlyVacationExpenses, yearlyFoodExpenses, yearlyHealthcareExpenses]

    console.log(yearlyCategoryExpenses);

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
                    "#F17D80",
                    "#737495",
                    "#68A8AD",
                    "#C4D4AF",
                    "#6C8672",
                    "#775BA3"
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
                "fill": false,
                "borderColor": "rgb(75, 192, 192)",
                "lineTension": 0.1
            }]
        }
    });


    var config = {
        type: "doughnut",
        data: {
            "labels": ["Automobile", "Clothing", "Entertainment", "Food", "Healthcare", "Vacation"],
            "datasets": [{
                "label": "My First Dataset",
                "data": dataForExpensesVersusCategory,
                "backgroundColor": ["#F17D80", "#737495", "#68A8AD", "#C4D4AF", "#6C8672", "#775BA3"]
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: ''
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    var allCatMonthlyconfig = {
        type: 'line',
        data: {
            labels: ["jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"],
            datasets: [{
                label: "Clothing",
                fill: false,
                backgroundColor: "#737495",
                borderColor: "#737495",
                data: yearlyCategoryExpenses[0]
            }, {
                label: "Automobile",
                fill: false,
                backgroundColor: "#F17D80",
                borderColor: "#F17D80",
                data: yearlyCategoryExpenses[1],
            }, {
                label: "Entertainment",
                fill: false,
                backgroundColor: "#68A8AD",
                borderColor: "#68A8AD",
                data: yearlyCategoryExpenses[2]
            }, {
                label: "Food",
                fill: false,
                backgroundColor: "#C4D4AF",
                borderColor: "#C4D4AF",
                data: yearlyCategoryExpenses[4],
            }, {
                label: "HealthCare",
                fill: false,
                backgroundColor: "#6C8672",
                borderColor: "#6C8672",
                data: yearlyCategoryExpenses[5]
            }, {
                label: "Vacation",
                fill: false,
                backgroundColor: "#775BA3",
                borderColor: "#775BA3",
                data: yearlyCategoryExpenses[3],
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: ''
            },
        }
    };

    window.onload = function() {
        var ctx = document.getElementById("chart-area").getContext("2d");
        var allCatMonthly = document.getElementById("all-category-monthly-line-chart").getContext("2d");
        window.myDoughnut = new Chart(ctx, config);
        window.myLine = new Chart(allCatMonthly, allCatMonthlyconfig);
    };

})