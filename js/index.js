async function getListFilms() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjViOWQ4NTQzODM2OGYxMzg2OTc3MzlkMDY3NmU5MCIsInN1YiI6IjY1ZGI2NDU5ODI2MWVlMDE4NWMyZmE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EqaglO-GjtRSZOQomGgTqN6cuNF7LE1oecefis70Kds'
    }
  };

/***
 * Fetch pour l'appel API nécessaire pour récupérer les films à venir
 */
  
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&primary_release_date.gte=2024-02-27&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => response.results)
    .then(movies => movies.forEach(createFilmInDOM))
    .catch(err => console.error(err));
}

/**
 * Création de la liste des 20 films à venir
 * @param {{title: string, poster_path: string}[]} movie 
 */

function createFilmInDOM(movie) {
    const dest = document.querySelector('.grid-films')
    const btn = document.createElement('button')
    btn.id = movie.id
    dest.appendChild(btn)
    let movieTitle = document.createElement('h2')
    movieTitle.innerText = movie.title
    btn.appendChild(movieTitle)
    let moviePoster = document.createElement('img')
    const image = movie.poster_path
    moviePoster.src = "https://image.tmdb.org/t/p/w500" + image
    btn.appendChild(moviePoster)
 
/**
 * Création du bouton intégré à l'image nécessaire pour sélectionné l'affichage du détail
 * @param {{title: string, poster_path: string}[]} movie 
 */
  
function select() {
    let inputFilm = document.querySelectorAll("button")
    console.log(inputFilm);
    inputFilm.forEach((button) => {
      button.addEventListener('click', (event) => {
        console.log(event.currentTarget.id);
        document.location.href = `./details.html?id=${event.currentTarget.id}`
      })
    })
  }
  select();
}

getListFilms()

