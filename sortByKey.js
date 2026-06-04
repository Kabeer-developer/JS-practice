let object = [{name : "kabeer",age:20},{name:"aditi",age:18},{name:"advait",age:14}];
let ageSort;
let strSort;

ageSort = object.sort((a,b)=> a.age-b.age);
console.log(ageSort);

strSort = object.sort((a,b)=> a.name.localeCompare(b.name));
console.log(strSort);