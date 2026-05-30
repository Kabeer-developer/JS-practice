let arr1 = [1,2,3,4,5,5,4,3], arr2 = [6,7,8,9,10];
let result;

result =[...new Set([...arr1,...arr2])];
console.log(result);