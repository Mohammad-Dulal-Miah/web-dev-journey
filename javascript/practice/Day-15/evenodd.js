function oneOddOneEven(n) {
	
    let con_1 = false;
    let con_2 = false;

    const number = ''+n;
    const numArr = number.split('').map(value => parseInt(value));

    numArr.map(value => {

        if(value%2 == 0){
            con_1 = true;
        }
        else{
            con_2 = true;
        }
    })

    return con_1 && con_2;
}

console.log(oneOddOneEven(22));