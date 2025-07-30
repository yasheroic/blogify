const JWT = require("jsonwebtoken");
const secret = "$uperMan";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user.email,
    fullName: user.fullName,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  const token = JWT.sign(payload, secret);
  return token;
}

function verifyUserToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = {
  createTokenForUser,
  verifyUserToken,
};
