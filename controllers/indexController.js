const CustomNotFoundError = require("../errors/CustomNotFoundError");
const messages = require("../messages");

async function getMessages(req, res) {
  const data = await messages.getMessages();
  res.render("index", { title: "Mini Messageboard", messages: data });
}

async function getMessageById(req, res) {
  const messageId = parseInt(req.params.id);

  if (isNaN(messageId)) {
    throw new CustomNotFoundError("Invalid message ID");
  }

  const message = await messages.getMessageById(messageId);

  if (!message) {
    throw new CustomNotFoundError("message not found");
  }

  res.render("message", { message: message });
}

async function createMessage(req, res) {
  const messageDetails = req.body;
  if (!messageDetails) {
    throw new CustomNotFoundError("no new message!");
  }
  messages.createMessage(messageDetails);
  res.redirect("/");
}

module.exports = { getMessageById, getMessages, createMessage };
