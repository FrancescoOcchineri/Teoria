// Eventi JS
console.log(window)

function funClick() {
    //return "Click btn"
    console.log("Click btn")
}

let btn2 = document.querySelector('#btn2')
btn2.onclick = funClick;

let btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', () => console.log("Click btn"))

let btn = document.querySelector('form button')
//btn.addEventListener('click', function())
    /*let name = document.querySelector('form input[name="nome"]')
    if(name.value.trim().length >= 2) {
        console.log(name.value + ' OK')
    } else {
        console.log(name.value + ' Non corretto')
    }
})

let email = document.querySelector('form input[name="email"]')
if(email.value.trim().length >= 2) {   
     console.log(email.value + ' OK')
} else {
    console.log(email.value + ' Non corretto')
}
console.log(btn) */

//e.prevent(default)    // toglie ogni azione di default (in questo caso inviare i dati con il button)

let form = document.forms[0];
console.log(form[0].value)
console.log(form[1].value)
console.log(form[2].value)

/*window.setTimeout(() => {
    alert("setTimeout")
}, 5000)

let interval = setInterval(() => {
    console.log("setInterval")
}, 1000) 

setTimeout(() => {
    clearInterval(interval)
}, 10000) */


/*let bt1 = document.querySelector('#row1 button')
bt1.addEventListener('click' , (evt) => {
    console.log(evt.target)
    //alert('btn1')
})

let bt2 = document.querySelector('#row2 button')
bt2.addEventListener('click' , (evt) => {
    //alert('btn2')
})

let bt3 = document.querySelector('#row3 button')
bt1.addEventListener('click' , (evt) => {
    //alert('btn3')
})*/

/* let btns = document.querySelectorAll('table button')
btns.forEach(b => b.addEventListener('click', (evt) => {
    //console.log("Sono un btn della table")
    //console.log(evt.target)
    let tr = evt.target.parentNode.parentNode;
    tr.style.color = 'red';
}))
*/

// Propagazione degli eventi
let body = document.querySelector('body');
body.addEventListener('click', (evt) => {
    console.log(evt.target)
   let tr = evt.target.parentNode.parentNode;  // Mi colora qualsiasi button che metto nella table
    tr.style.color = 'red'; 
})
