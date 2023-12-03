let num = 5 + Math.random();
let pow = num * num           // Devo farlo tante volte
console.log(pow / num)

/* Funzioni: blocco di istruzioni che posso scrivere una volta e 
riutilizzare n volte all'interno del mio programma */

function func(x) {                // La x è un parametro all'ingresso della funzione
    let num = x + Math.random();
let pow = num * num      
//console.log(pow / num)
return pow / num;
}

let num1 = func(3);

let num2 = func(9);

let num3 = func(1);

console.log()

/*
// Dichiarazione di Funzione
    function nameFunction(params) {
    // blocco di istruzioni
    return // valore di ritorno
}
namefunction(...params?) // Invocazione di funzione

// Funzioni Espressione
let Exprfunc = function(...params?) {
    // blocco di istruzioni
    return val
}
ExprFunc(...params?) // Invocazione di funzione

// Arrow Function
let arrowFunc = () => // blocco di istruzioni
*/

function printString() {
    console.log("Hello world!");
}

printString();   // Esegue la funzione

function somma(x, y) {
    let sum = x + y;
    //console.log(sum)
    return sum;
}

let res = somma(3, 9);   // res sarà il valore di ritorno di 3 e 9
console.log(res);
let sum2 = somma(res, 5);
console.log(sum2);
//somma('Ciao ', 'ragazzi');

let num4 = somma(5,8,6);  // Se do 3 valori mi prende i primi 2
console.log(num4)

let un = somma(6);        // Se do 1 valore mi darà NaN (undefined), poichè fa la somma tra un numero e un parametro undefined
console.log(un);

// Array arguments nelle funzioni di Javascript

function func() {
    let result = 0;
    console.log('Argomenti di una funzione: ' + arguments.length)
    for(let i = 0; i < arguments.length; i++) {
        //console.log(arguments[i])
        result += arguments[i];
    }
    return result;
}

let result = func(5, 8, 8, 9);
console.log(result);

// Hoisting delle variabili/funzioni

//console.log(test2)     // Con let mi da un messaggio di errore, con var undefined
console.log(test);       // Stampa undefined perchè tutte le dichiarazioni (var test) le porta in alto
var test = "Test Var";
let test2 = "Test let"
console.log(test);
console.log(test2)

func()                  // Con la funzione indipendentemente da dove la metto la legge
function func() {
    console.log("Test func")
}
func();   

// Expression function

//func2();                       // Mi da errore
let func2 = function() {       // Si differenzia dalla dichiarazione perchè se la richiamo prima non funziona
    console.log("Test func2")
}
func2();

/*
if(condizione) {                   // Questa la prende e la porta in alto, mentre
    function func() {                 con expression esiste dal momento che la dichiaro
        console.log("Test func")
    }
}
*/

// Particolarità di una funzione javascript

let f1 = function() {
    return 'Sono una funzione';
}

let result2 = f1;  // Senza parentesi assegno il corpo della funzione alla variabile result
console.log(result2);

// Arrow Function

let arrFunc1 = (x, y) => console.log("Sono una funzione");
console.log(arrFunc1());

// Scope di una variabile

let v1 = "Sono una variabile globale";  // Global Scope
var v2 = "Sono una variabile globale";  // Global Scope
{
    let v1 = "Sono una variabile di blocco";  // Block Scope
    var v2 = "Sono una variabile globale";   // Global Scope // PROBLEMA: utilizzare solo let
}
function fscope() {
    let v1 = "Sono una variabile di function"; // Function Scope
    var v2 = "Sono una variabile di function"; // Function Scope
}

// Con var io vado a definire una variabile globale ovunque, usando let definisco la variabile solo dove l'ho inizalizzata (non esce dal block)

// Metodi della stringa

let stringa = " Sono una variabile di tipo String di Epicode ";

console.log(stringa.indexOf("di"));   // Mi da la prima porzione di sottostringa che incontr
console.log(stringa.lastIndexOf("di"));  // Mi da l'ultima porzione di sottostringa che trova
console.log(stringa.search("di"));
console.log(stringa.length);        // Mi da la lunghezza di una stringa
console.log(stringa.slice(5,18));  // Taglio una porzione di stringa scrivendo da che indice parto e da quale finisco (in questo caso esce: Una variabile)
console.log(stringa.slice(-8)); // Anche con numeri negativi, parte dal fondo e va all'indietro
console.log(stringa.replace('a', 'X'));   // Replace mi sostituisce la prima lettera che incontra ('a') con quella che indico ('X')
console.log(stringa.replaceAll('a', 'X')); // ReplaceAll me le sostituisce tutte
console.log(stringa.toLowerCase());  // Modifica tutto in minuscolo
console.log(stringa.toUpperCase());  // Modifica tutto in maiuscolo
console.log(stringa.concat(' - Fine'))  // Concatena una parola alla fine della stringa
console.log(stringa.trim());    // Pulisce da spazi esterni
console.log(stringa.charAt(10));  // Mi prende la lettera all'indice indicato
console.log(stringa.split('di'));  // Ogni volta che incontra uno spazio taglia, creando più proprietà in un array

// Metodi di Math

let numCas= Math.random() * 10;    // Genera numeri casuali
console.log(Math.floor(numCas));   // Arrotonda per difetto
console.log(Math.ceil(numCas));    // Arrotonda per eccesso
console.log(Math.round(numCas));  // Arrotonda al numero più vicino (5.6 = 6)
console.log(Math.max(19, 8 , 4, 2, 15));  // Mi da il valore massimo
console.log(Math.min(19, 8 , 4, 2, 15));  // Mi da il valore minimo

// Metodi di date

let now = new Date();       // Mi restituisce giorno, data e ora di oggi
console.log(now);

let bdate = new Date(2023, 10, 23);  // Definisco una data mettendo anno - mese - giorno
console.log(bdate);

now.setDate(22);   // Modifico il numero del giorno

console.log('Oggi è il giorno ' + now.getDate() + " del mese " + now.getMonth());