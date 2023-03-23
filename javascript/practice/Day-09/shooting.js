function rogerShots(arr) {
	
    const newArr = arr.filter(str => {

        if(str === 'Bang!' || str === 'BangBang!'){
            return str;
        }
    });

    return newArr.length * .5;
}


const res = rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]);
console.log(res);