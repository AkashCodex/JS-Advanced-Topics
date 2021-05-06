 console.log("Start");


function sayhi(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve("Sayhi");
    }, 3000); 
  }); 
} 


async function sayhello(){
 let data=await sayhi();
 console.log(data);
 console.log("jshjhs");
}

sayhello();




   