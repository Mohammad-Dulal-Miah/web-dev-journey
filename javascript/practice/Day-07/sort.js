function sortIt(arr) {
	

    for(let i = 0; i<arr.length-1 ; i++){

        for(let j = 0; j<arr.length-1-i ; j++){

            let value1 , value2;

            value1 = Array.isArray(arr[j])? arr[j][0] : arr[j];
            value2 = Array.isArray(arr[j+1]) ? arr[j+1][0]: arr[j+1];

            if(value1 > value2){

                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }

    return arr;
}

sortIt([[3],5,[2],4,3,2,[5]]) ;