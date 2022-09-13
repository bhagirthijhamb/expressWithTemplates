const http = require("http");
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Outsourced routes
app.use("/admin", adminRoutes);
// app.use(adminRoutes);
app.use(shopRoutes);

//-------------------------------------------

// app.use("/add-product", (req, res, mnext) => {
//   console.log("In another middleware");
//   res.send(
//     '<form action="/add-product" method="POST"><input type="text" name="title"/> <button type="submit">Add product</button></form>'
//   );
// });

// app.post("/add-product", (req, res, next) => {
//   // app.use("/product", (req, res, next) => {
//   console.log(req.body);
//   res.redirect("/");
// });

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello from Express!</h1>");
// });
//---------------------------------------------

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>Page not found :(</h1>");
});

app.listen(3000);

// app is also a valid request handler
// const server = http.createServer(app);
// server.listen(3000);
