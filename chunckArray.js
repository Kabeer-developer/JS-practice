let arr = [1,2,3,4,5,6,7,8,9];
let size = 2;

let result = [];
for(let i=0;i<=arr.length-size;i+=size){
    let temp = [];
    for(let j=i;j<i+size;j++){
        temp.push(arr[j]);
    }
    result.push(temp);
    console.log(temp);
}
console.log(result);
