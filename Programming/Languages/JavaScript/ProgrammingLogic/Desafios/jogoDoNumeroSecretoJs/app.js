//Lista de Números Sorteados
let listaDeNumerosSorteados = [];

//Número Limite para ser sorteado
let numeroLimite = 10;

//Chamando a geração de número aleatório
let numeroSecreto = gerarNumeroAleatorio();

//se acertar de primeira, precisou somente de 1 tentativa
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
// exibirTextoNaTela('h1' , 'Jogo do Número Secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10'); fazer a função desse código para evitar repeti
 function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do Número Secreto');
    exibirTextoNaTela('p' , 'Escolha um número entre 1 e ' + numeroLimite);
 }
// chamando exibirMensagemInicial
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto); para imprimir o chute no console

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        // tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

    function gerarNumeroAleatorio() {
    /* return parseInt(Math.random() *10 + 1); */
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//Criando função para limpar campo em caso de erro, else em função de verificar chute.
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    // exibirTextoNaTela('h1' , 'Jogo do Número Secreto');
    // exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
    exibirMensagemInicial();
    // Só deixar reiniciar jogo caso acerte.
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

