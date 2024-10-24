    // Funzione per generare un numero intero casuale
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Visualizza 5 numeri casuali in orizzontale
    const numeriDiv = document.getElementById('numeri');
    for (let i = 0; i < 5; i++) {
        const numeroCasuale = getRandomInt(1, 100);
        const numeroElement = document.createElement('div');
        numeroElement.className = 'alert alert-success numero';
        numeroElement.textContent = numeroCasuale;
        numeriDiv.appendChild(numeroElement);
    }

    let tempoRimanente = 10;
    const timerDiv = document.getElementById('timer');
    //Arrow function per il timer 
    const timer = setInterval(() => {
        tempoRimanente--;
        timerDiv.textContent = `Tempo rimasto per memorizzare: ${tempoRimanente} secondi`;
        
        if (tempoRimanente <= 0) {
            clearInterval(timer);
            timerDiv.textContent = "Tempo scaduto!";
            timerDiv.classList.remove('alert-primary', 'alert-danger');
            timerDiv.classList.add('alert-warning');
        }
    }, 1000);