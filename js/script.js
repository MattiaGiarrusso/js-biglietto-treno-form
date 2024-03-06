// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, 
// secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// ALLERT INFO PREZZO BIGLIETTO
const priceForKm = 'INFO: Il prezzo del biglietto è € 0.21 al km, se non intende pagare potrebbe essere soggetto ad una contravvenzione';
console.log(priceForKm);
alert (priceForKm);

// Creare un formattatore per i prezzi
const formatter = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});



// Creare una funzione legata al button 'genera biglietto'
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    
    const userKm = parseInt(document.querySelector('#user-km').value);
    console.log(userKm);
    const userAge = parseInt(document.querySelector('#user-age').value);
    console.log(userAge);

    const priceTicketStandard = 0.21 * userKm;
    console.log(priceTicketStandard)

    let userMessage;

    let priceTicketFinal = parseFloat(priceTicketStandard);

    if(userAge < 18) {
        priceTicketFinal = (priceTicketStandard - ((priceTicketStandard * 20) / 100)).toFixed(2);
        userMessage = 'Il tuo biglietto con sconto minorenni è di'; 
    } else if (userAge > 65) {
        priceTicketFinal = (priceTicketStandard - ((priceTicketStandard * 40) / 100)).toFixed(2);
        userMessage = 'Il tuo biglietto con sconto anziani è di';
    } else {
        priceTicketFinal = (priceTicketStandard);
        userMessage = 'Il tuo biglietto è di';
    }

    console.log(priceTicketFinal)


    // stampare il messaggio d'acquisto nel div html 
    const userMessageDiv = document.querySelector('#user-message');
    userMessageDiv.innerHTML = `${userMessage} ${formatter.format(priceTicketFinal)}`;
    userMessageDiv.classList.add('active');
});


// creare un button per la pulizia del form
const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-km').value = '';
    document.querySelector('#user-age').value = '';
    document.querySelector('#user-message').value = '';


    const userMessageDiv = document.querySelector('.user-message');
    userMessageDiv.innerHTML = '';
    userMessageDiv.classList.remove('active');
});


