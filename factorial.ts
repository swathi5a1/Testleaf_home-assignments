/* Create a TypeScript program that defines a function to compute the factorial of a given nonnegative integer using a loop (iterative approach).
*/
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Input must be a nonnegative integer.");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}   
// Example usage:
console.log(factorial(5)); // Output: 120