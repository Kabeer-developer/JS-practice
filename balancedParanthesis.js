function balanceParan(str){
    let isBalanced = true;
    let count =0;

    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=='('){
            count++;
        }
        if(str.charAt(i)==')'){
            count--;
        }
    }
      if(count !=0){
            isBalanced=false;
        }
        return isBalanced;
}

console.log(balanceParan("(()))("));
