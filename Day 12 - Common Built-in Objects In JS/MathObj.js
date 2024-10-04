console.log("Suraj");

console.log(Math.PI)


// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.max(20,50,100,39,62,21));
console.log(Math.min(20,50,100,39,62,29));


// Math.round(x) returns the nearest integer:
console.log(Math.round(4.7));
// console.log(Math.round(4.3));


// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(1.8));
// console.log(Math.floor(1.1));


// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(1.9));
// console.log(Math.ceil(1.1));


//Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-8))       
// console.log(Math.abs(4))


// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(10))          


// Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(2,5));


// // Math.trunc(x) returns the integer part of x:
// console.log(Math.trunc(x));


//give random value b/w 0 to 1
// console.log(Math.random());         
console.log(Math.floor((Math.random()*10) + 1));  //give random value b/w 1 to 10

const min = 10
const max = 20 

console.log(Math.floor(Math.random() * (max - min + 1)) + min);    //give random value b/w 10 to 20