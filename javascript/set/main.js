const numbers = [3,4,5,6,3,5,6];


//create a set new Set constructor and pass numbers array
const num = new Set(numbers);

console.log(num);


//add value in set
num.add(78);

//delete value from set
num.delete(6);

//check value is found or not
if(num.has(99)){
   console.log('I am here dude')
}


//work as a loop it is forEach loop
num.forEach(number => console.log(number))

console.log('Size of set: '+ num.size)