let obj = {
    name: "suraj",
    age: 21,
    weight: 65,
    height: "5.3ft",
    greet: function(){
        console.log("hello jii keise ho saare");
    }
};

console.log(obj)
obj.greet()
let obj2 = obj;
console.log(typeof(obj))

for(let key in obj) {           //For-In Method
    console.log(key, " ", obj[key]);
}