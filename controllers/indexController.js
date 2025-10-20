const CustomNotFoundError = require("../errors/CustomNotFoundError");
const messages = require("../db/messages");
const { body, validationResult, matchedData } = require("express-validator");

const validateMessage = [
  body("text")
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage("Text is required and must be between 1 and 200 characters"),
  body("username")
    .trim()
    .isLength({ min: 1, max: 10 })
    .withMessage(
      "Username is required and must be between 1 and 10 characters"
    ),
];

exports.getMessages = async (req, res) => {
  const data = await messages.getMessages();
  console.log(data);
  res.render("index", { title: "Mini Messageboard", messages: data });
};

exports.getMessageById = async (req, res) => {
  const messageId = parseInt(req.params.id);

  if (isNaN(messageId)) {
    throw new CustomNotFoundError("Invalid message ID");
  }

  const message = await messages.getMessageById(messageId);

  if (!message) {
    throw new CustomNotFoundError("message not found");
  }

  res.render("message", { message: message });
};

exports.createMessage = [
  validateMessage,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
    const { text, username } = matchedData(req);
    if (!text || !username) {
      throw new CustomNotFoundError("no new message!");
    }
    await messages.createMessage({ text, username });
    res.redirect("/");
  },
];
