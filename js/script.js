//# ----------- PRIMO ESERCIZIO ----------

/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

//Targhettizzo elementi in pagina

const userNumber = document.getElementById('user-number');
const aiNumber = document.getElementById('ai-number');
const winner = document.getElementById('winner');

//Genero un numero random per ai e utente

const userRandom = Math.floor(Math.random() * 6) + 1;
const aiRandom = Math.floor(Math.random() * 6) + 1;

//Stampo in pagina i numeri estratti

userNumber.innerText = `Ti è uscito il numero: ${userRandom}`;
aiNumber.innerText = `L'IA ha estratto il numero: ${aiRandom}`;

//Controllo quale numero è più alto e stampo il vincitore

let message = 'E\' un pareggio! Ritenta'

if (userRandom > aiRandom){
    message = 'Complimenti hai Vinto!';
} else if (userRandom < aiRandom){
    message = 'Mi dispiace, hai perso :(';
}

winner.innerText = message;

//# ----------- SECONDO ESERCIZIO ----------

/*
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

//Targhettizzo gli elementi in pagina

const email = document.getElementById('email');
const button = document.getElementById('button');
const checkMessage = document.getElementById('check-message');

//Creo lista email autorizzate

const authorizedEmail = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@alice.it','ciccio@live.it'];

//Controllo che la mail inserita sia nell'elenco

button.addEventListener('click', function(){
    const userEmail = email.value.trim();

    let isAuthorized = false;

    for (let i = 0; i < authorizedEmail.length && !isAuthorized; i++){
        
        const checkedEmail = authorizedEmail[i];
        
        if(userEmail === checkedEmail){   
            isAuthorized = true;
        }

        console.log(userEmail, checkedEmail)
    }

    let alertType = 'alert-warning';
    let alertSymbol = '<i class="fa-regular fa-circle-xmark me-3"></i>';
    let message = 'La mail inserita non è autorizzata!';

    if(isAuthorized){
        alertType = 'alert-success';
        alertSymbol = '<i class="fa-regular fa-circle-check me-3"></i>';
        message = ' La mail inserita è autorizzata!';
    }

    const alert = `
    <div class="alert ${alertType} d-flex align-items-center" role="alert">
        ${alertSymbol}
        <div>
            ${message}
        </div>
    </div>
    `;
    
    checkMessage.innerHTML = alert;
});