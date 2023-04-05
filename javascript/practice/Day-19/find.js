function sevenBoom(arr) {
	
    if(arr.includes(0)){
       return  "Boom!";
    }
    else{

        arr = arr.map(num => ''+num);
        arr = arr.map(num => num.split(''));
        const con = arr.find(value => value.includes('7'));

        if(con === undefined){
            return "there is no 7 in the array";
        }

        return "Boom!";

    }

 
}

const res = sevenBoom([35, 4, 9, 39]);
console.log(res);