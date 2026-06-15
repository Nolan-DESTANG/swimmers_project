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
*/



//------------------------------PAGE INSCRIPTION------------------------------

//dans le tableau d'informations personnelles, la ligne du tuteur s'affiche uniquement si l'âge du participant est inférieur à 18 ans
const champDateNaissance = document.getElementById('date_de_naissance_participant');
const ligneInformationsParent = document.querySelector('.tuteur');

//fonction pour calculer l'âge à partir de la date de naissance
function calculerAge(dateDeNaissance) {
    const naissance = new Date(dateDeNaissance);

    if (Number.isNaN(naissance.getTime())) return null;

    const aujourdHui = new Date();
    let age = aujourdHui.getFullYear() - naissance.getFullYear();
    const differenceMois = aujourdHui.getMonth() - naissance.getMonth();

    if (differenceMois < 0 || (differenceMois === 0 && aujourdHui.getDate() < naissance.getDate())) {
        age--;
    }

    return age;
}

//fonction pour afficher ou cacher la ligne d'informations du tuteur
function afficherLigneInformationsParent() {
    if (ligneInformationsParent) {
        ligneInformationsParent.style.display = 'table-row';
    }
}

function cacherLigneInformationsParent() {
    if (ligneInformationsParent) {
        ligneInformationsParent.style.display = 'none';
    }
}

//fonction pour gérer l'affichage de la ligne d'informations du tuteur en fonction de l'âge du participant
function gererAffichageTuteur() {
    const age = calculerAge(champDateNaissance?.value);

    if (age !== null && age < 18) {
        afficherLigneInformationsParent();
    } else {
        cacherLigneInformationsParent();
    }
}

if (champDateNaissance) {
    champDateNaissance.max = new Date().toISOString().split('T')[0];
    champDateNaissance.addEventListener('change', gererAffichageTuteur);
    gererAffichageTuteur();
}




//le formulaire de selection du cours s'affiche au clic sur le bouton "passer à la selection du cours"
const boutonSelectionCours = document.getElementById('bouton_selection_cours');
const divSelectionCours = document.getElementById('selection_du_cours');

if (boutonSelectionCours && divSelectionCours) {
    boutonSelectionCours.addEventListener('click', () => afficherFormulaireSelectionCours());
};

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


//on commence par récuperer tous les id existant pour l'ensemble des choix et options
    //les cours
    const choixDuCours = document.getElementById('choix_du_cours');
    const bebesNageurs = document.getElementById('bebes_nageurs');
    const coursEnfants = document.getElementById ('cours_enfants');
    const coursAdultes = document.getElementById('cours_adultes');

    //les selections de niveaux
    const selectionNiveau = document.getElementById('selection_niveau');
    //les niveaux bébés nageurs
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
    const choixJour = document.getElementById('choix_jour');
    const lundi = document.getElementById('lundi');
    const mardi = document.getElementById('mardi');
    const mercredi = document.getElementById('mercredi');
    const jeudi = document.getElementById('jeudi');
    const vendredi = document.getElementById('vendredi');
    const samedi = document.getElementById('samedi');

    //les heures
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

//fonction pour afficher les niveaux corespondants au cours choisi
function afficherNiveauxCorrespondants(choixDuCours) {

    if (choixDuCours.value === 'bebes_nageurs') {
        niveauxBebesNageurs.style.display = "block";
        niveauxCoursEnfants.style.display = 'none';
        niveauxCoursAdultes.style.display = 'none';

    } else if (choixDuCours.value === 'cours_enfants') {
        niveauxBebesNageurs.style.display = 'none';
        niveauxCoursEnfants.style.display = "block";
        niveauxCoursAdultes.style.display = 'none';
        
    } else if (choixDuCours.value === 'cours_adultes') {
        niveauxBebesNageurs.style.display = 'none';
        niveauxCoursEnfants.style.display = 'none';
        niveauxCoursAdultes.style.display = "block";
    };
};

choixDuCours.addEventListener('change', (selectionNiveau) => {
    afficherNiveauxCorrespondants(selectionNiveau.target);
});

//fonction pour afficher les jours correspondants au niveau selectionné
function joursCorrespondant(selectionNiveau) {

    if (selectionNiveau.value === 'BB_6_12') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';

    } else if (selectionNiveau.value === 'BB_1_2') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'BB_2_3') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'BB_3_4') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'Niveau_coquillage') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';

    } else if (selectionNiveau.value === 'Niveau_etoile_de_mer') {
        lundi.style.display = 'block';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';

    } else if (selectionNiveau.value === 'Niveau_crabe') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';

    } else if (selectionNiveau.value === 'Niveau_poisson_clown') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'Niveau_pieuvre') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'Niveau_dauphin') {
        lundi.style.display = 'none';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'Niveau_requin') {
        lundi.style.display = 'block';
        mardi.style.display = 'none';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'Niveau_espadon') {
        lundi.style.display = 'none';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'none';
        vendredi.style.display = 'none';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'cours_aquaphobie') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'cours_apprentissage') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    } else if (selectionNiveau.value === 'cours_perfectionnement') {
        lundi.style.display = 'block';
        mardi.style.display = 'block';
        mercredi.style.display = 'block';
        jeudi.style.display = 'block';
        vendredi.style.display = 'block';
        samedi.style.display = 'block';
        
    };

};

selectionNiveau.addEventListener('change', (choixJour) => {
    joursCorrespondant(choixJour.target);
});

//fonction qui affiche un message avec l'heure du cours en fonction du niveau et du jour choisi