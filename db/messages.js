const pool = require("./pool");

exports.getMessages = async () => {
  const result = await pool.query("SELECT * FROM messages");
  return result.rows;
};

exports.getMessageById = async (messageId) => {
  const result = await pool.query(
    `SELECT * FROM messages WHERE id = ${messageId}`
  );

  return result.rows[0];
};

exports.createMessage = async (messageDetails) => {
  const currentDate = new Date();
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [messageDetails.text, messageDetails.username, currentDate.toISOString()]
  );
};
