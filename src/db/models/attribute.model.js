const { Model, DataTypes, Sequelize } = require('sequelize');
const { AVOCADO_TABLE } = require('./avocado.model');

const ATTRIBUTE_TABLE = 'attributes';
const AttributeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  shape: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hardiness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  taste: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avocadoId: {
    field: 'avocado_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: AVOCADO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  deletedAt: {
    allowNull: false,
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

class Attribute extends Model {
  static associate(models) {
    this.belongsTo(models.Avocado, {
      as: 'avocado',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ATTRIBUTE_TABLE,
      modelName: 'Attribute',
      timestamps: false,
    };
  }
}

module.exports = { Attribute, AttributeSchema, ATTRIBUTE_TABLE };
