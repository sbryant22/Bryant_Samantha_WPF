// Bryant, Samantha - 10/17/13 - Conditionals Assignment - Industry

// Calculating for if you should be a web designer or web developer

// Given: = Photoshop, Illustrator or CSS, Html, Javascript


var photoShopDesign = prompt("Please enter (on a scale of 1 - 10) how much you like using Photoshop or Illustrator for designing a web page. \nHint: 10 being the highest rating");
// Asking the user if they like/love working in PhotoShop, Illustrator, etc...

var htmlCssProgramming = prompt("Please enter (on a scale of 1 - 10) how much you prefer using Programming languages. \nHint: Css, Html, Javascript etc...");
// Asking the user if they prefer to code a website instead of designing it.

// Else if Statement and results to print out:

if(photoShopDesign > 6 && htmlCssProgramming > 5){ // if you have workable hours times that by 0.25 to get your billable hours
    console.log("Your billable hours are")
}