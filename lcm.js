// HCF/GCD
let a =8,b=12;
let min = a>b?b:a;
let gcd=0;
for(let i=1;i<=min;i++){
    if(a%i ==0 && b%i==0){
        if(i>gcd){
            gcd =i
        }
    }
}
console.log(gcd);

let lcm = (a*b)/gcd;
console.log(lcm)