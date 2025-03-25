'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      suscriptores.belongsToMany(models.intereses, {
        through: 'suscriptor_intereses',
        foreignKey: 'suscriptores_id',
        otherKey: 'intereses_id'
      });
    }
  }
  suscriptores.init({
    email: DataTypes.STRING,
    nombre: DataTypes.STRING,
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'suscriptores',
  });
  return suscriptores;
};