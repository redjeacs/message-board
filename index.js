const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express app listening on port ${PORT}`);
});
