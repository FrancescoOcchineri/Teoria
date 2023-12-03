// Stampa in una console del borowser il contenuto inserito nelle parentesi tonde
console.log("Sono nel file esterno alla pagina");

var v;                // Dichiarazione di una variabile
v = 'valore';        // Inizializzazione di variabile dopo averla dichiarata
var q = 'valore'    // Dichiarazione e inizializzazione di una variabile

var g;
var g = 'abc';

// Number | String | Boolean | Null | Undefined
var num1 = 25;
var num2 = 15.5;
var str1 = "Questa è la somma: ";          // A Javascript vanno bene sia i doppi che singoli apici
var str2 = 'Questo è un\' testo';          // Se io all'interno ho una scritta con un apostrofo sono obbligato a mettere apici doppi, ma se metto \ non considera il carattere successivo
var bol1 = true; 
var bol2 = false;
var emp1 = null;             // Aveva un valore e gli è stato tolto
var emp2 = undefined;       // Mai stata inizializzata , non ha mai avuto un valore                                                                                                                                 

var sum = num1 + num2;
var printSum = str1 + sum;
console.log(printSum);
console.log(str1 + (num1 + num2));

let newTest;
const COS = "Sono una costante!!"; 

{
    let innerTest = "Nuovo Test!!!";   // Se let lo definisco in un blocco, vado a definire una vatriabile più sicura, la visualizzo solo nel blocco e non fuori, var è globale
    console.log(innerTest); 
    //newTest = innerTest + test;           
}

test = "Modifico Var Test";

console.log(test);
//console.log(innerTest); ERRORE
console.log(newTest);

// var test = "Modifico Var Test";
// console.log(test);

// Data Type
let data = "Ciao Sono una String";
console.log(typeof data);
data = 25;
console.log(typeof data);

// Operatori Aritmetici
// + - * / %

let n1 = 3;
let n2 = 10;
let somma = n1 + n2;
let diff = n2 - n1;
let molt = n2 * n1;
let div = n2 / n1;
let mod = n2 % n1;
console.log("Somma: " + somma);
console.log("Differenza: " + diff);
console.log("Moltiplicazione: " + molt);
console.log("div: " + div);
console.log("Resto: " + mod);

//n1= n1 + 2;
//n1 += 2;       //Forma contratta, riassegnazione di n1, ora n1 = 5

//Operatori logici | == | === | != | !==
// & -> VERO se entrambe le condizioni sono vere
// || -> VERO se almeno una delle condizoni è vera
// ! -> VERO se la condizione è FALSA e il contrario
let n3 = 5
let n4 = '5' 
let n5 = 10;          
console.log(n3 === n4)  // Mi restituisce "true" con due uguali, con tre uguali mi restituisce valore e tipo 
console.log(n3 !== n4)  // ! mi dice se è diverso, con un uguale mi da false, con due uguali mi da true (mi dice se è diverso anche il tipo)
console.log(n3 !== n4 && n3 > n5)
console.log(n3 !== n4 || n3 >n5)

// Operatore Ternario
// let var= (Condizione) ?(se) 'true' :(altrimenti) 'false'
let età = 15;
let accesso = (età >= 18) ? 'Accesso Consentito' : 'Accesso negato'; 
console.log(accesso)

let n9 = 10;
let n10 = 15;
let som = n9 + n10
console.log(som);