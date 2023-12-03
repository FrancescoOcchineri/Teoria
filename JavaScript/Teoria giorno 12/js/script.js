// BOM --> Browser Object Model
// Tutte le funzionalità che ci mette a disposizione il browser per operare sul browser dell'utente
// DOM --> Document Object Model
// Tutte le funzionalità di una pagina

console.log(window);
console.log(window.document);
console.dir(window.document);

// Selezione di un nodo html tramite il suo ID
let h = window.document.getElementById("titolo")
console.log(h);
console.dir(h);

h.innerText = "Testo modificato tramite javascript"
h.style.textDecoration = "underline"
h.style.textAlign = "center"
console.log(h.innerText)

// Selezione di un nodo html tramite la sua classe
// getElementsByClassName restituisce un HTMLCollection
let p = document.getElementsByClassName("txt")
console.log(p)

// Selezione di un nodo html tramite il Tag Name
// getElementsByTagName restituisce un HTMLCollection
let a = document.getElementsByTagName("a")
console.log(a)
a[0].style.color = "red"
a[1].style.color = "green"
a[2].style.color = "blue"

// Selezione di un nodo html tramite selettore css
// querySelector restituisce il nodo
// querySelectorAll restituisce una NodeList
let h1 = document.querySelector("#titolo")
console.log(h1)
let p1 = document.querySelector(".txt")
console.log(p1)
let aAll = document.querySelectorAll("a")
console.log(aAll)
let a1 = document.querySelector("a[title='link2']")
console.log(a1)
let innerP = document.querySelector("div p")
innerP.style.color = 'green'

// Creare nuovi nodi HTML tramite Javascript
// CreateElement crea un nuovo nodo html

let titolo = document.createElement('h2')
titolo.innerText = "Titolo creato con js"
titolo.style.textTransform = "uppercase"
console.log(titolo)

// Seleziono un nodo radice presente nella pagina HTML
let section = document.querySelector('section');
section.appendChild(titolo);

let testo = document.createElement('p')
testo.innerText = "Paragrafo"
testo.style.textAlign = 'center'
console.log(testo)

section.appendChild(testo)

// Navigazione del DOM

console.log(section);
console.dir(section);

let main = section.parentNode // Con parentNode risalgo al padre di un nodo (main)
console.log(main)

let body = section.parentNode.parentNode //due parentNode risalgo al padre del main (body)

section.children[1].innerText = '----------'   // children vede i figli di section

function clickBtn() {
    alert('Button cliccato!!!')
}

