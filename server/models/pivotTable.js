/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var pivotTable = sequelize.define(
      "pivotTable",
      {
        // id: {
        //   type: DataTypes.INTEGER(11),
        //   allowNull: false,
        //   autoIncrement: true,
        //   primaryKey: true,
        //   field: "id"
        // },
        idDog: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: "Dog",
            key: "Dogname"
          },
          field: "idDog"
        },

        idOwner: {
          type: DataTypes.INTEGER(11),
          allowNull: false,
          references: {
            model: "owner",
            key: "UserName"
          },
          field: "idOwner"
        },

        // idMessage: {
        //   type: DataTypes.INTEGER(11),
        //   allowNull: false,
        //   references: {
        //     model: "messages",
        //     key: "id"
        //   },
        //   field: "idMessage"
        // },
      },
      {
        tableName: "pivotTable",
        classMethods: {
          associate: function(models) {
            pivotTable.belongsTo(models.Dog, {
              foreignKey: "DogName",
              targetKey: "DogName"
            });
            pivotTable.belongsTo(models.idOwner, {
              foreignKey: "UserName",
              targetKey: "UserName"
            });
          }
        }
      }
    );
    return pivotTable;
  };
