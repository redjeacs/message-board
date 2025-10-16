const { Router } = require("express");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

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

indexRouter.post("/new", async function (req, res) {
  const data = await req.body;
  if (!data) throw new CustomNotFoundError("No new message!");
  messages.push({
    text: data.message,
    user: data.user,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
