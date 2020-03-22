'use strict';
module.exports = (sequelize, DataTypes) => {
  var Piada = sequelize.define('Piada', {
    piada: DataTypes.TEXT,
    origem: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Piada;
};