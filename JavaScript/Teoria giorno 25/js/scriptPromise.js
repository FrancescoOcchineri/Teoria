// Promise

/*let myPromise = new Promise(function (myResolve, myReject) {
    // "Producing Code" (May take some time)

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let obj = JSON.parse(xhr.responseText);
            myResolve(obj);
        }
        xhr.onerror = function () {
            console.log('Error!! ' + xhr.responseText);   // Gestione degli errori
        }
    }
});

// "Consuming Code" (Must wait for a fulfilled Promise)
/*myPromise
    .then(obj => console.log(obj))
    .catch(err => console.log(err));

// Promise Fetch

/*let promise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json);  // GET => Promise<Response>
console.log(promise);   // Promise { <state>: "pending" }*/



// Codice



// Codice



// Codice



// Codice



/*promise
    .then(json => console.log(json))
    .catch(err => console.log(err)); */


// Async - Await

/*async function func() {
    let arr = [];
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => arr = json)
        .catch(err => console.log(err));
    console.log(arr);
}

// Con arrow function
let func2 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    let arr = await response.json()
}  */


// Example pexels.com

fetch('https://api.pexels.com/v1/curated', {
    method: 'GET',
    headers: {
        Authorization: 'q9diO46tgSK3k0XCZxAnPsoArCkL456KYymATrl0dQAmCltxLYNAbQvI'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));