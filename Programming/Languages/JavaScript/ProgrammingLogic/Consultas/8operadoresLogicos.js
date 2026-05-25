// AND &&
let idade = 18;
let vistoVerficado = false;
let resultado = (idade >= 18) && (vistoVerficado === true);
console.log(resultado);

// AND && - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 100;
let item = "estrela";
let resultado1 = (moedasColetadas === 100) &&(item ==="estrela");
console.log(resultado1);

// OR (||) - nosso boneco só pode sair se estiver sem chuva ou com guarda chuva
let tempo = "sol";
let item1 = "guarda chuva";
let podeSair = (tempo !== "guarda chuva") || (item1 === "guarda chuva");
console.log("Nosso personagem pode sair? " + podeSair)

// NOT (!) - nega afirmação
let tempo1 = "chuva"
let resultado2 = tempo1 ==="chuva"
console.log(!!resultado2)

// NOT  ( !) - nega uma afirmação
let tempo2 = "chuva"
let horario = 8
let resultado3 = !((tempo2 !== "chuva") && (horario > 6))
console.log(resultado3)