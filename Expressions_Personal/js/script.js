// Bryant, Samantha - 10/10/13 - Personal Expressions

// This expression represents something that is personal to me

// Calculating how many songs purchased from Itunes over the course of a few weeks to a year.


// Givens:

var songsPurchased = new Array(); // Array for songs purchased from ITunes
songsPurchased[0] = 1.29; // Total dollar amount for songs purchased for that week
songsPurchased[1] = 2.58; // Total dollar amount for songs purchased for that week
songsPurchased[2] = 9.00; // Total dollar amount for songs purchased for that week
songsPurchased[3] = 3.25; // Total dollar amount for songs purchased for that week
songsPurchased[4] = prompt("Please enter the total dollar amount of songs purchased for the week."); // Total dollar amount for songs purchased for that week

var howManyWeeks = prompt("Please enter the number of weeks."); // the amount of weeks that the user wants to divide the total by

var giftCard = prompt("Please enter a gift card amount (If you have one. If not, then simply put a zero.)"); // asking for gift card amount if user has one

// Equation:

var total = songsPurchased[0] + songsPurchased[1] + songsPurchased[2] + songsPurchased[3]; // add up the amounts of songs purchased
var weeklyAverage = giftCard - (total/howManyWeeks); // after adding and getting a total, multiply it by how many weeks and then subtract a gift card amount if user enters one

console.log("You have spent a total of $"+ total +" over the course of "+ howManyWeeks +" weeks. That is a weekly average of $"+ weeklyAverage +".") // print out results for the total for the month


alert("You have spent a total of $"+ total +" over the course of "+ howManyWeeks +" weeks. That is a weekly average of $"+ weeklyAverage +".") // added an alert message so user can see it without the console if wanted to