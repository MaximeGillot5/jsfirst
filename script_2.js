function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");
const resultat = factorial(parseInt(nombre));

console.log("Le résultat est : " + resultat);