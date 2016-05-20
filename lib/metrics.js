// npm config set statistics_tracking true

var npm = require("./npm.js")

var metrics = {};

metrics.send = function send() {
  if (npm.config.get("statistics_tracking") !== true) return

  console.log('call npm-registry-client to PUT')
}

metrics.collect = function collect(err, moduleDetails) {
  console.log(err, moduleDetails)
}

module.exports = metrics;
