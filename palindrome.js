function checkPalindrome(str){
    isPalindrome = true;
    let n = str.length;
    for(let i=0;i<=Math.ceil(n/2);i++){
        if(str[i]!=str[n-1-i]){
            isPalindrome=false;
            break;
        }
    }
    return isPalindrome;
}

console.log(checkPalindrome("Hello"));