const sequelize = require('../db/sequelize')
const { DataTypes } = require('sequelize')
const validateUser = require('../validation/validate')

const User = sequelize.define('User', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [3, 255],
              msg: "Name must be minimum 3 character."
            }
          }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: {
              msg: "Enter the valid email"
            }
          }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
              args: [4, 255],
              msg: "Password must be minimum 4 characters long "
            }
          }
    },

});

module.exports = User


