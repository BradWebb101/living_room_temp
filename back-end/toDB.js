// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var dataDict = require('./getData.js')


async function toDB(tempData) {

require('dotenv').config()

// Set the region 
AWS.config.update({
  region: 'eu-west-2',
  AWS_ACCESS_KEY_ID: 'AWS_ACCESS_KEY_ID',
  AWS_SECRET_ACCESS_KEY: 'AWS_SECRET_ACCESS_KEY'
});

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB({
  apiVersion: '2012-08-10'
});
  const data = await tempData
  const now = new Date()
  const utcSecondsSinceEpoch = now.getTime() + (now.getTimezoneOffset() * 60)

  var params = {
    TableName: 'temperature_data',
    Item: {
      'epoch_time': {
        'N': utcSecondsSinceEpoch.toString()
      },
      'room_temp': {
        'N': data.temperature.toString()
      },
      'room_humidity': {
        'N': data.humidity.toString()
      },
      'TTL': {
        'N': (utcSecondsSinceEpoch + 604800).toString()
      }
    }
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function (err, data) {
    if (err) {
      console.log("Error in posting to DB", err);
    }
  });
}

module.exports.toDB = toDB