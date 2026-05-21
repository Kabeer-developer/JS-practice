
let string = "hello";
let rev = "";

for(let i=string.length-1;i>=0;i--){
    rev+=string[i];
}
if(string==rev){
    console.log(`true ${rev}`);
} else {
    console.log(`false ${rev}`);
}

let n = 1234
let revN = 0;

while(n>0){
    let rem = n%10;
    revN = revN*10 + rem;
    n = Math.floor(n/10);
}
console.log(revN)
if(n==revN){
    console.log("Number is Palindrome")
} else {
    console.log("Not a Palindrome");
}