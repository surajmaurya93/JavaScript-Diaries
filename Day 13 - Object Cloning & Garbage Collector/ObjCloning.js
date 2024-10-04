//Moslty spread Operator and assign method is used for object cloning...

let obj = {
    age:21,
    ht:5.11,
    wt:62,
};

console.log(obj)
obj.color = "white";       //Dynamic in nature because we can change thier state and definition in run time
console.log(obj);


// Cloning By Spread Operator 
let obj1 = {
    age:21,
    ht:5.11,
    wt:62,
};

// let dest = obj1;
let dest = {...obj1}

obj1.age = 90;          //check cloning is successful or not

console.log("obj1:",obj1);
console.log("dest:",dest);



//Cloning By Assign Method
let obj2 = {
    age:21,
    ht:5.11,
    wt:62,
};

let obj3 = {            //add more data in cloning
    value:101,
    name:"Suraj Maurya"
}

let dest1 = Object.assign({}, obj2, obj3)

obj2.age = 90;         //check cloning is successful or not

console.log("Obj2:", obj2);
console.log("dest1:",dest1);



//Cloning By Iteration Method
let obj4 = {
    age:20,
    ht:6,
    wt:70,
};

let dest3 = {};
//cloning using iteration metho(for-loop)
for(let key in obj4){
    let newKey = key;
    let newValue = obj4[key];
    //insert new key and value in dest and create a clone
    dest3[newKey] = newValue;
}

obj4.age = 90;

console.log("obj4:", obj4);
console.log("dest3:", dest3);



