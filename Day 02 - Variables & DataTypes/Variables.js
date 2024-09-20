// var age = 25;               //hum variable ko brackets ke bahar create karenge to hum program ke kahi pe bhi call kar sakte hai
                               //cannot support blocked scooped
// if(true) {
//     console.log(age);
// }

function solve(){
    var age = 25;
    console.log(age);      //function me hum ek bracket me variavble bnayenge to wo variable hum bracket ke bahar use nhi kar sakte.
}

solve();                           
// console.log(age);        //call function


// var x = 10;
// var x = 30;               //var me re-assignment is possible and re-defined also possible.



     //let keyword variable is a block scooped 


    // let a = 10;
    // console.log(a);          

    // {
    // let a = 10;              //jis block ke andar humne lat variable create kiya hai sirf ussi block ke andar let variable kaam karega uske bahar nhi
    // }
    // console.log(a);


    // let a = 10;
    // let a = 30;                //in let keyword not allow re-definitin


    let a = 10;
    a = 50;                  //allow Re-asignment using let hum baad me uski value change kar sakte hai.
    console.log(a)

    let b = 10;                //One Int One String Allow
    b = "suraj";             
    b = true;
//  b = null;                 // Run Output: null
     console.log(b)


    const c = 28;
    console.log(c);             //when i cearte variable using const keyword i can'not change anything, either its values, not allow re-definiton, re assignment

    // const a = 20;
    // console.log(a);

                
    
                /*
                variable naming convention:-
                1. should be number, _ , $
                2. should be no space.
                3. should be Camel Case, Pascal Case, Snake Case, Kebab Case.
                4. should be meaningfull.
                5. not use of reserved keyword.
                */
