const channels = [
   {
      name: "Dulal Miah",
      subscriber: 10000
   },
   {
      name: "Boro Mama",
      subscriber: 20000
   },
   {
      name: "Amma",
      subscriber: 1000000
   }
]


const res = channels.find(element => element.subscriber > 20000);
console.log(res);