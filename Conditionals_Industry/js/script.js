// Bryant, Samantha - 10/17/13 - Conditionals Assignment - Industry

// Calculating for if you should be a web designer or web developer

// Given: = Design (PhotoShop, Illustrator) or Programming (CSS, Html, Javascript)


var photoShopDesign = prompt("Please enter (on a scale of 1 - 10) how much you like using Photoshop or Illustrator for designing a web page. \nHint: 10 being the highest rating");
// Asking the user if they like/love working in PhotoShop, Illustrator, etc...

var htmlCssProgramming = prompt("Please enter (on a scale of 1 - 10) how much you prefer using Programming languages. \nHint: Css, Html, Javascript etc...");
// Asking the user if they prefer to code a website instead of designing it.

// Else if Statement and results to print out:

if(photoShopDesign > 6){
// if your number is higher than 6 for PhotoShop and lower than 5 for Programming, then this statement is true
    console.log("You should be a Web Designer!"); // True Statement
    // If Design number is higher than 6 for designing and lower than 5 for Programming, then user should lean more towards Web Design
}else if(htmlCssProgramming > 3){
    // if Design number is lower than 5 and Programming number is greather than 3, then user should lean more towards Web Development.
    console.log("You should be a Web Programmer!"); // True statement
}else{
    console.log("You might want to think of another Profession!") // if condition 1 and condition 2 are not true
    // If low numbers for design and programming together, than this line will appear on the console
}