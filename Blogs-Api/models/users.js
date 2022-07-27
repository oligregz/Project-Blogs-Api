const {
  Model,
  DataTypes,
} = require('sequelize');

class Users extends Model {
  static init(sequelize) {
    super.init({
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.hasMany(models.BlogPosts, {
      foreignKey: 'userId', as: 'user',
    });
  }
}

module.exports = Users;
