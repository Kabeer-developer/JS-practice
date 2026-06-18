function bubbleSort(arr){
    let n = arr.length-1;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let array = [5,4,3,6,7,2,21];
console.log(bubbleSort(array));
console.log(array.sort((a,b)=> a-b));
// second largest
let sLargest = bubbleSort(array);
let sLen = sLargest.length;
console.log(sLargest[sLen-2]);
