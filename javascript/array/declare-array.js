const array = [56, 67, 90 ,67];
console.log(array);


//access the particular index
const particularIndexValue = array[array.length - 1];
console.log(particularIndexValue);


//push method add value in the end of the array
array.push(89);
console.log(array);

/*Unshift()
This method add value top of the array
  -- this is opposite of push method.
*/
array.unshift(9);
console.log(array);
