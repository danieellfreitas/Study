/* 
## O Que São Funções e Como Criar
Funções,
Estrutura,

function name(params) {
    
}

o nome da função vai estar na estrutura 'name' para sempre que quiser ser executada (ter saída), vai ser declarada junto com a entrada,
Exemplo:
name(params)
A entrada vai estar entre (),
A ação vai estar entre {},
a função pode ou não ter entrada e pode ou não ter saída, mas ela sempre vai ter ação.

torrar();
torrar();
torrar();

function torrar() {
    console.log('Torrando pão...')
}

A função feita por si só não a executa, ela tem que ser feita e ser executada (ter saída).
Nesse caso sendo executada 3 vezes fica no console,
Torrando pão...
Torrando pão...
Torrando pão...
*/

function torrar() {
    console.log('Torrando pão...')
    injetarPao()
}

function injetarPao() {
    console.log('Preparando para injetar o pão')
    console.log('Finalizado')
}

torrar()

/*
Nesse exemplo a impressão fica

Torrando pão...
Preparando para injetar o pão
Finalizado


Outro ponto, função não começa com número, dá erro, exemplo,
function 1teste()

Funções são ações, tente sempre no nome colocar verbos.

Importante que seja feita uma função para cada tipo de ação, feitar fazer a função para mais de uma ação,
Não estamos falando de tamanho, linha de código pode ter várias, estamos falando da ação feita.
Caso necessário, faça uma função para cada ação e depois junte-o todos dando o primeiro nome de main em case-sensitive.

Indentação também é uma boa prática... Organizar e respeitar e sempre fazer a indentação ao abrir uma chave.





## Funções com Parâmetros
*/

function torrar(pao) {
    console.log(`Torrada feita com ${pao}`)
}
torrar('pão francês')
torrar('pão de forma')
torrar('pão integral')
/*
Torrada feita com pão francês
Torrada feita com pão de forma
Torrada feita com pão integral

Esse print console.log('Torrada feita com ${pao}') ou variável que seja só está valida na função, fora dela não existe mais.
Caso contrário, se tentar imprimir fora da função, dá erro.
em 'var' pode ser usado fora da função, mas não é uma boa prática.
variavel em var são variaveis globais, ou seja, podem ser usadas em qualquer lugar do código.

Podemos passar mais de um parâmetro, exemplo:
*/

function pedidoTorrar(pao, nome) {
    console.log(`Torrada feita com ${pao}`)
    console.log(`Ela é um pedido de ${nome}`)
}
pedidoTorrar('pão francês', 'João')
/* Print:
Torrada feita com pão francês
Ela é um pedido de João

Caso seja executada sem o parâmetro, dá undefined, e podemos definir um valor padrão, exemplo:
function pedidoTorrar(pao = 'Pão Frances', nome = 'Cliente') {
    console.log('Torrada feita com ${pao}')
    console.log('Ela é um pedido de ${nome}')

definindo o valor padrão com "=" no parâmetro.

caso tenha parâmetros com valor padrão sempre deixa-los por ultimo, para não dar erro.
Caso precise entre dois valores sem padrão tenha um valor padrão e você quer que seja o valor padrão chame com o parâmetro 'undefined'
E não é uma boa prática, mas funciona.
O certo sempre é deixar os valores padrão por último.
Exemplo de undefined:
function pedidoTorrar(pao = 'Pão Frances', nome = 'Cliente', valor) {
    console.log('Torrada feita com ${pao}')
    console.log('Ela é um pedido de ${nome}')
    console.log('O Valor é R${valor}')

pedidoTorrar(undefined, 'João', 5)
Print:
Torrada feita com Pão Frances
Ela é um pedido de João
O Valor é R$5

Caso não tivesse undefined, daria erro.

Boa prática seria,
function pedidoTorrar(valor, pao = 'Pão Frances', nome = 'Cliente')
E caso queria ia precisar colocar só o obrigatório, sem valor padrão.

Em outras liguagens ficaria assim
Java
public void pedidoTorrar(double valor, String pao, String nome) {
    if (pao == null) pao = "Pão Frances";
    if (nome == null) nome = "Cliente";
    System.out.println("Torrada feita com " + pao);
    System.out.println("Ela é um pedido de " + nome);
    System.out.println("O Valor é R$" + valor);
}

C#
void PedidoTorrar(double valor, string pao = "Pão Frances", string nome = "Cliente") {
    Console.WriteLine($"Torrada feita com {pao}");
    Console.WriteLine($"Ela é um pedido de {nome}");
    Console.WriteLine($"O Valor é R${valor}");
}

Python
def pedido_torrar(valor, pao="Pão Frances", nome="Cliente"):
   print(f"Torrada feita com {pao}")
   print(f"Ela é um pedido de {nome}")
   print(f"O Valor é R${valor}")

Ruby
def pedido_torrar(valor, pao="Pão Frances", nome="Cliente")
  puts "Torrada feita com #{pao}"
  puts "Ela é um pedido de #{nome}"
  puts "O Valor é R$#{valor}"
end

### Interpolação de String
*/

function createStringConnection(databaseName, user, pass) {
    console.log(`connect:DBCONNECT;user=${user};password=${pass};initial_database=${databaseName}`);
}
createStringConnection("db_products" , "daniel", "admin123")

/*
Interpolação de string, acontece quando usamos crase `` e não aspas simples '' ou aspas duplas "",
Então podemos usar ${} para colocar variáveis ou expressões dentro da string.


## Funções com Retorno (Return)

Exemplos,

function soma(NumA, NumB) {
    return NumA + NumB
}

function soma(NumA, NumB) {
    let somatorio = NumA + NumB
    return somatorio
}

você não executa a função com console.log, você executa a função atribuindo a uma variável,
Então nos dois casos ele soma e guarda o valor na variável somatorio ou direto no resultado, guardando na variável é uma boa prática.

então você pode usar o resultado para outras coisas, exemplo:

let resultado = soma(2, 3) // Por si só ele não imprime nada, tem que imprimir.
console.log(`O resultado da soma é ${resultado}`)
Print:
O resultado da soma é 5

Exemplo de função com retorno usada no dia dia:


function getFirstName(name) {
    let firstname = name.split(' ')[0] // Pega o primeiro nome, separando pelo espaço, se estivesse divido por - mudaria o espaço para traço, monta um vetor, ficando se o nome é Daniel Freitas fica [Daniel, Freitas] e pegando a primeira posição [0]
    return firstname
}

let userName = getFirstName("Fulano da Silva Tal do Santos")

console.log(`Seja bem vindo, ${userName}`) // Print: Seja bem vindo, Fulano


Boas práticas visto no código, padrão de escrita em Inglês, camelCase, nome descritivo, indentação, uso de crase para interpolação de string.
*/

function getFirstName(name, splitChar = " ") { // splitChar é o caractere que vai separar o nome, por padrão é espaço, mas pode ser qualquer outro caractere.
	let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
console.log("Seja bem vindo " + userName)

userName = getFirstName("Felipe Silva Han Solo") // Por padrão é espaço
console.log("Seja bem vindo " + userName)