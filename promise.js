const wait = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve("Hello")
    },1000);
})
wait.then(m=> console.log(m));