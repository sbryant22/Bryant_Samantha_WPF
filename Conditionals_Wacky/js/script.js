// Bryant, Samantha - 10/17/13 - Conditionals Assignment - Wacky

/* To get the pot of gold at the end of a rainbow, first, you have to take more than 100 steps towards either side of rainbow.
Also, there needs to be a rainbow actually present for it to appear.
Rainbow has to have all colors present for pot of gold to appear. */


// Given: steps and how many colors

// If steps are greater than 100 and there are 7 colors present in rainbow, then statement is true for pot of gold
// Otherwise you will get no pot of gold

var steps = prompt("Please enter the amount of steps you have taken.");
// The user adds how many steps they have taken to get to the other end of the current rainbow.

var howManyColors = prompt("Please enter how many colors you see in the rainbow.");
// Rainbow needs to have all seven colors present to have a pot of gold at the end of it.


// If Else Statement and results to print to console:

if(steps > 100 && howManyColors >= 7){
    console.log("You have walked a total of "+ steps +" steps and "+ howManyColors +" colors are present, so you get the Pot of Gold!");
    // If the user has taken more than 100 steps towards the end of the rainbow or there are greater than or equal to 7 colors present than the user will find the Pot of Gold.
}else{
    console.log("Without a rainbow, there is no Pot of Gold!");
    // Statement for when the "if" is False
}