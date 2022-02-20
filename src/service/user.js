const DB = require("../database/models");
const User = DB.Users;

class UserService {
  getAll() {
    return User.findAll();
  }

  getById(id) {
    return User.findByPk(id);
  }

  updateById(user, id) {
    return User.update(user, {
      where: { id: id },
    });
  }

  deleteById(id) {
    return User.destroy({
      where: { id: id },
    });
  }
}

module.exports = new UserService();
