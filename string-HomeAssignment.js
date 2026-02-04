let word = "hello world"; 
/*  Split the string into an array of words.
2. Find the last word in the array.
3. Calculate the length of this word./*/
let  wordsArray = word.split(" ");
console.log(wordsArray);
let lastWord = wordsArray[wordsArray.length - 1];
let lengthOfLastWord = lastWord.length;
console.log("The length of the last word '" + lastWord + "' is: " + lengthOfLastWord);  
///////Pblm 2////////
let givenName = "fly me to the moon ";
/* Trim the String
2. Split the String into Words
3. Identify the Last Word
4. Calculate the Length of the Last Word
5. Return the length /*/
let trimmedName = givenName.trim();
console.log(trimmedName); 
let nameArray = trimmedName.split(" "); 
let lastName = nameArray[nameArray.length - 1];
let lengthOfLastName = lastName.length;
console.log("The length of the last word '" + lastName + "' is: " + lengthOfLastName);  
///////Pblm 3////////
/* Example 3:
/Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters
Remove spaces and convert all letters to the same case
2. Sort the Characters
3. Compare Sorted Strings
4. Return the Result*/
function isAnagram(str1, str2) {
    let normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    let normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();
    let sortedStr1 = normalizedStr1.split('').sort().join('');
    let sortedStr2 = normalizedStr2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false