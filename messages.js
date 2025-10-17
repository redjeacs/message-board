const messages = [
  {
    id: 0,
    text: "Hello World!",
    user: "Bob",
    added: new Date(),
  },
  {
    id: 1,
    text: "new message",
    user: "Billy",
    added: new Date(),
  },
];

async function getMessages() {
  return messages;
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

async function createMessage(messageDetails) {
  messages.push({
    id: messages.length,
    text: messageDetails.text,
    user: messageDetails.user,
    added: new Date(),
  });
}

module.exports = { getMessageById, getMessages, createMessage };
