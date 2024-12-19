import peliculas from './peliculas.js'

const showFilms = (container, generoId) => {
    const containerId = document.getElementById(container)
    const generoFilter = peliculas.filter(peli => peli.genre_ids.includes(generoId))

    for (let pelicula of generoFilter) {
        const card = document.createElement('div')
        card.className = 'card'
        const img = document.createElement('img')
        img.src = `https://image.tmdb.org/t/p/w200${pelicula.poster_path}`
        img.alt = pelicula.original_title
        const title = document.createElement('p')
        title.innerText = pelicula.original_title

        card.appendChild(img)
        card.appendChild(title)
        containerId.appendChild(card)
    }
}

showFilms('genero-28', 28)
showFilms('genero-53', 53)
showFilms('genero-12', 12)