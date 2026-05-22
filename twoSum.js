function twoSum(array,target){
    let map = {};
    for(let i=0;i<array.length;i++){
        let diff = target - arr[i]
        if(map[diff] !== undefined) {
            return [map[diff],i]
        }
        map[array[i]]=i
    }
}

const arr = [1,2,3,4,5,6,7,8,9]
const goal = 10
const result = twoSum(arr,goal);
console.log(result)
