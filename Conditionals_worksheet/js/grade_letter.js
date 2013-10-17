// Bryant, Samantha - 10/16/13 - Conditions Worksheet

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

var gradeHighA = "A+"; // 95-100
var gradeAverageA = "A"; // 90-94
var gradeHighB = "B+"; // 85-89
var gradeAverageB = "B"; // 80-84
var gradeHighC = "C+"; // 76-79
var gradeAverageC = "C"; // 73-75
var gradeD = "D"; // 70-72
var gradeF = "F"; // 0-69


var grades = prompt ("Please enter the number grade (in percent) that you have received for the class.");
// Asking to enter the number grade in percents form

// Condition and result to print out:

if(grades > 95){
    //if number grade is greater than 95%, you have an A+
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeHighA +" in the class!");
}else if(grades > 90 && grades < 94){
    //if number grade is greater than 90% and less than 94%, you have an A
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeAverageA +" in the class!");
}else if(grades > 85 && grades < 89){
    //if number grade is greater than 85% and less than 89%, you have a B+
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeHighB +" in the class!");
}else if(grades > 80 && grades < 84){
    //if number grade is greater than 80% and less than 84%, you have a B
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeAverageB +" in the class!");
}else if(grades > 76 && grades < 79){
    //if number grade is greater than 76% and less than 79%, you have a C+
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeHighC +" in the class!");
}else if(grades > 73 && grades < 75){
    //if number grade is greater than 73% and less than 75%, you have a C
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeAverageC +" in the class!");
}else if(grades > 70 && grades < 72){
    //if number grade is greater than 70% and less than 72%, you have a D
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeD +" in the class!");
}else if(grades < 69){
    //if number grade is less than 69%, you have an F
    console.log("You have a "+ grades +", which means you have earned a(n) "+ gradeF +" in the class!");
}




