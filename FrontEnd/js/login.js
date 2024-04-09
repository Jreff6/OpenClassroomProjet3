


loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let userInfo = {
    "email" : email.value,
    "password" : password.value
  }
connect();

  console.log(userInfo);
});

async function connect (userInfo) {

  const apiURL ='http://localhost:5678/api/users/login'
  const options = {
    method : 'post',
    headers : {
      'content-Type' : 'application/json'
    },
    body: JSON.stringify(userInfo)
  };
  fetch(apiURL, options)
    .then( response => 
      {
        if (!response.ok){
          throw new Error('Erreur lors de la requête');
        }
      return response.json  
      })
console.log(reponse.token)
}


//localStorage.setItem("token", response.token);
//function checkInput({}})