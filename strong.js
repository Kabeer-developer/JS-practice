// strong 145 = 1! + 4! + 5!
let n = 146;
let original = n;
let sum =0;


function factorial(n){
    let fact = 1;
    for(let i =n ; i>0;i--){
        fact *=i;
    }
    return(fact)
}
while(n>0){
   let digit = n%10;
    n =Math.floor(n/10);
    
    sum+= factorial(digit);
}
if(sum === original){
    console.log("Strong");
} else{
    console.log("Not Strong");
}
