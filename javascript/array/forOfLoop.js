const names = ['Dulal' , 'Kasem' , 'Faruk' , 'Anicha' , 'Amma'];

for(let name of names){

   console.log(name);
}


names.forEach((name , index) => console.log(`position ${index} and value is ${name}`))