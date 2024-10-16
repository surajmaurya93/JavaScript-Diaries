
//****** Synchoronous Code ****** 

// let firstPromise = new Promise( (resolve, reject) => {
//     console.log("Suraj Maurya");
//     // resolve(1001);
//     reject(new Error("Internal Server Error"));
// });


// let firstPromise = new Promise( (resolve, reject) => {

// setTimeout(function sayMyName(){
//     console.log("My Name is Suraj Maurya");
// }, 15000)
// // return 1;
// resolve(1)
// });


let Promise1 = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("promise fulfilled")
    }
    else{
        // reject("promise rejected")
        reject("Internal Server Error")
    }
})

// ***** Chaining Promise ***** 
// Use Multiple Then Blocks

Promise1.then((massage) => {
    console.log("First Massage: " + massage);
    return "Promise Fulfilled Second Massage";
}).then((massage) => {
    console.log("Second Massage: "  + massage);
    return "Promise Fulfilled Third Massage";
}).then((massage) => {
    console.log("Thirst Massage: " + massage);
}).catch((error) => {
    console.log("Your Error Is: " + error);
}).finally((massage) => {
    console.log("Finally Keyword Is Always Executed Either Is Run Successfully Or Not");
})

// console.log(Promise1)

// Promise1.then((massage) => {
//     console.log("Then Ka Massage is: " + massage);
// }).catch((error) => {
//     console.log("Error: " + error);
// })


// let Promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })

// let Promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Second");
// })

// let Promise4 = new Promise((resolve, reject) => {
//     setTimeout(reject, 5000, "Third");
// })

// //if any promise fail the new promise is also a failed
// Promise.all([Promise4, Promise3, Promise2])
// .then((values) => {
//     console.log(values);
// })
// .catch((error) => {
//     console.log("error is: " + error);
// })
