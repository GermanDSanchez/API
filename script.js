import { urlToken } from './token.js';
let pagina = 1;
const btnAnterior = document.querySelector('#btnAnterior')
const btnSiguiente = document.querySelector('#btnSiguiente')

btnSiguiente.addEventListener('click', () =>{
    if (pagina < 1000)
    {
        pagina++;
        cargarPeliculas();
    }
})

btnAnterior.addEventListener('click', () =>{
    if (pagina > 1)
    {
        pagina--;
        cargarPeliculas();
    }
})

const cargarPeliculas = () => 
{
        let url = `${urlToken}&page=${pagina}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
              let peliculas = '';
              data.results.forEach(pelicula => {
                peliculas += `
                <div class="div-container">
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    </div>
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>`;
              });
            document.querySelector('#container').innerHTML = peliculas;
        })
        .catch(error => console.log(error));
}

cargarPeliculas();