let str1 = "mad"
// let str2 = "dam";
let str2 = "mab"
 if (str1.split("").sort().join("")===str2.split("").sort().join("")){
    console.log("Strings are Anagram");
 } else {
    console.log("Strings are not Anagram")
 }

