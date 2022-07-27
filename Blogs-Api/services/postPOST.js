const Categories = require('../models/categories');
const BlogPosts = require('../models/blogpost');

const postPOSTService = async (title, content, categoryIds, user) => {
  const verifyCategoryIds = categoryIds.map((categoryId) => Categories.findByPk(categoryId));
  const userId = user.id;
  const categories = await Promise.all(verifyCategoryIds);
  if (categories.some((category) => category == null)) {
    throw new Error('"categoryIds" not found');
  }
  const post = await BlogPosts.create({ title, content, userId });
  await post.addCategories(categories);
  return post;
};

module.exports = postPOSTService;
