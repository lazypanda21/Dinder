/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define(
    "Dog",
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
      DogName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "Not specified",
        field: "DogName"
      },
      Breed: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: "Breed"
      },
      Gender: {
        type: DataTypes.STRING(8),
        allowNull: false,
        field: "Gender"
      },
      Age: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        field: "Age"
      },
      Weight: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
        field: "Weight"
      },
      Image:{
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "Image"
      },
    },
    {
      tableName: "Dog"
    }
  );

  Dog.associate = function(models) {
    Dog.belongsTo(models.Owner, {

      foreignKey: "UserName"
    });
  };

  return Dog;
};
