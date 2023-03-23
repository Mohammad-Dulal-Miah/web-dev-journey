function makeRug(m, n, s){
	
    const arr = [];
    if(s === undefined){
        s = '#';
    }
   
    for(let i = 0; i<m; i++){

        const string = s.repeat(n);
        arr.push(string);
    }

   return arr;

}

makeRug(3, 5) ;