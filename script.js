
const startDate = new Date('2023-12-02T14:00:00'); // Exemplo: 15 de junho de 2023
const timerDisplay = document.getElementById('timeDisplay');

function updateTimer() {
    const now = new Date();
    const timeDiff = now - startDate;

    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timerDisplay.textContent = `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

// Atualiza o timer a cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// Ajuste para parallax em dispositivos móveis (desativa se necessário)
if (window.innerWidth <= 768) {
    document.querySelectorAll('.parallax').forEach(el => {
        el.style.backgroundAttachment = 'scroll';
    });
}