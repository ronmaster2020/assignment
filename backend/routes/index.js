const express = require("express");
const clientRoutes = require("./clientRoutes");
const candidateRoutes = require("./candidateRoutes");

const router = express.Router();

router.use("/leads/client", clientRoutes);
router.use("/leads/candidate", candidateRoutes);

module.exports = router;
