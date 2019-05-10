/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var OwnerLogin = sequelize.define(
      "OwnerLogin",
      {
        // id: {
        //   type: DataTypes.INTEGER(11),
        //   primaryKey: true,
        //   autoIncrement:true,
        //   field: "id"
        // },
        UserName: {
          type: DataTypes.STRING(20),
          allowNull: false,
          unique: true,
          field: "UserName"
        },
        Password: {
          type: DataTypes.STRING(45),
          allowNull: false,
          field: "Password"
        }
      },
      {
        tableName: "ownerlogin"
      }
    );
    return OwnerLogin;
  };
