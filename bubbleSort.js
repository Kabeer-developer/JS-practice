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

console.log(bubbleSort([4,5,3,2,6,7]));

// second largest
let sLargest = bubbleSort([4,5,3,2,6,7]);
let sLen = sLargest.length;
console.log(sLargest[sLen-2]);
