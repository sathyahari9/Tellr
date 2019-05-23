const fs = require("fs");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const bucketName = 'code-input';

const s3 = new AWS.S3({
  accessKeyId: 'AKIAJUSY2SY3ECT5YFAA',
  secretAccessKey: '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'
});

/* Returns the file name upon successful upload
 * URL: https://s3-us-east-1.amazonaws.com/code-input/{keyName}.wav
*/
module.exports.upload = (blob) => {
  let buf = new Buffer(blob, 'base64');
  fs.writeFile('tmp.wav', buf, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("File write to temp successful!");
    }
  });

  fs.readFile('tmp.wav', (err, data) => {
    if(err) {
      console.log(err);
    } else {
      let keyName = uuid.v4() + '.wav';
      let params = { Bucket: bucketName, Key: keyName, Body: data };
      s3.putObject(params, (err, data) => {
        if(err) {
          console.log(err);
        } else {
          console.log("Upload to S3 successful!");
          return keyName;
        }
      });
    }
  });
};
