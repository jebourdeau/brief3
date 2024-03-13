# Brief 3 _ Création d'une page web dynamique pour GCR

## Livrables
- Une page web HTML/CSS/JavaScript complète, fonctionnelle et responsive
- Un `README.md` avec la documentation de la page web
- Le code source du projet hébergé sur GitHub
- Une présentation orale basé sur le README.md

### Notre projet est composé de :
- un fichier `index.html` + un fichier `index.js` associé (pour l'affichage de la page d'accueil)
- un fichier `détail.html` + un fichier `détail.js` associé  (pour l'affichage de la page du détail d'un film)
- un fichier `style.css` pour l'ensemble du projet
- un fichier `image1.jpg` (qui correspond au fond d'écran de la page d'accueil)

Les fichiers .js sont regroupés dans un dossier js
Le fichier .css est dans un dossier css
Le fichier .jpg est dans un dossier jimg

Remarque : dans notre projet figure également un fichier `index_2nd_version_fetch.js` (qui nous a permis de tester une autre façon de faire un appel à l'**API**). Ce fichier n'est pas exécuter dans le projet final.

##  Github

Nous avons commencé par créer un repository sur Github, puis on se l'ait partagé.

Nous avons crée un project pour planifier les issues.
Ainsi au cours de l'évolution, nous avons mis à jour l'avancement et la validation des issues successives.

Enfin, après avoir finalisé le projet, nous avons déployer la page: https://jbouhet79.github.io/Brief_03_GCR/

## Code 
### Page d'accueil - fichiers index 

Nous avons repris le fichier `index.html` initial fourni, et avons fait le choix l'alimenter la page via l `index.js`
Seul l'image du fond d'écran a été intégré dans la section accueil du main.

Pour afficher la série des 20 prochaines sorties de films programmées dans l'ordre croissant, nous avons fait un appel à l'**API** themovieDB via un **fetch** dans l'`index.js`

Nous avons ainsi pu récupérer les données dans un tableau movies (ligne 13)

Une fonction `createFilmInDOM` est ensuite utilisé pour chaque film, dans une boucle forEach pour :
- créer un bouton dans la div `grid-film`
- de mettre dans ce bouton : l'image du poster de chaque film, et son titre.

Ensuite une fonction select permet de sélectionner le film à afficher dans la page détail, au clic.

L'affichage des 20 films se fait dans une grille évolutive en fonction de la taille de l'écran.

###   Page "détails" 

Ajout de "retour" à la page d'accueil à l'aide d'un lien href ligne 12 dans le header.

3 appels **API** sont effectés pour :
- afficher le poster du film sélectionné (via son id) et
 afficher le descriptif du film (titre, date de sortie programmée, synopsis) avec la fonction `createFilmInDOM`.
- afficher la liste des 5 acteurs principaux avec la fonction `createCredit`.
- afficher les films recommandées par l'**API** avec la fonction `createPopulars`.

L'affichage dynamique des films recommandés se fait via un slider déjà fourni.






