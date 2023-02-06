const { Model, DataTypes, Sequelize } = require('sequelize');
const AVOCADO_TABLE = 'avocados';
const AvocadoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sku: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'deleted_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
};

class Avocado extends Model {
  static associate(models) {
    this.hasMany(models.Attribute, {
      as: 'attributes',
      foreignKey: 'avocadoId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AVOCADO_TABLE,
      modelName: 'Avocado',
      timestamps: false,
    };
  }
}

module.exports = { Avocado, AvocadoSchema, AVOCADO_TABLE };
