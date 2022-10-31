// Exercice 3 Recherche d'un prénom

let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let i = 0;
let prenom = prompt("Saisissez un prénom");

// Pour rendre le string dans un format donné
let prenomMaj = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase();

// Position du prénom recherché par l'utilisateur
let index = tab.indexOf(prenomMaj);
console.log(index);

if (index >= 0 && index <= 9) {
    tab.splice(index - 1, 1);
    tab.push(" ");
} else {
    alert("Ce prénom n'est pas renseigné dans le tableau")
}
console.log(tab);

