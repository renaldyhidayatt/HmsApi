const Db = require("../database/models");
const Users = Db.Users;

class Auth {
  async register(body) {
    return await Users.create(body);
  }

  findByEmail(email) {
    return Users.findOne({ where: { email: email } });
  }
}

module.exports = new Auth();
