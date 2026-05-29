//Prime
function checkPrime(n) {
    let isPrime = true;
    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    } 
    if(isPrime){
       console.log(n)
    }
    
}
// checkPrime(4)

//Prime upto N
// let n = 11;
// for(let i=2;i<=n;i++){
//     checkPrime(i);
// }

//Prime between n1 and n2
let n1=10;
let n2=20;
for(let i=n1;i<=n2;i++){
    checkPrime(i);
}
