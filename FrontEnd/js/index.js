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


async function getCategories() {
  try {
    const response = await fetch('http://localhost:5678/api/categories');
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des catégories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories :', error);
    return [];
  }
}

function createCategoryButtons(categories) {
  const categoryContainer = document.querySelector('.category');

  categoryContainer.innerHTML = '';

const allButton = document.createElement('button');
allButton.id = 0;
allButton.innerText = 'Tous';
allButton.classList.add('category-button');
categoryContainer.appendChild(allButton);
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.innerText = category.name;
    button.classList.add('category-button');
    categoryContainer.appendChild(button);
  });
}

async function catCreate() {
  const categories = await getCategories();
  createCategoryButtons(categories);
}
window.addEventListener("load", catCreate);
console.log(categories)

const filteredProjects = [];

const categoryButtons = document.querySelectorAll('.category-button');

addEventListener('click', () => {
  console.log('filtering')
  const clickedCat = categories.id;
  const projetsId = projets.id;
  const projetsFiltres = projets.filter(projetsId === clickedCat);
  
  genererProjet(projetsFiltres);
});