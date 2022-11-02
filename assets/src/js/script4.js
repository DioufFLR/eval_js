let pu = parseInt(prompt("Saisie du prix unitaire"));
let qTecom = parseInt(prompt("Quantité souhaitez"));
let tot = pu * qTecom;
let port = 0;
let reduc = 0.9;
let totReduc = tot * reduc;

console.log(tot);

if (tot >= 100 && tot <= 200) {
    port = 6;
    reduc = 0.95;
    totReduc = tot * reduc;
    totFinal = totReduc + port;
    document.write("Le total à payer est de : " + totFinal + "€");
    } else if (tot > 200 && totReduc <= 500) {
    port = 1.02;
    reduc = 0.9;
    totReduc = tot * reduc;
    totFinal = totReduc * port;
    document.write("Le total à payer est de : " + totFinal + "€");
    } else if (tot < 100) {
    port = 6;
    totFinal = tot + port;
    document.write("Le total à payer est de : " + totFinal + "€");
    } else if (totReduc > 500) {
    document.write("Le total à payer est de : " + totReduc + "€");
}


