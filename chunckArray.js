let array = [1,2,3,4,5,6,7,8];

function chunckArray(arr,size){
    let result = [];
    for(let i=0;i<arr.length;i+=size){
        result.push(arr.slice(i,i+size));
    }
    return result;
}

console.log(chunckArray(array,3));