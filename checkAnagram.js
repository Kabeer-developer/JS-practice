let str1 = "dam";
let str2 = "mad";

function checkAnagram(str1,str2){
    isAnagram = false;
    if(str1.split("").sort().join()===str2.split("").sort().join()){
        isAnagram =true;
    }
    return isAnagram;
}

console.log(checkAnagram(str1,str2));
