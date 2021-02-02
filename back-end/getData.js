var sensor = require("node-dht-sensor").promises;
var database = require('./toDB')

function tempData () {
  sensor.read(11, 4)
    .then(data =>
      database.toDB(data)),
    function (err) {
      console.error("Failed to read sensor data:", err);
    };
}


