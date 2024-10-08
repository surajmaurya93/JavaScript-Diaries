// Error handling in JavaScript plays an important role to make the application stable. Structures such as try-catch blocks, throw statement and finally block are used to deal with unexpected situations and ensure that the application runs correctly.

// types:- compile time error, run time error

//compile time error:- (syntax error)
// console.log(1;

//runtime time error:- (reference error)
// console.log(x);

// if nothing any error in our pragram then try block completely run and the go ouside the block. catch block is not work

//try block
try{
    console.log("try block start here");
    //(error --> reference error)
    console.log(x);
    console.log("try block ends here");
    //code
    //code
}
//catch block
catch(err){
    //error ke saath kya karna chahte hai
    //retry logic //fallback machanism //logging
    //custom error
    console.log("I am inside the catch block");
    // console.log("your error is here:", err);
}
//finally block 
finally{
    console.log("i am run everytime either any error or not, as i am finally block");
}
// create a custom error
try{
    //refrence error
    console.log(x);
}
catch{
    throw new Error("Bhai Pahle Value Declare karo phir print karwao")
}

// let errorCode = 100;
// if(errorCode == 100){
//     throw new Error("invalid Json")
// }