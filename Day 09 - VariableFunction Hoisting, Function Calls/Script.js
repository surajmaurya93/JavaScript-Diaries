//Function Hoisting Ke Case Me Function automatic shift Ho Jayega top Pe Of thier scope With Value And Logics

{
//Simple Function
myName("Suraj Maurya")

function myName(finalname){         
    console.log(finalname)
}

}

//Expression Function
// sayHello()          //output:-Show ReferenceError
               
// let sayHello = function(){ 
//     console.log("hello jee keise ho saare")
// }


//Arrow Function
// sayHello()         //output:-Show ReferenceError

// let sayHello = () => { 
//      console.log("my name is suraj")
// }



// Variable Hoisting Ke Case Me Variable Shift To Hoga Top Pe But Only Declaration Hogi Value And Logic Nhi Hoga

console.log(age);        //output:- undefined
var age = 25;


// console.log(age1);    //output:-Show ReferenceError
// let age1 = 20;


// console.log(age2);     //output:-Show ReferenceError
// const age2 = 30;


//Class is a blueprint 
//object is actual instance



// const obj1 = new human();     //output:-Show ReferenceError
// class human {

// }


//Only variables And functions are Support hoisting

function greetMe(greet, fullName){
    console.log("hello", fullName);
    greet()          //Pass One Function Into Another Function
}


function greet(){
    console.log("Hey Guyss Good Morning")
}

greetMe(greet, "suraj")


function solve(){
    return function(number){       //one function return another function
        return number*number;
    }
}

let ans = solve(5);
let finalans = ans(10);
console.log(finalans);


const arr = [            //function stored in data structure (ARRAY)
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
    
];

let first = arr[2]
let ans5 = first(5,10);
console.log(ans5)



let obj = {               //function in objects
    age:21,
    wt:59,
    ht:5.11,
    greet:() => {
        console.log("hello world")
    }
};

console.log(obj.age)
console.log(obj.wt)
console.log(obj.ht)
obj.greet()



console.log(greetbyme)        //expression function

var greetbyme = function(){
    console.log("namaste duniya")
}

