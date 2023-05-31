function jogar(jogadaUsuario) {
    //escolha a jogada do computador
    let jogadasPossiveis = ["pedra", "papel", "tesoura"];
    let jogadaComputador = 
    jogadasPossiveis[Math.floor(Math.random() * jogadasPossiveis.length)];

    let resultado;
    if (jogadaUsuario == jogadaComputador) {
        resultado = "Empate!";
    } 
    else if (jogadaUsuario == "pedra") {if (jogadaComputador == "papel") {resultado = "Você perdeu!";}
        else {resultado = "Você ganhou!";}
    }
    else if (jogadaUsuario == "papel") {if (jogadaComputador == "tesoura") {resultado = "Você perdeu!";}
    else {resultado = "Você ganhou!";}
    }
    else if (jogadaUsuario == "tesoura") {if (jogadaComputador == "pedra") {resultado = "Você perdeu!";}
    else {resultado = "Você ganhou!";}
    }

    let resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "Você jogou " +jogadaUsuario+ " e o computador jogou " +jogadaComputador+ " . " +resultado;
}