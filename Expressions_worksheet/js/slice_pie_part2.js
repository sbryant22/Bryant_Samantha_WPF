// Bryant, Samantha - 10/09/13 - Expressions Worksheet

// Slice of Pie part 2

// Calculate the number of pizza slices, people at the party, and the number of pizzas ordered
// Using the givens from Slice of pie Part 1

var numberOfSlices = 8; // initialize number of slices
var peopleAtParty = 10; // initialize the amount of people at the party
var numberOfPizzaOrdered = 5; // initialize the number of pizzas to order

// equation to find the total
var total = numberOfPizzaOrdered * (numberOfSlices/peopleAtParty);

// Calculating the number of slices Sparky gets to eat.

var totalForSparky = numberOfPizzaOrdered * (numberOfSlices/peopleAtParty/2); // divided equation by 2 - if 2 people only had 2 slices each instead of 4

console.log("Sparky got "+ totalForSparky +" slices of pizza.");