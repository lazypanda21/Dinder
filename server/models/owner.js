/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define(
    "Owner",
    {
      // id: {
      //   type: DataTypes.INTEGER(11),
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   field: "id"
      // },
      UserName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "ownerlogin",
          key: "UserName"
        },
        field: "UserName"
      },
      Name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Name"
      },
      Location: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Location"
      },
    },
    {
      tableName: "owner"
    }
  );
  Owner.associate = function(models) {

    Owner.hasMany(models.Dog, {
      through: models.pivotTable,
      foreignKey: "idDog"
    });
  };

  return Owner;
};
