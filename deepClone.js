const deepClone = (obj)=> {
    if (obj == null || typeof obj !== "object") return;

    if(Array.isArray(object)){
        return obj.map((item)=> deepClone(obj));
    }

    let result = {}

    for (let key in obj){
        result[key] = deepClone(obj[key]);
    }

    return result;
}

const object = {
    a : 10
}
const b =object;
const c = structuredClone(object);
c.a=200;
console.log(c.a);
b.a=300;
console.log(b.a);
const clone = deepClone(object);
clone.a = 100;
console.log(object.a);
console.log(clone.a);
