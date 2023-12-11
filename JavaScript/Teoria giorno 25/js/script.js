// Chiamate Ajax tramite XMLHttpRequest

let xhr = new XMLHttpRequest(); // Obj in grado di effettuare richieste al Server - readystate = 0
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');  // definisco il method della chiamata e Url dell'API scelta - readystate = 1
xhr.send();  // Eseguo la chiamata - readystate = 2
// - readystate = 3 LOADING Downloading; responseText holds partial data
// - readystate = 4 DONE The operation is complete
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {  // Controllo che la risposta del server sia terminata (xhr.status === 200) e che sia terminata con successo
        console.log("The operation is completed");
        let json = xhr.responseText;                // (xhr.responseTextxhr) Ho accesso al JSON che mi invia il server
        let obj = JSON.parse(json)                 // Faccio il pars del JSON (array di oggetti) e lo trasformo in un array di oggetti javascript
        console.log(obj);
        createList(obj);
    }
}

xhr.onerror = function () {
    console.log('Error!! ' + xhr.responseText);   // Gestione degli errori
}

// Lo inserisco quando ho lo script nell'head (nell'HTML) in modo che eseguo il div una volta che la pagina è stata caricata, leggendolo cosi correttamente nella console

document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('.user');
    console.log(div);
})



function createList(users) {
    let div = document.querySelector('.users');
    users.forEach(u => {
        let p = document.createElement('p');
        p.innerText = u.name + "(" + u.email + ")";
        div.appendChild(p);
    })
    div.appendChild(document.createElement('hr'));
}


//  Chiamate Ajax tramite Fetch
let obj = {
    email: "Shanna@melissa.tv",
    name: "Ervin Howell",
    phone: "010-692-6593 x09125",
    username: "Antonette",
    website: "anastasia.net"
}

fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })      // Faccio la chiamata, posso anche non metterlo { method: 'GET' } perchèdi default farà il GET
    .then(response => response.json())                                     // Prendo gli oggetti javascript della chiamata
    .then(obj => {
        console.log(obj)                                                 // Passo l'arrey di oggetti a createlist
        createList(obj)
    })
    .catch(error => console.log('Error!! ' + error))                      // Gestione degli errori





// Esempi di chiamate Ajax tramite Fetch

// Chiamata di tipo GET - Lettura
fetch('https://jsonplaceholder.typicode.com/users');                                 // Chiamata di tipo GET, default
fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })              // Chiamata di tipo GET, esplicitata

// Chiamata di tipo POST - Salvataggio di una risorsa
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',                                                                   // Method della chiamata
    body: JSON.stringify(obj),                                                       // Nel body della richiesta invio il dato al server 
    headers: {
        'Content-Type': 'application/json'                                              // Il tipo del contenuto
    }
})

// Chiamata di tipo PUT - Modifica di una risorsa
fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'PUT',                                                                   // Method della chiamata
    body: JSON.stringify({
        id: 2,
        email: "mariolino@gmail.tv",
        name: "Mario Rossi",
        phone: "010-692-6593 x09127",
        username: "Mariolino",
        website: "mario.net"
    }),                                                       // Nel body della richiesta invio il dato al server 
    headers: {
        'Content-Type': 'application/json'                                              // Il tipo del contenuto
    }
})

// Chiamata di tipo DELETE - Elimino una risorsa
fetch('https://jsonplaceholder.typicode.com/users', { method: 'DELETE' })

// Promise

let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function (value) { /* code if successful */ },
).catch(
    function (error) { /* code if some error */ }
);

