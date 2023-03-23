function sortDescending(num) {
	
    const numberStr = ''+num;
    const number = numberStr.split('').map(num => parseInt(num)).sort().reverse().join('');

    return parseInt(number);

}

const res = sortDescending(4561);
console.log(res);