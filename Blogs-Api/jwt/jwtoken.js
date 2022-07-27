const jwt = require('jsonwebtoken');

const getToken = (userId) => new Promise(
  (resolve, reject) => {
  jwt.sign({ userId }, process.env.JWT_SECRET,
    (err, token) => {
      if (err) {
        reject(err);
      } resolve(token);
    });
  },
);

const checkToken = (token) => new Promise(
  (resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET,
      (err, decode) => {
        if (err) {
          reject(err);
        } resolve(decode);
      });
  },
);

module.exports = { getToken, checkToken };
