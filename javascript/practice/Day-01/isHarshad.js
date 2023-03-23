const isHarshad = (num) =>{

   let digitNumber = 0;
   let number = num;

   while(num !== 0){

      let rem = num%10;
      digitNumber += rem;
      num = parseInt(num/10);
   }
  
   return Number.isInteger(number/digitNumber);
}


isHarshad(209);