async function handleRequest(){
  const response=await fetch('https://api.github.com/users');
  return response;  
}

let v=handleRequest();
console.log(v);


