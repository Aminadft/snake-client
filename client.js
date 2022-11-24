const net = require('net');
const { IP, PORT } = require('./constants');

const port = PORT;
const host = IP;
const connectionConfig = {
  host,
  port
};
//establishes connection with game server
// 2.tcp.ngrok.io:12350
const connect = function() {
  const conn = net.createConnection(connectionConfig);

  //Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (message) => {
    console.log("Server says: ", message);
  });
  conn.on("connect", (message) => {
    console.log("Successfully connected to the game server.");
    conn.write("Name: AMI");
    

  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
connect();

module.exports = { connect };
  //setInterval (()=>{
  //Client.write("Move: right");
  //}, 50);
  //setInterval (()=>{
  // Client.write("Move: left");
  // }, 100);
  // setInterval (()=>{
  //  Client.write("Move: up");
  //  }, 150);