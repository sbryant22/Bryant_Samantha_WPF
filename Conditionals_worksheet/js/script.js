// Bryant, Samantha - 10/14/13 - Conditions Worksheet

// Example - Stuff your face 1

// Do you weight 250 lbs or do you need to gain more weight for this contest?

var heavyWeight = 250;
//var gainSomeWeight = true; //if the competitor is greater than or equal to 250 lbs.
var gainSomeWeight = false; //if competitor is less than 250 lbs.
// if their weight is greater than or equal to 250..

if(heavyWeight < 250 || gainSomeWeight){ // using the OR operator
    //if its more than 250
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    //if it's less than 250
    console.log("The competitor needs to gain some more weight!");
}