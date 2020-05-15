let AWS = require("aws-sdk");

module.exports.exportLogs = async (event) => {
  new AWS.Config({
    accessKeyId: "INSERT KEY",
    secretAccessKey: "INSERT SECRET",
    region: "INSERT REGION",
  });
  let cwlIntance = new AWS.CloudWatchLogs();
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 14);

  var params = {
    to: today.getTime(),
    from: yesterday.getTime(),
    destination: "INSERT_DESTINATION",
    logGroupName: "INSERT_LOG_GROUP_NAME",
    destinationPrefix: "INSERT_PREFIX",
  };

  cwlIntance.createExportTask(params, function (err, res) {
    console.log("in function call");
    if (err) {
      console.log("Could not export logs: " + err.stack);
      return {
        body: JSON.stringify({ message: "Failed to exported logs" }),
      };
    } else {
      console.log("Succesfully exported logs: " + res);
      return {
        body: JSON.stringify({ message: "Successfully exported logs" }),
      };
    }
  });
};
