/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_expenses', {
    group_expenses_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: current_timestamp
    },
    updated_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: current_timestamp
    },
    deleted_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: current_timestamp
    }
  }, {
    sequelize,
    tableName: 'group_expenses'
  });
};
