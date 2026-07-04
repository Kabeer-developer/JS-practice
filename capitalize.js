//Capitalize first letter of a string 
let name = "kabeer"
let result = name.charAt(0).toUpperCase()+name.slice(1);
console.log(result);

// Capitalize first letter of each word

let string = "hello my name is kabeer";
let newString = string.split(" ");
let result1="";
for(let str of newString){
    let temp = str.charAt(0).toUpperCase()+str.slice(1);
    result1 += temp+" ";
}
console.log(result1.trim());