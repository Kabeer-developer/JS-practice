// find duplicate or remove duplicate

function removeDup(arr){
    let seen = new Set();// [...duplicate] to print duplicate
    let duplicate = new Set();

    for(let a of arr){
        if(seen.has(a)){
            duplicate.add(a);
        } else {
            seen.add(a);
        }
    }
    return [...duplicate];
}
console.log(removeDup([1,2,3,4,5,4,3,2]));
let array = [1,2,3,4,5,4,3,2];
let result = new Set(array);
console.log([...result]);