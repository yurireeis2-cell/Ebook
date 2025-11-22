// Timer de Urgência
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    const fifteenMinutes = 60 * 15,
        display = document.querySelector('#timer');
    startTimer(fifteenMinutes, display);
};

// Função de Finalizar Compra
function finalizarCompra() {
    // SUBSTITUA pelo seu link da Kiwify
    window.location.href = 'https://pay.kiwify.com.br/SEU_ID_PRODUTO';
}