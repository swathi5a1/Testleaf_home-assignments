/* Create a TypeScript program that defines a function to compute the nth Fibonacci number using a
loop (iterative approach).*/
function fibonacci(n) {
    if (n < 0) {
        throw new Error("Input must be a nonnegative integer.");
    }
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var prev = 0;
    var curr = 1;
    for (var i = 2; i <= n; i++) {
        var next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
// Example usage:
console.log("fibonacci(10) = " + fibonacci(10)); // Output: 55
