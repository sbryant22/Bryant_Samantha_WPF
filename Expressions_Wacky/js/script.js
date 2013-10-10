// Bryant, Samantha - 10/10/13 - Wacky Expression

// Calculate how many Twizzlers it would take to sculpt the eiffel tower. A small one of course.


// Givens:

var length = prompt("Please enter the length (in inches) of the Twizzler candy you want to use."); // Initialize the length of a piece of Twizzler candy.

var width = prompt("Please add the width (in inches) of the Eiffel Tower you want to create."); // Initialize the width of the Eiffel Tower that you want to replicate. Big or small.

var height = prompt("Please add the height (in inches) of the Eiffel Tower that you want to create.");

// Equation:

var total = length * width * height; // formula for finding out how many Twizzler's you would need to sculpt a small or big version of the Eiffel Tower.

console.log("You will need "+ total +" many Twizzler candies to sculpt an "+ width +" by "+ length +" Eiffel Tower replica.");