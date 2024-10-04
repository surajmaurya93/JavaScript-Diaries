//class is like a blueprint(planning)
//actual instance is a object(plan implement)
class human{
    // properties
    age;    //public
    #weight = 65;    //private   
    height = 5.11;
    name = "suraj"

// constructor:- A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.
    
    constructor(newAge, newheight, newweight){          
        this.age = newAge;
        this.height = newheight;
        this.#weight = newweight;
    }

    //behaivour
    walking(){
        console.log("i am walking")
    }

    running(){
        console.log("i am running")
    }

    get fetchwt(){              //getter method(private data access)
        return this.#weight;
    }

    // set modifywt(value){        //setter method(private data modify)
    //     this.#weight = value;
    // }
}

let obj = new human(25, 6.2, 160);
console.log(obj.fetchwt)
console.log(obj.age)


// console.log(obj.age)
// console.log(obj.height)

obj.walking()
obj.running()
console.log(obj.fetchwt)


