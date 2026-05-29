let word = "a b c d";
let result = "";
console.log(word.replace(/\s+/g,""));
for (let i=0;i<word.length;i++){
    if(word[i]!==" "){
        result += word[i]
    }
}
console.log(result);