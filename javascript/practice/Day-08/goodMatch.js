function isGoodMatch(arr) {
	
    let sum = 0 ;
    const newSumArr = [];
    if(arr.length % 2 !== 0){

        return 'bad match';
    }

    for(let i = 0 ; i<arr.length ; i += 2){

        sum = arr[i] + arr[i+1];
        newSumArr.push(sum);
        sum = 0;

    }

    return newSumArr;
    
}

isGoodMatch([5, 7, 9, -1, 4, 2, 1])