function same(a1, a2) {
    
   const a =  new Set(a1)
   const b = new Set(a2);

   return a.size === b.size;
}


console.log(same([1, 3, 4, 4, 4], [2, 5, 7]))