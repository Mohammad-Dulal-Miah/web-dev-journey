function transformUpvotes(str) {
	
      const newArr = [];
      const arr =  str.split(' ');

      for(let data of arr){

        if(data.includes('k')){
            
            let res = parseFloat(data.slice(0,data.length-1))*1000;
            newArr.push(res);
       
        }
        else{
            newArr.push(parseFloat(data));
        }
      }

      return newArr;
}

const res = transformUpvotes("5.5k 8.9k 32");
console.log(res);