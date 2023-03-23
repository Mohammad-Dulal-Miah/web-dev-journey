function chatroomStatus(users) {

   const sizeOfArray = users.length;

   if(sizeOfArray === 0){
      return "no one online";
   }
   else{
      if(sizeOfArray === 1){

         return `${users[0]} online`
      }
      else if(sizeOfArray === 2){
         return `${users[0]} and ${users[1]} online`
      }
      else{

         return `${users[0]}, ${users[1]} and ${sizeOfArray-2} more online`
      }
   }
}
const res = chatroomStatus(["s234f", "mailbox2", "Dulal"]);
console.log(res);