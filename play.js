//const net = require("net");
const {connect} = require('./client');
 //establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
   host: "165.227.47.243", 
    port: 50541 
  });

   interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function () {

};
console.log("Connecting ...");
connect();