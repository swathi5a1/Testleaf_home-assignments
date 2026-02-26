/* Create a JavaScript program that defines a function to compute the intersection of two arrays. The
intersection should include elements that appear in both arrays without any duplicates.
1. Write a function named `intersection` that accepts two arguments, `arr1` and `arr2`, which are
arrays of numbers, and returns an array of their intersection.
2. Ensure no duplicate elements in the resulting array. If an element appears in both `arr1` and
`arr2`, it should appear only once in the result.
3. Use a loop to find common elements. Iterate through each element of `arr1` and check if it is
present in `arr2` and not already included in the result array.
4. Include example calls to the `intersection` function with different arrays to demonstrate the
function’s functionality. Include examples with no common elements, all elements common, and
typical cases. */
function intersection(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }   
    return result;
}

// Example calls to the intersection function
console.log(intersection([1, 2, 3], [3, 4, 5])); // Output: [3]
console.log(intersection([1, 2, 3], [4, 5, 6])); // Output: []
console.log(intersection([1, 2, 3], [1, 2, 3])); // Output: [1, 2, 3]
console.log(intersection([1, 2, 2, 3], [2, 3, 4])); // Output: [2, 3]