'use strict';
const {
  Model
} = require('sequelize');
const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Provider, 
        {
          through: "Appointments"
        }
      )
    }
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Must enter your first name'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Must enter your last name'
        }
      }
    },
    dob: {
      type : DataTypes.DATE,
      validate : {
        notEmpty : {
          msg : `Must enter your birthdate`
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `Must enter an email address`
        }
      },
      unique : {
        msg : `Email is already registered! Use another email address`
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : `Must enter a password`
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};