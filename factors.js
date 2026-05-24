// factors of A 
// let n =10;
// for(let i=1; i<=n;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// factors of both A and B

// let a =9,b=6;
// let min = a>b?b:a;
// for(let i=1;i<=min;i++){
//     if(a%i ==0 && b%i==0){
//         console.log(i);
//     }
// }

//HCF/GCD
// let a =8,b=12;
// let min = a>b?b:a;
// let gcd=0;
// for(let i=1;i<=min;i++){
//     if(a%i ==0 && b%i==0){
//         if(i>gcd){
//             gcd =i
//         }
//     }
// }
// console.log(gcd);

// LCF
let a =8,b=12;
let min = a>b?b:a;
for(let i=2;i<=min;i++){
    if(a%i ==0 && b%i==0){
       console.log(i);
       break;
    }
}
