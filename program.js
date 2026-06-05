let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

document.addEventListener('DOMContentLoaded', () => {
    const inputPalpite = document.getElementById("inputPalpite");
    inputPalpite.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            verificarPalpite();
        }
    });
    inputPalpite.focus();
});

function verificarPalpite() {
    let inputPalpite = document.getElementById("inputPalpite");
    let palpite = parseInt(inputPalpite.value);
    let resultado = document.getElementById("resultado");
    let botaoEnviar = document.getElementById("botaoEnviar");
    let botaoReiniciar = document.getElementById("botaoReiniciar");

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        resultado.innerHTML = `<span class="acertou">Parabéns! Você acertou!</span> O número secreto é ${numeroSecreto} e você acertou em ${tentativas} tentativas.`;
        inputPalpite.style.display = 'none';
        botaoEnviar.style.display = 'none';
        botaoReiniciar.style.display = 'block';
    } else if (palpite < numeroSecreto) {
        resultado.innerHTML = `O número que estou pensando é <span class="maior">maior</span> que ${palpite}. Tente novamente.`;
        inputPalpite.value = "";
        inputPalpite.focus();
    } else {
        resultado.innerHTML = `O número que estou pensando é <span class="menor">menor</span> que ${palpite}. Tente novamente.`;
        inputPalpite.value = "";
        inputPalpite.focus();
    }
}

function reiniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    
    let inputPalpite = document.getElementById("inputPalpite");
    let resultado = document.getElementById("resultado");
    let botaoEnviar = document.getElementById("botaoEnviar");
    let botaoReiniciar = document.getElementById("botaoReiniciar");

    resultado.innerHTML = "";
    inputPalpite.value = "";
    inputPalpite.style.display = 'inline-block';
    botaoEnviar.style.display = 'inline-block';
    botaoReiniciar.style.display = 'none';
    
    inputPalpite.focus();
}
