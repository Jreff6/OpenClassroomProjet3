function init(){
    console.log("Starting");
  
    fetch('http://localhost:5678/api/works')
    .then(response =>(response.json()))
    .then(data => sendData(data));
};
init();