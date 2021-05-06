function a(){
   let x=10;
   function b(){
     console.log(x);  
   }
   x=20;       //values  changes      //return b;
  return b;                           //x=20; value not changes
}

let r=a();

r();