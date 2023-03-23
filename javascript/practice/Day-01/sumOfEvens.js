const sumOfEvens = (arr) => {

   const evenArray = arr.map(innerArr => innerArr.filter(value => value % 2 === 0));
   let sum = 0;

   for (let i = 0; i < evenArray.length; i++) {

      const top = evenArray[i]


      for (let j = 0; j < top.length; j++) {

          sum = sum + top[j];

      }
   }
return sum;

}

sumOfEvens([
   [42, 9],
   [16, 8]
])