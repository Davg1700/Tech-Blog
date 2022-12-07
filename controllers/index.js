const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
