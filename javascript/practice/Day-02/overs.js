const totalOvers = (nBalls) =>{

   let overs = parseInt(nBalls/6);
   let balls = nBalls - overs*6;

   return [parseFloat(`${overs}.${balls}`)]
}

console.log(totalOvers(5));
console.log(5/6)