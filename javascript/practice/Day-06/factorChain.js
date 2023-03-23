function factorChain(arr) {

    let res = true;
    for(let i=1 ; i<arr.length ; i++){

        if(arr[i] % arr[i-1] !== 0){
            res = false;
            break;
        }
    }

    return res;
}


const res = factorChain([2, 4, 6, 7, 12]);
console.log(res);