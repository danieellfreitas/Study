// Estruturas Condicionais if, else, else if
// Exemplo de uso de if, else
// if: é o comando a ser execultado caso verdadeiro
// else: é o comando a ser execultado caso falso

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
itensComprados = "Leite"
}
else{
console.log("passou na sessão de congelados")
itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)




//exemplo de uso de if, else if, else

    let nivelDeFome =  1

if(nivelDeFome === 1){
console.log("pouca fome")
}else if(nivelDeFome ===2){
console.log("muita fome")
}else{
console.log("Você comeria mais que o pica pau")
}