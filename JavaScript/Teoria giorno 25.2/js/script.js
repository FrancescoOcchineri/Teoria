fetch('https://api.pexels.com/v1/curated', {
    method: 'GET',
    headers: {
        Authorization: 'q9diO46tgSK3k0XCZxAnPsoArCkL456KYymATrl0dQAmCltxLYNAbQvI'
    }
})
    .then(response => response.json())
    .then(json => {
        json.photos.forEach(photo => {
            let ul = document.querySelector('#photo')
            let li = document.createElement('li')
            li.className = 'list-group-item'
            let img = document.createElement('img')
            img.src = photo.src.small
            li.appendChild(img)
            ul.appendChild(li)
        })
    })
    .catch(err => console.log(err));


