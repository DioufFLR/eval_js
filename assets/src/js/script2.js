// Exercice 2 Table de multiplication

let i = 0;
let multiple = parseInt(prompt("Choisissez une table de multiplication"));
let fois = parseInt(prompt("À quelle valeur souhaitez vous arrêter votre table de multiplication ?"));
let result;

function tableMultiplication() {
    while (i !== fois) {
        i++;
        result = i * multiple;
        console.log(i + "x" + multiple + " = " + result);
        document.write(multiple + " x " + i + " = " + result + "<br>");
    }
}

tableMultiplication();

