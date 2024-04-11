
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


//localStorage.setItem("token", response.token);
//function checkInput({}})

async function connect(){
  console.log("trying to connect");
  let logResponse = [];

  await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
  .then((response) => (response.json()))
  .then((data) => (logResponse = data))
  
};