//const { id } = require("ethers");

let projets = [];
let categories = [];

// récupérer les projets via l'API
async function init(){
    console.log("Starting");
  
    await fetch('http://localhost:5678/api/works')
    .then((response) =>(response.json()))
    .then((data) => (projets = data));
    genererProjet(projets);
    projectsModales();
};
init();

// génération des modales 

// Création de l'élément aside modale main
const modalMain = document.createElement('aside');
modalMain.id = 'modal1';

// Création de la div closeBtnWrap
const closeBtnWrap = document.createElement('div');
closeBtnWrap.className = 'closeBtnWrap';
const closeButton = document.createElement('button');
closeButton.id = 'close-modal';
closeButton.textContent = '×'; // Le caractère "×" pour le bouton de fermeture
closeBtnWrap.appendChild(closeButton);

// Création de la div modalTitleWrapper et du paragraphe modalTitle
const modalTitleWrapper = document.createElement('div');
modalTitleWrapper.className = 'modalTitleWrapper';
const modalTitle = document.createElement('p');
modalTitle.className = 'modalTitle';
modalTitle.textContent = 'Galerie Photo'; // Le titre de la modale
modalTitleWrapper.appendChild(modalTitle);

// Création de la div projectModalWrapper
const projectModalWrapper = document.createElement('div');
projectModalWrapper.id = 'projectModalWrapper';
const projectsImages = document.createElement('div');
projectsImages.className = 'projectsImages';
// Remarque : La section des projets sera générée ultérieurement par JavaScript

// Ajout de la div projectsImages à projectModalWrapper
projectModalWrapper.appendChild(projectsImages);

// Création du bouton Ajouter une Photo
const addButton = document.createElement('button');
addButton.id = 'modaleAddProject';
addButton.textContent = 'Ajouter une Photo';

// Ajout des éléments créés à l'élément aside modal1
modalMain.appendChild(closeBtnWrap);
modalMain.appendChild(modalTitleWrapper);
modalMain.appendChild(projectModalWrapper);
modalMain.appendChild(addButton);

// Ajout de l'élément aside modal1 au document 
document.body.appendChild(modalMain);




// Création de l'élément aside modaleForm
const modaleForm = document.createElement('aside');
modaleForm.id = 'modaleForm';

// Création de la div formWrapper
const formWrapper = document.createElement('div');
formWrapper.className = 'formWrapper';

// Création de la div modale-projet-icon
const modaleProjetIcon = document.createElement('div');
modaleProjetIcon.className = 'modale-projet-icon';

// Création de la span returnIcon et de son bouton de fermeture
const returnIcon = document.createElement('span');
const backArrow = document.createElement('i');
backArrow.className = 'fa-solid fa-arrow-left';
backArrow.id = 'backForm'

returnIcon.className = 'returnIcon';
const closeButtonForm = document.createElement('button');
closeButtonForm.id = 'close-form';
closeButtonForm.textContent = '×'; // Le caractère "×" pour le bouton de fermeture

returnIcon.appendChild(backArrow);
returnIcon.appendChild(closeButtonForm);



// Ajout de returnIcon et closeIcon à modaleProjetIcon
modaleProjetIcon.appendChild(returnIcon);

// Création de la div formItemsWrapper
const formItemsWrapper = document.createElement('div');
formItemsWrapper.id = 'formItemsWrapper';

// Création du titre h2
const h2 = document.createElement('h2');
h2.textContent = 'Ajout photo'; // Le titre de la modale

// Création du formulaire
const form = document.createElement('form');
form.className = 'addProjectForm';
form.setAttribute('action', '');
form.setAttribute('enctype', 'multipart/form-data');

// Création de la div addPic
const addPic = document.createElement('div');
addPic.id = 'addPic';

// Création de l'icône d'ajout de photo
const formIconForm = document.createElement('i');
formIconForm.className = 'fa-regular fa-image';
formIconForm.id = 'formIcon';
const labelWrapper = document.createElement('span');
const photoLabel = document.createElement('label');
photoLabel.setAttribute('for', 'photo');
photoLabel.id = 'photoLabel';
photoLabel.textContent = '+ Ajouter photo';
labelWrapper.className = 'labelWrapper';
labelWrapper.id = 'labelWrapper';
labelWrapper.appendChild(photoLabel);
const inputFileForm = document.createElement('input');
inputFileForm.setAttribute('type', 'file');
inputFileForm.setAttribute('name', 'photo');
inputFileForm.setAttribute('id', 'photo');
inputFileForm.setAttribute('accept', 'image/jpeg, image/png');
const imgDetails = document.createElement('span');
imgDetails.className = 'imgDetails';
imgDetails.id = 'imgDetails';
imgDetails.textContent = 'jpg, png : 4mo max';
addPic.appendChild(formIconForm);
addPic.appendChild(labelWrapper);
addPic.appendChild(inputFileForm);
addPic.appendChild(imgDetails);

// Création de la div formTitle
const formTitle = document.createElement('div');
formTitle.className = 'formTitle';
const titleLabel = document.createElement('label');
titleLabel.setAttribute('for', 'titre');
titleLabel.textContent = 'Titre';
const titleInput = document.createElement('input');
titleInput.className = 'js-title';
titleInput.setAttribute('type', 'text');
titleInput.setAttribute('name', 'titre');
titleInput.setAttribute('id', 'titre');
formTitle.appendChild(titleLabel);
formTitle.appendChild(titleInput);

// Création de la div formCategories
const formCategories = document.createElement('div');
formCategories.className = 'formCategories';
const categoryLabel = document.createElement('label');
categoryLabel.setAttribute('for', 'categorie');
categoryLabel.textContent = 'Catégorie';
const categorySelect = document.createElement('select');
categorySelect.setAttribute('name', 'categorie');
categorySelect.setAttribute('id', 'categorie');
categorySelect.className = 'js-categoryId';
formCategories.appendChild(categoryLabel);
formCategories.appendChild(categorySelect);

// Création du bouton de soumission
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('id', 'ModalFormSend');
submitButton.setAttribute('value', 'Valider');

// Ajout des éléments créés à leurs parents respectifs
form.appendChild(addPic);
form.appendChild(formTitle);
form.appendChild(formCategories);
form.appendChild(submitButton);
formItemsWrapper.appendChild(h2);
formItemsWrapper.appendChild(form);
formWrapper.appendChild(modaleProjetIcon);
formWrapper.appendChild(formItemsWrapper);
modaleForm.appendChild(formWrapper);

// Ajout de l'élément aside modaleForm au document (par exemple, au body)
document.body.appendChild(modaleForm);



function genererProjet(donneesProjets){
      
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
    const data = await response.json()
    .then((data) => (categories = data));
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
allButton.classList.add('active');
allButton.addEventListener('click' , () => {
  genererProjet(projets);
});
categoryContainer.appendChild(allButton);


  categories.forEach((category) => {
    const button = document.createElement('button');
    button.innerText = category.name;
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
  filterStyle();
}
window.addEventListener("load", catCreate);

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


// check si on est connecté ou pas 
async function editCheck(){
  if (token){
    editDisplay.style.display = 'block'
    btnLogin.style.display = 'none'
    filterDisplay.style.display = 'none'
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

async function openModaleBis() {
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

editDisplay.addEventListener('click', openModale)

// générer les projets dans la modale
const projectsModale = document.querySelector(".projectsImages");

function projectsModales() {
  
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
  });
  projectsModale.querySelectorAll(".fa-trash-can").forEach((icon) => {

  icon.removeEventListener('click', deleteProject)
  });

  projectsModale.querySelectorAll(".fa-trash-can").forEach((icon) => {
    
    icon.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('suppression en cours')
      const projectId = e.target.getAttribute('data-project-id');
      if (projectId) {
        deleteProject(projectId);
      } else {
        console.error('impossible de recup ID');
      }
    
    }, { once: true});
  });
}

// call l'api pour supprimer un projet puis call les fonctions pour regen les éléments concernés

  function deleteProject(projectId) {
    fetch("http://localhost:5678/api/works/" + projectId, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      if (response.ok) {
      
        init();
        genererProjet(projets);
        projectsModales();
        
      } else {
        console.error("Erreur lors de la suppression du projet.");
      }
    });
  }

  
// ouverture du form 
const addProjectButton = document.getElementById('modaleAddProject')
const addForm = document.getElementById('modaleForm')

async function openForm(e) {
  e.stopPropagation
  modal1.style.display ='none'
  addForm.style.display = 'flex'
  categoriesSelect();
  resetDisplay();
}

addProjectButton.addEventListener('click', openForm)

// Gestion de l'input image dans la modale

// AFFICHER L'IMAGE UNE FOIS CHOISIE DANS LE DOSSIER

const inputFile = document.getElementById('photo')
const formPhoto = document.getElementById('addPic')
const formIcon = document.getElementById('formIcon')
const formLabel = document.getElementById('labelWrapper')
const formDetails = document.getElementById('imgDetails')

inputFile.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imagePreview = document.createElement("img");
      imagePreview.src = e.target.result;

      const existingImage = formPhoto.querySelector('img');
      if (existingImage){
        formPhoto.removeChild(existingImage)
      }
      formPhoto.appendChild(imagePreview);
      formPhoto.classList.add("photo-selected");
      imagePreview.addEventListener('click', function(){

        inputFile.click();
      })
      
    };
    inputFile.style.display ='none'
    formIcon.style.display = 'none'
    formLabel.style.display ='none'
    formDetails.style.display = 'none'
    reader.readAsDataURL(file);
    

  }
});


// afficher les catégories dans le menu dropdown 

const selectCategory = document.querySelector(".js-categoryId");

function categoriesSelect() {
  selectCategory.innerHTML = '<option value="" selected></option>';

  for (let i = 0; i < categories.length; i++) {
    const categoryDrop = categories[i];
    const option = document.createElement("option");
    option.value = categoryDrop.id;
    option.textContent = categoryDrop.name;
    selectCategory.appendChild(option);
  }
}


// Envoie d'un projet à l'API


const submitModale = document.getElementById("ModalFormSend");


async function AddNewProject(e) {
  e.preventDefault();

  const formData = new FormData();
  const titre = document.querySelector(".js-title").value;
  const categorie = selectCategory.value;
  const photo = inputFile.files[0];

  if (categorie === "" || titre === "" || photo === undefined) {
    alert("Merci de remplir tous les champs");
  } else {
    formData.append("title", titre);
    formData.append("category", categorie);
    formData.append("image", photo);

    try {
      const response = await fetch("http://localhost:5678/api/works", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.status === 201) {
        alert("Projet ajouté avec succès");
        init();

        setTimeout(() => {
        closeForm();
        openModaleBis();
        projectsModales(projets);
        genererProjet(projets);
        }, 1000)
      

      
      } else if (response.status === 500) {
        alert("Erreur du serveur");
      } else {
        console.log("Réponse inattendue :", response);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête POST :", error);
    }
  }
}

submitModale.addEventListener("click", AddNewProject);

const closeFormIcon = document.getElementById('close-form');

// close le form modal
function closeForm(e) {
  addForm.style.display ='none'
};

closeFormIcon.addEventListener('click', closeForm);


// GESTION DU BACKROUND DU BOUTON SUBMIT DU FORM
const submitBtnModale = document.getElementById("ModalFormSend");
const titreInput = document.querySelector(".js-title");


// check si le form est remplis avant de pouvoir valider 
function checkFormValidity() {
  const titre = titreInput.value;
  const categorie = selectCategory.value;
  const photo = inputFile.files[0];

  const isFormValid = titre !== "" && categorie !== "" && photo !== undefined;

  if (isFormValid) {
    submitBtnModale.classList.add("valid");
  } else {
    submitBtnModale.classList.remove("valid");
  }
}

titreInput.addEventListener("input", checkFormValidity);
selectCategory.addEventListener("input", checkFormValidity);
inputFile.addEventListener("input", checkFormValidity);

backArrow.addEventListener('click', function() {
  closeForm();
  setTimeout(openModaleBis, 100); 
});

// forcer le state hover du bouton all

function filterStyle() {
  document.querySelectorAll(".category > button").forEach((button) => {
    button.addEventListener("mouseover", (e) => {
      document.querySelectorAll(".category > button").forEach((btn) => {
        btn.classList.remove("active");
      });

      e.target.classList.add("active");

      
    });
  });
}

// TimeOut sur le load de la page quand redirection depuis la page de login 

document.addEventListener("DOMContentLoaded", () => {
  const sectionToScroll = window.location.hash.substring(1);
  console.log('en attente')

  if (sectionToScroll) {
    setTimeout(function () {
      const targetSection = document.getElementById(sectionToScroll);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
        });
      }
    }, 600);
  }
});


// Reset le display du form 

  async function resetDisplay(){

    formPhoto.classList.remove('photo-selected')
    formLabel.classList.remove =('photo-selected')
    formIcon.style.display ='flex'
    formDetails.style.display ='block'
    formLabel.style.display ='flex'
    const existingImage = formPhoto.querySelector('img');
      if (existingImage){
        formPhoto.removeChild(existingImage)
      }
      titleInput.value = ""

    };
