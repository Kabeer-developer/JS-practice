let arr1=[1,2,3,4];
let arr2=[5,6,7];

// let merged = [...arr1,...arr2];
// console.log(merged);

let merged = [];

for(let i=0;i<arr1.length;i++){
    merged.push(arr1[i]);
}
for(let j=0;j<arr2.length;j++){
    merged.push(arr2[j]);
}
console.log(merged);