let digits = 12365445;
let count =0;

while(digits>0){
    count++;
    digits = Math.floor(digits/10);
}
console.log(count)