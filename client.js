const net = require('net');


const port = 50541;
const host = "192.168.68.247 .168.139";
const connectionConfig = {
  host,
  port
};
//establishes connection with game server
// 2.tcp.ngrok.io:12350
const connect = () => {

  const conn = net.createConnection(connectionConfig);
  conn.on('data', (message) => {
    console.log(message);
  });
  conn.setEncoding("utf8");
  return conn;
};
console.log("Connecting ...");
connect();

module.exports = { connect };