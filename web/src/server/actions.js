const fs = require("fs");
const AWS = require("aws-sdk");
const uuid = require("uuid");

const bucketName = 'code-input';
const transcribeService = new AWS.TranscribeService();

const s3 = new AWS.S3();

/* Returns the file name upon successful upload
 * URL: https://s3-us-east-1.amazonaws.com/code-input/{keyName}.wav
*/
function upload(blob) {
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

/* Transcribe endpoint:
 * https://transcribe.us-east-1.amazonaws.com
 */
function transcribe(keyName) {
  Promise.all(transcribingPromises)
    .then(() => {
      callback(null, { message: 'Start transcription job successfully' });
    })
    .catch(err => callback(err, { message: 'Error start transcription job' }));
};

function genCode() {
  let ret = "";
  for (let i = 0; i < 5; i++) {
    let rand = Math.floor(Math.random() * 36) + 65;
    if (rand > 90) {
      rand -= 91;
    } else {
      rand = fromCharCode(rand);
    }
    ret = ret + rand;
  }
  return ret;
}

module.exports = {
  genCode: genCode,
  upload: upload,
  transcribe: transcribe
}
