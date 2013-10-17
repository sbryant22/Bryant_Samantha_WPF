// Bryant, Samantha - 10/17/13 - Conditions Worksheet

// Movie Ticket Price

/* The local movie theater in town charges $12.00 a ticket unless you are a senor (55 or older).
If a senor or a child under the age of ten, you get a discounted price of $7.00. Also, if you are viewing a movie
around 3pm and 5pm you can also get the discounted price.
 */

// Given:

var movieTime = prompt("Please enter the time (in whole numbers) you wish to see a movie.");
// Asking for the time of the movie.

var ageOfCustomer = prompt("Please enter your age."); // Asking for the age of the customer

if(movieTime > 3 && ageOfCustomer < 10){ // if the movie time is after 3pm and the age of the customer is under 10.
    console.log("The ticket price is $7.00.")
}else if(movieTime < 5 || ageOfCustomer > 55){ // if the movie time is under 5pm or the age of the customer is over 55
    console.log("The ticket price is $7.00.")
}else{ // if none of the above then there is no discounted price
    console.log("The ticket price is $12.00.")
}

