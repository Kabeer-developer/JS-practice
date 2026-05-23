//Capitalize first letter of a string 
let string = "hello"
let result = string[0].toUpperCase();
console.log(result)

// Capitalize first letter of each word

let sentence = "hello my name is kabeer";
let words = sentence.split(" ");
let op="";

// let name = "kabeer"
// let op = name[0].toUpperCase()+name.slice(1);
// console.log(op);

for(let word of words){
    let capitalize = word.charAt(0).toUpperCase()+word.slice(1);
    op += capitalize+" ";
}
console.log(op)