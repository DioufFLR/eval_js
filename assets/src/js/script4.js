let pu = parseInt(prompt("Saisie du prix unitaire"));
let qTecom = parseInt(prompt("Quantité souhaitez"));
let tot = pu * qTecom;
let port = 1.02;

console.log(tot);

if (tot >= 100 && tot <= 200) {
    totReduc = tot * 0.95;
    totFinal = totReduc * port;
    document.write("Le total à payer est de : " + totFinal + "€");
} else if (tot > 200) {
    totReduc = tot * (0.9 + port);
    totFinal = totReduc * port;
    document.write("Le total à payer est de : " + totFinal + "€");
}

