const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "jerry",
  database: "top_users",
  password: "RedjeacsJC1204",
  port: 5432,
});
