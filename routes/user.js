import express from "express";
import handleUser from "../controllers/user.js";
const router = express.Router();

router.post("/", handleUser.handleUserSignUp);
router.post("/login", handleUser.handleUserLogin);

export default router;
