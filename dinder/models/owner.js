/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define(
    "Owner",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
      },
      userName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "login",
          key: "UserName"
        },
        field: "UserName"
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Name"
      },
      location: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Location"
      },
    },
    {
      tableName: "employee"
    }
  );
  
  return Owner;
};