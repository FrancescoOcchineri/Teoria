// Chiamate Ajax

let xhr = new XMLHttpRequest(); // Obj in grado di effettuare richieste al Server - readystate = 0
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');  // definisco il method della chiamata e Url dell'API scelta - readystate = 1
xhr.send();  // Eseguo la chiamata - readystate = 2
// - readystate = 3 LOADING Downloading; responseText holds partial data
// - readystate = 4 DONE The operation is complete
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("The operation is completed");
        let json = xhr.responseText;                // prendo i dati e le stampo in console
        let obj = JSON.parse(json)
        console.log(obj);
        createList(obj);
    }
}

// Lo inserisco quando ho lo script nell'head (nell'HTML) in modo che eseguo il div una volta che la pagina è stata caricata, leggendolo cosi correttamente nella console

document.addEventListener('DOMContentLoaded', () => {
    let div = document.querySelector('.user');
    console.log(div);
})



function createList(users) {
    users.forEach(u => {
        let p = document.createElement('p');
        p.innerText = u.name + "(" + u.email + ")";
        div.appendChild(p);
    })
}