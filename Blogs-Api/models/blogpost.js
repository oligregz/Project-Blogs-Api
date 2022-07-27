const {
  Model,
  DataTypes,
} = require('sequelize');

class BlogPosts extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      sequelize,
      modelName: 'BlogPosts',
    });
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    this.belongsToMany(models.Categories, {
      foreignKey: 'postId', through: 'PostsCategories', as: 'categories',
    });
  }
}

module.exports = BlogPosts;
