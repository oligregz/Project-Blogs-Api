const user = require('../models/users');

const getUserService = () => user.findAll();

module.exports = getUserService;
