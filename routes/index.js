const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const updateRoutes = require("./update-route");

// API routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", updateRoutes);

module.exports = router;
