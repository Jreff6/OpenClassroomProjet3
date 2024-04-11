
let userInfo = [];

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  userInfo = {
    "email" : email.value,
    "password" : password.value
  }
connect();

  console.log(userInfo);
});


//function checkInput({}})

async function connect(){
  console.log("trying to connect");

  await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then(response => response.json())
  .then((data) =>{
      if ( data && data.token) {
        localStorage.setItem("token", data.token)
        window.location.href = './index.html';
      } else {
        console.log('Erreur dans les identifiants')
        
      }
  })
  .catch(error =>{
    console.error('Erreur lors de la connexion')
  })
};