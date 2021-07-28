const router = require("express").Router();
const apiRoutes = require("./api");
const homepageRoutes = (req, res) => res.send("😄");

// API routes
router.use("/api", apiRoutes);
router.use("/", homepageRoutes);

module.exports = router;
