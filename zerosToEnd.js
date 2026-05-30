let arr = [1,2,0,3,4,0,5,6,0,7,6];
let result=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        result.push(arr[i]);
    }
}
let zeros = arr.length-result.length;
for(let i=0;i<zeros;i++){
    result.push(0)
}
console.log(result);