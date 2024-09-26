
// function definition
function sayMyName(){               //function without parameter
    console.log("suraj maurya")
}

// function call
sayMyName();


function counting(){                //function with loop
    for(i=1; i<=10; i++)
        console.log(i)
}

counting();


function printNumber(num){              //function with single parameter
    console.log("print numbers is:", num)
}

printNumber(18)


function printAvg(num1, num2){           //Function double parameter value
    let avg = (num1 + num2)/2;
    console.log("Average:",avg)
}

printAvg(10, 20)


// return function
function addSum(a, b, c){
    let addSum = a + b + c;
    return addSum;
}

let sum = addSum(1,4,8)
console.log("Sum Of Sumber:", sum)


function sayMyName2(firstname, lastname){
    myname = firstname + " " + lastname;
    return myname;
    //unreachable Code
    let a = 10
    let b = 5
    let sum = a + b;
    console.log(sum)
}

meraNaam = sayMyName2("suraj",5)
console.log("fullname:", meraNaam);


function getmultiplication(a,b){            //multiply
    return a*b;
}
console.log(getmultiplication (5,5))


let multiple = function(a,b){               // without using function name
    return a*b;
}
let ans = multiple(7,3)
console.log(ans)


let squareNumber = function(num){
    // let answer = num*num;
    let answer = num**2;
    return answer;
}
let answer = squareNumber(7);
console.log(answer);


// practice

// function getExp(x,y){                //normal declaration
//     let answer1 = x**y;
//     return answer1;
// }
// let answer3 = getExp(2,10);
// console.log(answer3);


// let getExp = function(x,y){          //Function Expression
//     let answer1 = x**y;
//     return answer1;
// }
// let answer2 = getExp(2,10)
// console.log(answer2)


// let getExp = (x,y) => {              //Arrow Function
//     let answer1 = x**y;
//     return answer1;
// }
// let answer2 = getExp(2,10)
// console.log(answer2)