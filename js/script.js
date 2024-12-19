import peliculas from './peliculas.js'

const showFilms = (container, generoId) => {
    let containerId = document.getElementById(container)
    const generoFilter = peliculas.filter(peli => peli.genre_ids.includes(generoId))

    generoFilter.forEach(pelicula => {
        const template = `
            <div class='card'>
                <img src="https://image.tmdb.org/t/p/w200${pelicula.poster_path}" alt="${pelicula.original_title}">
                <p>${pelicula.original_title}</p>
            </div>
        `
        containerId.innerHTML += template
    })
}

showFilms('genero-28', 28)
showFilms('genero-53', 53)
showFilms('genero-12', 12)