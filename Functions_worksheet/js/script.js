// Bryant, Samantha - Functions Worksheet - 10/23/13

//Circumference

//Calculate the circumference of a circle

var total = circumference(2, 3.14, 5);

function circumference(radius){ //parameter is the radius
    var radius = 5; // radius for circle
    var circumference = (2 * 3.14) * radius; // Circumference = 2(pi) * radius - equation for finding the circumference of a circle
    return circumference; // returning the circumference - this function is putting the info out there
}

console.log("The circumference of the circle is "+ circumference +"");