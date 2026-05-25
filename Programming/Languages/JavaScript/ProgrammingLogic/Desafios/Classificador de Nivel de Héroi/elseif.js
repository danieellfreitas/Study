const heroi = "Danas"

let nivel = 7100

xp = ""

if (nivel < 1000) {
    xp = "Ferro";
} else if (nivel >= 1000 && nivel <= 2000) {
    xp = "Bronze";
} else if (nivel >= 2001 && nivel <= 5000) {
    xp = "Prata";
} else if (nivel >= 5001 && nivel <= 7000) {
    xp = "Ouro";
} else if (nivel >= 7001 && nivel <= 8000) {
    xp = "Platina";
} else if (nivel >= 8001 && nivel <= 9000) {
    xp = "Ascendente";
} else if (nivel >= 9001 && nivel <= 10000) {
    xp = "Imortal";
} else if (nivel > 10000) {
    xp = "Radiante";
} else {
    xp = "Não classificado";
}

console.log("O Herói de nome " + heroi + " está no nível de " + xp)