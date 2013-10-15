// Bryant, Samantha - 10/14/13 - Conditions Worksheet

// Last Chance for Gas!

// You will be passing the last gas station for the next 200 miles, do you need gas now or do you wish to keep going?

// Givens:

var carMpg = prompt("Please enter the gas mileage on your car.");
// Gas efficiency of the car (in mpg)

var fuelGauge = prompt("Please enter the percentage that is currently on your Fuel Gauge.");
//Gauge reading of the gas tank (in %)

var gasTank = prompt("Please enter how many gallons your car has left.");
//Car's gas tank capacity (in gallons)

if(carMpg > fuelGauge || gasTank < 3){ // car mileage is greater than % on fuel gauge OR there is less than 3 gallons left in the tank
    console.log("Yes, you can make it without stopping for gas!");
}else{ // if you have less than 3 gallons left in your tank
    console.log("You only have "+ gasTank +" gallons of gas in your tank, better get gas now while you can!");
}
