function balanceParan(str){
    let count =0;
    let isBalanced = true;

    for(let ch of str){
        if(ch=="("){
            count++;
        } else if(ch==")"){
            count--;
        }
    }

    if(count !== 0){
        isBalanced=false;
    }
    return isBalanced;
}

console.log(balanceParan("(()))("));
