//using callback to handle this issue
console.log("Start");

function login(email,password,callback){
  setTimeout(() => {
  callback ({email,password});     
  }, 2000);
}

function getmovies(movies,callback){
 setTimeout(() => {
   callback(movies);
 }, 5000); 
}



let user=login("ak@criwnstack.com","1234",user=>{
    console.log(user);
});

let movies=getmovies("Avatar",movies=>{
  console.log(movies); 
});


console.log("End");
