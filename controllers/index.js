import { nanoid } from "nanoid";
import DbModel from "../model/url.model.js";

async function handleGenerateNewShortURL(req, res) {
  try {
    const body = req.body;
    const shortID = nanoid();
    await DbModel.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });
    return res.render("home", {
      id: shortID,
    });
  } catch (error) {
    res.status(400).json({ error: "url is required" });
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await DbModel.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

async function handleRedirectUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await DbModel.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamps: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

const allRoutes = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectUrl,
};
export default allRoutes;
