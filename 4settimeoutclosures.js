
setTimeout(() => {
    console.log("Hello2");  
  }, 5000);
  
  


setTimeout(() => {
 console.log("hello1")   
}, 5000);



function a(){
    let i=1;
    setTimeout(() => {
     console.log(i);   
    }, 2000);
    console.log("I am first");
}
a();