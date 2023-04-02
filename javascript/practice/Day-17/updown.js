function evenOddTransform(arr, n) {
	
    for(let i = 1 ; i<=n ; i++){

        arr = arr.map(value => (value%2 === 0)? value -2 : value+2);
        
    }

    return arr;

}

const res = evenOddTransform([3, 4, 9], 3);
console.log(res);