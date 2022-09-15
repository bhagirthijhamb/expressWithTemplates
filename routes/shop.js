const path = require("path");
const express = require("express");

const router = express.Router();
const productsController = require("./../controllers/products");

const adminData = require("./admin");

router.get("/", productsController.getProducts);
// router.get("/", (req, res, next) => {
//   console.log(adminData.products);
//   const products = adminData.products;
//   res.render("shop", { pageTitle: "Shop", prods: products, path: "/" });
// });

module.exports = router;
