let array = [1,2,4,3,7,6,5]
let max = array[0];

for(let i=0; i<array.length;i++){
    if(array[i]>max){
        max = array[i];
    }
}
console.log(max)