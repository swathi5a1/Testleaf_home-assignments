/*. Create a function named `isOddOrEven` that takes a number as a parameter
2. Declare and initialize the variable
3. Use a conditional statement to check if the number is divisible by 2
4. Call the function and print the result/*/

function isOddOrEven(num) {
    if (num % 2 === 0) {
        return "The number " + num + " is even.";
    } else {
        return "The number " + num + " is odd.";
    }   
}
console.log(isOddOrEven(4)); // The number 4 is even.
console.log(isOddOrEven(7)); // The number 7 is odd.    