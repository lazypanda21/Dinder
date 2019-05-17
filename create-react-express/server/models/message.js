/* jshint indent: 2 */
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define(
    "Messages",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
      },
      message: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true,
        field: "Message"
      }
    },
    {
      tableName: "messages"
    }
  );

  Messages.associate = function(models) {
    Messages.belongsTo(models.Owner, {
      through: models.pivotTable,
      foreignKey: "idOwner"
    });
  };
  return Messages;
};
