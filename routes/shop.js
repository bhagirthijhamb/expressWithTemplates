const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../utils/path");

// router.use("/", (req, res, next) => { // returns Hello from Express.. even for localhost:3000/abc

router.get("/", (req, res, next) => {
  // router.use("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
  // res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
  // res.send("<h1>Hello from Express!</h1>");
});

module.exports = router;
