// Bryant, Samantha - 10/17/13 - Conditionals Assignment - Wacky

/* How many steps would it take to get to the pot of gold at the end of a Rainbow and how many colors are in the rainbow?
Rainbow has to have all colors present for pot of gold to appear. */


// Given: steps and how many colors

var steps = prompt("Please enter the amount of steps you have taken.");
// The user adds how many steps they have taken to get to the other end of the current rainbow.

var howManyColors = prompt("Please enter how many colors you see in the rainbow.");
// Rainbow needs to have all seven colors present to have a pot of gold at the end of it.

var enoughSteps = true; 

// If Else Statement and results to print to console:

if(steps + 50 || howManyColors >= 7){
    console.log("You have walked a total of "+ steps +" steps or there are "+ howManyColors +" colors in the rainbow, so you get the Pot of Gold!");
    // If the user has taken more than 100 steps towards the end of the rainbow or there are greater than or equal to 7 colors present than the user will find the Pot of Gold.
}else{
    console.log()
}