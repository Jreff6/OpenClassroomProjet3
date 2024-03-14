// Récupérer les éléments nécessaires depuis le DOM
const modal = document.getElementById('loginModal');
const btnLogin = document.getElementById('btnLogin');
const btnClose = document.getElementsByClassName('close')[0];

// Fonction pour ouvrir la modale
function openModal() {
    modal.style.display = 'flex';
  }
  
// Fonction pour fermer la modale
function closeModal() {
    modal.style.display = 'none';
  }
  
// Ouvrir la modale lorsqu'on clique sur le bouton Login
btnLogin.addEventListener('click', openModal);
  
// Fermer la modale lorsqu'on clique sur le bouton de fermeture (×)
btnClose.addEventListener('click', closeModal);


// Envoyer les données de connexion au backend [NOT FINISHED]
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  console.log('Formulaire soumis !');
});
