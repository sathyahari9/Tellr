const AWS = require("aws-sdk");
const uuid = require("uuid");

const bucketName = 'code-input';
const keyName = uuid.v4();

const s3 = new AWS.S3({
  accessKeyId: AKIAJUSY2SY3ECT5YFAA,
  secretAccessKey: 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
});

module.exports.upload = (event, context, callback) => {
  
};
