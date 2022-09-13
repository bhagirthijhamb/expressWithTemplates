const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../utils/path");

// const products = [];

router.use("/", (req, res, next) => {
  console.log("This always runs");
  next();
});

router.get("/add-product", (req, res, mnext) => {
  // router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));

  // res.send(
  //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add product</button></form>'
  //   // '<form action="/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add product</button></form>'
  // );
});

router.post("/add-product", (req, res, next) => {
  // app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;

// exports.routes = router;
// exports.products = products;
