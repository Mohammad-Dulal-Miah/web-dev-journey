function removeFirstLast(str) {
	
    if(str.length > 2){
        return str.substring(1,str.length-1);
    }

    return str;
}


console.log(removeFirstLast('lo'));