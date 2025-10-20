const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.post("/new", indexController.createMessage);

indexRouter.get("/", indexController.getMessages);

indexRouter.get("/message/:id", indexController.getMessageById);

module.exports = indexRouter;
