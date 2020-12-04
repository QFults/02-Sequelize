axios.get('/api/movies')
  .then(({ data: movies }) => {
    movies.forEach(movie => {
      let movieElem = document.createElement('div')
      movieElem.innerHTML = `
        <h5>${movie.title}</h5>
        <h6>Directed by ${movie.director}</h6>
        <h6>Release in ${movie.year}</h6>
        <p>${movie.plot}</p>
        <button class="deleteMovie" data-id="${movie.id}">X</button>
        <hr>
      `
      document.getElementById('movies').append(movieElem)
    })
  })
  .catch(err => console.error(err))

document.getElementById('addMovie').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/movies', {
    title: document.getElementById('title').value,
    director: document.getElementById('director').value,
    year: document.getElementById('year').value,
    plot: document.getElementById('plot').value
  })
  .then(({ data: movie }) => {
    let movieElem = document.createElement('div')
    movieElem.innerHTML = `
        <h5>${movie.title}</h5>
        <h6>Directed by ${movie.director}</h6>
        <h6>Release in ${movie.year}</h6>
        <p>${movie.plot}</p>
        <button class="deleteMovie" data-id="${movie.id}">X</button>
        <hr>
      `
    document.getElementById('movies').append(movieElem)

    document.getElementById('title').value = ''
    document.getElementById('director').value = ''
    document.getElementById('year').value = ''
    document.getElementById('plot').value = ''
  })
  .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteMovie') {
    axios.delete(`/api/movies/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})