let word = "heLLo";
let result = "";

for(let w of word){
    if(w === w.toUpperCase()){
        result += w.toLowerCase();
    } else {
       result += w.toUpperCase();
    }
}
console.log(result)