const powerOfTwo = (num) =>{

   const ans = Math.log2(Math.abs(num));

   return Number.isInteger(ans)

}

const res = powerOfTwo(-7);
console.log(res);