// Bryant, Samantha - 10/24/13 - Functions Assignment - Wacky

// Wacky Function on the Movie Harry Potter

// If there are 7 players on each Quidditch team, how many Howarts student Quidditch-players are there? (per year)

// Given:

var players = prompt("How many players on your team?"); // Asking for the number of players on student's team

var monthsPerYear = prompt("How many months (per year) did your student/child play on the Quidditch team?");
//Asking for the number of months that the student played on the team per year

// Function with else if statement:

var quidditchTeam = function(players, monthsPerYear){ // anonymous function for Quidditch Team
    if(players === 7 && monthsPerYear === 4){
    //If there are 7 players and 4 months per year that the team plays for then this statement is true to equal 28
       var quidditchTeam = players * monthsPerYear; // equation for finding out how many student Quidditch-players there are per year.
       return quidditchTeam; // returning the total to the equation
       //console.log("There are "+ total +" players on a Quidditch Team per year."); // This statement comes up on the console when this proves to be true.
        var quidditchTeam = players * monthsPerYear; // equation for finding out how many student Quidditch-players there are per year.
        return quidditchTeam; // returning the total to the equation
    }else if(players > 7 || monthsPerYear > 4){ // else if the # of players is greater than 7 OR the months are greater than 4, statement will be false.
        var quidditchTeam = players * monthsPerYear; // equation for finding out how many student Quidditch-players there are per year.
        return quidditchTeam; // returning the total to the equation
      // console.log("There are "+ total +" players on your Quidditch Team which is too many!");
        //This statement will appear when false. Stating that there are more than 7 players and more than 4 months per year to play the game.
    }else{ // else statement for false
      // console.log("There are "+ total +" of players. So no team!"); // This statement will appear when both statements are true.
    }
}

// To Calculate:

var total = quidditchTeam(players, monthsPerYear); // to calculate equation for console.log

// Print to console:

console.log("There are "+ total +" players on a Quidditch Team per year.");
console.log("There are "+ total +" players on your Quidditch Team which is too many!");
console.log("There are "+ total +" of players. So no team!");





