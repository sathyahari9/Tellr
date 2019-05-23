const fs = require("fs");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const bucketName = 'code-input';

const s3 = new AWS.S3({
  accessKeyId: 'AKIAJUSY2SY3ECT5YFAA',
  secretAccessKey: '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'
});

module.exports.upload = (blob) => {
  let buf = new Buffer(blob, 'base64');
  fs.writeFile('temp/test.wav', buf, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("File write to temp successful!");
    }
  });

  let keyName = uuid.v4();
  let params = { Bucket: bucketName, Key: keyName, Body: blob }
  s3.putObject(params, (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log("File upload to S3 successful!");
    }
  });
};
