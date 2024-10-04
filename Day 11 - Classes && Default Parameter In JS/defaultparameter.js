// parameter is a where we can store data.
// argument is value which is assign in parameters.

function sayName(myName = "prabhu deva"){
    console.log("my name is:", myName);
}

sayName("Suraj");


function sayName1(fName, lName){
    console.log("my name is:", fName, lName);
}

sayName1("Suraj", "Maurya");


function sayName2(fName = "maurya", lName = "Kiran"){
    console.log("my name is:", fName, lName);
}

sayName2("Suraj");


function sayName3(fName = "kiran", lName = fName.toUpperCase()){        //depends on first parameter
    console.log("my name is:", fName, lName);
}

sayName3("Suraj");


function solve(value = 24){
    console.log("Hello Jii", value);
}

solve("suraj");


function solve1(value = {age:21,wt:65,ht:5.11}){            //insert object place of default value
    console.log("Hello Jii", value);
}

solve1();           


function solve2(value = [1,3,5,6,"suraj","kiran","sumitra"]){            //insert Array place of default value
    console.log("Hello Jii", value);
}

solve2();  


function solve3(value = "rahul"){   
    console.log("Hello Jii --> ", value);
}

solve3(null);           //Null case me null print hoga

function solve4(value = "rahul"){   
    console.log("Hello Jii --> ", value);
}

solve4(undefined);       //undefined case me default value print hogi


function getAge(){
    return 21;
}

function utility(name = "Suraj", age = getAge()){
    console.log(name,age)
}

utility();