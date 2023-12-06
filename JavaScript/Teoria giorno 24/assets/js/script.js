/* Object Literal Javascript */

let obj = {
    nome: 'Mario',
    cognome: 'Rossi',
    citta: 'Roma',
    eta: 25,
    occhiali: true,
    linguaggi: ['Javascript', 'html', 'css', 'sass'],
    indirizzo: {
        via: 'test 53',
        citta: 'Roma',
        regione: 'Lazio'
    }
};

/* Formato JSON (Javascript Object Notation) */

let json = {
    "nome": "Mario",
    "cognome": "Rossi",
    "citta": "Roma",
    "eta": 25,
    "occhiali": true,
    "linguaggi": ["Javascript", "html", "css", "sass"],
    "indirizzo": {
        "via": "test 53",
        "citta": "Roma",
        "regione": "Lazio"
    }
};

// Metodi della classe JSON (stringify - parse)

console.log(obj);
let jsonObj = JSON.stringify(obj);    // Metodo della classe JSON che trasforma un oggetto JS in json
console.log(jsonObj);
let objJson = JSON.parse(jsonObj);   // Metodo della classe JSON che trasforma un JSON in oggetto JS
console.log(objJson);

// Web storage (Local Storage - Session Storage)

localStorage.setItem("test", "Mio LocalStorage");
localStorage.setItem("name", "Ok Let's go");

console.log(localStorage.length);   // Mi da il numero di proprietà

let testLocal = localStorage.getItem("test");    // Mi da il valore dell'item test
console.log(testLocal);

let key = localStorage.key(0);     // Mi da la chiave (item) all'indice indicato, in questo caso "Name"
console.log(key);

localStorage.removeItem("test");  // Elimino la singola chiave

localStorage.clear();   // Elimino tutto all'interno del Local Storage

