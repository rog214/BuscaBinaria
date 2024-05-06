let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkAttempt() {
    let guessInput = document.getElementById("guessInput");
    let guess = parseInt(guessInput.value);
    let output = document.getElementById("output");

    if (isNaN(guess) || guess < 1 || guess > 100) {
        output.textContent = "Por favor, insira um número válido entre 1 e 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        output.innerHTML = `<span class="acertou">Parabéns! Você acertou!</span> O número secreto é ${randomNumber} e você acertou em ${attempts} tentativas.`;
    } else if (guess < randomNumber) {
        output.innerHTML = `O número que estou pensando é <span class="maior">maior</span> que ${guess}. Tente novamente.`;
    } else {
        output.innerHTML = `O número que estou pensando é <span class="menor">menor</span> que ${guess}. Tente novamente.`;
    }

    guessInput.value = "";
}
