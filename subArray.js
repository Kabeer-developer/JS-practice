//All SubArrays
let array = [1,2,3,4,5];
console.log("All Sub Arrays")
for(let i=0;i<array.length;i++){
    for(let j=i;j<array.length;j++){
        console.log(array.slice(i,j+1));
    }
}

//subArray of specific size
console.log("Sub Array of size K")
let k=3
for(let i=0;i<=array.length-k;i++){
    console.log(array.slice(i,i+k));
}

// Array pairs whose sum is K
console.log("Array Pairs whose sum is K")

let target = 7;
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]+array[j]===target){
            console.log([array[i],array[j]]);
        }
    }
}