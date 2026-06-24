
function once(fn){
    let called = true;
    return function(...args){
        if(called){
        called = false;
        return fn(...args);
}
    }
}

let run = once(()=> console.log("ji"));

run();
run();