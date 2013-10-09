// Bryant, Samantha - 10/09/13 - Expressions Worksheet

// Discount Problem

// Calculate the discounted price for an item.

var originalPrice = 20; // initialize original price
var nameOfProduct = "Depeche Mode - The Best Of Album"; // initialize product name
var percentDiscount = 10; // initialize discount
var taxRate = 10; // initialize tax rate



var total = originalPrice * (1-percentDiscount/20);
// var total = originalPrice - (originalPrice * percentDiscount/20)

var totalWithTax = taxRate/20 * total;

// print out the output of the Discounted product

console.log("Your "+ nameOfProduct +"  was originally $"+ originalPrice +", but after a "+ percentDiscount +"% discount, it is now $"+ total +" without Tax and $"+ totalWithTax +" with tax.");
