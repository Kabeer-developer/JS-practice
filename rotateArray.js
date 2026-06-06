let arr = [1,2,3,4,5];
let result=[];
let k=2;

for(let i=0;i<arr.length;i++){
    result[(i+k)%arr.length] = arr[i];
}
console.log(result);