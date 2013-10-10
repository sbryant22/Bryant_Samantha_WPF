// Bryant, Samantha - 10/10/13 - Wacky Expression

// Calculate how many Twizzlers it would take to sculpt the eiffel tower. A small one of course.

// The length of an average size of a Twizzler is 12 inches.

// Givens:

var length = prompt("Please enter the length (in inches) of the Twizzler candy you want to use. \nHint: You don't have to put inches in the text field but measure in inches."); // Initialize the length of a piece of Twizzler candy.

var width = prompt("Please add the width (in inches) of the Eiffel Tower you want to create."); // Initialize the width of the Eiffel Tower that you want to replicate. Big or small.

var height = prompt("Please add the height (in inches) of the Eiffel Tower that you want to create."); // Initialize the height of the Eiffel Tower that you want to replicate. Big or small.

// Equation:

var total = length * width * height; // formula for finding out how many Twizzler's you would need to sculpt a small or big version of the Eiffel Tower.

console.log("You will need "+ total +" many Twizzler candies to sculpt a "+ width +" by "+ length +" Eiffel Tower replica."); // print out of the amount of Twizzlers needed for an Eiffel Tower sculpture.