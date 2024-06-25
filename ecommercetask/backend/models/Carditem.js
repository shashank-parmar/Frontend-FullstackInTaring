module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("Card", {
      src: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,   
      },
      alt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      timestamps: false,
      tableName: "Card"
    });
  
    Card.sync({ force: false });
  
    return Card;
  };
  