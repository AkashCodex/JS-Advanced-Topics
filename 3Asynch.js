console.log("Start");



function getuserdetails(email,password){
  return new Promise((resolve,reject)=>{
   setTimeout(() => {
     console.log("Now we have the data");  
     return resolve({email,password});
    // reject(new Error("User not logged in"));  
   }, 3000);
  });
}


let user=getuserdetails("ak.crwonstack.com",1234);
console.log(user);



console.log("End");