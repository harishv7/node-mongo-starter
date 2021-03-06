const usersService = require("../services/users.service");

module.exports.createUser = (req, res) => {
  const { name, email } = req.body;
  usersService
    .createUser(name, email)
    .then((response) => {
      return res.status(201).json({
        status: true,
        response,
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: false, err });
    });
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;
  usersService
    .getUserById(id)
    .then((response) => {
      return res.status(200).json({
        status: true,
        response,
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: false, err });
    });
};

module.exports.getUsers = (req, res) => {
  usersService
    .getUsers()
    .then((response) => {
      return res.status(200).json({
        status: true,
        response,
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: false, err });
    });
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  usersService
    .deleteUser(id)
    .then((response) => {
      return res.status(200).json({
        status: true,
        response,
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: false, err });
    });
};

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  usersService
    .updateUser(id, name, email)
    .then((response) => {
      return res.status(200).json({
        status: true,
        response,
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: false, err });
    });
};
