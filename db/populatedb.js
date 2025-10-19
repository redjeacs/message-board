const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    text VARCHAR(200) NOT NULL, 
    username VARCHAR(20) NOT NULL,
    added TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial seed data
INSERT INTO messages (text, username, added) VALUES
    ('Hello World!', 'Bob', CURRENT_TIMESTAMP),
    ('see you at 9', 'Sarah', CURRENT_TIMESTAMP),
    ('new message', 'Billy', CURRENT_TIMESTAMP);
`;

async function populate() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database populated successfully");
  } catch (err) {
    console.error("Error populating database:", err);
  } finally {
    await client.end();
  }
}

populate();
