// Reverse a String
let string = "hello world Kabeer";
let reverse = string.split("").reverse().join("");
console.log(reverse);

let rev=""
for(let i=string.length-1;i>=0;i--){
    rev+=string[i];
}
console.log(rev)

// Reverse Words in a String
let newString = string.split(" ");
let result = "";
for(let i=newString.length-1;i>=0;i--){
    result += newString[i]+" ";
}
console.log(result.trim());