const { constants } = require("./constants");

// Stores the active TCP connection object.
let connection;

const { connect } = require("./client");
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(input) {
  if (key === '\u0003') {
    process.exit();
    if (input === MOVE_UP_KEY) connection.write("Move: up");
    if (input === MOVE_DOWN_KEY) connection.write("Move: down");
    if (input === MOVE_LEFT_KEY) connection.write("Move: left");
    if (input === MOVE_RIGHT_KEY) connection.write("Move: right");
    if (input === "hi") connection.write("Say: Hello");
    if (input === "bye") connection.write("Say: Goodbye");
  }
};
console.log("Connecting ...");
module.exports = { setupInput };