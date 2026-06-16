let arr = [1,2,3,5,6,4,8];

let expSum , curSum =0;

let n = arr.length+1;

curSum = arr.reduce((a,b)=> a+b,0);
expSum = (n*(n+1))/2;
let missingNum = expSum-curSum;
console.log(missingNum);