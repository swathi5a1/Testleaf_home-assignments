/*Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false./*/
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;         
     if     (str === reversedStr) {
       return true; 
        console.log("The  string is palindrome: " + reversedStr);
    } else { 
        return false;
        console.log("The  string is not a palindrome: " + reversedStr);
}}  
console.log(reverseString("madam")); // true
console.log(reverseString("hello")); // false