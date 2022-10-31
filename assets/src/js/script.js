// exercice 1 moyenne

let age = parseInt(prompt("Saisissez votre age, rentrez un centenaire pour arrêter la saisie"));
let jeunes = 0;
let moyens = 0;
let vieux = 0;
let centenaire = 0;

while (age <= 100) {
    if (age < 20) {
        jeunes++;
    } else {
        if (age >= 20 && 40 >= age) {
            moyens++;
        } else {
            if (age > 40) {
                vieux++;
            }
        }
    }
    console.log("Nombre de jeunes : " + jeunes);
    console.log("Nombre de moyens : " + moyens);
    console.log("Nombre de vieux : " + vieux);
    age = parseInt(prompt("Saisissez votre age, rentrez un centenaire pour arrêter la saisie"));
}

if ( age >= 100) {
    centenaire++;
}

document.write("Il y a " + jeunes + " jeunes, " + moyens + " moyens, " + vieux + " vieux et " + centenaire + " centenaire.");