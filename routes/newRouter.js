const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.send("all messages");
});

module.exports = newRouter;
