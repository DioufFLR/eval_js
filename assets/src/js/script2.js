// Exercice 2 Table de multiplication

let i = 0;
let x = parseInt(prompt("Choisissez une table de multiplication"));
let fois = parseInt(prompt("À quelle valeur souhaitez vous arrêter votre table de multiplication ?"));
let result;


function tableMultiplication(x) {
    while (i !== fois) {
        i++;
        result = i * x;
        console.log(i + "x" + x + " = " + result);
        document.write(x + " x " + i + " = " + result + "<br>");
    }
}

tableMultiplication(x);

