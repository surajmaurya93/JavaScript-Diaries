// Arithmetic operator(1.Binary Operator)
let num1 = 10;
let num2 = 5;               
console.log(num1 + num2)
console.log(num1 - num2)                
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1**num2)

// Arithmetic operator(2.Unary Operator)
let x = 10;
let y = 4;

console.log(++x);          // Pre increment/decrement
console.log(--y);                      
console.log(x);      
console.log(y);      

console.log(x++);          // Post increment/decrement
console.log(y--);     
console.log(x);        
console.log(y);  

//Assignment Operator(= is a assignment operator)
let a = 10;
a = a + 5                          
a += 5
console.log(a)

let b = 10;
b = b - 7
b -= 7
console.log(b)

//comparison operator(only answer true and false)
console.log(10 > 5)
console.log(10 < 5)               
console.log(10 <= 5)
console.log(10 >= 5)
console.log("5" == 5)          //(loose equality = only value can match)
console.log("5" === 5)         //(strict equality = value and datatype both must be same if one operand in integer then should be 2nd operator also integer)
console.log("5" == 5)
console.log("5" !== 5)

//ternary operator.
let age = 24
let status1 = (age>18) ? "i can vote" : "i cannot vote";           
console.log(status1)

let age1 = 15
let status2 = (age1>18) ? "i can vote" : "i cannot vote";
console.log(status2)

//logical operator
let ans = (true && true && true);         //(AND Operator = if any condition false then answer false)
let ans1 = (true && false && true);                
let ans2 = (false || false || false);     //(OR Operator = if any condition is true then answer is true)
let ans3 = !(true);                       //(NOT Operator = if we use not operator then answer is opposite)
let ans4 = !(false);
console.log(ans);

console.log(false || "Suraj")           //working with non-boolean (if one condition is truthy then answer is true.)
console.log(false || 18)
console.log(true || "maurya")                  
console.log(false || 18 || 28 || 17)    //this line is short circuting means when check conditions whichever first condition is true will become true.


//Bitwise Operators
console.log(2 & 5);              // 2 and 5 ki bit value ko Add karke 0 ki value aati hai so that why answer is 0. 
console.log(2 | 5);              // 2 and 5 ki bit value ko Add karke 7 ki value aati hai so that why answer is 7.
console.log(~(0));               // if we use ~ operator then this flipped the binary value is convert 0 to 1, 1 to 0                       
console.log(2 ^ 2);              // if we use ^ operator then if both operands are same value then answer is 0.
console.log(10 >> 1);            // 10 ki binary value ek step backward ho jayengi then last me 0 add ho jayega.
console.log(10 << 1);            // 10 ki binary value ek step forward ho jayengi then last value remove ho jayegi.