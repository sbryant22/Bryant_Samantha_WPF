// Bryant, Samantha - 10/17/13 - Conditionals Assignment - Personal

// Traffic Patterns

/* If leaving home between 7:00am and 8:00am to get to work by 8:30am, you will make it. If leaving after 8:00am
, you will not make it in time due to traffic.
 */

// Givens: time and traffic

var time = prompt("Please enter the time (in decimal form) you left for work this morning.\n\nHint: 7:20 is 7.20");
// Asking user to enter what time they left for work that morning

var traffic = prompt("Please enter (on a scale of 1 - 10) how you would rate the traffic. Light or heavy.");
// Asking user to enter if the traffic is light or heavy for them using a scale of 1 - 10. 10 being extremely heavy

// Ternary statement with printed out results to console:

(time < 8 && traffic < 5) ? console.log("You left before "+ time +" and the traffic is a "+ traffic +", so you will make it to work on time!") : console.log("You left after "+ time +" and the traffic is a "+ traffic +", so you will not make it to work on time today!");
// If the time is before 8:00am then you will make it to work, but if it is after 8:00am then you will probably not make it due to traffic

