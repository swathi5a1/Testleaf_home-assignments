/*1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result./*/
function checkNumberType(num) {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }           

}
console.log(checkNumberType(5)); // The number is positive.
console.log(checkNumberType(-3)); // The number is negative.
console.log(checkNumberType(0)); // The number is zero.