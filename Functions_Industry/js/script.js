// Bryant, Samantha - 10/24/13 - Functions Assignment - Industry

// Web design and development industry

//The formula for making a Star Burst Design

// Given:

var duplicate = prompt("Please enter the number of times you would like your image to repeat.");
//Asking for the number of times the user would need to duplicate their shape for Star Burst design

var rotate = prompt("Please enter (in degree Celsius) what angle you wish to have your shape rotate.");
//Asking for the number in degrees that the user would like to rotate their shape

// To Calculate

var total = starBurst(duplicate, rotate, 11);
// Not part of the givens section but needed so function can calculate equation.

// Function:

function starBurst(duplicate, rotate, rotatingAmount){ //parameters for starburst
    var rotatingAmount = 11; //the number of times to rotate the shape to make the Star Burst design
    var starBurstDesign = (duplicate + rotate) * rotatingAmount; // Equation for making a starburst design
    
}

// Ternary Statement and print to console:

(duplicate < 25 && rotate > 10) ? console.log("Your StarBurst Design will come out great "+ total +"") : console.log("Your StarBurst Design will come out too cluttered with "+ duplicate +" duplicates and at a "+ rotate +" degree angle.");
// ternary statement. Letting the user know if their design will come out great or cluttered.