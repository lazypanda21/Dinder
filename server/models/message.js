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
      ThreadId:{
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field:"ThreadId",
        default: 0
      },
      From:{
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true,
        field: "From"
      },
      To:{
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true,
        field: "To"
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
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Messages;
};
