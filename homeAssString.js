/*Assignment Requirements:  
Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word.*/

let str = 'Name Sharudeen'
let words = str.split(" ");
let lastWord = words[words.length-1]
console.log(lastWord.length); // output : 9

/*Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length*/

let str1 = 'I Like Testing'
let trimmed = str1.trim();
let Words = trimmed.split(" ");
let lastword = Words[Words.length - 1];
console.log(lastword.length); // output : 7

/*Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result */

