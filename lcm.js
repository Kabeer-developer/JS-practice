console.log("GCD/HCF");
function gcd(a, b) {
  let min = a > b ? b : a;
  for (let i = min; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return i;
    }
  }
}
let a = 10,b=20;
let lcm = (a*b)/gcd(a,b);
console.log(lcm);