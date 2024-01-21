import express from "express";

import allRoutes from "../controllers/index.js";

const router = express.Router();

router.post("/", allRoutes.handleGenerateNewShortURL);
router.get("/analytics/:shortId", allRoutes.handleGetAnalytics);
router.get("/:shortId", allRoutes.handleRedirectUrl);

export default router;
