module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,   
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      timestamps: false,
      tableName: "User"
    });
  
    User.sync({ force: false });
  
    return User;
  };
  