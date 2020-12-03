const Sequelize = require('sequelize')

const { Model, DataTypes } = Sequelize

const sequelize = new Sequelize('mysql://root:rootroot@localhost/dogs_db')

class Dog extends Model { }

Dog.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'dog' })

// Dog.create({
//   name: 'Chicken',
//   age: 3,
//   breed: 'Chihuahua'
// })
//   .then(dog => {
//     console.log(dog.name)
//   })
//   .catch(err => console.log(err))

// Dog.findOne({ where: { id: 1 } })
//   .then(dog => {
//     console.log(dog)
//   })
//   .catch(err => console.log(err))

// Dog.destroy({ where: { id: 2 } })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => console.log(err))

sequelize.sync()