//for
//O laço for é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica. O exemplo abaixo percorre
// um array de números e imprime cada elemento no console:
for (let contador = 0; contador <4; contador++){
	console.log(contador)
    console.log("aumentador contador")
}

    const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}

let pontosDeVida = 0

for(let i = 0; i < 10; i ++){
	pontosDeVida += 1 // mesma coisa de pontosDeVida = pontosDeVida + 1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida + " Totais")


//while
//O laço while é utilizado quando não sabemos quantas vezes precisamos executar uma ação
// O exemplo abaixo simula uma moeda sendo jogada até que saia cara:

let jogadas = 0;
let cara = false;

while(!cara) {
  jogadas++;
  cara = Math.random() < 0.5;
}

console.log(`A moeda caiu cara após ${jogadas} jogadas!`);

let dado = 0;

while (dado <= 4) {
  dado = Math.floor(Math.random() * 6) + 1;
  console.log("Você tirou um", dado);
}

let contador = 0

while(contador < 3){
	console.log("olá")
    contador++
}

//do while
//O laço do-while é um tipo de laço while que sempre executa pelo menos uma vez o bloco de código dentro do loop.
// O exemplo abaixo solicita que o usuário digite um número entre 1 e 10:
//estrutura exemplo do while
// do{

// } while()
//final estrutura do while
//Exemplo

let numero;

do {
  numero = prompt('Digite um número entre 1 e 10:');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);


let bolinhosComidos = 0;

do {
  bolinhosComidos++;
  console.log("Você comeu", bolinhosComidos, "bolinhos!");
} while (bolinhosComidos < 5);

let contador01 = 0

do{
	console.log("Olá")
    contador01++
} while(contador01 <3)