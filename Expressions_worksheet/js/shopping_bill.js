// Bryant, Samantha - 10/09/13 - Expressions Worksheet

// Average Shopping Bill

// Calculating a grocery list of the past 5 weeks using Arrays

var groceryAmount = [100, 125, 134, 105, 122];

var total = groceryAmount[0] + groceryAmount[1] + groceryAmount[2] + groceryAmount[3] +
    groceryAmount[4];

var weeklyAverageTotal = total/5;

console.log("You have spent a total of $"+ total +" on groceries over 5 weeks. That is an average of $"+  weeklyAverageTotal +" per week.");
