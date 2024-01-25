import UserAuth from "../model/user.model.js";
import { v4 as uuidv4 } from "uuid";
import authservice from "../services/auth.js";

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await UserAuth.create({
    name,
    email,
    password,
  });
  return res.redirect("/");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await UserAuth.findOne({ email, password });
  if (!user)
    return res.render("login", {
      error: "Invaild Username or Password",
    });

  const sessionId = uuidv4();
  authservice.setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

const handleUser = {
  handleUserSignUp,
  handleUserLogin,
};

export default handleUser;
