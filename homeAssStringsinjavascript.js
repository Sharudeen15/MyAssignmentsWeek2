/*Assignment Requirements:  
Write a function to reverse the string. 
1. Convert the input into characters 
2. Loop them in reverse direction 
3. Concatenate the string 
4. Print the new string 
Write a function to check the given string is a palindrome 
[If the given string and reverse string are the same, it is a palindrome] 
1. Check if the reverse string and original string are the same 
 2. Return true if same, else the false. */


 // reverse string
 
function reverseString(str) {
    let chars = str.split("");
    let result = " ";
    for (let j = chars.length - 1; j >= 0; j--) {
        result = result + chars[j];
    }

    return result;
}
console.log(reverseString("testing"));
 

 //Checking Palindrome

 function Palindrome(string) {
   let chars1 = string.split("")
   let reverse1 = ""
   for (let i = chars1.length - 1; i >= 0; i--) {
        reverse1 = reverse1 + chars1[i];
    
   }
   if (string === reverse1) {
    return true;
    } else {
    return false;
   }
    
   }
 console.log(Palindrome("madam"));