function millionsRounding(arr) {
	
   const res = arr.map(values => {

      let population = values[1];
      const name = values[0];

      if(population < 500000){

         population = 0;
      }
      else{
         const len = (''+population).length;
         population = Math.pow(10,len);
         console.log(population);
      }

      return [name , population];
   });
   //console.log(res);
}

millionsRounding([
  ["Nice", 942208],
  ["Abu Dhabi", 1482816],
  ["Naples", 2186853],
  ["Vatican City", 572]
])