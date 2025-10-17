const { Router } = require("express");
const {
  getMessages,
  getMessageById,
  createMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.post("/new", createMessage);

indexRouter.get("/", getMessages);

indexRouter.get("/message/:id", getMessageById);

module.exports = indexRouter;
