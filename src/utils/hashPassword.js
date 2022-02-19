const bcrypt = require("bcryptjs");

class HashPassword {
  hashPassword(password) {
    return bcrypt.hashSync(password, 12);
  }

  verifyPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

module.exports = new HashPassword();
