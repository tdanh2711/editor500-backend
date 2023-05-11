"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const BUCKET = process.env.BK;
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AKI,
    secretAccessKey: process.env.SAK,
});
const s3 = new aws_sdk_1.default.S3();
const getSignedUrl = (fileName, fileType = 'image/jpeg') => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: BUCKET,
            Key: fileName,
            ContentType: fileType,
            Expires: 120,
            ACL: 'public-read',
        };
        s3.getSignedUrl('putObject', params, (err, url) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(url);
            }
        });
    });
};
const aws = { getSignedUrl };
exports.default = aws;
//# sourceMappingURL=aws.js.map