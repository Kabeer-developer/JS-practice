let arr = [1,2,3,5,6,4,8];

let expectedSum ,currentSum;
let n = arr.length+1;
expectedSum = (n*(n+1)/2);
currentSum = arr.reduce((a,b)=> a+b,0)
const missing = expectedSum-currentSum;
console.log(missing);