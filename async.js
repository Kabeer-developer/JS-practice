function Wait(){
    return new Promise((resolve,reject)=> {
        resolve("Hello Kabeer");
    })
}

async function run(){
    const result = await Wait();
    console.log(result);
}
run();