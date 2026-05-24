let word = "apple";
let freq = {}

for (let item of word){
    freq[item] = (freq[item] || 0)+1;
}
console.log(freq)