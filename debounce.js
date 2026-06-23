function debounce(fn,delay){
    let timer;
    return function(){
        clearTimeout(timer);
        timer = setTimeout(fn,delay);
    }
}

const sayHello = ()=> console.log("kabeer");

const debounceFunc = debounce(sayHello,1000);

debounceFunc();
debounceFunc();
debounceFunc();
debounceFunc();
console.log("Called 4 times");