let marca = "Apple";
// Guardar o valor de 'false or true' dentro de uma variável.
let resultado = marca !== "Samsung";
console.log("Comparando " + resultado);

// = é atribuição
// == é para comparar o valor
// === é para comparar valor e o formato do conteúdo
// !== é diferente ?


//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.356.645-55";
let cpfUsuario = "234.453.653-44";
let ehCPFBloqueado = cpfUsuario === cpfBloqueado;
console.log("O CPF tem impedimento para o embarque? " + ehCPFBloqueado);

let idadeMinima = 18;
let idadeUsuario = 18;
let idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)

let idadeDeCorte = 50;
let idadeUsuario1 = 50;
let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario1;
console.log(resultadoEhTerceiraIdade);