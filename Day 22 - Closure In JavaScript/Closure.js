// // Closure is a combination of function and its required Data.
// // Nested Function. 

// let name = "Annu Maurya";   // Accessible all place
// function outerFunction() {
//     {
//         let name = "Rahul";      // Accessible Only Inside The Own Block 
//     }
//     let name = "Suraj Maurya";   // let --> block scoped
//     function innerFunction() {
//         let name = "Kiran";     // Accessible Only Inside The Own Block
//         console.log(name);
//     }
//     innerFunction()
// }
// outerFunction()



// ******** Closure In JS ********
// Ek Function Ko Uske Required Data Ke Saath Bind Kar Diya Jata Hai
// Jo Bhi Data Ko Bind Kiya Gya Hai Uski Copy Nhi Bani Hai Us Data Ka Reference Share Hua Hai Us Reference Ke Dwara Hum Us Data Ko Access Karwa Paate Hai.

function outerFunction() {
    let name = "Suraj Maurya";
    function innerFunction() {
        console.log(name);
    }
    return innerFunction;
}
let inner = outerFunction();   //inner ke andar inner funtion ka reference stored ho gya
inner();