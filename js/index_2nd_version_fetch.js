function createArticle(post) {
  const article = document.createElement('article')
  const h2 = document.createElement('h2')
  h2.innerText = post.title
  article.append(h2)

  // const p = document.createElement('p')
  // p.innerText = post.body
  // article.append(p)

  return article
}

async function main () {
  const wrapper = document.querySelector('.film-grid')
  const loader = document.createElement('p')
  loader.innerText = 'Chargement...'
  wrapper.append(loader)
  try {
      const response = await fetch ('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=primary_release_date.asc', {
          headers: {
              Accept: 'application/json'
          }
      })
      if (!response.ok) {
          throw new Error('Erreur serveur')
      }
      // const posts = await response.json()
      // console.log(posts.results);

      const posts = await response.json();
      const movies = posts.results;
      console.log(movies);

      loader.remove() // on supprime le loader quand la page est chargée

      // for -> parcourt chaque article à partir du tableau des articles

      for (let post of posts) {
      
          wrapper.append(createArticle(post)) // crée l'elt et rajoute le au wrapper
      } 
      
  } catch (e) {
          loader.innerText = 'impossible de charger la page'
          loader.style.color = 'red'
          return
  }
}

main()

// window.addEventListener('load', main)
