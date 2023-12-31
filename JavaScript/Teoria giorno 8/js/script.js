// Strutture di controllo
// if-else -> Esegui un blocco di istruzioni se la condizione è vera

/*
if(condizione) {
    // Blocco di istruzioni
}    else if(condizione) {
    // Blocco di istruzioni
} else {
    // Blocco di istruzioni
}


switch (espressione) {
    case value:
        // Blocco di istruzioni
        break;
        case value:
            //Blocco di istruzioni
            break;
            default:
                // Blocco di istruzioni
                break;
} */

let giornoSettimana = 4;
if(giornoSettimana === 1) {
    console.log('Oggi è lunedi');
} else if(giornoSettimana === 2) {
    console.log('Oggi è Martedi')
} else if(giornoSettimana === 3) {
    console.log('Oggi è Mercoledi');
}  else if(giornoSettimana === 4) {
    console.log('Oggi è Giovedi');
} else if(giornoSettimana === 5)  {
    console.log('Oggi è Venerdi');
} else if(giornoSettimana === 6) {
    console.log('Oggi è Sabato')
} else if(giornoSettimana === 7) {
    console.log('Oggi è Domenica')
} else ('Valore errato!');


switch (giornoSettimana) {
    case 1:
        console.log('Oggi è lunedi');
        break;
        case 2:
            console.log('Oggi è Martedi');
            break;
            case 3:
                console.log('Oggi è Mercoledi');
                break;
                case 4:
                    console.log('Oggi è Giovedi');
                    break;
                    case 5:
                        console.log('Oggi è Venerdi');
                        break;
                        case 6:
                            console.log('Oggi è Sabato');
                            break;
                            case 7:
                                console.log('Oggi è Domenica');
                                break;
                                default: 
                                console.log('Valore errato');
                                break;
}

let mese = 11;

switch (mese) {
    case 12:
        case 1:
            case 2:
            console.log('Inverno');
            break;
    case 3:
    case 4:
    case 5:
        console.log('Primavera')
        break;
    case 6:
    case 7:
    case 8:
        console.log('Estate');
        break;
    case 9:
    case 10:
    case 11:        
        console.log('Autunno');
        break;
        default:
            console.log('Valore errato')
}

// Strtutture iterative (cicli)
// While -> ripeti un blocco di istruzione finchè la condizione è vera

/* 
let count = valore
while (condizione) {
    // Blocco di istruzioni
    count++;
} 
*/

let val = 5
// val = val +1;
// val += 1;
val++; // Operatore unario di post incremento, mi incrementa solo di 1
++val; // Operatore unario di pre incremento
val--; // Operatore unario di post decremento, mi decrementa solo di 1
console.log(val);

// Particolarità di un operatore unario
let x = 5;
//let y = x + 1;
let y = x++;
console.log(x, y);

// NaN
// Un tipo di dato speciale che non è uguale neanche a se stesso
let n = NaN;
console.log(typeof n);  // NaN è di tipo number
console.log(n === NaN); // False
console.log(isNaN(n));  // True

let count = 5;
while (count > 0) {
console.log('Ciao');
// count -= 1;
count--;
} 
let sum = 0;
while(false) {
    let v = prompt('Inserisci un numero o end per terminare');
    if(v === 'end' || v === null) {
        break;
    }
    if(isNaN(Number(v))) {
        console.log('Non hai inserito un numero');
    } else {
    sum += Number(v);
    }
}
console.log(sum);

// Do-While -> ripeti un blocco di istruzioni FINCHE' la condizione è vera

/*
let count = val;
do {
    // Blocco di istruzioni
    count++;
} while (condition);
*/

let count2 = 5;
do {
   console.log('Ciao' + count2)
    count2--;
} while (count2 > 0);

console.log('Fine!');

/* while(true) {
    let pass = prompt('Inserisci password:');
    if(pass === 'qwerty') {
    break;
    }
} */

let pass;
do {
    pass = prompt('Inserisci password');
   }   while(pass !== 'qwerty')

   console.log('FINE!')

// For -> ripeti un blocco di istruzioni FINCHE' la condizione è vera

/* 
for (let count = val; condizione; count++) {
    // Blocco di istruzioni
} 
*/

for(let i = 0; i < 10; i++ ) {
    console.log('for: ' + i);
}

let arr = [28, 9, 15, 7, 6]
for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

console.log("FINE!");







