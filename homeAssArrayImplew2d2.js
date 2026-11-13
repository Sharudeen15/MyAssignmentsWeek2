/*Assignment Requirements:
1 Use push() to add elements into an array
2 Use pop() to remove the last element
3 Use shift() to remove the first element
4 Use unshift() to add an element at the beginning
5 Use includes() to check whether an element exists
6 Use indexOf() to find the position of an element
7 Use join() to convert array into string
8 Use reverse() to reverse the array
9 Use sort() to sort the array*/

const { log } = require("console");

let arr = ['sharu', 26, 'Welcome']

//Using push() method
arr.push('playwright', 12,54,90);
console.log(arr); // [ 'sharu', 26, 'Welcome', 'playwright', 12, 54, 90 ]

//using pop() method
arr.pop();
console.log(arr); // [ 'sharu', 26, 'Welcome', 'playwright', 12, 54]

//using shift() method
arr.shift(0);
console.log(arr); // [ 26, 'Welcome', 'playwright', 12, 54 ]

//using unshift() method
arr.unshift('Vijay', 75, 'CM')
console.log(arr); // [ 'Vijay', 75, 'CM', 26, 'Welcome', 'playwright', 12, 54 ]

//using include() menthod
console.log(arr.includes(75)); // true

//using indexOf() method
console.log(arr.indexOf('playwright')); // 5

// using join() method
console.log(arr.join(" ")); // Vijay 75 CM 26 Welcome playwright 12 54

// using reverse() method
console.log(arr.reverse()); // [ 54, 12, 'playwright', 'Welcome', 26, 'CM', 75, 'Vijay' ]

// using sort() method
console.log(arr.sort()); // [ 12, 26, 54, 75, 'CM', 'Vijay', 'Welcome', 'playwright' ]

