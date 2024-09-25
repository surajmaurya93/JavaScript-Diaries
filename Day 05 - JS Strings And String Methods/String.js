/*

// A JavaScript string is zero or more characters written inside quotes.
//We can use single or double quotes:

let firstname = "love"
let lastname = 'maurya'

console.log(typeof(firstname))       // find string type
console.log(firstname)
console.log(lastname)


// when we use `Backtick Symbol` then all string print as it is

let self = `heyy, my name is suraj maurya.
i am currently pursuing bca.
i am from delhi.
i want to become a full stack web developer`

console.log(self)


// one more method to print String

let newName = (new String("Suraj Maurya"))
console.log(newName)

*/

let opt1 = "Suraj "      // Strint Concat Method
let opt2 = "Maurya"
ans = opt1 + opt2;
console.log(ans)

let string1 = "Mobile";
let string2 = "Charger";
let finalSentence = string1 + " and " + string2 + "!";
console.log(finalSentence);


let opt3 = "English"      // Concate Into Backtik Symbol Different Method
let opt4 = "Hindi"
let finalAns = `${opt3} ${opt4}`;
console.log(finalAns)


let hobbie = "Cricket "
console.log(hobbie.length)
console.log(hobbie.toUpperCase())     // Uppercase and Lowercase of string
console.log(hobbie.toLowerCase())


let str = 'Ananya'
console.log(str.substring(2))         // Substring method in js:find indexing and print string
console.log(str.substring(2,4))


let Sentence1 = "hey \\guys \\'keise' \\ho \\saare"
let words1 = Sentence1.split("\\")
console.log(words1)


let Sentence = "my name is suraj im from delhi"
let words = Sentence.split(" ");           // Spilit Method In String
console.log(words.join('-'))               // Join Method In String
console.log(words)