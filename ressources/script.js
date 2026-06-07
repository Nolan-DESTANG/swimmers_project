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

//dans le tableau d'informations personnelles, la ligne du tuteur s'affiche uniquement si l'âge du participant est inférieur à 18 ans


//le formulaire de selection du cours s'affiche au clic sur le bouton "passer à la selection du cours"
const boutonSelectionCours = document.getElementById('bouton_selection_cours');
const divSelectionCours = document.getElementById('selection_du_cours');

if (boutonSelectionCours && divSelectionCours) {
    boutonSelectionCours.addEventListener('click', () => afficherFormulaireSelectionCours());
}

function afficherFormulaireSelectionCours() {
    divSelectionCours.style.display = 'block';
};