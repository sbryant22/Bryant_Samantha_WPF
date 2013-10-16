// Bryant, Samantha - 10/14/13 - Conditions Worksheet

// Grade Letter Calculator

/* A student earns a number grade at the conclusion of a course at Full Sail. Determine the appropriate
letter grade for that number using conditional statements.
 */

/* Full Sail grade scale:
    A+ = 95-100
    A = 90-94
    B+ = 85-89
    B = 80-84
    C+ = 76-79
    C = 73-75
    D = 70-72
    F = 0-69
 */

// Given: letter grades and percentages

var gradeHighA = 95;
var gradeAverageA = 90;
var gradeHighB = 85;
var gradeAverageB = 80;
var gradeHighC = 76;
var gradeAverageC = 73;
var gradeD = 70;
var gradeF = 0;


var grades = prompt ("Please enter the number grade (in percent) that you have received for the class.");
// Asking to enter the number grade in percents form

// Condition and result to print out:

if(grades >= gradeHighA){
    //if number grade is greater than or equal to 95%, you have an A+
}else{
    console.log("You have a "+ grades +", which means you have earned a(n) X in the class!");
}



