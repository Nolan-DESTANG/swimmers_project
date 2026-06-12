/*
//------------------------------PAGE ACCUEIL------------------------------

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

/*les champs et selecteurs pour le choix du cours apparaissent en fonction des choix précédemment fait:
    on choisit:
        - le groupe que l'on souahite (bébés, enfants ou adultes)
        - le selecteur des niveaux s'affiche en fonction du choix du groupe
        - puis le choix du jour en fonction des deux choix précédents
        - enfin le choix de l'heure en fonction de toute les réponses différentes
*/

/*
//on commence par récuperer tous les id existant pour l'ensemble des choix et options
    //les cours
    const choixDuCours = document.getElementById('choix_du_cours');
    const bebesNageurs = document.getElementById('bebes_nageurs');
    const coursEnfants = document.getElementById ('cours_enfants');
    const coursAdultes = document.getElementById('cours_adultes');

    //les niveaux bébés
    const choixDuNiveau = document.getElementById('choix_du_niveau');
    const selectionNiveau = document.getElementById('selection_niveau')

    const niveauxBebesNageurs = document.getElementById('niveaux_bebes_nageurs');
    const bebes6A12Mois = document.getElementById('bb_6_12');
    const bebes1A2Ans = document.getElementById('bb_1_2');
    const bebes2A3Ans = document.getElementById('bb_2_3');
    const bebes3A4Ans = document.getElementById('bb_3_4');

    //les niveaux enfants
    const niveauxCoursEnfants = document.getElementById('niveaux_cours_enfants');
    const niveauCoquillage = document.getElementById('Niveau_coquillage');
    const niveauEtoileDeMer = document.getElementById('Niveau_etoile_de_mer');
    const niveauCrabe = document.getElementById('Niveau_crabe');
    const niveauPoissonClown = document.getElementById('Niveau_poisson_clown');
    const niveauPieuvre = document.getElementById('Niveau_pieuvre');
    const niveauDauphin = document.getElementById('Niveau_dauphin');
    const niveauRequin = document.getElementById('Niveau_requin');
    const niveauEspadon = document.getElementById('Niveau_espadon');

    //les niveaux adultes
    const niveauxCoursAdultes = document.getElementById('niveaux_cours_adultes');
    const coursAquaphobie = document.getElementById('cours_aquaphobie');
    const coursApprentissage = document.getElementById('cours_apprentissage');
    const coursPerfectionnement = document.getElementById('cours_perfectionnement');

    //les jours
    const choixDuJour = document.getElementById('choix_du_jour');
    const choixJour = document.getElementById('choix_jour');
    const lundi = document.getElementById('lundi');
    const mardi = document.getElementById('mardi');
    const mercredi = document.getElementById('mercredi');
    const jeudi = document.getElementById('jeudi');
    const vendredi = document.getElementById('vendredi');
    const samedi = document.getElementById('samedi');

    //les heures
        const choixHoraire = document.getElementById('choix_horaire');
        const choixDeLHeure = document.getElementById('choix_de_l_heure');
        //matin
        const matin = document.getElementById('matin');
        const neufHeure= document.getElementById('9_00');
        const neufHeureTrente = document.getElementById('9_30');
        const dixHeure = document.getElementById('10_00');
        const dixHeureTrente = document.getElementById('10_30');
        const onzeHeure = document.getElementById('11_00');
        const onzeHeureTrente= document.getElementById('11_30');
        //midi
        const midi = document.getElementById('midi');
        const douzeHeure = document.getElementById('12_00');
        const douzeHeureQuaranteCinq = document.getElementById('12_45');
        const treizeHeure = document.getElementById('13_00');
        //après-midi
        const apresMidi = document.getElementById('apres_midi');
        const treizeHeureTrente = document.getElementById('13_30');
        const quatorzeHeureQuinze = document.getElementById('14_15');
        const quinzeHeure = document.getElementById('15_00');
        const quinzeHeureQuaranteCinq = document.getElementById('15_45');
        const seizeHeureTrente = document.getElementById('16_30');
        const dixSeptHeure= document.getElementById('17_00');
        const dixSeptHeureQuinze = document.getElementById('17_15');
        const dixSeptHeureTrente = document.getElementById('17_30');
        const dixSeptHeureQuaranteCinq = document.getElementById('17_45');
        //soir
        const soir = document.getElementById('soir');
        const dixHuitHeure = document.getElementById('18_00');
        const dixHuitHeureQuinze = document.getElementById('18_15');
        const dixHuitHeureTrente = document.getElementById('18_30');
        const dixHuitHeureQuaranteCinq = document.getElementById('18_45');
        const dixNeufHeure = document.getElementById('19_00');
        const dixNeufHeureQuinze = document.getElementById('19_15');
        const dixNeufHeureTrente = document.getElementById('19_30');
        const dixNeufHeureQuaranteCinq = document.getElementById('19_45');
        const vingtHeure = document.getElementById('20_00');
        const vingtHeureQuinze = document.getElementById('20_15');

// On crée une fonction qui affiche uniquement le selecteur de niveaux correspondant au choix du cours

function afficherNiveauCorrespondant() {
 /*   if (choixDuCours === bebesNageurs) {
        choixDuNiveau.style.display='block';
        niveauxBebesNageurs.style.display = 'block';
    } else if (choixDuCours === coursEnfants) {
        choixDuNiveau.style.display='block';
        niveauxBebesNageurs.style.display = 'block';
    } else if (choixDuCours === coursAdultes) {
        choixDuNiveau.style.display='block';
        niveauxBebesNageurs.style.display = 'block';
    };
};

if (choixDuCours) {
    choixDuCours.addEventListener('change', afficherNiveauCorrespondant);
};*//*
    const valeurCours = choixDuCours.value;

    if (valeurCours === 'bebes_nageurs' && niveauxBebesNageurs) {
        choixDuNiveau.style.display='block';
        niveauxBebesNageurs.style.display = 'block';
    } else if (valeurCours === 'cours_enfants' && niveauxCoursEnfants) {
        choixDuNiveau.style.display='block';
        niveauxCoursEnfants.style.display = 'block';
    } else if (valeurCours === 'cours_adultes' && niveauxCoursAdultes) {
        choixDuNiveau.style.display='block';
        niveauxCoursAdultes.style.display = 'block';
    }
}*/