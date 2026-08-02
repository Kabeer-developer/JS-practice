let arr = [1,2,3,4,5,6,7];

// forEach
arr.forEach(a=> console.log(a));
// map
arr.map(a=> console.log(a*2));
// reduce
const reduce = arr.reduce((a,b)=> a+b,0);
//filter
const filtered = arr.filter(a=> a>3);

console.log(filtered,reduce);
