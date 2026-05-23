let arr = [1,2,3,5,4];
let sorted = true;
for(let i=0;i<arr.length-1;i++){
    if(arr[i]>arr[i+1]){
        sorted = false;
        break;
    }  
}
console.log(sorted)