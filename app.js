let listaNumerosSorteados = [];
let numeroLimite = 30;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;


mensagemIncial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let menorOuMaior = chute > numeroSecreto ? 'menor' : 'maior';
    let mensagemAcerto = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}.`
    let mensagemErro = `O número secreto é ${menorOuMaior} que ${chute}. Tente novamente!`;

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('p', mensagemErro);
        tentativa++;
        limparCampo();
        }
}
    
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.1 });
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function mensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Digite um número de 1 a ${numeroLimite}!`);
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemIncial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}    

function limparCampo() { 
    chute = document.querySelector('input');
    chute.value = '';
}   

