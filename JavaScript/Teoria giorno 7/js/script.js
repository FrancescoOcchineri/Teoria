let nome = 'Mario';
let cognome = 'Rossi'; 
let età = 45;
let città = 'Roma';

const utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    età: 45,
    città: 'Roma'
}

let eta2 = età;
eta2 += 5;                 // eta sarà ancora 45, perchè sono variabili primitive

console.log(utente.nome)   // leggo una proprietà di un oggetto

utente.nome = 'Giuseppe'; // Modifico il valore di una proprietà di un oggetto
utente.cap = '00100';    // Aggiungo una nuova proprietà ad un oggetto
delete utente.città;    // Elimino una proprietà ad un oggetto


// Errore non posso modificare una costante
/* utente = {
    nome: 'Giuseppe',
    cognome: 'Verdi',
    età: 21,
    città: 'Milano'
} */

const newUtente = utente;
const copyUtente = Object.assign({}, utente);    // Faccio una copia di utente in copyUtente

console.log("Utente: ", utente);          // Andando in maniera procedurale questo mi stamperà utente non modificato
console.log("CopyUtente: ", copyUtente);

newUtente.cognome = 'Verdi';
newUtente.città = 'Milano';

console.log("Utente: ", utente)      // Utente ora avrà gli stessi valori di newUtente, essendo oggetti sto condividendo lo stesso spazio di memoria
console.log(typeof utente);
console.log("NewUtente: ", newUtente);
console.log("CopyUtente: ", copyUtente);

// Array
// let arr = [0:val, 1:val, 2:val, ...., n-1:val]
let animals = ['Gatto', 'Cane', 'Tartaruga'];  // Posso mettere stringhe
let numbers = [25, 78, 92];                   // Posso mettere numeri
let utenti = [utente, copyUtente, newUtente];  // Posso mettere oggetti
let mix = ['testo', 23, true, utente]          // Posso fare un mix

// Quando abbiamo parentesi tonde sono sempre funzioni, graffe oggetti e quadre array

// let arr = new Array(); // Metodo equivalente
const arr = ['Gatto', 'Cane', 'Tartaruga'];

console.log(typeof arr);
console.log(arr[2]);    // Chiedo di leggere l'elemento all'indice 2 (gatto=0, Cane=1, Tartaruga=2)

arr[2] = 'Coniglio';  // Modifico un valore in un array
arr[4] = 'Serpente'; // Aggiungo un valore in un array

arr.push('Colomba');                  // Push aggiunge un elemento in coda ad un array
arr.unshift('Zebra');                // Unshift aggiunge un elemento all'inizio di un array
let endval = arr.pop();             //  Pop elimina e mi restituisce l'ultimo elemento in un array
//arr.pop();                       // Elimino l'ultimo elemento rimasto
let startval = arr.shift();       // Shift elimino il primo elemento in un array    
arr.splice(1, 2)                 // Splice elimino elementi centrali in un array, partendo da un indice specificato   
arr.splice(1,1, 'Coniglio');    // Elimina ed inserisce un nuovo elemento partendo da un indice specificato (1, 1)
arr.splice(1,0, 'Tartaruga')
arr.sort()                    // Ordina (in questo caso alfabetico, con numeri in ordine numerico ecc..) un array

console.log(arr);
console.log(arr.length);   // La proprietà length mi restituisce la lunghezza del nostro array

// Strutture condizionali
// If - Else

let num = prompt('Inserisci un numero');

if(num > 10) {
    console.log('il numero inserito è maggiore di 10');
} else if(num == 10) {
    console.log("Il numero inserito è uguale a 10")
}
 else {
    console.log("Il numero inserito è minore di 10");
} 

console.log("FINE");

// TRUE: true | qualunque altro numero | stringa piena | stringa vuota | oggetto vuoto {} - []
// FALSE: false | 0 | '' | null | undefined | NaN (Non è un numero)
if(5) {
    console.log("Eseguo il blocco di istruzioni");
}

let voto = prompt("Inserisci il voto preso");
if (num > 5) {
    console.log("Test passato");
} else if (num == 5) {
    console.log("Test non passato")
} else {
    console.log("Test non passato");
}
