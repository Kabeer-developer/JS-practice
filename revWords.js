let words = "hello world";
let reverse = words.split("").reverse().join("");
console.log(reverse);

let rev=""
for(let i=words.length-1;i>=0;i--){
    rev+=words[i];
}
console.log(rev)