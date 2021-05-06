function fetchUser(){
    setTimeout(() => {
      return "User fetched!";  
    }, 3000);  
   }



   
function display(){
     const promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            const user=fetchUser();
            return user;      
        }, 5000); 
     });
  }


  promise.then(user=>{
   console.log(user);   
  });
  
  