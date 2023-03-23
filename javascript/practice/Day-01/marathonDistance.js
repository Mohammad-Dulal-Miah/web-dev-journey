const marathonDistance = (d) => {

   const distanceArray = d.map(distancePoint => Math.abs(distancePoint));

   const totalDistance = distanceArray.reduce((init, distance) => init + distance, 0);

   return totalDistance === 25;


}


const result = marathonDistance([-6, 15, 4]);
console.log(result);