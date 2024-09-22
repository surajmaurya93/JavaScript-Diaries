     //If- Else Condition

let age = 19                          
if(age >= 18){                             //If- Else Condition
    console.log("can vote");
}
else{
    console.log("cannot vote");
}

let number = 15;

if(number == 1){
    console.log("A");
}

else if(number == 2){
    console.log("B");
}

else if(number == 3){
    console.log("C");
}

else if(number == 4){
    console.log("D");
}

else if(number == 5){
    console.log("E");
}

else{
    console.log("F")
}


     //Nested If-else condition


let number1 = 3
let age1 = 48
if(number1 == 1){
    console.log("A");
    }
    
    else if(number1 == 2){
        console.log("B");
    }

    else if(number1 == 3){
        if(age>18){                        
            console.log("i can vote");
        }
        console.log("C");
    }


    //Switch Statement

let num = 4;

switch(num){                                     
    case 1:console.log("A")
    break;
    case 2:console.log("B")
    break;
    case 3:console.log("C")
    break;
    case 4:console.log("D")
    break;
    case 5:console.log("E")
    break;
    case 6:console.log("F")
    break;
    default:console.log("G")
}