/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expenses', {
    expense_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    from_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    to_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_paid: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    is_owing: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'expenses'
  });
};
