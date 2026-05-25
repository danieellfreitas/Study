const heroi = "Danas"

let nivel = 8421

let classificacao = ""; // Armazenar a faixa de classificação

switch (true) {
    case nivel < 1000:
        classificacao = "Ferro";
        break;

    case nivel >= 1000 && nivel <= 2000:
        classificacao = "Bronze";
        break;

    case nivel >= 2001 && nivel <= 5000:
        classificacao = "Prata";
        break;

    case nivel >= 5001 && nivel <= 7000:
        classificacao = "Ouro";
        break;

    case nivel >= 7001 && nivel <= 8000:
        classificacao = "Platina";
        break;

    case nivel >= 8001 && nivel <= 9000:
        classificacao = "Ascendente";
        break;

    case nivel >= 9001 && nivel <= 10000:
        classificacao = "Imortal";
        break;

    case nivel > 10000:
        classificacao = "Radiante";
        break;

        //Capricho.
    default:
        classificacao = "não classificado";
}

console.log("O Herói de nome " + heroi + " está no nível de " + classificacao)