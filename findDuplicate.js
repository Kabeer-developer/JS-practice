function Duplicate(array){
    let seen = new Set();
    let duplicate = new Set();

    for(let item of array){
        if(seen.has(item)){
            duplicate.add(item)
        } else {
            seen.add(item)
        }
    }
    return [...duplicate]
    
}

console.log(Duplicate([1,2,3,4,3,2,4,2,1,5,6]))