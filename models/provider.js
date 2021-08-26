'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provider.belongsToMany(models.User, 
        {
          through: "Appointment"
        }
      )
      Provider.belongsTo(models.User)
    }
  };
  Provider.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    address: DataTypes.STRING,
    website: DataTypes.STRING,
    instagram: DataTypes.STRING,
    serviceProvided: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};