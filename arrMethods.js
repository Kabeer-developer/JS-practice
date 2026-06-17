let arr = [1,2,3,4,5,6,7];

// forEach
let ForEach = arr.forEach(a=> console.log(a));
// map
let mapping = arr.map(a=> console.log(a*2));
// filter
let filtering = arr.filter(a=> a%2==0);
//reduce
let sum = arr.reduce((a,b)=> a+b,0);

console.log(filtering,sum);