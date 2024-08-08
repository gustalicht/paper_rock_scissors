const rock =document.querySelector("#rock")
const paper =document.querySelector("#paper")
const scissors =document.querySelector("#scissors")

let selecionouPedra = "Pedra";
let selecionouTesoura = "Tesoura";
let selecionouPapel = "Papel";


    rock.addEventListener("click",(evt)=>{
        alert("Você selecionou Pedra")
        PegaEscolhaUser(selecionouPedra)
    })

    paper.addEventListener("click",(evt)=>{
        alert("Você selecionou Papel")
        PegaEscolhaUser(selecionouPapel)
    })


scissors.addEventListener("click",(evt)=>{
        alert("Você selecionou Tesoura")
        PegaEscolhaUser(selecionouTesoura)
    })

function JogadorMaquina(EscolhaMaquina){
    const escolhaAleatoria=Math.floor(Math.random()* EscolhaMaquina.Length);
    return EscolhaMaquina[escolhaAleatoria]
}

let EscolhaMaquina = ['Pedra', 'Papel', 'Tesoura'];
const escolhaAleatoria = JogadorMaquina(EscolhaMaquina)

function PegaEscolhaUser(escolha){

}

function Regras(){

}

function pontuacao(){

}


function ValidaVitoria(){

}



