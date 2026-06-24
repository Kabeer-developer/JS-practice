const promiseAll = (promises)=> {
   return new Promise((resolve,reject)=> {
    let result = []
    let count =0
    promises.forEach((p,i) => {
        Promise.resolve(p)
        .then((res)=> {
            result[i] = res
            count++
            if(promises.length == count) return resolve(result);
        })
        .catch((err)=> console.log(err));
    });
   })
}

const p1 = Promise.resolve(10);
const p2 = new Promise(res => setTimeout(() => res(20), 2000));
const p3 = 30; 

promiseAll([p1, p2, p3])
    .then(result => console.log(result))
    .catch(err => console.log(err));