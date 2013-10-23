// Bryant, Samantha - Functions Worksheet - 10/23/13

//Circumference

//Calculate the circumference of a circle

var total = circumference(2, 3.14, 5); //to calculate the equation to get circumference

function circumference(radius){ //parameter for the radius
    var radius = 5; // radius for circle
    var circumference = (2 * 3.14) * radius; // Circumference = 2(pi) * radius - equation for finding the circumference of a circle
    return circumference; // returning the circumference - this function is putting the info out there
}

console.log("The circumference of the circle is "+ total +""); //prints out the answer to the console


//Stung!

// Calculate how many bee stings are needed to kill an animal in a function

//Given:

var victimWeight = 120; // Victim's weight
var total = stingsNeeded(120, 10); //to calculate the equation

function stingsNeeded(victimWeight){ //parameter for victim's weight in pounds
    var victimWeight = 120; // victim's weight
    var stingsPerPound = 10; /*it takes approximately 10 stings per pound of body weight to administer a lethal dose.
    - website of Texas A&M*/
    var beeStings = victimWeight * 10; // equation for finding the number of bee stings it takes to give a lethal dose
    return beeStings; // returning the number of bee stings needed
}

console.log("It takes "+ total +" bee stings to kill this animal.");