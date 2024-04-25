//const { id } = require("ethers");

let projets = [];
let categories = [];

// récupérer les projets via l'API
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
allButton.addEventListener('click' , () => {
  genererProjet(projets);
  console.log('filtre utilise tous')
});
categoryContainer.appendChild(allButton);


  categories.forEach((category) => {
    const button = document.createElement('button');
    button.innerText = category.name;
    button.classList.add('category-button');
    button.id = category.id;
    button.addEventListener('click', () => {
      const categoryId = parseInt(button.id);
      const filteredItems = projets.filter((element => element.category.id === categoryId));
      genererProjet(filteredItems);
    })
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

function filtrerListe(categoryId) {
  return liste.filter((element) => element.category.id === categoryId);
}

const categoryButtons = document.querySelectorAll('.category-button');


categoryButtons.forEach((categoryButtons) => {
  categoryButtons.addEventListener("click", function () {
    const categoryId = parseInt(button.getAttribute("id"));

    for (categoryId >=0;;) {
      const filteredItems = filtrerListe(categoryId);
      mettreAJourListe(filteredItems);
    }})})

    const loginButton = document.getElementById("btnLogin");

  loginButton.addEventListener("click", function() {
    window.location.href = "login.html";
  });

const token = localStorage.getItem('token');
const editDisplay = document.getElementById('editDisplay')
const filterDisplay = document.getElementById('filters')
const editButton = document.getElementById('editButton')
const editIcon = document.getElementById('editIcon')
const btnLogin = document.getElementById('btnLogin')
const btnLogout = document.getElementById('btnLogout')

async function editCheck(){
  if (token){
    editDisplay.style.display = 'block'
    btnLogin.style.display = 'none'
  } else {
    editDisplay.style.display = 'none' 
    editButton.style.display = 'none'
    editIcon.style.display = 'none'
    btnLogout.style.display = 'none'
  }
};

window.addEventListener("load", ()=>{
  editCheck();
})

document.addEventListener('DOMContentLoaded', function() {

  btnLogout.addEventListener('click', function() {

    localStorage.removeItem('token');
    
    window.location.reload();
  });
});

// gestion des modales

const editToggle = document.getElementById('editButton')
const CloseModalIcon = document.getElementById('close-modal')
const modal1 = document.getElementById('modal1')

async function openModale(e) {
  e.stopPropagation();
  modal1.style.display = 'flex';
  projectsModales();
}

async function closeModale(e) {
  e.stopPropagation
  modal1.style.display ='none'
}
editToggle.addEventListener('click', openModale)
CloseModalIcon.addEventListener('click', closeModale)

document.addEventListener("click", (e) => {
  const insideModale = document.getElementById('modal1');

  if (!insideModale.contains(e.target)) {
    modal1.style.display = "none";
  }
});

// générer les projets dans la modale
const projectsModale = document.querySelector(".projectsImages");

function projectsModales() {
  console.log(projets);

  projectsModale.innerHTML = "";
  projets.forEach((project) => {
    const figure = document.createElement("figure");
    figure.id = "figureModale";
    const img = document.createElement("img");
    img.src = project.imageUrl;
    img.alt = project.title;
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    deleteIcon.setAttribute("data-project-id", project.id);
    figure.appendChild(img);
    figure.appendChild(deleteIcon);
    projectsModale.appendChild(figure);
  })}

  projectsModale.querySelectorAll(".fa-trash-can").forEach((icon) => {
    icon.addEventListener('click', (e) => {
      stopPropagation();
      const projectId = e.target.getAttribute('data-project-id');
      console.log('projectId')
      deleteProject(projectId);
    });
  });

  function deleteProject(projectId) {
    fetch("http://localhost:5678/api/works/"+projectId, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      if (response.ok) {
        console.log("Le projet a été supprimé avec succès.");
        init();
        projectsModales();
      } else {
        console.error("Erreur lors de la suppression du projet.");
      }
    });
  }