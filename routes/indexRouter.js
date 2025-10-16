const { Router } = require("express");

const messages = [
  {
    text: "Hello World!",
    user: "Bob",
    added: new Date(),
  },
  {
    text: "new message",
    user: "Billy",
    added: new Date(),
  },
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
