function x(){
    var t=23;
    console.log("X callinmg");
    function y(){
        console.log("Y caliing");
        function z(){
         console.log("Z calling");
         console.log(t);         //closure means a function binds together it's lexical environment
        }
        z(); 
    }
    y();
}
x();
console.log(t);    //t not defined
