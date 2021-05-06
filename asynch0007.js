
 function arrayresolve(){
    const pobj1 = new Promise( (resolve, reject) => {
        setTimeout( () =>{
            let roll_no = [1,2,4,5,6];
            //resolve(roll_no);
            reject(`while eror`);
        },2000);
    } );
   // promise consume
/* pobj1.then( (rollno)=>{     // if promise complete then simply resolve
    console.log(rollno);
 }).catch( (error) =>{
    console.log(error);
 })*/
 async function getdata(){
    try {
      const data=await pobj1; 
      console.log(data);
    } catch (error) {
        console.log("array not acess");
    } 
 }

 
 getdata();
}


arrayresolve();



