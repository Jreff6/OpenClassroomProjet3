let projets = [];
let categories = [];


async function init(){
    console.log("Starting");
  
    await fetch('http://localhost:5678/api/works')
    .then((response) =>(response.json()))
    .then((data) => (projets = data));
};
init();



function genererProjet(donneesProjets){
      console.log(donneesProjets);
      document.querySelector(".gallery").innerHTML = "";
      for (let i = 0; i < donneesProjets.length; i++) {
          {
                  
              const figure = donneesProjets[i];
              
              const sectionFiches = document.querySelector(".gallery");
              const pieceElement = document.createElement("figure"); 
              const imageElement = document.createElement("img");
              imageElement.src = figure.imageUrl;
              const nomElement = document.createElement("figcaption");
              nomElement.innerText = figure.title;
              
            
              sectionFiches.appendChild(pieceElement);
              pieceElement.appendChild(imageElement);
              pieceElement.appendChild(nomElement);
                     
          }
      }
};

window.addEventListener("load", ()=>{
  genererProjet(projets)
})

async function GetCategory(){

  await fetch('http://localhost:5678/api/categories')
  .then((response) =>(response.json()))
  .then((data) => (categories = data))
}
GetCategory();

  function genererCategories(categories){
    console.log(categories);
    document.querySelector(".category").innerHTML = "";
      for (let i = 0; i < donneesCategory.length; i++) {
          {    
              const figure = donneesCategory[i];        
              const sectionCategory = document.querySelector(".category");
              const categoryElement = document.createElement("button");
              buttonElement.innerText = figure.name;             
            
              sectionCategory.appendChild(categoryElement);
              buttonElement.appendChild(categoryElement);
          } 
  }
}
window.addEventListener("load", ()=>{
  genererCategories(categories)
})

