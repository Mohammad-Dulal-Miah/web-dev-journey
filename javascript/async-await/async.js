const goToMarket = () =>{

    console.log('I will go to market with my mom....');

    let i = 0;

    // while(i<1000000){
    //     i += 1;
    // }

    setTimeout(()=>{
        console.log('We are in setTimeout build in function')
    },4000);

    console.log('Finally , we reach the market');

}

console.log('Start the function ......');

goToMarket();