// import jwt from "jsonwebtoken";
// const secret = "Mahesh@123";
const sessionIdToUserMap = new Map();

function setUser(id, user) {
  sessionIdToUserMap.set(id, user);

  //Addition of JWT TOKEN
  // const payload = {
  //   _id: user._id,
  //   email: user.email,
  // };
  // return jwt.sign(payload, secret);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);

  //Verify The JWT token
  if (!token) return null;
  return jwt.verify(token, secret);
}

const authservice = {
  setUser,
  getUser,
};

export default authservice;
