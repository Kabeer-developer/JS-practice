let array = [{name : "kabeer",dep:"cse"},
             {name : "rahul",dep:"ds"},
             {name : "murti",dep:"cse"},
             {name : "ram",dep:"ds"}]

function groupBy(arr,property){
    const result = {}

    for(let item of arr){
        const key = item[property];

        if(!result[key]){
            result[key] = []
        }

        result[key].push(item);
    }
    return result;
}

console.log(groupBy(array,"dep"));