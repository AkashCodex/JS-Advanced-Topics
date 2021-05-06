//resolve this issue using callbacks
function fetchUser(callback){ 
    setTimeout(() => {
      callbacks("User Fetched!");
    }
   , 3000);  
  }

  function display(callback){
    try {
    const user=fetchUser(callback);
    callbacks(user);  
    } catch (error) {
      console.log("Users not fetched!");  
    }  
  }
  
  let getuser=display(callbacks);
  console.log(getuser);
  
  
  
  
  