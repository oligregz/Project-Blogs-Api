const getUserIdService = require('../services/getUserId');

const req4GetUserId = async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await getUserIdService(id));
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = req4GetUserId;
