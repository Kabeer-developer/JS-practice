let arr = [1,2,3,4,5];
let target = 4;

for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("Found at Index "+i);
        return
    }
}