const AWS = require("aws-sdk");

const transcribeService = new AWS.TranscribeService();

/* Transcribe endpoint:
 * https://transcribe.us-east-1.amazonaws.com
 */
module.exports.transcribe = (keyName) => {



  Promise.all(transcribingPromises)
    .then(() => {
      callback(null, { message: 'Start transcription job successfully' });
    })
    .catch(err => callback(err, { message: 'Error start transcription job' }));
};
