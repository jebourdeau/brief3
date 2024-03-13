let movie_id = new URL(document.location.href).searchParams.get('id')
let array = []
let people = []

/**
 * Affichage détaillé du film sélectionné dans le details.html
 * @param {{title: string, overview: string, release_date:string, poster_path: string}} movie 
 */

function createFilmInDOM(movie){
    const titre = document.querySelector('h1');
    const affiche = document.querySelector('#affiche');
    const synopsis = document.querySelector('#synopsis') 
    const movieDate = document.querySelector('#date')
    titre.innerText = movie.title
    synopsis.innerText = movie.overview
    movieDate.innerText = movie.release_date
    const image = movie.poster_path
    affiche.src = "https://image.tmdb.org/t/p/w500" + image
    
}
/**
 * Création des films recommandés pour l'affichage dans le details.html
 * @param {{poster_path:string}[]} array 
 */
function createPopulars(array){
    const recommend = document.querySelector('.scroll-container')
    for (i=0; i<array.length; i++) {
        let moviePoster = document.createElement('img')
        const affiche2 = array[i].poster_path
        moviePoster.src = "https://image.tmdb.org/t/p/w500" + affiche2
        recommend.appendChild(moviePoster)
    }
}

/**
 * Création de la liste des 5 acteurs principaux du film
 * @param {{name: string}[]} people 
 */

function createCredit(people){
    const star = document.querySelector('#distribution')
    for (i=0; i<people.slice(0, 5).length; i++){
        if(i != 0)
            star.innerText += ', '
        star.innerText += people[i].name
    }
}

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
};

/***
 * Fetch pour l'appel API nécessaire pour récupérer les informations du film sélectionné
 */
  
fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=fr-FR`, options)
    .then(response => response.json())
    .then(movie => createFilmInDOM(movie))
    .catch(err => console.error(err))

/***
 * Fetch pour l'appel API nécessaire pour récupérer les films recommandés
 */
    
fetch(`https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1`, options)
    .then(response => response.json())
    .then(response => response.results)
    .then(array => Array.from(array))
    .then(array => createPopulars(array))
    .catch(err => console.error(err))

/***
 * Fetch pour l'appel API nécessaire pour récupérer les informations des acteurs du film sélectionné
 */

fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=fr-FR`, options)
    .then(response => response.json())
    .then(response => response.cast)
    .then(people => Array.from(people))
    .then(people => createCredit(people))
    .catch(err => console.error(err))