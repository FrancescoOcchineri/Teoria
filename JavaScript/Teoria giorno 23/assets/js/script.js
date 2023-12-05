// Variabili JS

let var1 = 'testo';
let var2 = 25;
let var3 = true;
let var4 = [25, 9, 6, 12, 18];
let var5 = {};
let var6 = undefined;
let var7 = null;

// Funzioni JS

// Dichiarazione di funzione
func1();
function func1(params) {
    // blocco di istruzioni
    return params;
}
// Funzione espressione
// func2(); Errore 
let func2 = function (params) {
    // blocco di istruzioni
    return params; // ritorno di un valore
}
func2();

// Arrow function
let func3 = (params) => {
    // Blocco di istruzioni
    return params;
}
func3();

// Funzioni auto-invocanti
(function () {
    console.log("Sono una funzione anonima!!!")
})()

// funzione di callback 
function call(name) {
    return "sono una funzione di callback di nome" + name;
}

function sum(num) {
    return num + Math.floor(Math.random() * 10);
}

function miaFunc(v, f) {
    console.log(f(v));
}
miaFunc('abc', call);
miaFunc(25, sum);

function itera(n, i) {
    console.log(i + ": " + n);
}

var4.forEach(itera);

var4.forEach((n, i) => {
    console.log(i + ": " + n);
})

// Object JS
let obj1 = {
    name: 'Mario',
    "last name": 'Rossi',
    city: 'Roma',
    2: "occhi",
    saluta: function () {
        return this.name + " " + this.city;
    }
}
console.log(obj1);
console.log(obj1.name);       // dot notation
console.log(obj1['name']);    // bracket square notation
console.log(obj1['last name']);
console.log(obj1[2]);
console.log(obj1.saluta());

let fiat500 = {
    marca: 'Fiat',
    modello: '500',
    alimentazione: 'benzina',
    colore: 'Rosso'
}

let fordFiesta = {
    marca: 'Ford',
    modello: 'Fiesta',
    porte: 3,
    colore: 'Blu'
}

let smartt = {
    marca: 'Mercedes',
    modello: 'Smart',
    cambio: 'automatico',
    colore: 'Nero'
}

// Prototipo javascript
function Auto(marca, modello, colore) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
}

let cinquecento = new Auto('Fiat', '500', 'Rosso');
let fiesta = new Auto('Ford', 'Fiesta', 'Blu');
let smart = new Auto('Mercedes', 'Smart', 'Nero');

Auto.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}

smart.cambio = 'automatico';
Auto.prototype.ruote = 4;

console.log(cinquecento);
console.log(fiesta);
console.log(smart);

// Classi in JS
// Ereditarietà

class AutoClass {
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
}

let c = new AutoClass('Fiat', '500', 'Rosso');
let f = new AutoClass('Ford', 'Fiesta', 'Blu');
let s = new AutoClass('Mercedes', 'Smart', 'Nero');

console.log(c);
console.log(f);
console.log(s);

class Persona {

    static count = 0;

    constructor(nome, cognome, città, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.città = città;
        this.anni = anni;
        Persona.count++;
    }

    compleanno() {
        this.anni++;
    }

    saluta() {
        return 'Ciao sono' + this.name + " " + this.cognome;
    }

    verso() {
        return 'Aaaaaah';
    }

    confronta(p) {
        if (p.anni > this.anni) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

class Uomo extends Persona {
    constructor(nome, cognome, città, anni, barba) {
        super(nome, cognome, città, anni);
        this.barba = barba;
    }

    static lavora() {
        return 'Sto lavorando';
    }
}

class Donna extends Persona {
    constructor(nome, cognome, città, anni, smalto) {
        super(nome, cognome, città, anni);
        this.smalto = smalto;
    }

    contabilita() {

    }
}

class Altro extends Persona {
    constructor(nome, cognome, città, x) {
        super(nome, cognome, città)
        this.x = x;
    }
}

let u = new Uomo('Mario', 'Rossi', 'Roma', 44, true);
console.log('Persone: ' + Persona.count);
let g = new Uomo('Giuseppe', 'Verdi', 'Milano', 39, true);
console.log('Persone: ' + Persona.count);
let d = new Donna('Francesca', 'Neri', 'Roma', 33, false);

console.log(u);
console.log(d);
console.log(u.confronta(g +))