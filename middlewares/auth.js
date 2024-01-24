import authservice from "../services/auth.js";

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");

  const user = authservice.getUser(userUid);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}
async function checkOut(req, res, next) {
  const userUid = req.cookies?.uid;
  const user = authservice.getUser(userUid);
  req.user = user;
  next();
}

const authMiddleware = {
  restrictToLoggedinUserOnly,
  checkOut,
};

export default authMiddleware;
