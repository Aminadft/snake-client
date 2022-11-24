const { constants } = require("./constants");
const {MOVE_UP_KEY,MOVE_LEFT_KEY,MOVE_DOWN_KEY,MOVE_RIGHT_KEY,TAG_LINE_KEY,TAG_LINETWO_KEY } = require('./constants');

// Stores the active TCP connection object.
let connection;

const up = MOVE_UP_KEY;
const left =MOVE_LEFT_KEY;
const down =MOVE_DOWN_KEY;
const right =MOVE_RIGHT_KEY;
const tag =TAG_LINE_KEY;
const tagtwo =TAG_LINETWO_KEY;
const { connect } = require("./client");
const { keyword } = require("color-convert");
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
    if (key === up) connection.write("Move: up");
    if (key === down) connection.write("Move: down");
    if (key === left) connection.write("Move: left");
    if (key === right) connection.write("Move: right");
    if (key === tag) connection.write("Say: Hello");
    if (key === tagtwo) connection.write("Say: Goodnight");
  }
};
console.log("Connecting ...");
module.exports = { setupInput };