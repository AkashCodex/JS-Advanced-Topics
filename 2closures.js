//a called
//x->b function returned
//x()->prints value 10...??

function a(){
 function b(){
   let i=10;  
  console.log(i);
 }
 return b;
}
let x=a();
console.log(x);
x();
