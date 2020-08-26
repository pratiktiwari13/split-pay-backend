/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_email:{
      type:DataTypes.STRING(255),
      allowNull:false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('current_timestamp')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn("current_timestamp")
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }

  },{timestamps:false}, {
    sequelize,
    tableName: 'users'
  });
};
