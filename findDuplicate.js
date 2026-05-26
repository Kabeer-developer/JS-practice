function Duplicate(array){
    let seen = new Set();
    let dupliate = new Set();

    for(let a of array){
        if(seen.has(a)){
            dupliate.add(a);
        } else {
            seen.add(a);
        }
    }
    return[...dupliate];
}

console.log(Duplicate([1,2,3,4,3,2,4,2,1,5,6]))