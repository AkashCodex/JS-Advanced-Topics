console.log("Start");



    function hello(){
       return new Promise((resolve,reject)=>{
         setTimeout(() => {
            resolve("SayHello");  
             }, 3000); 
       });
      }

    async function extrahello(){
      let data=await hello();
      console.log(data); 
      console.log("End");   
    }

    extrahello();

   