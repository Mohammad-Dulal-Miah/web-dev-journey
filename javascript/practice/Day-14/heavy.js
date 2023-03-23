function weight(r, h) {
	
    const w = ((Math.PI*Math.pow(r,2)*h)/1000);
    
    return parseFloat(w.toFixed(2));

}

const res  = weight(4,10);
console.log(typeof(res));