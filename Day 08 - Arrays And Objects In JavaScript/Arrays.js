//creation of Arrays
let arr = [1,2,3,4,5,6];
console.log(arr)
console.log(typeof(arr))
console.log(arr[4])

//array constructor 
let arr1 = new Array("suraj",100,true);
console.log(typeof(arr1));
console.log(arr1[2]);

arr1.push("ram");        //insert at end        

arr1.pop();             //remove from end

arr1.shift();           //remove from front

arr1.unshift("Suraj");   //insert at front

console.log(arr1);
arr1.push("Rahul");
arr1.push("Kiran");
arr1.push(500);
console.log(arr1);
console.log(arr1.slice(2,5));   //break array parts

console.log(arr1); 
arr1.splice(2,3,"Muskan");      //content change,either remove or insert

arr1.splice(1,0,"Sumitra");
console.log(arr1);


arr2 = [10,20,30,40];
arr2.map((number, index) => {       //map() creates a new array from calling a function for every array element.
    console.log(number*number, index);
})
// let AnsArray = arr2.map((number) => {
//     return number*number;
// })
// console.log(AnsArray)


let arr3 = [10,20,30,11,21,44,51];

let evenArray = arr3.filter((number) => {        //The filter() method creates a new array filled with elements that pass a test provided by a function.
    return number%2 != 0;
    // if(number%2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
});
console.log(evenArray)

let arr5 = [1,2,'love','kunal', null];

let ans = arr5.filter((value) => {
    if(typeof(value) == 'number') {
        return true;
    }
    else {
        return false;
    }
});
console.log(ans);


let arr6 = [10,20,30,40];

let ans6 = arr6.reduce((acc,curr)=> {       //Reduce() method returns a single value: the function's accumulated result.
    return acc + curr;
}, 0);

console.log(ans6);


let arr7 = [9,1,7,4,2,8];
arr7.sort();                    //The sort() method sorts the elements as strings in alphabetical and ascending order.
console.log(arr7);
arr7.sort((a, b) => (a > b ? -1 : 1))       //a
console.log(arr7);

let arr8 = [5,4,9,0,2,1];
// arr8.reverse();  
arr8.sort(function(a, b){return a-b});      //Acending Order 
console.log(arr8)        
arr8.sort((a, b) => (a > b ? -1 : 1))       //Decending Order 
console.log(arr8)
console.log(arr8.indexOf(1))


const arr9 = [5, 12, 8, 130, 44];
const found = arr9.find((element) => element === 12);       //Find() Method
console.log(found);


const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ];
  function Cherries(fruit) {
    return fruit.name === "cherries";
  }
  console.log(inventory.find(Cherries));
  // { name: 'cherries', quantity: 5 }


let arr10 = [10,20,30];

let length = arr10.length;
console.log("length: " , length);
  //tradiotional loop
// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

arr10.forEach((value, index) => {               //ForEach - Array Ki Har Ek Value Ke Saath Operation Kar Sakte Hai
    console.log("Number: ", value, " Index: ", index);
})


let arr11 = [10,20,30,40];
for(let value of arr11) {           //For OF Method
    console.log(value);
}

let fullName = "babbar"
for(let val of fullName) {
    console.log(val);
}


let arr12 = [10,20,30,40,50];

let getSum = (arr12) => {
    let sum = 0;
    arr12.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr12);
console.log(totalSum);