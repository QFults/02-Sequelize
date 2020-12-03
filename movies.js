// const Sequelize = require('sequelize')

// const { Model, DataTypes } = Sequelize

// const sequelize = new Sequelize('mysql://root:rootroot@localhost/movies_db')

// class Movie extends Model { }

// Movie.init({
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   director: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   year: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   plot: {
//     type: DataTypes.TEXT('long'),
//     allowNull: false
//   }
// }, { sequelize, modelName: 'movie' })

// Movie.bulkCreate([
//   {
//     title: 'Goodfellas',
//     director: 'Martin Scorsese',
//     year: 1990,
//     plot: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.'
//   },
//   {
//     title: 'The Room',
//     director: 'Tommy Wiseau',
//     year: 2003,
//     plot: "Johnny is a successful bank executive who lives quietly in a San Francisco townhouse with his fiancée, Lisa. One day, putting aside any scruple, she seduces Johnny's best friend, Mark.From there, nothing will be the same again."
//   },
//   {
//     title: 'Movie 3',
//     director: 'Director 3',
//     year: 2020,
//     plot: 'Plot 3'
//   },
//   {
//     title: 'Movie 4',
//     director: 'Director 4',
//     year: 2020,
//     plot: 'Plot 4'
//   },
//   {
//     title: 'Movie 5',
//     director: 'Director 5',
//     year: 2020,
//     plot: 'Plot 5'
//   }
// ])

// Movie.findAll()
//   .then(movies => {
//     movies.forEach(movie => {
//       console.log(`
//         ${movie.title}
//         __________
//         Directed by ${movie.director}
//         Released in ${movie.year}
//         Plot: ${movie.plot}
//       `)
//     })
//   })
//   .catch(err => console.log(err))

// Movie.destroy({ where: { id: 5 } })


// sequelize.sync()