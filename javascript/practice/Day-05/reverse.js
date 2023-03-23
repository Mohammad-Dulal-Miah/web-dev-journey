function rangedReversal(arr, start, end) {
	
    const len = arr.length;
    let endUp = end;

    for(let i = 0 ; i<len; i++){

        if(i >= start && i<=endUp){

            const temp = arr[i];
            arr[i] = arr[endUp]
            arr[endUp] = temp;
            
            endUp--;
            
        }
    }
   
    return arr;
}

const res = rangedReversal([1, 2, 3, 4, 5, 6], 0, 4);
console.log(res);