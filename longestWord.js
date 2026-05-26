let string = "hello my name is kabeer"
let longest = ""
let words = string.split(" ");
console.log(words)
for (let word of words){
    if (word.length >longest.length){
        longest = word
    }
}
console.log(longest);