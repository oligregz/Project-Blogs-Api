const {
  object,
  string,
  setLocale,
  number,
  array,
} = require('yup');

setLocale({
  mixed: {
    required: ({ path }) => `"${path}" is required`,
  },
});

const postTemplate = object().shape({
  title: string().required(),
  content: string().required(),
  categoryIds: array().of(number()).required(),
});

const validatePOST = async (req, res, next) => {
  const post = req.body;
  try {
    await postTemplate.validate(post);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = validatePOST;
