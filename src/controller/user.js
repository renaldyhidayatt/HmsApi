const user = require("../service/user");
const UserService = require("../service/user");

class UserController {
  getAll(req, res) {
    return UserService.getAll()
      .then((user) => {
        res.send({
          fullName: user.fullName,
          address: user.address,
          city: user.city,
          gender: user.gender,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
  getById(req, res) {
    return UserService.getById(req.params.id)
      .then((user) => {
        res.send({
          fullName: user.fullName,
          address: user.address,
          city: user.city,
          gender: user.gender,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }

  updateById(req, res) {
    const user = {
      fullName: req.body.fullName,
      address: req.body.address,
      city: req.body.city,
      gender: req.body.gender,
    };
    return UserService.updateById(user, id)
      .then((res) => {
        res.send({
          fullName: user.fullName,
          address: user.address,
          city: user.city,
          gender: user.gender,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }

  deleteById(req, res) {
    return UserService.deleteById(id)
      .then((res) => {
        res.send({
          fullName: user.fullName,
          address: user.address,
          city: user.city,
          gender: user.gender,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: err,
        });
      });
  }
}

module.exports = new UserController();
