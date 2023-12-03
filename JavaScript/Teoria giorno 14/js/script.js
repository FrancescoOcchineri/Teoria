let now = new Date()
let calendar = document.querySelector('#calendar')
let lastDayDate = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    let lastDayOfTheMonth = lastDayDate.getDate();
    let appointments = [];
creaCalendario()
creaArrayAppuntamenti()

appointments[14][0] = 'Test'

function creaCalendario () {
    let h2 = document.querySelector('h1 + h2')
    h2.innerText = nomeMese(now.getMonth() +1)
    //console.log(lastDayOfTheMonth);
for(let i = 1; i <= lastDayOfTheMonth; i++) {
    const dayCellNode = document.createElement('div');
    dayCellNode.className = 'day';
    dayCellNode.addEventListener('click', () => {
        // Soluzione 1 --> seleziona ma non cancella la selezione
        //dayCellNode.classList.add('selected')
        selezionaGiorno(dayCellNode) // Soluzione 2 -> seleziona e cancella le selezioni precedenti
    showAppointments(i-1)
        //let currentDayAppointments = appointments[i-1]
        /*if (currentDayAppointments.length > 0) {
           showAppointments(i-1)
        } else {
            document.querySelector('#appointments').style.display = 'none'
        }
    })*/
    const day = document.createElement('h3');
    day.innerText = i;
    let today = now.getDate()
    if (today === i) {
        day.className = 'color-epic';
    }
    dayCellNode.appendChild(day);
    calendar.appendChild(dayCellNode);
})
}
}

function nomeMese(m) {
    switch (m) {
        case 1: return 'Gennaio'
        case 2: return 'Febbraio'
        case 3: return 'Marzo'
        case 4: return 'Aprile'
        case 5: return 'Maggio'
        case 6: return 'Giungno'
        case 7: return 'Luglio'
        case 8: return 'Agosto'
        case 9: return 'Settembre'
        case 10: return 'Ottobre'
        case 11: return 'Novembre'
        case 12: return 'Dicembre'
    }
}

function creaArrayAppuntamenti() {
    for(let i = 0; i< lastDayOfTheMonth; i++) {
        appointments[i] = []
    }
}

function selezionaGiorno(day) {
   let calendar = document.querySelectorAll('#calendar div')
    for(let i = 1; i <= calendar.length; i++) {
        calendar[i].className = 'day';
        if(calendar[i] === day) {
            day.classList.add('selected')
        }
    }
}

function showAppointments(index) {
document.querySelector('#appointments').style.display = 'block'

let selectedDayAppointments = appointments[index];
let ul = document.querySelector('#appointments ul')
ul.innerHTML = '';
selectedDayAppointments.forEach(element => {
let li = document.createElement('li')
li.innerText = element.appendChild(li)
})
}
