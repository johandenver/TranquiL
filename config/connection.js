var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "tranquil_db"
  });
}
connection.connect(function(err) {
  if (err) throw err;
  console.log("you are connected through " + connection.threadId);
});

module.exports = connection;
