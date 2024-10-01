////global scope
//var,let,const all keyword run in globel scope
var age = 25;

console.log(age);

{
console.log(age);
}

if(true){
    console.log(age)
}

for(let i=0; i<2; i++) {
    console.log(age);
}

function sayHello(){
    console.log("hii my name is suraj maurya my age is:",age);
}
sayHello()



////Function Scope

// console.log(fullName);       //throw error
function sayHelllo() {
    var fullName = "Earth";             //var,let,const all keyword is only access in the function scope not access outside of the function.
    console.log("Hello Dunia ", fullName);
}
// console.log(fullName);       //throw error because we access variable outside the function
sayHelllo();




////Block Scope
// var case
// console.log(height)        //undefined beacause in var keyword hoisting only declaration shift on the top not value.
{
    var height = 610;
    console.log(height)
}
// console.log(height)


////let case
// console.log(myAge)          //show error bacause variable hoisting in only run with var keyword not let&Const keyword.
{
    let myAge = 21;
    console.log(myAge)
}
// console.log(myAge)          //show error bacause let keyword in block scope. run only in the block of code


////const case
// console.log(myweight)       //show error bacause variable hoisting in only run with var keyword not let&Const keyword.
{
    const myweight = 100;
    console.log(myweight)
}
// console.log(myweight)        //show error bacause const keyword in block scope. run only in the block of code



////Temporal Dead Zone 

// console.log(marks);       //start
// console.log("suraj");
// console.log("maurya");
// console.log(18);
// console.log(1);
const marks = 100;        //end    
console.log(marks);
//where we write the start to end. say that temporal dead zone. from start to end nothing to run.