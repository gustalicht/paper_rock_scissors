const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// Inicializa o score do localStorage
let scoreElement = document.getElementById("numberVictorys");
let score = parseInt(localStorage.getItem('score')) || 0;
scoreElement.textContent = score;

rock.addEventListener("click", (evt) => {
    evt.preventDefault();
    PegaEscolhaUser("Pedra");
});

paper.addEventListener("click", (evt) => {
    evt.preventDefault();
    PegaEscolhaUser("Papel");
});

scissors.addEventListener("click", (evt) => {
    evt.preventDefault();
    PegaEscolhaUser("Tesoura");
});

function JogadorMaquina() {
    const escolhaAleatoria = Math.floor(Math.random() * 3);
    return ["Pedra", "Papel", "Tesoura"][escolhaAleatoria];
}

function PegaEscolhaUser(escolha) {
    let escolhaDaMaquina = JogadorMaquina();
    ValidaVitoria(escolha, escolhaDaMaquina);
}

function Regras(EscolhaDoUsuario, escolhaDaMaquina) {
    if (EscolhaDoUsuario === escolhaDaMaquina) {
        return 'Empate';
    } else if (
        (EscolhaDoUsuario === 'Pedra' && escolhaDaMaquina === 'Tesoura') ||
        (EscolhaDoUsuario === 'Tesoura' && escolhaDaMaquina === 'Papel') ||
        (EscolhaDoUsuario === 'Papel' && escolhaDaMaquina === 'Pedra')
    ) {
        return 'User';
    } else {
        return 'Machine';
    }
}

function pontuacao(result) {
    if (result === 'User') {
        score += 1;
        scoreElement.textContent = score;
        localStorage.setItem('score', score); // Salva o score no localStorage
    }
}

function exibirMensagem(resultado) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = resultado;
    resultadoElement.style.display = "block";
    resultadoElement.style.opacity = "1";  // Torna visível
}

function esconderMensagem() {
    setTimeout(() => {
        const resultadoElement = document.getElementById("resultado");
        resultadoElement.style.opacity = "0";  // Oculta com transição
        setTimeout(() => {
            resultadoElement.style.display = "none";  // Remove do layout após transição
        }, 1000); // Espera a transição de fade-out (1 segundo)
    }, 3000); // Tempo que a mensagem fica visível
}

function ValidaVitoria(EscolhaDoUsuario, escolhaDaMaquina) {
    let resultado = Regras(EscolhaDoUsuario, escolhaDaMaquina);
    exibirMensagem(`Você escolheu ${EscolhaDoUsuario}, a máquina escolheu ${escolhaDaMaquina}. Resultado: ${resultado}`);
    pontuacao(resultado);
    esconderMensagem(); // Esconde a mensagem após o tempo especificado
}
