const express = require("express");

const router = express.Router();
const productsController = require("../controllers/products");

// const products = [];

router.get("/add-product", productsController.getAddProduct);
// router.get("/add-product", (req, res, next) => {
//   res.render("add-product", {
//     pageTitle: "Add Product",
//     path: "/admin/add-product",
//   });
// });

router.post("/add-product", productsController.postAddProduct);
// router.post("/add-product", (req, res, next) => {
//   console.log(req.body);
//   products.push({ title: req.body.title });
//   res.redirect("/");
// });

module.exports = router;

// exports.routes = router;
// exports.products = products;
