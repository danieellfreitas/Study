//Trabalhando Com Estruturas de Decisão (Estrutura Switch Case)
// É uma estrutura de decisão que permite executar diferentes blocos de código com base no valor de uma variável ou expressão.
// A estrutura switch é útil quando você tem várias condições a serem verificadas e deseja evitar muitos if-else encadeados.
//switch (expressão) {
//    case valor1
// break
// default

let fruta = "morango"

switch (fruta){
	case "laranja":
    console.log("suco de laranja")
    break
    
    case "banana":
    case "morango":
    console.log("vitamina")
    break
    
    case "maça":
    console.log("suco de maça")
    break
    
    default:
    console.log("suco genérico")
}