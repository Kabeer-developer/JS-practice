// perfect number is a positive integer that is exactly equal to its divisors
// example 6 divisors 1,2,3 (1+2+3)=6

let n = 6;
let sum =0;
for(let i=1;i<=Math.floor(n/2);i++){
    if(n%i==0){
        sum+= i;
    }
}
if(sum==n){
    console.log("Perfect Number")
} else {
    console.log("Not a Perfect Number")
}
