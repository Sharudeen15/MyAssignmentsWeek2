/*Assignment Requirements:
1. Create an array with numeric values
2. Declare a variable to store the sum
3. Use a loop to iterate through the array
4. Add each element to the sum variable
5. Print the final sum*/

//creating array with numaric value
let arr = [23, 45, 67, 78] 
// declaring the variable to store the number
let sum = 0;

//creating for loop
for (let i = 0; i<arr.length ; i++) {
    sum = sum + arr [i]    // adding each element
}
// printing final value
console.log("Value is", sum);


