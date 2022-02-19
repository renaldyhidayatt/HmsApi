const HashPassword = require("../utils/hashPassword");

const AuthService = require("../service/auth");
const TokenJwt = require("../utils/token");
const models = require("../database/models");

class AuthController {
  register(req, res) {
    const { firstName, lastName, address, city, gender, email, password } =
      req.body;
    try {
      const users = {
        fullName: firstName + " " + lastName,
        address: address,
        city: city,
        gender: gender,
        email: email,
        password: HashPassword.hashPassword(password),
      };

      if (!AuthService.findByEmail(email)) {
        res.json({
          message: "Email Already Exists",
        });
      }

      AuthService.register(users).then((users) => {
        return res.json({
          message: "Success",
          data: users,
        });
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error",
      });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;

    try {
      AuthService.findByEmail(email).then((users) => {
        if (!users || !HashPassword.verifyPassword(password, users.password))
          throw new Error("Ga tau");

        const token = TokenJwt.createJwt(users.id);
        return res.json({
          message: "Success",
          data: {
            token,
          },
        });
      });
    } catch (err) {
      return res.json({
        message: err,
      });
    }
  }

  testingapi(req, res){

    return res.send("Admiral Kunnka");
  }
}

module.exports = new AuthController();
