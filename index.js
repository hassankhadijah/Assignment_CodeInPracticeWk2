//Assignment on CodeInPractice Week2

// Create a variable outside a function
let outsideVariable = "outside";

// Define a function that creates a variable with a different name
function myFunction() {
    let insideVariable = " inside";
    console.log("Inside the function:");
    console.log("insideVariable:", insideVariable);
    console.log("outsideVariable:", outsideVariable);
}

// Call the function
myFunction();

// Outside the function, print both variables
console.log("Outside the function:");
console.log("insideVariable:", typeof insideVariable === 'undefined' ? "Variable is not defined outside the function" : insideVariable);
console.log("outsideVariable:", outsideVariable);


// second assignment for CodeInpractice week2

let x = 3;
let y = 5;
const multiply = function(x, y){
    return x*y;
};

const result = multiply(3,5);
console.log(result);