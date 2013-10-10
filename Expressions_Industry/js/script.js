// Bryant, Samantha - 10/10/13 - Industry Expression

// This expression represents the web design and development industry

// When a web designer wants to move an image (like a logo or a picture) from area of the page to another, this formula is used to give exact placement for the image.
// The formula used for when you are needing to move an image across an area of a web page.

// Givens:

var totalWidth = prompt("Please enter the total width of your web page layout. \nHint: In pixels."); // total width of entire web page

var width = prompt("Please enter the width (in pixels) of the section/area you are moving image to."); // the width of the section that you want to move your image to and from.

var positionNum = prompt("Please enter your position number. \nHint: Use the width of the image across area you want and assign the images a number. (1,2,3 etc.."); // the position number that you want to move the image to

// Equation:

var total = (totalWidth) - (width * positionNum); // the formula for finding the exact placement for user's image.

