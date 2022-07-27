const {
  object,
  string,
  setLocale,
} = require('yup');

setLocale({
  mixed: {
    required: ({ path }) => `"${path}" is required`,
  },
});

const createUserTemplate = object().shape({
  displayName: string()
  .min(8, '"displayName" length must be at least 8 characters long').required(),
  email: string().email('"email" must be a valid email').required(),
  password: string().min(6, '"password" length must be 6 characters long').required(),
});

const validationsCreateUsers = async (req, res, next) => {
  const user = req.body;
  try {
    await createUserTemplate.validate(user);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = validationsCreateUsers;