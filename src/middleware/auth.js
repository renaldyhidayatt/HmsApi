const TokenJwt = require("../utils/token");

ProctectRoute = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.json({
      message: "JWT NOT FOUND",
    });
  }

  const { id, err } = TokenJwt.decodeJwt(token);

  if (err) {
    return res.json({
      message: "Error Decode JWT",
    });
  }

  req.userId = id;

  next();
};

module.exports = ProctectRoute;
