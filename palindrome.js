function checkPalindrome(str){
    isPalindrome = true;
    let n = str.length;
    for(let i=0;i<=Math.floor(n/2);i++){
        if(str[i]!=str[n-1-i]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

console.log(checkPalindrome("kabeer"));
console.log(checkPalindrome("madam"));