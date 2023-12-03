// Spread Operator
//...nomeVar  (prendo i valori che ci sono all'interno dell'array, eliminandolo)

let arr1 = [5, 7 ,9];
//let arr2 = Object.assign([], arr1)  - Come si faceva prima il clone
let arr3 = [...arr1];                // Clone del primo array

console.log(...arr1);
//console.log(arr2);
console.log(arr3);

let obj1 = {
    name: "Mario",
    lastname: "Rossi",
    age: 45,
    city: "Roma"
}

let obj2 = Object.assign({}, obj1);
let obj3 = {...obj1,
            city: "Milano",   // Clono oggetto e modifico una valore di una proprietà (city da Roma a Milano)
            test: "true"      // Aggiungo nuove proprietà  
};
console.log(obj1);
console.log(obj2);
console.log(obj3);

// Rest Parameter
// function func(...parameter) {}

function func1() {
    console.log(arguments)
}

function func2(...args) {    // Rest parameter, lo uso quando non ho la certezza del numero di valori da manipolare
    console.log(args.length)
    console.log(args[0])
}

/*func('Mario', 'Rossi')
func1(9, 5, 6, 7)
func2(9, 5, 6, 7)
func2(...arr3) */

// Destructuring Operator

let obj = {
    name: "Mario",
    lastname: "Rossi",
    age: 45,
    city: "Roma"
}

/*let name = obj.name;
let lastname = obj.lastname; */

let { city: citta, name } = obj;

console.log(citta)
console.log(name)      // Estrapolo delle proprietà

let arr = [5, 7, 9];
let x= arr[1];
let [ , , y] = arr;

console.log(x, y);

// Template Literals

let str = "Ciao sono " + obj.name + "  " + obj.lastname + " La mia città è " + obj.city + " ed ho " + obj.age
let str2 = ""
console.log(str)

// Metodi array 
// Splice

let arrMethod = [5, 7, 9, 56, 12, 75, 6, 8];
console.log(arrMethod)

let arrRemove = arrMethod.splice(2, 3)            // Rimuove un elemento all'array
console.log(arrRemove)
console.log(arrMethod)

let arrUpdate = arrMethod.splice(2, 1, 9999999)  // Aggiunge un elemento all'array
console.log(arrUpdate)                      
console.log(arrMethod)

let newArr = [5, 5, 5];
let newArrConcat = [...arrMethod, ...newArr]  // Concatena due array, li unisce
let sliceArr = newArrConcat.slice(2, 5)
console.log(newArrConcat)
console.log(sliceArr)

// For loop

let altroArray = ['Uno' , 'Due', 'Tre', 'Quattro', 'Cinque'];
for(let i=0; i<altroArray.length; i++) {
    console.log(altroArray[i])
} 

for (const key in altroArray) {                // Ciclo for abbreviato, for in mi legge le chiavi di un array (la proprietà di un oggetto)
    console.log(key + ": " + altroArray[key])  
}

for (const value of altroArray) {     // Ciclo for of, mi legge i valori
    console.log(value)
}

// Dichiarazione di funzione
f1()
function f1(params) {
    // blocco di istruzioni
}
f1()

// Funzione Espressione (posso richiamarla solo alla fine)
let f2 = function (params) {
    // blocco di istruzioni
}
f2()

// Funzione Freccia

let f3 = (params) => {
    // blocco di istruzioni
}
f3();

(param) => {
    // blocco di istruzioni
}

() => {
    // blocco di istruzioni
}

param => {
    // blocco di istruzioni
}

(param1, param2, ...params) => {
    // blocco di istruzioni
}

() => returnValue;

// Array Method Advanced

function callFunc(val) {
    console.log(val);
}

// callFunc('ciao')

altroArray.forEach(
    callFunc
)     

console.log('--------------')

altroArray.forEach(
    function(val) {          // Soluzione più ottimizzata
        console.log(val)
    }
)

console.log('--------------')

// forEach() --> itera un array, non ha ritorno
altroArray.forEach((val, index) => console.log(index + ": " + val))

// map() -> modifica ogni elemento contenuto in un array e ne ritorna un nuovo array modificato
let newArrMap = altroArray.map(val => val + '!!!')
console.log(newArrMap)

// filter() --> filtra un array in base ad una condizione e ne ritorna un nuovo array filtrato
let filterArray = altroArray.filter(ele => ele.length > 4)
console.log(filterArray)

// reduce() --> manipola tutti i valori di un array di tipo numerico e ne restituisce un risultato
let arrNum = [5, 3, 8, 6, 2];
let tot = arrNum.reduce((acc, value) => acc * value, 1)
console.log(tot)

// every() --> restituisce true se tutti i valori di un array soddisfano una condizione
let b = arrNum.every(ele => ele > 0);
console.log(b)

// some() --> restituisce true se almeno un valore dell'array soddisfa una condizione
let s = arrNum.some(ele => ele > 6);
console.log(s);

// find()
// findIndex()

let arrUser = [{
    id: 1,
    name: "Mario",
    lastname: "Rossi",
    age: 45,
    city: "Roma"
},{
    id: 2,
    name: "Giuseppe",
    lastname: "Verdi",
    age: 22,
    city: "Milano" 
},{
    id: 3,
    name: "Francesca",
    lastname: "Neri",
    age: 31,
    city: "Napoli" 
}]

let user = arrUser.find(u => u.id === 1);
console.log(user)
let indexUser = arrUser.findIndex(u => u.name === 'Francesca')
console.log(indexUser)

