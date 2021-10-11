var jwt = require("jsonwebtoken");
const JWT_SECRET = "Prateek Sharma is @ good boy";

const fetchuser = (req, res, next) => {
  //Get the user from the jwt token and add id to request object
  const token = req.header("auth-token");
  if (!token) {
    res
      .status(401)
      .send({ error: "Please authenticate using a correct token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate using a correct token" });
  }
};
module.exports = fetchuser;
