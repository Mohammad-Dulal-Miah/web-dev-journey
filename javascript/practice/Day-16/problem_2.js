function fizzBuzz(number) {
	
    const arr = [];

    for(let i = 1; i<= number ; i++){

        if(i%3 === 0){
            if(i%5 === 0){
                arr.push("FizzBuzz")
            }
            else{
                arr.push("Fizz");
            }
        }
        else if(i%5 === 0){
            arr.push('Buzz');
        }
        else{
            arr.push(i);
        }
    }

    return arr;
}

fizzBuzz(15);