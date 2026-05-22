let a =10,b=20,temp;
temp =a;
a=b;
b=temp;
console.log(a,b);

console.log([a,b]=[b,a]);

a=a+b
b=a-b
a=a-b
console.log(a,b);