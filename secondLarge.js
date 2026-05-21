function bubbleSort(array){
    let n = array.length-1;
    for(let i =0;i<n;i++){
        for(let j=0;j<n-i;j++){
            if(array[j]>array[j+1]){
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
let array = [6,5,4,3,2,1];
let sorted = bubbleSort(array)
console.log(sorted);
let result = sorted;
console.log(result[result.length-2])
