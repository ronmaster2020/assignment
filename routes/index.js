const express = require("express");
const mainRoutes = require("./mainRoutes");
const clientRoutes = require("./clientRoutes");
const candidateRoutes = require("./candidateRoutes");

const router = express.Router();

router.use("/", mainRoutes);
router.use("/api/leads/client", clientRoutes);
router.use("/api/leads/candidate", candidateRoutes);

module.exports = router;
