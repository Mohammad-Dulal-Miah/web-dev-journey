function reverseArr(num) {
	
    const number = ''+num;
    const numArr = number.split('').map(value => parseInt(value)).reverse();
    
    return numArr;
}

reverseArr(45678);