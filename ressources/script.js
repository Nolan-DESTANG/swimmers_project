// animation des images des cours : le texte de la section s'affiche au clic sur chaque image
// Sélection des éléments du DOM
const imagesCours = document.querySelectorAll('.presentation_sections img');
const textesCours = document.querySelectorAll('.texte_cours');
const boutonsPlusInfos = document.querySelectorAll('.plus_infos');

// temps en millisecondes avant l'apparition de chaque partie de la description après le clic
const delayAffichageTexte = 250;
const delayAffichageBouton = 750;

//appel de la fonction pour afficher la description
imagesCours.forEach((image, index) => {
    image.addEventListener('click', () => afficherDescriptionCours(index));
});

//fonction pour afficher la description d'un cours
function afficherDescriptionCours(index) {
    if (!textesCours[index]) return;

    setTimeout(() => {
        textesCours[index].style.opacity = 1;
    }, delayAffichageTexte);

    setTimeout(() => {
        boutonsPlusInfos[index].style.opacity = 1;
    }, delayAffichageBouton);
};




//------------------------------PAGE INSCRIPTION------------------------------

//le formulaire de selection du cours s'affiche au clic sur le bouton "passer à la selection du cours"
const boutonSelectionCours = document.getElementsByTagName('button');
const divSelectionCours = document.getElementsByClassName('selection_du_cours');

boutonSelectionCours(inscription) ; {
    button.addEventListener('click', () => afficherFormulaireSelectionCours);
};

function afficherFormulaireSelectionCours(inscription) {
    divSelectionCours[inscription].style.display = block;
};