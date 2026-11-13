//String properties and methods
//Returns the length of a String object.
let course = 'playwright'
//length -> 1,2,3,..
//index -> 0,1,2,3..

console.log(`The length of the string is ${course.length}`);

//Returns the character at the specified index.
console.log(`The charAt of 3 of the string is ${course.charAt(3)}`)

//indexof()
//Returns the position of the first occurrence of a substring, or -1 if it is not present.
console.log(`The index of 'a' of the string is ${course.indexOf('play')}`);


//slice()
//Returns a section of a string.
let course1 = 'playwright'

//negative index t -1 , h -2, g -3, i -4, r -5...
console.log(course1.slice(2,14));
console.log(course1.slice(4)); //wrig
console.log(course1.slice(5,2)); //return empty string
console.log(course1.slice(5,-9));
console.log(course1.slice(5,-5));


/* 
start index is included and end index is not included
start index is greater than end index it give empty string
negative index is allowed */

//substring()
//let course1 = 'playwright'
console.log(course1.substring(2,5)) //ayw
console.log(course1.substring(5,2)); //automatically swaps the index 
console.log(course1.substring(-2,-5));//treats negative index as 0
//negative index in not allowed in substring

//reverse a string

function revreseString(str){
    return str.split('').reverse().join('')
}

console.log(revreseString('Testleaf'));












