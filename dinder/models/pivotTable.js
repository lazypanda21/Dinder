/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var pivotTable = sequelize.define(
      "pivotTable",
      {
        id: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          field: "id"
        },
        idDog: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: "dog",
            key: "id"
          },
          field: "idDog"
        },
        idOwner: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: "owner",
            key: "id"
          },
          field: "idOwner"
        },
        idMessage: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: "messages",
            key: "id"
          },
          field: "idMessage"
        },
      },
      {
        tableName: "pivotTable",
        classMethods: {
          associate: function(models) {
            pivotTable.belongsTo(models.Dog, {
              foreignKey: "id",
              targetKey: "idDog"
            });
            pivotTable.belongsTo(models.idOwner, {
              foreignKey: "id",
              targetKey: "idOwner"
            });
          }
        }
      }
    );
    return pivotTable;
  };
  