"use strict";

// creation de john + pts de santé mentale
let personnage = {
  name: "John",
  sanity: 10,
};
//afficher les caracteristiques dans la console
console.log(personnage);

//infos sur le trajet de john
let trajet = { 
  radio: "choixMusiques",
  feux: 30,
  switchTaxi: 0,
};

// fonction qui permet de reduire la santé mentale de john et d'afficher son statut
function reducSanity() {
  personnage.sanity -= 1;
  console.log("John a maintenant une santé mentale de " + personnage.sanity);
}

// tableau avec une liste de musique
const choixMusiques = ["Bathroom-Montell Fish", "Ditto-Newjeans", "Friends-Chase Atlantic", "Pour deux âmes solitaires-Luidji", "Anissa-Wejdene"];

//fonction random musique+ choix aléatoire
function randomMusique() {
  let random = Math.floor(Math.random() * choixMusiques.length);
  let musiqueAleatoire = choixMusiques[random];
  console.log("La chanson " + musiqueAleatoire + " passe à la radio");
  
  // Réduire le nombre de feux rouges restants
  trajet.feux -= 1;
  console.log("Il reste " + trajet.feux + " feux rouges.");
  
  // Vérifier si la musique est Anissa-Wejdene et réduire la santé mentale si oui
  if (musiqueAleatoire === "Anissa-Wejdene") {
    reducSanity();
  }

  return musiqueAleatoire;}

//trajet 
for (let i = 1; i <= 30; i++) {
  
  // musique choisie aléatoirement
  let randomMusiqueJouee = randomMusique();

//si john arrive au bout du dernier feu rouge avec de la santé mentale
  if (trajet.feux === 0) {
    console.log("John est bien arrivé à destination après", trajet.switchTaxi, "changements de taxi");
    let nbrDeFeux = trajet.feux;
    console.log("John a passé " + nbrDeFeux + " feux!");
    break; // Sortir de la boucle lorsque le nombre de feux atteint 0
  }

//condition si anissa passe à la radio
  if (randomMusiqueJouee === "Anissa-Wejdene") {
    trajet.switchTaxi += 1;
    console.log("John a changé de Taxi");
  }

//si sa santé mentale atteint 0
  if (personnage.sanity <= 0) {
    console.log("EXPLOSION!!! La santé mentale du pauvre John est à 0");
    break; // Sortir de la boucle si la santé mentale est à 0
  }
}


