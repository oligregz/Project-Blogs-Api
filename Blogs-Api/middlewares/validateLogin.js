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

const loginTemplate = object().shape({
  email: string().email().test({ 
    name: 'emptyOrNot',
    test: (email) => email !== '',
    message: '"email" is not allowed to be empty' }).required(),
  password: string().test({ 
    name: 'emptyOrNot',
    test: (password) => password !== '',
    message: '"password" is not allowed to be empty' }).required(),
});

const validateLogin = async (req, res, next) => {
  const user = req.body;
  try {
    await loginTemplate.validate(user);
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = validateLogin;
