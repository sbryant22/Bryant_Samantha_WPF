// Bryant, Samantha - 10/10/13 - Personal Expressions

// This expression represents something that is personal to me

// Calculating how many songs purchased from Itunes over the course of a few weeks to a year.


// Givens:

var songsPurchased = ["week1","week2","week3","week4"]; // Array for songs purchased in increments of weeks
songsPurchased[0] = prompt("Please enter the total dollar amount of songs purchased for first week."); // Total dollar amount for songs purchased for that week
songsPurchased[1] = prompt("Please enter the total dollar amount of songs purchased for second week."); // Total dollar amount for songs purchased for that week
songsPurchased[2] = prompt("Please enter the total dollar amount of songs purchased for third week."); // Total dollar amount for songs purchased for that week
songsPurchased[3] = prompt("Please enter the total dollar amount of songs purchased for fourth week."); // Total dollar amount for songs purchased for that week

var howManyWeeks = prompt("Please enter the number of weeks."); // the amount of weeks that the user wants to divide the total by

var giftCard = prompt("Please enter a gift card amount (If you have one. If not, then simply put a zero.)"); // asking for gift card amount if user has one

// Equation:

var total = songsPurchased[0] + songsPurchased[1] + songsPurchased[2] + songsPurchased[3]; // add up the amounts of songs purchased
var monthlyTotal = (total * howManyWeeks) - giftCard; // after adding and getting a total, multiply it by how many weeks and then subtract a gift card amount if user enters one

console.log("You have spent a total of $"+ total +" over the course of "+ howManyWeeks +" weeks. That is an average of $"+ monthlyTotal +" per month.") // print out results for the total for the month


alert("You have spent a total of "+ total +" over the course of "+ howManyWeeks +" weeks. That is an average of $"+ monthlyTotal +" per month.") // added an alert message so user can see it without the console if wanted to