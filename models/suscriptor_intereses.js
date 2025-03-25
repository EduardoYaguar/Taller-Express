'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class suscriptor_intereses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      suscriptor_intereses.belongsTo(models.suscriptores, {
        foreignKey: 'suscriptores_id'
      });
      
      suscriptor_intereses.belongsTo(models.intereses, {
        foreignKey: 'intereses_id'
      });
    }
  }
  suscriptor_intereses.init({
    suscriptores_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'suscriptores',
        key: 'id'
      }
    },
    intereses_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'intereses',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'suscriptor_intereses',
  });
  return suscriptor_intereses;
};