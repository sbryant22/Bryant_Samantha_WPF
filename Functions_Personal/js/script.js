// Bryant, Samantha - 10/24/13 - Functions Assignment - Personal

//Calculate How many treats it takes to make my Mini Doberman Pincher (Ariel) happy.

// Givens: Amount of treats and how many times per day

var amountOfTreats = prompt("How many treats did you give Ariel today?");
//Asking user about how many treats they gave to Ariel that day

var timesPerDay = prompt("How many times per day do you give her treats?");
//Asking user about how many times they provide treats per day to Ariel

// To Calculate:

var results = happyAriel(amountOfTreats, timesPerDay, 24);
// To calculate the equation

// Function and print to console:

function happyAriel(amountOfTreats, timesPerDay){ //parameters for making a puppy happy
    if(amountOfTreats > 1 && timesPerDay < 5){ // if statement for how many treats and how many times a day equation
        var hoursInADay = 24; //the number of hours in a day
        var puppySmiles = (amountOfTreats + timesPerDay) / 24; //Equation for how many treats it takes to make Ariel very happy
        return puppySmiles; // return is putting the information out there
    }else{ //else block to if statement
        var hoursInADay = 24; //the number of hours in a day
        var puppySmiles = (amountOfTreats + timesPerDay) / 24; //Equation for how many treats it takes to make Ariel very happy
        return puppySmiles; // return is putting the information out there
    }
}

(amountOfTreats > 1 && timesPerDay < 5) ? console.log("Ariel got "+ results +" treats today. She's very happy!") : console.log("Ariel got "+ results +" treats today. She did not get enough treats to her liking today.");
// Ternary statement used again to display information to the console

happyAriel(); //reusable code
happyAriel(); // reusable code

