/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define(
    "Dog",
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
          model: "ownerlogin",
          key: "userName"
        },
        field: "userName"
      },
      dogName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "Not specified",
        field: "DogName"
      },
      breed: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Breed"
      },
      gender: {
        type: DataTypes.STRING(8),
        allowNull: false,
        field: "Gender"
      },
      age: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "Age"
      },
      weight: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: 0,
        field: "Weight"
      }
    },
    {
      tableName: "Dog"
    }
  );

  Dog.associate = function(models) {
    Dog.belongsTo(models.Owner, {
      through: models.pivotTable,
      foreignKey: "idDog"
    });
  };

  return Dog;
};
