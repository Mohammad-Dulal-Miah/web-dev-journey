function subset(arr1, arr2) {

   let unique = [];

   for(let number of arr1){
     
      if(unique.includes(number) !== true){
         unique.push(number)
      }
   }

  return unique.every(value => arr2.includes(value));

}

const res = subset([1, 3, 10], [10, 8, 8, 8]);
console.log(res);