import express from "express";
import DbModel from "../model/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await DbModel.find({});
  return res.render("home", {
    urls: allUrls,
  });
});

export default router;
